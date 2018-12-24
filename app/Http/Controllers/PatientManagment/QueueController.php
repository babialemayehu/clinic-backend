<?php

namespace App\Http\Controllers\PatientManagment;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
use App\Http\Controllers\Auth\Auth;
use App\Patient_queue; 
use App\User; 
use App\Patient; 
use App\Hisstory; 
use Carbon\Carbon; 

class QueueController extends Controller
{
    private $auth; 

    function __construct(){
        $this->auth = Auth::user(); 
    } 

    public static function _setUp(&$queue){
        $queue->patient = $queue->patient()->first(); 
        $queue->physician = $queue->physician()->first();
        $queue->humanWaitingTime = Carbon::parse($queue->updated_at)->diffForHumans(); 
    }

    public function autoChoosePhysician(){
        return 20; 
    }

    public function queue($patinetId){
        $auth = Auth::user(); 
        $previos_queue = Patient_queue::orderBy('created_at', 'DESC')->take(1);
        
        $previos_queue_number = 0;
        if($previos_queue->get()->count()){
            $previos_queue_number = $previos_queue->first()->queue_number; 
            // return $previos_queue_number; 
        } 
        // return $previos_queue->get(); 
        $patient = Patient_queue::create([
            "clurk_id" => $auth->id, 
            // "physician_id" => $this->autoChoosePhysician(), 
            "patient_id" =>$patinetId
        ]);
        
        $patient->update(['queue_number'=>$patient->queue_nubmer+$previos_queue_number]); 
        $patient->physician = $patient->physician()->first(); 
        $patient->patient = $patient->patient()->first(); 
        $patient->humanWaitingTime = Carbon::parse($patient->created_at)->diffForHumans();
        return $patient; 
    }

    public function dequeue($patinetId){
        $patient = Patient_queue::where('patient_id', $patinetId)->where('status', 0);
        $patient->update(["status" => -1]);  
        return $patient->first(); 
    }

    public function remove($patinetId){
        $queue = Patient_queue::where('patient_id', $patinetId)->where('status', 0); 
        if($queue->get()->count() > 0){
            $queue->delete();
            $patient = Patient::find($patinetId);
            $patient->is_queued = false; 
            return $patient; 
        }
        return 'false'; 
    }
    public function visits($id, $limit = -1){
        $patient_id = Patient::where('reg_id', $id)->first()->id; 
        $patient_queues = Patient_queue::where('status', -1)
                            ->where('patient_id', $patient_id)
                            ->orderBy('updated_at'); 
        if($limit > 0){
            $patient_queues = $patient_queues->take($limit); 
        }

        $patient_queues = $patient_queues->get(); 

        foreach($patient_queues as $patient_queue){
            $patient_queue->physician = $patient_queue->physician()->first(); 
            $c = Carbon::parse($patient_queue->created_at); 
            $patient_queue->humanWaitingTime = $c->diffForHumans(); 
            $patient_queue->date = $c->toFormattedDateString(); 

            // for physician 
            $diagnosis = []; 
            $patient_queue->diagnosis = $patient_queue->hisstory()->first()->diagnosis()->get();
            foreach($patient_queue->diagnosis as $d){
                array_push($diagnosis, $d->diagnosis()->first()->name); 
            }
            $patient_queue->diagnosis = $diagnosis; 
            $patient_queue->hisstory = $patient_queue->hisstory()->first(); 
            //$patinet_queue->visitd_at = Carbon::parse($patient_queue->created_at)->diffForHumans(); 
        }

        return $patient_queues; 
    }

    public function queuedPatients($limit = -1, $order = 'ASC'){
        $queued = Patient_queue::where('status','=', 0);
        if($order = 'ASC'){
            $queued = $queued->orderBy('updated_at');
        }else{
            $queued = $queued->orderBy('updated_at', 'DESC');
        }
        if($limit == -1){
            $queued = $queued->take($limit); 
        }
        $queued = $queued->get(); 
        foreach($queued as $patient){
            $patient->patient = $patient->patient()->first(); 
            $patient->humanWaitingTime = Carbon::parse($patient->created_at)->diffForHumans(); 
        }
        return $queued; 

    }

    public function publicQueuedPatients($type = 'queue'){
        if($type == 'queue')
            $queued = Patient_queue::where('status', 0)->orWhere('_call', 1)->orderBy('created_at'); 
        else
            $queued = Patient_queue::where('status', 2)->orWhere('_call', 2)->orderBy('created_at'); 

        $queued_patients = $queued->get(); 
        

        foreach($queued_patients as $queue){
            $queue->patient = $queue->patient()->first(); 
            $queue->humanWaitingTime = Carbon::parse($queue->created_at)->diffForHumans(); 
            $queue->physician = $queue->physician()->first(); 
        }
        $queued->update(['_call'=> 0]); 
        return $queued_patients; 
    }
    public function next(){
        $auth = Auth::user(); 
        $next = Patient_queue::where('status','=', 0)
                            ->where('physician_id', $auth->id)
                            ->orWhere('physician_id', null)
                            ->orderBy('updated_at', 'DESC')->first(); 
        if(!$next){
            return response(json_encode((object)['message'=>"No patinets in the queue"]), 406 );
        }
        $next->physician_id = $auth->id; 
        $next->status = 1; 
        $next->save(); 

        if($next->hisstory_id == null){
            $hisstory =  Hisstory::create([
                'patient_queue_id' => $next->id, 
            ]); 
           
            $next->hisstory_id = $next->hisstory->id; 
            $next->_call = 1; 
            $next->save(); 
        }else{
            $next->hisstory = $next->hisstory()->first(); 
        }
        $patinet = $next->patient()->first(); 
        $patinet->department = $patinet->department()->first(); 
        $patinet->age = Carbon::parse($patinet->birth_date)->age;
        $next->patient = $patinet; 
        return $next; 
    }  
    
    public function get($queue_id){
        $queue = Patient_queue::find($queue_id); 
        $queue->physician = $queue->physician()->first(); 
        $queue->hisstory = $queue->hisstory()->first(); 
        $queue->patient = $queue->patient()->first();
        return $queue;
    }

    public function saved(){
        $auth = Auth::user(); 

        $queues = Patient_queue::where('physician_id', $auth->id)
            ->where('status', '>', 0)
            ->where('isClosed', 0)
            ->orderBy('created_at')->get(); 

        foreach($queues as $queue){
            $queue->physician = $queue->physician()->first(); 
            $queue->hisstory = $queue->hisstory()->first(); 
            $queue->patient = $queue->patient()->first();
        }

        return $queues;
    }
    
    public function labSeen(\App\Patient_queue $queue){
        return json_encode($queue->update(['status'=> 5])); 
    }
    public function isEmpty(){
        return json_encode((Patient_queue::where('status', 0)->get()->count() > 0)? false: true); 
    }

    public function call(\App\Patient_queue $queue){
        return ($queue->update("call", 1))?'true': 'false'; 
    }
   public function total(){
       return Patient_queue::where(['status', 0])->get()->count(); 
   }

   public function totalServed(){
       return '5'; 
   }

   public function isQueued($patient_id){
       return Patient_queue::where('status', 0)->where('patient_id', $patient_id)->get()->count(); 
   }


   
}
