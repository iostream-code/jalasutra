import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Button } from "flowbite-react"
import { MdOutlineEdit } from "react-icons/md"
import Api from "../../api"
import Nav from "../../components/partial/Nav"
import Loader from "../../components/Loader"

const UserDetail = () => {
    const [profile, setProfile] = useState([])

    const { id } = useParams()

    const fetchDetailUser = async () => {
        await Api.get(`/api/users/${id}`)
            .then(response => {
                setProfile(response.data.data)
            })
    }

    useEffect(() => {
        fetchDetailUser();
        // eslint-disable-next-line
    }, []);

    if (!profile) {
        return <div><Loader /></div>
    }

    const parent = "pengguna"
    const child = "detail"

    return (
        <>
            <div className="grid grid-cols-2">
                <span>
                    <Nav parent={parent} child={child} />
                </span>
                <div className="mb-4 place-self-end">
                    <Link to={`/pengguna/${id}/ubah`}>
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
                        Detail Data {profile.user.username}
                    </h1>
                </div>
                <div className="mt-2 px-2 flex flex-col">
                    <img src={profile.photo} className="mx-auto rounded-full w-24 h-24" alt="Belum Ada Foto" />
                    <div className="mt-4">
                        <dl className="divide-y divide-gray-100">
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{profile.user.email}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">NIK</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{profile.identity_id}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Nama Lengkap</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{profile.full_name}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Tanggal Lahir</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize ">{profile.birth}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Jenis Kelamin</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{profile.sex}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Desa</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{profile.village.name}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Alamat</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{profile.address}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Pekerjaan</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{profile.job}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Status</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">
                                    {
                                        profile.marital_status == 'married' ? 'Sudah Menikah'
                                            :
                                            profile.marital_status == 'single' ? 'Belum Menikah'
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