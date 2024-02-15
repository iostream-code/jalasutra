<?php

namespace Database\Seeders;

use App\Models\ServiceType;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ServiceTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'icon' => 'icons/service-icon-4.png',
                'type' => 'PEMKAB',
            ],
            [
                'icon' => 'icons/service-icon-2.png',
                'type' => 'KECAMATAN',
            ],
            [
                'icon' => 'icons/service-icon-1.png',
                'type' => 'DESA',
            ],
            [
                'icon' => 'icons/service-icon-3.png',
                'type' => 'UMUM',
            ],
            [
                'icon' => 'icons/service-icon-5.png',
                'type' => 'EMAIL',
            ],
        ];

        ServiceType::insert($data);
    }
}
