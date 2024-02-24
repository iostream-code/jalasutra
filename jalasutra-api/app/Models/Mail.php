<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Mail extends Model
{
    use HasFactory;

    /**
     * fillable
     *
     * @var array
     */
    protected $fillable = [
        'pk_service_id',
        'name',
        'form',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public function users()
    {
        return $this->hasMany(UserMail::class);
    }
}
