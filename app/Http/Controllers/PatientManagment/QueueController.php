<?php

namespace App\Http\Controllers\PatientManagment;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
use App\Patient_queue; 
use App\User; 
class QueueController extends Controller
{
    private $auth; 

    function __construct(){
        $this->auth = User::find(19); 
    } 

    public function autoChoosePhysician(){
        return 20; 
    }

    public function queue($patinetId){
        $patient = Patient_queue::create([
            "clurk_id" => $this->auth->id, 
            "physician_id" => $this->autoChoosePhysician(), 
            "patient_id" =>$patinetId
        ]);

        $patient->physician = $patient->physician()->first(); 
        $patient->patient = $patient->patient()->first(); 
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

    public function recentVisists($id){
        $patient_queues = Patient_queue::where('patient_id', $id)->take(5)->get(); 
        foreach($patient_queues as $patient_queue){
            $patient_queue->physician = $patient_queue->physician()->first();
        }
        return $patient_queues; 
    }

    public function queuedPatients(){
        $queued = Patient_queue::where('is_served', 0)->orderBy('created_at')->get(); 
        foreach($queued as $patient){
            $patient->patient = $patient->patient()->first(); 
        }
        return $queued; 

    }
}
