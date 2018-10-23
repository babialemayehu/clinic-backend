<?php

namespace App\Http\Controllers\PharmacyManagement;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DrugsController extends Controller
{
    public function search_auto($key){
        if(empty($key)){
            return []; 
        }
        // return Laboratory_test::search($key)->get(); 
    }

    public function search($key){
        if(empty($key)){
            return null; 
        }
        // return Laboratory_test::where('name',$key)->first(); 
    }
}
