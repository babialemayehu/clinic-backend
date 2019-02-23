<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use App\Http\Controllers\Auth\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    public function showLoginForm(){
        return view('auth.login');
    }

    public function ajaxLogin(Request $request){
        $responce = [];
        if (Auth::attempt(['worker_id' => $request->worker_id, 'password' => $request->password],
        $request->remember)) {
            return response([
                'login' => true,
                'success' => true,
                'message' => "Successfuly loged in",
                'redirectTo' => $this->redirectTo()
            ],200);
        }else{
            return response([
                'login' => false,
                'success' => false,
                'message' => 'Invalid username or password!',
                'r' => $request->all()
            ],422);
        }
    }
    protected function redirectTo()
    {
        return '/';
    }
}
