<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class College extends Model
{
    public function patients(){
        return $this->hasMeny('App\Patient'); 
    }
    public function departments(){
        return $this->hasMeny('App\Departments');
    }
}
