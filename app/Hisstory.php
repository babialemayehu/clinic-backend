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
        return $this->belongsTo('App/Patient_queue'); 
    }

    public function prescription(){
        return $this->hasMany('App/Prescription'); 
    }
}
