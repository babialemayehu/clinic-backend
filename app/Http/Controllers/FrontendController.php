<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function admin(){
        return view('fontend.admin'); 
    }
    public function clurk(){
        return view('fontend.clurk'); 
    }
}
