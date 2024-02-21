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
        $faker = fake('id_ID');
        $gender = $faker->randomElement(['male', 'female']);

        $data = [
            [
                'name' => 'Mojorejo',
                'head_village' => $faker->name($gender),
                'region' => 'https://maps.app.goo.gl/Fp4pF6zJuGmuQyFo6',
                'address' => 'https://maps.app.goo.gl/7tpeATb3x1wiepUv8',
            ],
            [
                'head_village' => $faker->name($gender),
                'name' => 'Purworejo',
                'region' => 'https://maps.app.goo.gl/sggUhMPBGJA3xSer7',
                'address' => 'https://maps.app.goo.gl/rcCW9aBzEJhmycLQ7',
            ],
            [
                'name' => 'Ringin Rejo',
                'head_village' => $faker->name($gender),
                'region' => 'https://maps.app.goo.gl/dfbR4gywhQrwzMCVA',
                'address' => 'https://maps.app.goo.gl/rcCW9aBzEJhmycLQ7',
            ],
            [
                'name' => 'Sukorejo',
                'head_village' => $faker->name($gender),
                'region' => 'https://maps.app.goo.gl/HoeULRBqiMZ7HoeA9',
                'address' => 'https://maps.app.goo.gl/rcCW9aBzEJhmycLQ7',
            ],
            [
                'name' => 'Sumberarum',
                'head_village' => $faker->name($gender),
                'region' => 'https://maps.app.goo.gl/xoKQDkCLFYsd1hL78',
                'address' => 'https://maps.app.goo.gl/rcCW9aBzEJhmycLQ7',
            ],
            [
                'name' => 'Tugu Rejo',
                'head_village' => $faker->name($gender),
                'region' => 'https://maps.app.goo.gl/qTj67dwr78tFUr4u8',
                'address' => 'https://maps.app.goo.gl/rcCW9aBzEJhmycLQ7',
            ],
            [
                'name' => 'Tulungrejo',
                'head_village' => $faker->name($gender),
                'region' => 'https://maps.app.goo.gl/RkVpTizFpt3GDmKN6',
                'address' => 'https://maps.app.goo.gl/rcCW9aBzEJhmycLQ7',
            ],
            [
                'name' => 'Wates',
                'head_village' => $faker->name($gender),
                'region' => 'https://maps.app.goo.gl/fNwVm5PNRTyNYjV1A',
                'address' => 'https://maps.app.goo.gl/rcCW9aBzEJhmycLQ7',
            ],
        ];

        Village::insert($data);
    }
}