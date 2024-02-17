import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { HiMiniPencil } from "react-icons/hi2"
import Api from "../../api"
import Loader from "../../components/Loader"

const ServiceDetail = () => {
    const [service, setService] = useState([])

    // const token = localStorage.getItem('token')

    const { id } = useParams()

    const fetchDetailService = async () => {
        // Api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await Api.get(`/api/services/${id}`)
            .then(response => {
                setService(response.data.data);
            })
    }

    useEffect(() => {
        fetchDetailService()
        // eslint-disable-next-line
    }, [])

    console.log(service)

    if (!service) {
        <div><Loader /></div>
    }

    return (
        <>
            <div className="w-full mt-auto rounded-lg bg-white p-6 text-left align-middle shadow-lg">
                <div className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center">
                    <div className="flex flex-row gap-2">
                        <h1 className="font-bold uppercase">
                            Detail Layanan {service.name}
                        </h1>
                        <a href={`/admin/service/edit/${service.id}`}>
                            <HiMiniPencil className="cursor-pointer p-1 hover:text-white rounded-full hover:bg-light-blue" fontSize={25} />
                        </a>
                    </div>
                </div>
                <div className="mt-4 px-2 flex flex-col">
                    <img src={service.icon} className="mx-auto rounded-full h-32" alt="Belum Ada Logo" />
                    <div className="mt-4">
                        <dl className="divide-y divide-gray-100">
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Jenis</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{service.type}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Deskripsi</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{service.description}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Informasi</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{service.information}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Kontak</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{service.contact}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceDetail