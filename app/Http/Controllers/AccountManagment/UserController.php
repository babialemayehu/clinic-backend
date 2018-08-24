<?php

namespace App\Http\Controllers\AccountManagment;

use Illuminate\Http\Request;
use App\Mail\Welcome; 
use Illuminate\Support\Facades\Mail;

class UserController extends \App\Http\Controllers\Controller
{
  
    public function index()
    {
        //
    }

    public function create()
    {
        //
    }
    public function store(Request $request)
    {
        $this->validate($request, [
            'worker_id'=> 'required',
            'first_name'=> 'required',
            'father_name'=> 'required',
            'grand_father_name'=> 'required',
            'email'=> 'required',
            'phone'=> 'required',
             'password'=> 'required',
            'gender'=> 'required',
            'role_id'=> 'required',
        ]);
        
        $password = '222222'; 
        Mail::to($request['email'])->send(new Welcome($password)); 
        $user = User::create([
            'first_name' => $request['first'],
            'father_name' => $request['fatherName'], 
            'grand_father_name' => $request['grandFatherName'], 
            'worker_id' => $request['workerId'],
            'email' => $request['email'],
            'phone' => $request['phone'],
            'password' => Hash::make($password),
            'gender' => $request['gender'], 
            'role_id' => $request['role']
        ]);

        return $user; 
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
