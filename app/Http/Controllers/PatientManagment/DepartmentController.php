<?php

namespace App\Http\Controllers\PatientManagment;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Department; 

class DepartmentController extends Controller
{
    public function index(){
        return Department::orderBy('name')->get(); 
    }
}
