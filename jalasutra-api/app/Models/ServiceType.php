<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ServiceType extends Model
{
    use HasFactory;

    /**
     * fillable
     *
     * @var array
     */
    protected $fillable = [
        'type',
        'icon',
    ];

    /**
     * icon
     *
     * @return Attribute
     */
    protected function icon(): Attribute
    {
        return Attribute::make(
            get: fn ($icon) => asset('/storage/service-types/' . $icon),
        );
    }

    public function service()
    {
        return $this->hasOne(Service::class);
    }
}
