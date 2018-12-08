<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $url = "";  
        $role = Auth::user()->role_id;
        switch($role){
            case 1:
                $url = '/admin';
            break;
            case 2:
                $url = '/clurk';
            break;
            case 3:
                $url = '/physician';
            break;
            case 4:
                $url = '/laboratory';
            break;
            case 5:
                $url = '/pharmacy';
            break;
            case 6:
                $url = '/drug_store';
            break;
            
        }
        return redirect($url); 
    }
}
