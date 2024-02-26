<?php

namespace Database\Seeders;

use App\Models\Mail;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'fk_service_id' => 6,
                'name' => 'Surat Keterangan Tidak Mampu',
                'form' => 'https://forms.gle/Pez37A9WJPhtPbKm9',
            ],
            [
                'fk_service_id' => 6,
                'name' => 'Surat Izin Keramaian',
                'form' => 'https://forms.gle/Pez37A9WJPhtPbKm9',
            ],
        ];

        Mail::insert($data);
    }
}
