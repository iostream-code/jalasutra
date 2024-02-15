import { useEffect, useState } from "react";
import { BsFilterLeft } from "react-icons/bs";
import Api from "../api";
import Picture from "../assets/error/empty.svg";
import ServiceCard from "../components/service/ServiceCard";
import Carousel from "better-react-carousel";

const Service = () => {
    const [services, setServices] = useState([]);

    const fetchServices = async () => {
        await Api.get('/api/services')
            .then(response => {
                setServices(response.data.data.data);
            })
    }

    useEffect(() => {
        fetchServices();
    }, [])

    console.log(services)

    return (
        <>
            <div className="flex justify-center items-center gap-6 pb-16">
                <div className="w-4/5 p-6 text-center bg-white rounded-lg">
                    <div className="flex flex-row justify-between items-center">
                        <form className="w-1/2 md:w-1/3">
                            <div className="flex">
                                <div className="relative w-full">
                                    <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-3xl border-s-gray-300 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Cari disini..." required />
                                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-3xl border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                        <span className="sr-only">Search</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 inline-flex items-center gap-2">
                            <span><BsFilterLeft size={"20px"} /></span>Filter
                        </button>
                    </div>
                    <div className="mt-10">
                        {
                            services.length > 0 ?
                                <Carousel rows={1} cols={4} gap={10} loop>
                                    {
                                        services.map((service, index) => {
                                            return (
                                                <Carousel.Item key={index}>
                                                    <ServiceCard service={service} />
                                                </Carousel.Item>
                                            )
                                        })
                                    }
                                </Carousel>
                                :
                                <div className="col-span-4 flex flex-col justify-center items-center gap-4">
                                    <img src={Picture} className="h-auto md:h-[260px] mx-auto" />
                                    <p className="font-light text-gray-500">Data belum tersedia!</p>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service