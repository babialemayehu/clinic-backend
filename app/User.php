<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;
    use SoftDeletes;
    use \HighIdeas\UsersOnline\Traits\UsersOnlineTrait;
    use Illuminate\Database\Eloquent\SoftDeletes; 

    protected $dates = ['deleted_at'];
    protected $fillable = [
        'worker_id','first_name','father_name','grand_father_name','email','phone', 'password','gender','role_id'
    ];

    public function getRouteKeyName()
    {
        return 'worker_id';
    }
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function role(){
        return $this->belongsTo("App\Role");
    } 
}
