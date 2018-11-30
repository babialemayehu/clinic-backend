<?php

namespace App\Http\Controllers\PharmacyManagement;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Prescription; 
use App\Drug; 
use App\Drug_frequency; 
use App\Drut_root; 
use App\Patient_queue; 

class PrescriptionController extends Controller
{
    public function prescribe($hisstory_id, Request $request){

        $this->validate($request, [
            'prescriptions' => 'required'
        ]); 

        $prescriptions = []; 

        foreach($request->prescriptions as $prescription){
            $prescription = json_decode(json_encode($prescription)); 
            $drug_id = Drug::where('name', $prescription->name)->first()->id; 
            $_prescription = Prescription::create([
                'drug_id' => $drug_id, 
                'hisstory_id' => $hisstory_id, 
                'root_id' => $prescription->root_id, 
                'frequency_id' => $prescription->root_id, 
                'dose' => $prescription->dosage
            ]); 

            array_push($prescriptions, $_prescription); 
        }
        
        $queue = Patient_queue::where('hisstory_id', $hisstory_id)->first(); 
        $queue->prescription_status = 1; 
        $queue->save(); 
        return $prescriptions;       
    }

    public function deliver( Request $request){
        $this->validate($request, [
            'prescriptions' => 'required'
        ]); 

        $prescriptions = json_decode(json_encode($request->prescriptions)); 

        foreach($prescriptions as $prescription){
            $delivery = $prescription->isDeliverd; 
            $prescription = Prescription::find($prescription->id); 
            $prescription->isDeliverd = $delivery; 
            $prescription->save(); 
        }

        $queue = Patient_queue::where('hisstory_id', $prescriptions[0]->hisstory_id)->first(); 
        $queue->prescription_status = 3; 
        $queue->save();

        return $prescriptions; 
    }

    public function requests(\App\Patient_queue $queue){
        $prescriptions = Prescription::where('hisstory_id', $queue->hisstory_id)->get(); 
        foreach($prescriptions as $prescription){
            $prescription->drug = $prescription->drug()->first(); 
            $prescription->root = $prescription->root()->first(); 
            $prescription->frequency = $prescription->frequency()->first(); 
        }
        return $prescriptions; 
    }
}
