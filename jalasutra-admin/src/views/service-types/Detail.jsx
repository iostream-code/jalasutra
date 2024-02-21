import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Api from "../../api"
import Nav from "../../components/partial/Nav"
import { Button } from "flowbite-react"
import { MdOutlineEdit } from "react-icons/md"

const ServiceTypeDetail = () => {
    const [types, setTypes] = useState([])

    const { id } = useParams()

    const fetchDetailServiceType = async () => {
        await Api.get(`/api/service-types/${id}`)
            .then(response => {
                setTypes(response.data.data);
            })
    }

    useEffect(() => {
        fetchDetailServiceType()
        // eslint-disable-next-line
    }, [])

    const parent = "jenis layanan"
    const child = "detail"

    return (
        <>
            <div className="grid grid-cols-2">
                <span>
                    <Nav parent={parent} child={child} />
                </span>
                <div className="mb-4 place-self-end">
                    <Link to={`/jenis-layanan/${id}/ubah`}>
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
                        Detail Jenis Layanan {types.type}
                    </h1>
                </div>
                <div className="mt-2 px-2 flex flex-col">
                    <img src={types.icon} className="mx-auto rounded-full h-24" alt="Belum Ada Logo" />
                    <div className="mt-4">
                        <dl className="divide-y divide-gray-100">
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-semibold md:font-medium leading-6 text-gray-900">Jenis</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{types.type}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-semibold md:font-medium leading-6 text-gray-900">Deskripsi</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">
                                    Amet cillum cupidatat ea duis et commodo amet reprehenderit velit deserunt. Do amet sunt dolore adipisicing. Est ad adipisicing ea aute esse ullamco enim ex non.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceTypeDetail