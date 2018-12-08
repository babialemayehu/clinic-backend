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
        'hisstory_id', 
        'status',
        'prescription_status',
        'isClosed', 
        '_call'
    ]; 

    public function clurk(){
        return $this->belongsTo('App\User', 'clurk_id'); 
    }

    public function physician(){
        return $this->belongsTo('App\User', 'physician_id'); 
    }
    
    public function patient(){
        return $this->belongsTo('App\Patient'); 
    }

    public function hisstory(){
        return $this->hasOne('App\Hisstory'); 
    }
}
