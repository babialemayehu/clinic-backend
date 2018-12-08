<?php

namespace App\Http\Controllers\LaboratoryManagement;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Auth\Auth;
use App\Patient_queue; 
use App\Laboratory; 
use Carbon\Carbon; 
use App\Http\Controllers\PatientManagment\QueueController as Queue;

class QueueController extends Controller
{
    private function _queue(){
        return Patient_queue::where('status', 2)->orderBy('updated_at');
    }

    public function requests($limit = -1){ 
        $queues = $this->_queue(); 
        if($limit > -1){ $queues->take($limit);  }

        $queues = $queues->get();
        foreach($queues as $queue){
            \App\Http\Controllers\PatientManagment\QueueController::_setUp($queue); 
        }    

        return $queues; 
    }

    public function next(){
        $queue = $this->_queue()->first(); 
        if($queue != null){
            $queue->status = 3;
            $queue->_call = 2; 
            $queue->save();  
            \App\Http\Controllers\PatientManagment\QueueController::_setUp($queue); 
            return $queue; 
        }else{
            return response(json_encode((object)['message'=>"No patinets in the queue"]), 406 );
        }
    }

    public function saved(){
        $queues = Patient_queue::where('status', 3)->orderBy('updated_at')->get(); 
        foreach($queues as $queue){
            \App\Http\Controllers\PatientManagment\QueueController::_setUp($queue); 
        }

        return $queues;
    }
    public function isEmpty(){
        return json_encode(( $this->_queue()->get()->count() > 0)? false: true);
    }
}
