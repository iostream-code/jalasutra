import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Api from "../../api"
import Nav from "../../components/partial/Nav"
import { Button } from "flowbite-react"
import { MdLocationCity, MdLocationOn, MdOutlineEdit } from "react-icons/md"

const VillageDetail = () => {
    const [village, setVillage] = useState([])

    const { id } = useParams()

    const fetchVillage = async () => {
        await Api.get(`/api/villages/${id}`)
            .then(response => {
                setVillage(response.data.data)
            })
    }

    useEffect(() => {
        fetchVillage()
        // eslint-disable-next-line
    }, [])

    const parent = "desa"
    const child = "detail"

    return (
        <>
            <div className="grid grid-cols-2">
                <span>
                    <Nav parent={parent} child={child} />
                </span>
                <div className="mb-4 place-self-end">
                    <a href={`/desa/${id}/ubah`}>
                        <Button color="gray">
                            <MdOutlineEdit className="mr-2 h-5 w-5" />
                            Ubah
                        </Button>
                    </a>
                </div>
            </div>
            <div className="w-full mt-auto rounded-lg bg-white border-t-4 border-blue-500 p-6 text-left align-middle shadow-lg">
                <div className="text-md font-medium leading-3 mb-4 text-gray-900 flex justify-between items-center">
                    <h1 className="font-bold uppercase">
                        Detail Desa {village.name}
                    </h1>
                </div>
                <div className="mt-2 px-2 flex flex-col">
                    <div className="mt-4">
                        <dl className="divide-y divide-gray-100">
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-semibold md:font-medium leading-6 text-gray-900">Nama</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{village.name}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-semibold md:font-medium leading-6 text-gray-900">Kepala</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{village.head_village}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-semibold md:font-medium leading-6 text-gray-900">Wilayah</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">
                                    <a href={village.region} className="inline-flex text-sm font-medium items-center text-blue-600 hover:underline">
                                        <MdLocationOn className="w-4 h-4 me-2" />
                                        Wilayah Desa {village.name}
                                    </a>
                                </dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-semibold md:font-medium leading-6 text-gray-900">Wilayah</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">
                                    <a href={village.address} className="inline-flex text-sm font-medium items-center text-blue-600 hover:underline">
                                        <MdLocationCity className="w-4 h-4 me-2" />
                                        Lokasi Kantor Desa {village.name}
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VillageDetail