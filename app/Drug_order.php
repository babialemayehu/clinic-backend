<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Drug_order extends Model
{
    protected $fillable = [
        'autorized_by', 
        'drug_id',  
        'ordered_quantity',  
        'adjusted_quantity',  
        'issued_quantity',  
        'batch_number',  
        'expier_at', 
        'recived_at'
    ]; 

    public function drug(){
        $this->belongsTo('App\Drug','drug_id'); 
    }


    public function autoriedBy(){
        $this->belongsTo('App\User', 'autorized_by'); 
    }


}
