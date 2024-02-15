<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Profile extends Model
{
    use HasFactory;

    /**
     * fillable
     *
     * @var array
     */
    protected $fillable = [
        'fk_user_id',
        'fk_village_id',
        'identity_id',
        'full_name',
        'birth',
        'sex',
        'address',
        'job',
        'marital_status',
        'photo',
    ];

    /**
     * photo
     *
     * @return Attribute
     */
    protected function photo(): Attribute
    {
        return Attribute::make(
            get: fn ($photo) => asset('/storage/profiles/' . $photo),
        );
    }

    /**
     * Relasi dengan User
     *
     * @method public
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'fk_user_id');
    }

    public function village()
    {
        return $this->belongsTo(Village::class, 'fk_village_id');
    }
}
