import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Api from '../../api'
import 'swiper/css'

const HeroSection = () => {
    const [serviceTypes, setServiceTypes] = useState([]);

    const fetchServiceTypes = async () => {
        await Api.get('/api/service-types')
            .then(response => {
                setServiceTypes(response.data.data.data)
            })
    }

    useEffect(() => {
        fetchServiceTypes();
    }, [])

    return (
        <>
            <div className="max-w-screen-lg mx-auto bg-center bg-no-repeat bg-hero bg-gray-700 bg-blend-soft-light md:rounded-xl relative">
                <div className="py-12 flex flex-col gap-10 md:gap-16 lg:gap-20" >
                    <p className="text-2xl md:text-5xl lg:text-[78px] text-center font-extrabold text-white tracking-wide" >
                        Mall Pelayanan Publik
                    </p>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <h1 className="font-bold text-white tracking-wider text-4xl" >
                            Jalasutra
                        </h1>
                        <p className="font-medium text-white tracking-wide text-xl text-center">
                            Jenis Layanan Apapun Cukup di Kantor Kecamatan atau Desa
                        </p>
                    </div>
                    <div className="relative md:h-[100px]">
                        <div className="h-auto w-auto md:w-[729px] bg-white mt-12 mx-5 md:mx-auto p-4 shadow-lg rounded-xl">
                            <Swiper
                                breakpoints={{
                                    1080: {
                                        slidesPerView: 4,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    340: {
                                        slidesPerView: 2,
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
                                <div className="swiperr-wrapper">
                                    {
                                        serviceTypes.map((service, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="flex flex-col gap-2">
                                                    <img className="block mx-auto mt-2 md:mt-4 w-16 md:w-[72px]" src={service.icon} alt="" />
                                                    <p className="text-center text-sm md:text-base capitalize">{service.type}</p>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </div>
                                <div className="top-10 left-0 absolute z-50 mx-1 p-1 bg-blue-500 rounded-full">
                                    <button className="swiper-button-prev p-2 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="white" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="absolute top-10 right-0 z-50 mx-1 p-1 bg-blue-500 rounded-full">
                                    <button className="swiper-button-next p-2 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="white" className="w-4 h-4">
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

export default HeroSection