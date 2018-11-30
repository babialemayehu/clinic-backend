<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'id', 
        'order_by',  
        'supplier_id',  
        'issued_by', 
      
    ]; 

    public function supplier(){
        return $this->belongsTo('App\Supplier'); 
    }
    public function orderedBy(){
       return  $this->belongsTo('App\User', 'order_by'); 
    }
    public function isssuedBy(){
       return $this->belongsTo('App\User', 'issued_by'); 
    }

    public function drug(){
        return $this->belongsToMany("App\Drug", "drug_orders", "drug_id", "order_id"); 
    }

    public function drug_orders(){
        return $this->hasMany("App\Drug_order"); 
    }
}
