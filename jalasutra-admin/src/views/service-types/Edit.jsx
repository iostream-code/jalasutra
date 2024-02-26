import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "flowbite-react"
import { MdOutlineSaveAs } from "react-icons/md"
import Api from "../../api"
import Swal from "sweetalert2"
import Nav from "../../components/partial/Nav"

const ServiceTypeEdit = () => {
    const [name, setName] = useState("")
    const [icon, setIcon] = useState("")

    const [errors, setErrors] = useState([])

    const fileInput = useRef(null)

    const handleFileInput = () => {
        fileInput.current.click()
    }

    const { id } = useParams()

    const navigate = useNavigate()

    const fetchDetailServiceType = async () => {
        await Api.get(`/api/service-types/${id}`)
            .then(response => {
                setName(response.data.data.type)
                setIcon(response.data.data.icon)
            })
    }

    const handleIcon = (e) => {
        setIcon(e.target.files[0])
    }

    useEffect(() => {
        fetchDetailServiceType()
        // eslint-disable-next-line
    }, [])

    const successNotification = () => {
        Swal.fire({
            icon: "success",
            title: "Jenis layanan berhasil diubah.",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const updateData = async (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('type', name)
        formData.append('icon', icon)
        formData.append('_method', 'PATCH')

        await Api.post('/api/service-types', formData)
            .then(() => {
                successNotification()
                navigate('/jenis-layanan')
            })
            .catch(error => {
                setErrors(error.response.data)
            })
    }

    const parent = "jenis layanan"
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
                        Ubah Jenis Layanan
                    </h1>
                </div>
                <form>
                    <div className="mt-6">
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="type" value={name} id="name" onChange={(e) => setName(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Jenis Layanan</label>
                                {
                                    errors.name && (
                                        <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                            <span className="font-semibold">Perhatian!</span> {errors.name[0]}
                                        </div>
                                    )
                                }
                            </div>
                            <div className="flex flex-row gap-4 mb-5">
                                <img src={icon} className="max-h-10" alt="" />
                                <button type="button" onClick={handleFileInput} className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100">Change</button>
                                <input type="file" name="icon" id="icon" className="hidden" onChange={handleIcon} ref={fileInput} />
                                {
                                    errors.icon && (
                                        <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                            <span className="font-semibold">Perhatian!</span> {errors.icon[0]}
                                        </div>
                                    )
                                }
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
                            <label htmlFor="description" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                Consequat consectetur consectetur pariatur dolor cillum incididunt magna pariatur commodo excepteur esse non Lorem. Elit aliqua incididunt dolore sint consectetur eiusmod irure non Lorem cillum. Laborum cupidatat do consectetur ad proident sunt consequat.
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ServiceTypeEdit