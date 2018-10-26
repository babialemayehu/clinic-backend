<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
//use Illuminate\Database\Eloquent\SoftDeletes; 
use Laravel\Scout\Searchable;

class Diagnosis extends Model
{
    //use SoftDeletes;
    use Searchable;

    public function toSearchableArray()
    {
        $array = $this->toArray();

        $customized  = []; 
        $customized['name'] = $array['name']; 

        return $customized;
    }
}
