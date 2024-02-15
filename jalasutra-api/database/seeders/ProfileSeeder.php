<?php

namespace Database\Seeders;

use App\Models\Profile;
use App\Models\UserProfile;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProfileSeeder extends Seeder
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
                'fk_user_id' => 1,
                'fk_village_id' => 1,
                'identity_id' => random_int(3570000000000000, 3579999999999999),
                'full_name' => $faker->name($gender),
                'birth' => $faker->date(),
                'sex' => $faker->randomElement(['male', 'female']),
                'address' => $faker->address(),
                'job' => $faker->jobTitle(),
                'marital_status' => $faker->randomElement(['married', 'single', 'divorced']),
            ],
            [
                'fk_user_id' => 2,
                'fk_village_id' => 2,
                'identity_id' => random_int(3570000000000000, 3579999999999999),
                'full_name' => $faker->name($gender),
                'birth' => $faker->date(),
                'sex' => $faker->randomElement(['male', 'female']),
                'address' => $faker->address(),
                'job' => $faker->jobTitle(),
                'marital_status' => $faker->randomElement(['married', 'single', 'divorced']),
            ],
            [
                'fk_user_id' => 3,
                'fk_village_id' => 3,
                'identity_id' => random_int(3570000000000000, 3579999999999999),
                'full_name' => $faker->name($gender),
                'birth' => $faker->date(),
                'sex' => $faker->randomElement(['male', 'female']),
                'address' => $faker->address(),
                'job' => $faker->jobTitle(),
                'marital_status' => $faker->randomElement(['married', 'single', 'divorced']),
            ],
            [
                'fk_user_id' => 4,
                'fk_village_id' => 4,
                'identity_id' => random_int(3570000000000000, 3579999999999999),
                'full_name' => $faker->name($gender),
                'birth' => $faker->date(),
                'sex' => $faker->randomElement(['male', 'female']),
                'address' => $faker->address(),
                'job' => $faker->jobTitle(),
                'marital_status' => $faker->randomElement(['married', 'single', 'divorced']),
            ],
            [
                'fk_user_id' => 5,
                'fk_village_id' => 5,
                'identity_id' => random_int(3570000000000000, 3579999999999999),
                'full_name' => $faker->name($gender),
                'birth' => $faker->date(),
                'sex' => $faker->randomElement(['male', 'female']),
                'address' => $faker->address(),
                'job' => $faker->jobTitle(),
                'marital_status' => $faker->randomElement(['married', 'single', 'divorced']),
            ],
            [
                'fk_user_id' => 6,
                'fk_village_id' => 6,
                'identity_id' => random_int(3570000000000000, 3579999999999999),
                'full_name' => $faker->name($gender),
                'birth' => $faker->date(),
                'sex' => $faker->randomElement(['male', 'female']),
                'address' => $faker->address(),
                'job' => $faker->jobTitle(),
                'marital_status' => $faker->randomElement(['married', 'single', 'divorced']),
            ],
        ];

        Profile::insert($data);
    }
}