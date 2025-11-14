<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PasswordResetToken extends Model
{
    protected $guarded = [];
    protected $table = "password_reset_tokens";
    protected $primaryKey = "email" ;
    protected $keyType = "string";
    public $incrementing = false;
    public $timestamps = false;

}
