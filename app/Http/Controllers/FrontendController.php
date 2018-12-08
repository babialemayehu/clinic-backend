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
    public function drug_store(){
        return view('fontend.drug_store'); 
    }
    public function laboratory(){
        return view('fontend.laboratory'); 
    }
    public function pharmacy(){
        return view('fontend.pharmacy'); 
    }
    public function physician(){
        return view('fontend.physician'); 
    }

    public function lab_queue(){
        return view('fontend.lab_queue'); 
    }
    public function queue(){
        return view('fontend.queue'); 
    }
}
