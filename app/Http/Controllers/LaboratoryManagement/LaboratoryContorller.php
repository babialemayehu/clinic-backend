<?php

namespace App\Http\Controllers\LaboratoryManagement;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
Use App\Laboratory; 
use App\Patient_queue; 
// use App\Http\Controllers\PatientRecordManagement\HisstoryController; 

class LaboratoryContorller extends Controller
{
    public function request(Request $request){
        $this->validate($request, [
            'requests' => 'required', 
            'hisstory_id' => 'required'
        ]); 

        foreach($request->requests as $req){
            $test = json_decode(json_encode($req)); 
            Laboratory::create([
                'laboratory_test_id'=> $test->id,
                'hisstory_id' => $request->hisstory_id
            ]); 
        }
        
        return 'true'; 
    }

    public function getRequests($key){
        $hisstory_id = Patient_queue::find($key)->hisstory_id; 
        $requests = Laboratory::where('hisstory_id', $hisstory_id)->get(); 
        foreach($requests as $request){
            $request->laboratory_test = $request->test()->first(); 
        }
        return $requests; 
    }
    public function responce(Request $request){
        $this->validate($request, [
            'responces' => 'required', 
            'hisstory_id' => 'required' 
        ]); 
        
        foreach($request->responces as $responce){
            $lab = Laboratory::find($responce->request_id); 
            $lab->normality = $responce->normality; 
            $lab->note = $responce->note; 
            $lab->value = $responce->value; 
            $lab->save(); 
            //HisstoryController::waiting_status($lab->hisstory()->first()); 
        }

        return 'true';
    }
}
