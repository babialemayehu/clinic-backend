<?php

namespace App\Http\Controllers\PharmacyManagement;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Auth\Auth;
use App\Drug; 
use App\Drug_frequency; 
use App\Drug_root; 

class DrugsController extends Controller
{
    public function search_auto($key = "all"){
        if(empty($key) || !isset($key) || $key == "all"){
            return Drug::get();
        }
        return Drug::search($key)->get(); 
    }

    public function search($key){
        if(empty($key)){
            return null; 
        }
        return Drug::where('name',$key)->first(); 
    }

    public function getFrequencies(){
        return Drug_frequency::get(); 
    }

    public function getRoots(){
        return Drug_root::get(); 
    }
}
