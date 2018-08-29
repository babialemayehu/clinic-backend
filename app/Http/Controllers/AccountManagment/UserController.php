<?php

namespace App\Http\Controllers\AccountManagment;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Mail\Welcome; 
use App\User; 
use App\Role; 

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
            'gender'=> 'required',
            'role_id'=> 'required',
        ]);
        
        $password = '222222'; 
        Mail::to($request['email'])->send(new Welcome($password)); 
        $user = User::create([
            'first_name' => $request['first_name'],
            'father_name' => $request['father_name'], 
            'grand_father_name' => $request['grand_father_name'], 
            'worker_id' => $request['worker_id'],
            'email' => $request['email'],
            'phone' => $request['phone'],
            'password' => Hash::make($password),
            'gender' => $request['gender'], 
            'role_id' => $request['role_id']
        ]);

        return $user; 
    }

    public function edit($id)
    {
        
    }

    public function update(Request $request, $id = -1)
    {
        $user = User::find($request->id); 
        
        $user->father_name      = ucfirts($request->father_name); 
        $user->first_name       =ucfirts($request->first_name);
        $user->gender           = $request->gender;
        $user->grand_father_name=ucfirts($request->grand_father_name);
        $user->phone            =$request->phone;
        $user->email            =$request->email;
        $user->role_id          =$request->role_id;
        $user->worker_id        =strtoupper($request->worker_id);

        $user->save(); 
        return $user; 
    }

    public function destroy($id)
    {
        return User::findOfFail($id)->delete(); 
    }

    //GET
    public function authUser(){
        return User::find(1); 
    }

    public function getUsers($pagination = 25){
        $users = User::orderBy(
            'first_name')->get(); 
        foreach($users as $user)
           $user->role = $user->role()->first()->name; 

        return $users; 
    }

    public function totalUsers(){
        return User::get()->count(); 
    }

    public function userProfile(\App\User $user) {
        $user->role = $user->role()->first()->name; 
        return $user;
    }
}