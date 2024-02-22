<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\ProfileSeeder;
use Database\Seeders\ServiceSeeder;
use Database\Seeders\VillageSeeder;
use Database\Seeders\ServiceTypeSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            VillageSeeder::class,
            UserSeeder::class,
            ProfileSeeder::class,
            ServiceTypeSeeder::class,
            ServiceSeeder::class,
            MailSeeder::class,
        ]);
    }
}
