<?php

namespace App\Http\Controllers\LaboratoryManagement;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Patient_queue; 
use App\Laboratory; 
use Carbon\Carbon; 

class QueueController extends Controller
{
    private function _queue(){
        return Patient_queue::where('status', 2)->orderBy('updated_at');
    }

    private function _setUp(&$queue){
        $queue->patient = $queue->patient()->first(); 
        $queue->physician = $queue->physician()->first();
        $queue->humanWaitingTime = Carbon::parse($queue->updated_at)->diffForHumans(); 
    }


    public function requests($limit = -1){ 
        $queues = $this->_queue(); 
        if($limit > -1){ $queues->take($limit);  }

        $queues = $queues->get();
        foreach($queues as $queue){
            $this->_setUp($queue); 
        }    

        return $queues; 
    }

    public function next(){
        $queue = $this->_queue()->first(); 
        if($queue != null){
           $queue->status = 3;
            $queue->save();  
            $this->_setUp($queue); 
            return $queue; 
        }else{
            return response(json_encode((object)['message'=>"No patinets in the queue"]), 406 );
        }
       
    }

    public function saved(){
        $queues = Patient_queue::where('status', '>', 2)->orderBy('updated_at')->get(); 
        foreach($queues as $queue){
            $this->_setUp($queue); 
        }

        return $queues;
    }
    public function isEmpty(){
        return json_encode(( $this->_queue()->get()->count() > 0)? false: true);
    }
}
