<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Laboratory extends Model
{
    protected $fillable = [
        'id',
        'laboratory_test_id', 
        'normality', 
        'note',
        'value', 
        'hisstory_id', 
    ]; 

    public function hisstory(){
        return $this->belongsTo('App\Hisstory'); 
    }

    public function test(){
        return $this->belongsTo('App\Laboratory_test','laboratory_test_id'); 
    }
    
}
