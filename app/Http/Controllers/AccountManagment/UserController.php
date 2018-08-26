<?php

namespace App\Http\Controllers\AccountManagment;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Mail\Welcome; 
use App\User; 

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
            'workerId'=> 'required',
            'firstName'=> 'required',
            'fatherName'=> 'required',
            'grandFratherName'=> 'required',
            'email'=> 'required',
            'phone'=> 'required',
            'gender'=> 'required',
            'role'=> 'required',
        ]);
        
        $password = '222222'; 
        Mail::to($request['email'])->send(new Welcome($password)); 
        $user = User::create([
            'first_name' => $request['firstName'],
            'father_name' => $request['fatherName'], 
            'grand_father_name' => $request['grandFratherName'], 
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

    //GET
    public function authUser(){
        return User::find(1); 
    }
}