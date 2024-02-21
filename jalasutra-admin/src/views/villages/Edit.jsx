import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "flowbite-react"
import { MdOutlineSaveAs } from "react-icons/md"
import Api from "../../api"
import Nav from "../../components/partial/Nav"
import Swal from "sweetalert2"

const VillageEdit = () => {
    const [users, setUsers] = useState([])
    const [name, setName] = useState("")
    const [chief, setChief] = useState("")
    const [region, setRegion] = useState("")
    const [address, setAddress] = useState("")

    const [errors, setErrors] = useState([])

    const { id } = useParams()

    const navigate = useNavigate()

    const fetchUsers = async () => {
        await Api.get('/api/users')
            .then(response => {
                setUsers(response.data.data.data)
            })
    }

    const fetchVillage = async () => {
        await Api.get(`/api/villages/${id}`)
            .then(response => {
                setName(response.data.data.name)
                setChief(response.data.data.chief)
                setRegion(response.data.data.region)
                setAddress(response.data.data.address)
            })
    }

    useEffect(() => {
        fetchUsers()
        fetchVillage()
        // eslint-disable-next-line
    }, [])

    const successNotification = () => {
        Swal.fire({
            icon: "success",
            title: "Jenis layanan berhasil ditambahkan.",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const updateData = async (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('name', name)
        formData.append('head_village', chief)
        formData.append('region', region)
        formData.append('address', address)
        formData.append('_method', 'PATCH')

        await Api.post(`/api/villages/${id}`, formData)
            .then(() => {
                successNotification()
                navigate('/desa')
            })
            .catch(error => {
                setErrors(error.response.data)
            })
    }

    const parent = "desa"
    const child = "ubah"

    return (
        <>
            <div className="grid grid-cols-2">
                <span>
                    <Nav parent={parent} child={child} />
                </span>
                <div className="mb-4 place-self-end">
                    <Button color="yellow" onClick={updateData}>
                        <MdOutlineSaveAs className="mr-2 h-5 w-5" />
                        Simpan
                    </Button>
                </div>
            </div>
            <div className="w-full p-6 bg-white rounded-lg text-black border-t-4 border-yellow-300 shadow-lg overflow-y-hidden">
                <div className="text-md font-medium leading-3 text-gray-900 flex justify-between items-center">
                    <h1 className="font-bold uppercase">
                        Ubah Data Desa
                    </h1>
                </div>
                <form>
                    <div className="mt-6">
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="name" value={name} id="name" onChange={(e) => setName(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Desa</label>
                                {
                                    errors.name && (
                                        <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                            <span className="font-semibold">Perhatian!</span> {errors.name[0]}
                                        </div>
                                    )
                                }
                            </div>
                            <div className="mb-5">
                                <select name="head_village" defaultValue={chief} id="head_village" onChange={(e) => setChief(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value={null}>-- Pilih Kepala Desa --</option>
                                    {
                                        users &&
                                        users.map((user, index) => {
                                            return (
                                                <option key={index} value={user.profile.full_name}>{user.profile.full_name} - {user.role}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="region" value={region} id="region" onChange={(e) => setRegion(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="region" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Wilayah Desa</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="address" value={address} id="address" onChange={(e) => setAddress(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Alamat Kantor Desa</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default VillageEdit