<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; 
use Laravel\Scout\Searchable;

class Drug extends Model
{
    use SoftDeletes;
    use Searchable;

    public function orders(){
        return $this->belongsToMany('App\Order'); 
    }
    public function drug_order(){
        return $this->hasMany('App\Drug_order'); 
    }
    
    public function prescriptions(){
        return $this->hasMany('App\Prescription'); 
    }
}
