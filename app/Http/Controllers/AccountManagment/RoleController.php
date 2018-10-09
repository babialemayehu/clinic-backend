<?php

namespace App\Http\Controllers\AccountManagment;

use Illuminate\Http\Request;
use App\Role; 

class RoleController extends \App\Http\Controllers\Controller
{
    public function getRolesExceptAdmin(){
        return Role::where('name', '!=', 'admin')->get(); 
    }
}
