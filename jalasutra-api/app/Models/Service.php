<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Service extends Model
{
    use HasFactory;

    /**
     * fillable
     *
     * @var array
     */
    protected $fillable = [
        'fk_type_id',
        'name',
        'icon',
        'description',
        'information',
        'contact',
    ];

    /**
     * icon
     *
     * @return Attribute
     */
    protected function icon(): Attribute
    {
        return Attribute::make(
            get: fn ($icon) => asset('/storage/services/' . $icon),
        );
    }

    public function mail()
    {
        return $this->hasOne(Mail::class);
    }

    public function type()
    {
        return $this->belongsTo(ServiceType::class, 'fk_type_id');
    }
}
