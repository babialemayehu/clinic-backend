<?php

namespace App\Http\Controllers\PatientManagment;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
use Illuminate\Support\Facades\Auth;
use App\Patient_queue; 
use App\User; 
use App\Patient; 
use Carbon\Carbon; 

class QueueController extends Controller
{
    private $auth; 

    function __construct(){
        $this->auth = Auth::user(); 
    } 

    public function autoChoosePhysician(){
        return 20; 
    }

    public function queue($patinetId){
        $previos_queue = Patient_queue::orderBy('created_at', 'DESC')->take(1);
        
        $previos_queue_number = 0;
        if($previos_queue->get()->count()){
            $previos_queue_number = $previos_queue->first()->queue_number; 
            // return $previos_queue_number; 
        } 
        // return $previos_queue->get(); 
        $patient = Patient_queue::create([
            "clurk_id" => $this->auth->id, 
            "physician_id" => $this->autoChoosePhysician(), 
            "patient_id" =>$patinetId
        ]);
        
        $patient->update(['queue_number'=>$patient->queue_nubmer+$previos_queue_number]); 
        $patient->physician = $patient->physician()->first(); 
        $patient->patient = $patient->patient()->first(); 
        $patient->humanWaitingTime = Carbon::parse($patient->created_at)->diffForHumans();
        return $patient; 
        // $_responce =[
        //    "message" => "successfully queue the patient ". $patient->first_name, 
        //    "status" => 0
        // ]; 
        
        
        // return json_encode((object)$_responce); 
    }

    public function dequeue($patinetId){
        $patient = Patient_queue::where('patient_id', $patinetId)->where('is_served', 0);
        $patient->update(["is_served" => 1]);  
        return $patient->first(); 
        // $_responce =[
        //     "message" => "successfully dequeue the patient ", 
        //     "status" => 0
        //  ]; 
        
        // return $_responce; 
    }

    public function remove($patinetId){
        $queue = Patient_queue::where('patient_id', $patinetId)->where('is_served', 0); 
        if($queue->get()->count() > 0){
            $queue->delete();
            $patient = Patient::find($patinetId);
            $patient->is_queued = false; 
            return $patient; 
        }
        return 'false'; 
    }
    public function recentVisists($id){
        $patient_queues = Patient_queue::where('patientweb.php_id', $id)->take(5)->get(); 
        foreach($patient_queues as $patient_queue){
            $patient_queue->physician = $patient_queue->physician()->first();
            $patient_queue->humanWaitingTime = Carbon::parse($patient_queue->created_at)->diffForHumans(); 
        }
        return $patient_queues; 
    }

    public function queuedPatients(){
        $queued = Patient_queue::where('is_served', 0)->orderBy('created_at', 'DESC')->get(); 
        foreach($queued as $patient){
            $patient->patient = $patient->patient()->first(); 
            $patient->humanWaitingTime = Carbon::parse($patient->created_at)->diffForHumans(); 
        }
        return $queued; 

    }

   public function total(){
       return Patient_queue::where('is_served', 0)->get()->count(); 
   }

   public function totalServed(){
       return '5'; 
   }
}
