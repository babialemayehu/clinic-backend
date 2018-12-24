<?php
namespace App\Http\Controllers\Auth; 

use Illuminate\Support\Facades\Auth as _Auth;
use App\User; 

class Auth extends _Auth{
    public static function user(){
       return _Auth::user(); 
       return User::find(9); 
    }
}