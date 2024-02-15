import Header from './Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import { useEffect, useState } from 'react';
import Api from '../../api';

const ServiceSection = () => {
    const [services, setServices] = useState([]);

    const fetchServices = async () => {
        await Api.get('/api/services')
            .then(response => {
                setServices(response.data.data.data)
            })
    }

    useEffect(() => {
        fetchServices();
    }, [])

    return (
        <div>
            <div className="mx-auto mt-28 max-w-screen-lg">
                <Header title="Layanan" />
                <div className="slider-services mx-8 md:mx-0">
                    <Swiper
                        breakpoints={{
                            1080: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            340: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            200: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            }
                        }}
                        loop={true}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        scrollbar={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper md:h-[22rem]">
                        {
                            services.map((service, index) => (
                                <SwiperSlide key={index} className="my-10">
                                    <div className="flex flex-col justify-between gap-4 md:gap-0 bg-white md:h-64 rounded-xl p-4 border border-gray-200 shadow-md">
                                        <div className="flex flex-col gap-2">
                                            <span>
                                                <img src={service.icon} className="h-10" alt="" />
                                            </span>
                                            <p className="text-sm lg:text-xl font-semibold md:font-medium">{service.name}</p>
                                            <p className="text-xs text-black opacity-70">{service.description}</p>
                                        </div>
                                        <div className="flex justify-end">
                                            <a href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Selengkapnya
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        <div className="button-prev bottom-0 right-10 md:right-14 absolute z-50 bg-blue-700 rounded-full">
                            <button className="swiper-button-prev px-2 py-1 md:p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-4 md:w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                        </div>
                        <div className="button-next absolute bottom-0 right-0 z-50 bg-blue-700 rounded-full">
                            <button className="swiper-button-next  px-2 py-1 md:p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-4 md:w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection