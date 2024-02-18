import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { MdOutlineEdit } from "react-icons/md"
import Api from "../../api"
import Loader from "../../components/Loader"
import Nav from "../../components/partial/Nav"
import { Button } from "flowbite-react"

const ServiceDetail = () => {
    const [name, setName] = useState("")
    const [icon, setIcon] = useState("")
    const [description, setDescription] = useState("")
    const [information, setInformation] = useState("")
    const [contact, setContact] = useState("")
    const [type, setType] = useState("")

    // const token = localStorage.getItem('token')

    const { id } = useParams()

    const fetchDetailService = async () => {
        // Api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await Api.get(`/api/services/${id}`)
            .then(response => {
                setName(response.data.data.name);
                setIcon(response.data.data.icon);
                setDescription(response.data.data.description);
                setInformation(response.data.data.information);
                setContact(response.data.data.contact);
                setType(response.data.data.type.type);
            })
    }

    useEffect(() => {
        fetchDetailService()
        // eslint-disable-next-line
    }, [])

    if (!fetchDetailService) {
        <div><Loader /></div>
    }

    const parent = "layanan"
    const child = "detail"

    return (
        <>
            <div className="grid grid-cols-2">
                <span>
                    <Nav parent={parent} child={child} />
                </span>
                <div className="mb-4 place-self-end">
                    <Link to={`/layanan/${id}/ubah`}>
                        <Button color="gray">
                            <MdOutlineEdit className="mr-2 h-5 w-5" />
                            Ubah
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="w-full mt-auto rounded-lg bg-white border-t-4 border-blue-500 p-6 text-left align-middle shadow-lg">
                <div className="text-md font-medium leading-3 mb-4 text-gray-900 flex justify-between items-center">
                    <h1 className="font-bold uppercase">
                        Detail Layanan {name}
                    </h1>
                </div>
                <div className="mt-2 px-2 flex flex-col">
                    <img src={icon} className="mx-auto rounded-full h-24" alt="Belum Ada Logo" />
                    <div className="mt-4">
                        <dl className="divide-y divide-gray-100">
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-semibold md:font-medium leading-6 text-gray-900">Jenis</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{type}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-semibold md:font-medium leading-6 text-gray-900">Deskripsi</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{description}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-semibold md:font-medium leading-6 text-gray-900">Informasi</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{information}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-semibold md:font-medium leading-6 text-gray-900">Kontak</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{contact}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceDetail