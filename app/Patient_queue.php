<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Patient_queue extends Model
{
    use SoftDeletes;

    protected $fillable =  
    [
        'id',
        'clurk_id', 
        'physician_id', 
        'patient_id', 
        'is_served',
    ]; 

    public function clurk(){
        return $this->belongsTo('App\User'); 
    }

    public function physician(){
        return $this->belongsTo('App\User', 'physician_id'); 
    }
    
    public function patient(){
        return $this->belongsTo('App\Patient'); 
    }
}
