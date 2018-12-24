<?php

namespace App\Http\Controllers\AccountManagment;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Auth\Auth;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Storage;
use App\Mail\Welcome; 
use App\User; 
use App\Role; 

class UserController extends \App\Http\Controllers\Controller
{
    private $AUTH; 

    function __construct(){
        $auth = Auth::user(); 
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
            'worker_id' => strtoupper($request['worker_id']),
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

    public function destroy($user)
    {
        $user = User::findOrFail($user); 
        $user->delete();
        return $user; 
    }

    //GET
    public function authUser(){
        $auth = Auth::user(); 
        $auth->profile_pic = url(Storage::url($auth->profile_pic ));
        return $auth; 
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
        $auth = Auth::user(); 
        if (!Auth::once(['worker_id'=> $auth->worker_id, 'password'=>$request->currentPassword])){
            return response(json_encode((object)['message'=>"You have given invalid password"]), 406 ); 
        }
        return 'true';
    }

    public function changePassword(Request $request){
        $auth = Auth::user(); 
        if (!Auth::once(['worker_id'=> $auth->worker_id, 'password'=>$request->currentPassword])
            && !$auth->isFirstTime){
            return response(json_encode((object)['message'=>"You have given invalid password"]), 406); 
        }else{
            $auth->password = Hash::make($request->newPassword); 
            if($auth->setup_step == 0){
                $auth->setup_step = 1; 
            }
            $auth->save(); 
             return 'true'; 
        }
    }   

    public function uploadProfilePic(Request $request){
        $auth = Auth::user(); 
        $imageName =  $auth->worker_id.'.'.$request->file('image')->extension(); 
        $auth->profile_pic = $request->file('image')
        ->storeAs('profile', $imageName, 'public');
        if($auth->setup_step == 1){
            $auth->setup_step =-1; 
        }
        $auth->save(); 
        $auth->profile_pic = '//storage/'.$auth->profile_pic;
        return $auth; 
    }

    public function logout(Request $request){
        $user = Auth::user(); 
        Auth::logout(); 
        $responce =  (object)["redirectTo" => '/', "user" => $user];  
        return json_encode($responce); 
    }

    public function total(){
        return User::get()->count();  
    }

    public function room_number($room_number){
        $user = Auth::user(); 
        $user->room_number = $room_number; 
        $user->save(); 
        return $user; 
    }
}