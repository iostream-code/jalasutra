<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserMail extends Model
{
    use HasFactory;

    /**
     * fillable
     *
     * @var array
     */
    protected $fillable = [
        'fk_user_id',
        'fk_mail_id',
        'number',
        'content',
        'signature',
        'status',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function mails()
    {
        return $this->belongsToMany(Mail::class);
    }
}
