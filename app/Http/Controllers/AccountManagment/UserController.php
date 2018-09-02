<?php

namespace App\Http\Controllers\AccountManagment;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Storage;
use App\Mail\Welcome; 
use App\User; 
use App\Role; 

class UserController extends \App\Http\Controllers\Controller
{
    private $AUTH; 

    function __construct(){
        $this->AUTH = User::find(19); 
    } 
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
            'first_name' => ucfirst($request['first_name']),
            'father_name' => ucfirst($request['father_name']), 
            'grand_father_name' => ucfirst($request['grand_father_name']), 
            'worker_id' => $request['worker_id'],
            'email' => $request['email'],
            'phone' => $request['phone'],
            'password' => Hash::make($password),
            'gender' => ucfirst($request['gender']), 
            'role_id' => $request['role_id']
        ]);

        return $user; 
    }

    public function edit($id)
    {
        
    }

    public function update(Request $request, $id = -1)
    {
        if($id != -1)
            $user = User::find($id); 
        else
            $user = User::find($request->id); 
        
        $user->father_name      = ucfirst($request->father_name); 
        $user->first_name       = ucfirst($request->first_name);
        $user->gender           = $request->gender;
        $user->grand_father_name= ucfirst($request->grand_father_name);
        $user->phone            = $request->phone;
        $user->email            = $request->email;
        $user->role_id          = $request->role_id;
        $user->worker_id        = strtoupper($request->worker_id);

        $user->save(); 
        return $user; 
    }

    public function destroy($id)
    {
        // return $id; 
        // User::findOrFail($id)->delete(); 
        return User::findOrFail($id);
    }

    //GET
    public function authUser(){
        $this->AUTH->profile_pic = url(Storage::url($this->AUTH->profile_pic ));
        return $this->AUTH ; 
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

    public function currentPassword(Request $request){

        if (!Auth::once(['worker_id'=> $this->AUTH->worker_id, 'password'=>$request->currentPassword])){
            return response(json_encode((object)['message'=>"You have given invalid password"]), 406 ); 
        }
        return 'true';
    }

    public function changePassword(Request $request){
 
        if (!Auth::once(['worker_id'=> $this->AUTH->worker_id, 'password'=>$request->currentPassword])
            && !$this->AUTH->isFirstTime){
            return response(json_encode((object)['message'=>"You have given invalid password"]), 406); 
        }else{
            $this->AUTH->password = Hash::make($request->newPassword); 
            $this->AUTH->save(); 
             return 'true'; 
        }
    }   

    public function uploadProfilePic(Request $request){
        // auth 
        $imageName =  $this->AUTH->worker_id.'.'.$request->file('image')->extension(); 
        $this->AUTH->profile_pic = $request->file('image')
        ->storeAs('profile', $imageName, 'public'); 
        $this->AUTH->save(); 
        return 'true'; 
    }

    public function logout(Request $request){
        Auth::logout(); 
        return redirect('/'); 
        // return 'logout'; 
    }
}