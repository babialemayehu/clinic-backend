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
            $this->validate($request, [
                'name' => 'required', 
                'frequency' => 'required', 
                'root' => 'required', 
            ]); 
            $drug_id = Drug::where('name', $request->name)->first()->id; 
            $frequency_id = Drug_frequency::where('name', $request->frequency)->first()->name; 
            $root_id =  Drug_root::where('name', $request->root)->first()->id; 
            $_prescription = Prescription::create([
                'drug_id' => $drug_id, 
                'hisstory_id' => $hisstory_id, 
                'root_id' => $root_id, 
                'frequency_id' => $frequency_id, 
                'dose' => $request->doses
            ]); 

            array_push($prescriptions, $_prescription); 
        }
        
        return $prescriptions;       
    }
}
