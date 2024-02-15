import Header from "./Header"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import NewsBanner from '../../assets/dashboard/news-banner-1.jpeg'
import GalleryPic1 from '../../assets/dashboard/gallery-1.jpg'
import GalleryPic2 from '../../assets/dashboard/gallery-2.jpeg'
import GalleryPic3 from '../../assets/dashboard/gallery-3.jpg'
import GalleryPic4 from '../../assets/dashboard/gallery-4.jpeg'

const GallerySection = () => {
    let galleries = [
        {
            pic: GalleryPic1,
            title: 'Bupati Blitar Serahkan Zakat',
            date: '4 Januari 2024',
            description: 'Badan Amil Zakat Naional (BAZNAS) Kabupaten Blitar melangsungkan Pentasyarufan Zakat Tahun 2024 di Desa Pasirharjo Kecamatan Talun, Kamis (04/01/2024). Acara ini dihadiri Bupati Blitar Rini Syarifah didampingi Ketua Baznas, OPD Terkait, Forkopimcam serta penerima zakat.'
        },
        {
            pic: GalleryPic2,
            title: 'Bupati Blitar Laksanakan Forum Konsultasi Publik',
            date: '23 Maret 2023',
            description: 'Pemerintah Kabupaten Blitar mengadakan Forum Konsultasi Publik Rancangan Awal Rencana Pembangunan Jangka Panjang Kabupaten Blitar (RPJPD) Kabupaten Blitar Tahun 2025-2045. Kegiatan yang dibuka oleh Bupati Blitar, Hj. Rini Syarifah ini dilaksanakan pada Kamis (21/12) di Ruang Rapat Candi Penataran Kanigoro.'
        },
        {
            pic: GalleryPic3,
            title: 'Bupati Blitar Resmikan Sabo Dam Kali Bentak',
            date: '24 Maret 2023',
            description: ' Bupati Blitar Rini Syarifah didampingi Kepala Dinas PUPR meresmikan Sabo Dam Kali Bentak di Kecamatan Panggungrejo, Rabu (13/12/2023). Mak Rini mengatakan sebelumnya, Sabo Dam Kali Bentak mengalami rusak parah akibat banjir tahun 2022. Mak Rini meminta Dinas PUPR untuk segera melakukan perbaikan sehingga dapat diresmikan pada hari ini.'
        },
        {
            pic: GalleryPic4,
            title: 'Monitoring Pos PAM Lilin Semeru',
            date: '25 Maret 2023',
            description: 'Kegiatan Monitoring POS PAM Natal 2023 dan Tahun Baru 2024 tempat Pos Pam Srengat. Tim UPP Kabupaten Blitar melakukan sidak monitoring pada tanggal 24 Desember 2023 pukul 10.00 s/d selesai. Situasi arus lalu lintas seputaran Pos Pam Srengat dilaporkan landai lancar, aktifitas masyarakat belum ada peningkatan.'
        },
        {
            pic: GalleryPic2,
            title: 'Bupati Blitar Laksanakan Forum Konsultasi Publik',
            date: '24 Maret 2023',
            description: 'Pemerintah Kabupaten Blitar mengadakan Forum Konsultasi Publik Rancangan Awal Rencana Pembangunan Jangka Panjang Kabupaten Blitar (RPJPD) Kabupaten Blitar Tahun 2025-2045. Kegiatan yang dibuka oleh Bupati Blitar, Hj. Rini Syarifah ini dilaksanakan pada Kamis (21/12) di Ruang Rapat Candi Penataran Kanigoro.'
        },
    ];

    return (
        <>
            <div className="max-w-screen-lg mt-20 mx-auto">
                <Header title="Galeri" />
                <div className="bg-blue-500/15 mt-5 p-10 md:rounded-xl">
                    <div className="flex flex-col gap-9">
                        <div className="first-content relative">
                            <img src={NewsBanner} alt="" className="h-80 md:w-full md:h-auto rounded-lg" />
                            <div className="bg-black bg-opacity-50 w-full absolute bottom-0 rounded-b-lg">
                                <div className="pt-5 pb-16 px-6 md:px-10 lg:pt-10 lg:pb-16 lg:px-10">
                                    <div className="news-text text-white flex flex-col gap-5 ">
                                        <p className="text-lg md:text-xl lg:text-3xl font-semibold">Pesona Eksotis Pantai Jolosutro: Surga Tersembunyi di Ujung Pulau Jawa</p>
                                        <p className="hidden lg:block text-sm opacity-75"> Jawa Timur - Indonesia terus membuktikan kekayaan alamnya melalui pesona eksotis Pantai Jolosutro di Pacitan, Jawa Timur. Pantai ini, yang mungkin belum begitu dikenal secara luas, menyimpan keindahan alam yang luar biasa dan menjadi destinasi impian bagi para pencinta pantai. Pantai Jolosutro memukau pengunjung dengan garis pantai yang memanjang, dikelilingi oleh perbukitan hijau yang menjadikannya tempat yang sempurna untuk melarikan diri dari hiruk pikuk kota. Pasir putih yang lembut memeluk telapak kaki setiap pengunjung, menciptakan atmosfer tenang dan damai.</p>
                                    </div>
                                    <a href="/" className="bg-blue-700 text-white flex gap-3 items-center px-4 py-2.5 rounded-full font-semibold text-xs md:text-sm absolute bottom-3 right-4 lg:right-14">
                                        <p>Selengkapnya</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="second-content bg-white py-5 rounded-lg">
                            <Swiper
                                breakpoints={{
                                    1080: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    540: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    340: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    }
                                }}
                                loop={true}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {
                                    galleries.map((data, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="card-field shadow-lg p-4">
                                                <div className="flex justify-center">
                                                    <img src={data.pic} alt="" className="h-40 md:h-36 lg:h-28" />
                                                </div>
                                                <div className="card-text text-justify flex flex-col justify-center mx-4 my-3">
                                                    <div className="text-sm text-center font-semibold mb-2 overflow-auto">{data.title}</div>
                                                    <div className="h-24 text-xs tracking-wide text-ellipsis overflow-hidden">{data.description}</div>
                                                    <div className="text-xs text-right opacity-70 mt-3 ">{data.date}</div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                                <div className="button-prev top-24 left-1 absolute z-50 bg-white p-1 rounded-3xl">
                                    <button className="swiper-button-prev bg-dark-blue p-2 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="black" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="button-next absolute top-24 right-1 z-50 bg-white p-1 rounded-3xl">
                                    <button className="swiper-button-next bg-dark-blue p-2 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="black" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GallerySection