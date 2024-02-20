import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Button } from "flowbite-react"
import { MdOutlineEdit } from "react-icons/md"
import Api from "../../api"
import Nav from "../../components/partial/Nav"

const UserDetail = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState("")
    const [identityId, setIdentityId] = useState("")
    const [birth, setBirth] = useState("")
    const [sex, setSex] = useState("")
    const [address, setAddress] = useState("")
    const [job, setJob] = useState("")
    const [maritalStatus, setMaritalStatus] = useState("")
    const [photo, setPhoto] = useState("")
    const [village, setVillage] = useState("")

    const { id } = useParams()

    const fetchDetailUser = async () => {
        await Api.get(`/api/users/${id}`)
            .then(response => {
                setUsername(response.data.data.user.username)
                setEmail(response.data.data.user.email)
                setFullName(response.data.data.full_name)
                setIdentityId(response.data.data.identity_id)
                setBirth(response.data.data.birth)
                setSex(response.data.data.sex)
                setAddress(response.data.data.address)
                setJob(response.data.data.job)
                setMaritalStatus(response.data.data.marital_status)
                setPhoto(response.data.data.photo)
                setVillage(response.data.data.village.name)
            })
    }

    useEffect(() => {
        fetchDetailUser();
        // eslint-disable-next-line
    }, []);

    const parent = "pengguna"
    const child = "detail"

    return (
        <>
            <div className="grid grid-cols-2">
                <span>
                    <Nav parent={parent} child={child} />
                </span>
                <div className="mb-4 place-self-end">
                    <a href={`/pengguna/${id}/ubah`}>
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
                        Detail Data {username}
                    </h1>
                </div>
                <div className="mt-2 px-2 flex flex-col">
                    <img src={photo} className="mx-auto rounded-full w-24 h-24" alt="Belum Ada Foto" />
                    <div className="mt-4">
                        <dl className="divide-y divide-gray-100">
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-semibold md:font-medium leading-6 text-gray-900">Email</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{email}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-semibold md:font-medium leading-6 text-gray-900">NIK</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{identityId}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-semibold md:font-medium leading-6 text-gray-900">Nama Lengkap</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{fullName}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-semibold md:font-medium leading-6 text-gray-900">Tanggal Lahir</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize ">{birth}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-semibold md:font-medium leading-6 text-gray-900">Jenis Kelamin</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{sex}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-semibold md:font-medium leading-6 text-gray-900">Desa</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{village}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-semibold md:font-medium leading-6 text-gray-900">Alamat</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{address}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-semibold md:font-medium leading-6 text-gray-900">Pekerjaan</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{job}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-semibold md:font-medium leading-6 text-gray-900">Status</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">
                                    {
                                        maritalStatus == 'married' ? 'Sudah Menikah'
                                            :
                                            maritalStatus == 'single' ? 'Belum Menikah'
                                                :
                                                'Cerai Hidup'
                                    }
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetail