<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hisstroy_diagnosis extends Model
{
    protected $fillable = [
        'hisstory_id', 
        'diagnosis_id'
    ]; 

    public function diagnosis(){
        return $this->belongsTo('App\Diagnosis'); 
    }
}
