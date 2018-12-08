<?php

namespace App\Http\Controllers\PharmacyManagement;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Auth\Auth;
use App\Patient_queue; 

class QueueController extends Controller
{
    public static function _queue($status = 1){
        return Patient_queue::where('prescription_status', $status )->orderBy('updated_at'); 
    }
    
    public function next(){
        $queue = \App\Http\Controllers\PharmacyManagement\QueueController::_queue()->first();
        
        if($queue == null){ return response(json_encode((object)['message'=>"No patinets in the queue"]), 406 ); }

        $queue->prescription_status = 2; 
        $queue->save(); 
        \App\Http\Controllers\PatientManagment\QueueController::_setUp($queue);  

        return $queue; 
    }

    public function saved(){
        $queues = \App\Http\Controllers\PharmacyManagement\QueueController::_queue(2)->get(); 
        foreach($queues as $queue){
            \App\Http\Controllers\PatientManagment\QueueController::_setUp($queue); 
        }

        return $queues; 
    }

    public function isEmpty(){
        return (\App\Http\Controllers\PharmacyManagement\QueueController::_queue()->get()->count() > 0)?'false': 'true'; 
    }

    public function requests($limit = -1){
        $queues = \App\Http\Controllers\PharmacyManagement\QueueController::_queue(); 
        if($limit > -1){
            $queues= $queues->take($limit); 
        }
        $queues = $queues->get(); 
        foreach($queues as $queue){
            \App\Http\Controllers\PatientManagment\QueueController::_setUp($queue); 
        }

        return $queues; 
    }
}
