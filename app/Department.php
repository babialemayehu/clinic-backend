<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    public function patients(){
        return $this->hasMeny('App\Patient'); 
    }

    public function college(){
        return $this->belongsTo('App\College');
    }
}
