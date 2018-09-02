<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; 

class Patient extends Model
{
    use SoftDeletes;

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

    public function department(){
        return $this->belongsTo('App\Department'); 
    }
    public function college(){
        return $this->belongsTo('App\College'); 
    }
}
