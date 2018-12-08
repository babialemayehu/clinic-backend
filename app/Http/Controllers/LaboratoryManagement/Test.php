<?php

namespace App\Http\Controllers\LaboratoryManagement;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Auth\Auth;
use App\Laboratory_test; 

class Test extends Controller
{
    public function search_auto($key){
        if(empty($key) || !isset($key) || $key == "all"){
            return Laboratory_test::get();
        }

        return Laboratory_test::search($key)->get(); 
    }

    public function search($key){
        if(empty($key)){
            return null; 
        }
        return Laboratory_test::where('name',$key)->first(); 
    }
}
