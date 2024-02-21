import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "flowbite-react"
import { MdOutlineSaveAlt } from "react-icons/md"
import Swal from "sweetalert2"
import Api from "../../api"
import Loader from "../../components/Loader"
import Nav from "../../components/partial/Nav"

const ServiceTypeCreate = () => {
    const [name, setName] = useState("")
    const [icon, setIcon] = useState("")

    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const handleIcon = (e) => {
        setIcon(e.target.files[0])
    }

    const successNotification = () => {
        Swal.fire({
            icon: "success",
            title: "Jenis layanan berhasil ditambahkan.",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const storeData = async (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('type', name)
        formData.append('icon', icon)

        await Api.post('/api/service-types', formData)
            .then(() => {
                successNotification()
                navigate('/jenis-layanan')
            })
            .catch(error => {
                setErrors(error.response.data)
            })
    }

    if (!storeData) {
        <div><Loader /></div>
    }

    const parent = "janis layanan"
    const child = "tambah"

    return (
        <>
            <div className="grid grid-cols-2">
                <span>
                    <Nav parent={parent} child={child} />
                </span>
                <div className="mb-4 place-self-end">
                    <Button color="green" onClick={storeData}>
                        <MdOutlineSaveAlt className="mr-2 h-5 w-5" />
                        Simpan
                    </Button>
                </div>
            </div>
            <div className="w-full p-6 bg-white rounded-lg text-black border-t-4 border-green-500 shadow-lg overflow-y-hidden">
                <div className="text-md font-medium leading-3 text-gray-900 flex justify-between items-center">
                    <h1 className="font-bold uppercase">
                        Tambah Jenis Layanan Baru
                    </h1>
                </div>
                <form>
                    <div className="mt-6">
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="type" id="name" onChange={(e) => setName(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Jenis Layanan</label>
                                {
                                    errors.name && (
                                        <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                            <span className="font-semibold">Perhatian!</span> {errors.name[0]}
                                        </div>
                                    )
                                }
                            </div>
                            <div className="mb-5">
                                <input name="icon" id="icon" type="file" onChange={handleIcon} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="icon" />
                                {
                                    errors.icon && (
                                        <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                            <span className="font-semibold">Perhatian!</span> {errors.icon[0]}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <textarea type="text" name="description" id="description" rows="4" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" disabled></textarea>
                            <label htmlFor="description" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Deskripsi</label>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ServiceTypeCreate