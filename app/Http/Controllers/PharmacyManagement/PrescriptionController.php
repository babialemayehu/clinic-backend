<?php

namespace App\Http\Controllers\PharmacyManagement;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Prescription; 
use App\Drug; 
use App\Drug_frequency; 
use App\Drut_root; 

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
        
        return $prescriptions;       
    }
}
