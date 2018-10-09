<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request; 

class RegisterController extends Controller
{
    use RegistersUsers;

    protected $redirectTo = '/home';

    public function __construct()
    {
        $this->middleware('guest');
    }

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }
    protected function create(array $data)
    {
       
        return User::create([
            'first_name' => $data['name'],
            'father_name' => $data['name'], 
            'grand_father_name' => $data['name'], 
            'worker_id' => $data['email'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'gender' => "male", 
            'role_id' => 1
        ]);
    }

}
