<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; 
use Laravel\Scout\Searchable;

class Patient extends Model
{
    use SoftDeletes;
    use Searchable; 
    
    protected $fillable = [
        'reg_id',
        'first_name',
        'father_name',
        'grand_father_name',
        'birth_date',
        'dorm_room_number',
        'dorm_block',
        'phone',
        'gender',
        'department_id',
        'accadamic_year',
        'college_id'
    ];

    public function toSearchableArray()
    {
        $array = $this->toArray();

        $customized  = []; 
        $customized['reg_id'] = $array['reg_id']; 
        $customized['first_name'] = $array['first_name']; 
        $customized['father_name'] = $array['father_name']; 
        $customized['grand_father_name'] = $array['grand_father_name']; 

        return $customized;
    }
    public function department(){
        return $this->belongsTo('App\Department'); 
    }
    public function college(){
        return $this->belongsTo('App\College'); 
    }
    public function queues(){
        return $this->hasMany('App\Patient_queue'); 
    }
}
