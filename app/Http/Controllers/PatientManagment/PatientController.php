<?php

namespace App\Http\Controllers\PatientManagment;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Patient; 
use App\Department; 

class PatientController extends Controller
{
    public function newPatient(Request $request){
       // return $request->all(); 
        $this->validate($request, [
            'reg_id'=> 'required',
            'first_name'=> 'required',
            'father_name'=> 'required',
            'grand_father_name'=> 'required',
            'birth_date'=> 'required',
            'dorm_room_number' => 'required', 
            'dorm_block' => 'required', 
            'phone'=> 'required',
            'gender'=> 'required',
            'accadamic_year' => 'required', 
        ]);
        $department = Department::where('name', $request->department)->first();
        return Patient::create([
            'reg_id' => $request->reg_id, 
            'first_name' => $request->first_name, 
            'father_name' => $request->father_name, 
            'grand_father_name' => $request->grand_father_name, 
            'birth_date' => $request->birth_date, 
            'dorm_room_number' => $request->dorm_room_number, 
            'dorm_block' => $request->dorm_block, 
            'phone' => $request->phone,  
            'gender' => $request->gender, 
            'department_id' => $department->id,
            'college_id' => $department->college_id,
            'accadamic_year' => $request->accadamic_year,
        ]); 
    }
}
