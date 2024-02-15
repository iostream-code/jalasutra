<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'fk_type_id' => 3,
                'name' => 'KAI',
                'icon' => 'icons/service-logo-4.png',
                'description' => 'PT Kereta Api Indonesia (KAI) adalah perusahaan penyedia layanan transportasi kereta api terkemuka di Indonesia.',
                'information' => 'Nisi et aliqua amet irure dolore dolor magna laboris.',
                'contact' => '08123456789',
            ],
            [
                'fk_type_id' => 3,
                'name' => 'BPJS',
                'icon' => 'icons/service-logo-1.png',
                'description' => 'Lembaga pemerintah Indonesia yang bertanggung jawab dalam menyelenggarakan program jaminan sosial bagi para pekerja dan tenaga kerja di seluruh Indonesia.',
                'information' => 'Nisi et aliqua amet irure dolore dolor magna laboris.',
                'contact' => '08123456789',
            ],
            [
                'fk_type_id' => 3,
                'name' => 'PLN',
                'icon' => 'icons/service-logo-3.png',
                'description' => 'PLN, atau Perusahaan Listrik Negara, adalah perusahaan penyedia layanan listrik terkemuka di Indonesia.',
                'information' => 'Nisi et aliqua amet irure dolore dolor magna laboris.',
                'contact' => '08123456789',
            ],
            [
                'fk_type_id' => 1,
                'name' => 'PPDB',
                'icon' => 'icons/service-logo-5.png',
                'description' => 'PPDB merupakan proses seleksi dan pendaftaran bagi calon siswa baru untuk bergabung di suatu lembaga pendidikan, seperti sekolah atau perguruan tinggi.',
                'information' => 'Nisi et aliqua amet irure dolore dolor magna laboris.',
                'contact' => '08123456789',
            ],
            [
                'fk_type_id' => 4,
                'name' => 'Gmail',
                'icon' => 'icons/service-logo-2.png',
                'description' => 'Gmail adalah layanan surel atau email yang disediakan oleh perusahaan teknologi terkemuka, Google.',
                'information' => 'Nisi et aliqua amet irure dolore dolor magna laboris.',
                'contact' => '08123456789',
            ],
        ];

        Service::insert($data);
    }
}
