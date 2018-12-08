<?php

namespace App\Http\Controllers\PatientRecordManagement;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Auth\Auth;
use App\Hisstory; 
use App\Diagnosis;
use App\Hisstroy_diagnosis; 
use App\Patient_queue; 

class HisstoryController extends Controller
{
    public function chief_complient(Hisstory $hisstory, Request $request){
       $hisstory->chief_complaint =$request->chief_complient; 
       $hisstory->save(); 
        return $hisstory; 
    }

    public function metrics(Hisstory $hisstory, Request $request){ 
        $hisstory->update($request->all()); 
        return $hisstory->get(); 
    }

    public function waiting_status(Hisstory $hisstory){
        $patient = $hisstory->queue()->first(); 
        $patient->status = 2;
        $patient->save();  
        return $patient; 
    }

    public function searchDiagnosis($key){
        if(empty($key) || !isset($key) || $key == "all"){
            return Diagnosis::get();
        }

        return Diagnosis::search($key)->get(); 
    }

    public function diangnosis($hisstory_id, Request $request){
        $this->validate($request, [
            "diagnosises" => 'required', 
        ]); 
        $diagnoses = []; 
        foreach($request->diagnosises as $diagnosis){
            $diagnosis = json_decode(json_encode($diagnosis)); 
            $d = Hisstroy_diagnosis::create(["hisstory_id"=>$hisstory_id, "diagnosis_id"=>$diagnosis->id]); 
            array_push($diagnoses, $d); 
        }

        Patient_queue::where('hisstory_id', $hisstory_id)->update(['status'=>-1]); 
        return $diagnoses; 
    }

    public function view(\App\Patient_queue $queue){
        $hisstory = $queue->hisstory()->first(); 
        $hisstory->queue = $queue; 
        $hisstory->prescriptions = $hisstory->prescriptions()->get(); 

        foreach($hisstory->prescriptions as $prescription){
            $prescription->name = $prescription->drug()->first()->name; 
            $prescription->root = $prescription->root()->first()->name; 
            $prescription->frequency = $prescription->frequency()->first()->abr; 
        }   

        $hisstory->labResults = $hisstory->laboratories()->get(); 

        foreach($hisstory->labResults as $lab){
            $lab->laboratory_test = $lab->test()->first(); 
        }
        return $hisstory; 
    }
    
    public function close(\App\Patient_queue $queue){
        $queue->isClosed = true; 
        $queue->save(); 
        return "true"; 
    }
}
