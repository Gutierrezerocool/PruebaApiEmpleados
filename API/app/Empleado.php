<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Empleado extends Model
{
    use SoftDeletes;

    protected $table = 'empleados';
    protected $fillable = ['name','email','job','birth','address'];
    protected $dates = ['deleted_at'];
}
