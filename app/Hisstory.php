<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hisstory extends Model
{
    protected $fillable = [
        'id',
        'patient_queue_id',
        'diagnosis_id',
        'chief_complaint',
        'temprature',
        'BP',
        'puls_rate',
        'respiratory_rate'
    ]; 

    public function queue(){
        return $this->belongsTo('App\Patient_queue', 'hisstory_id'); 
    }

    public function prescription(){
        return $this->hasMany('App\Prescription'); 
    }

    public function diagnosis(){
        return $this->hasMany('App\Hisstroy_diagnosis'); 
    }

    public function prescriptions(){
        return $this->hasMany('App\Prescription');
    }

    public function laboratories(){
        return $this->hasMany('App\Laboratory'); 
    }
}
