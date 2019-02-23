<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Auth\Auth;

class FrontendController extends Controller
{
    public function index(){
        
        // switch($role){
        //     case 1:
        //         return $this->admin();
        //     break;
        //     case 2:
        //         return $this->clurk();
        //     break;
        //     case 3:
        //         return $this->drug_store();
        //     break;
        //     case 4:
        //         return $this->laboratory();
        //     break;
        //     case 5:
        //         return $this->physician();
        //     break;
        //     case 6:
        //         return $this->drug_store();
        //     break;
        //     default:
        //         abort(404); 
            
        // }
    }
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
