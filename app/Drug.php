<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; 
use Laravel\Scout\Searchable;

class Drug extends Model
{
    use SoftDeletes;
    use Searchable;
}
