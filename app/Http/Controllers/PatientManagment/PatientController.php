<?php

namespace App\Http\Controllers\PatientManagment;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Auth\Auth;
use App\Patient; 
use App\Department; 
use App\User; 
use Carbon\Carbon; 

class PatientController extends Controller
{
    public function newPatient(Request $request){
       // return $request->all(); 
        $auth = Auth::user(); 
         
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
        $patient = Patient::create([
            'reg_id' => strtoupper($request->reg_id), 
            'first_name' => ucfirst($request->first_name), 
            'father_name' => ucfirst($request->father_name), 
            'grand_father_name' => ucfirst($request->grand_father_name), 
            'birth_date' => $request->birth_date, 
            'dorm_room_number' => $request->dorm_room_number, 
            'dorm_block' => $request->dorm_block, 
            'phone' => $request->phone,  
            'gender' => $request->gender, 
            'department_id' => $department->id,
            'college_id' => $department->college_id,
            'accadamic_year' => $request->accadamic_year,
            'clurk_id' => $auth->id,
        ]); 

        $patientQueue = new QueueController; 
        $patientQueue->queue($patient->id); 

        return $patient; 
    }

    public function update($id,Request $request){
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
        $patient = Patient::find($id);
        $patient->update([
            'reg_id' => strtoupper($request->reg_id),
            'first_name' => ucfirst($request->first_name), 
            'father_name' => ucfirst($request->father_name), 
            'grand_father_name' => ucfirst($request->grand_father_name), 
            'birth_date' => $request->birth_date, 
            'dorm_room_number' => $request->dorm_room_number, 
            'dorm_block' => $request->dorm_block, 
            'phone' => $request->phone,  
            'gender' => $request->gender, 
            'department_id' => $department->id,
            'college_id' => $department->college_id,
            'accadamic_year' => $request->accadamic_year,
        ]); 
        return $patient;
    }
    public function searchAutoComplete($key){
        if(!empty($key)){
            $patients = Patient::search($key)->take(15)->get(); 
            foreach($patients as $patient){
                $patient->department = $patient->department()->first();
                $queue = $patient->queues()->where('status', 0)->get(); 
                $patient->queue_status = ($queue->count())?true: false;  
                $patient->birth_date= Carbon::parse($patient->birth_date)->toFormattedDateString(); 
                $patient->age = Carbon::parse($patient->birth_date)->diffForHumans();
                $patient->registerd_at = Carbon::parse($patient->created_at)->diffForHumans();
            }
            return $patients; 
        }
        return false;    
    }

    public function search($key){
        if(!empty($key)){
            $patient = Patient::where('reg_id', '=', $key)->first(); 
            $patient->department = $patient->department()->first(); 
            $queues = $patient->queues()->get(); 
            $patient->is_queued = false; 
            $patient->birth_date= Carbon::parse($patient->birth_date)->toFormattedDateString(); 
            $patient->age = Carbon::parse($patient->birth_date)->diffForHumans();
            $patient->registerd_at = Carbon::parse($patient->created_at)->diffForHumans();
            // foreach($queues as $queue){
            //     if(!$queue->is_served){
            //         $patient->is_queued = true; 
            //     }
            // }
            return $patient; 
        }
        return false; 
    }

    public function destroy($id){
        $patient = Patient::find($id);
        $patient->queues()->delete();  
        $patient->delete(); 
        return $patient; 
    }



     // Dashboard

     public function totalNumber(){
        return Patient::get()->count(); 
    }
}
