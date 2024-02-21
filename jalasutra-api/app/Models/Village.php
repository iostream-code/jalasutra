<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Village extends Model
{
    use HasFactory;

    /**
     * fillable
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'head_village',
        'region',
        'address',
    ];

    public function profile()
    {
        return $this->hasOne(Profile::class, 'fk_village_id');
    }
}
