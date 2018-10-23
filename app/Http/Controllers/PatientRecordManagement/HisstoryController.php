<?php

namespace App\Http\Controllers\PatientRecordManagement;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Hisstory; 

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
}
