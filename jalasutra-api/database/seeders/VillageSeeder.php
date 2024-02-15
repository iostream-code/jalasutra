<?php

namespace Database\Seeders;

use App\Models\Village;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class VillageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'name' => 'Mojorejo',
            ],
            [
                'name' => 'Purworejo',
            ],
            [
                'name' => 'Ringin Rejo',
            ],
            [
                'name' => 'Sukorejo',
            ],
            [
                'name' => 'Sumberarum',
            ],
            [
                'name' => 'Tugu Rejo',
            ],
            [
                'name' => 'Tulungrejo',
            ],
            [
                'name' => 'Wates',
            ],
        ];

        Village::insert($data);
    }
}