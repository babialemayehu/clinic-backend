<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; 
use Laravel\Scout\Searchable;

class Prescription extends Model
{
    use SoftDeletes;
    use Searchable;

    protected $fillable = [
        'id',
        'drug_id', 
        'hisstory_id', 
        'root_id', 
        'frequency_id', 
        'dose', 
        'isDelivered'
    ]; 

    public function hisstory(){
        return $this->belongsTo('App\Hisstory'); 
    }

    public function drug(){
        return $this->belongsTo('App\Drug'); 
    }

    public function root(){
        return $this->belongsTo('App\Drug_root', 'root_id'); 
    }

    public function frequency(){
        return $this->belongsTo('App\Drug_frequency', 'frequency_id'); 
    }
}
