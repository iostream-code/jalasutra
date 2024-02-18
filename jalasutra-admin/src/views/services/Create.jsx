import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "flowbite-react"
import { MdOutlineSaveAlt } from "react-icons/md"
import Swal from "sweetalert2"
import Api from "../../api"
import Nav from "../../components/partial/Nav"
import Loader from "../../components/Loader"

const ServiceCreate = () => {
    const [name, setName] = useState("")
    const [icon, setIcon] = useState("")
    const [description, setDescription] = useState("")
    const [information, setInformation] = useState("")
    const [contact, setContact] = useState("")
    const [type, setType] = useState("")

    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const handlerIcon = (e) => {
        setIcon(e.target.files[0])
    }

    const successNotification = () => {
        Swal.fire({
            icon: "success",
            title: "Layanan berhasil ditambahkan.",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const storeData = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('name', name);
        formData.append('icon', icon);
        formData.append('description', description);
        formData.append('information', information);
        formData.append('contact', contact);
        formData.append('fk_type_id', type);

        await Api.post('/api/services', formData)
            .then(() => {
                successNotification();
                navigate('/layanan');
            })
            .catch(error => {
                setErrors(error.response.data);
                // console.log(error.response.data);
            })
    }

    if (!storeData) {
        <div><Loader /></div>
    }

    const parent = "layanan"
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
                        Tambah Layanan Baru
                    </h1>
                </div>
                <form>
                    <div className="mt-6">
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Layanan</label>
                                {
                                    errors.name && (
                                        <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                            <span className="font-semibold">Perhatian!</span> {errors.name[0]}
                                        </div>
                                    )
                                }
                            </div>
                            <div className="mb-5">
                                <select name="type" id="type" onChange={(e) => setType(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option defaultValue={true}>-- Pilih Jenis Layanan --</option>
                                    <option value="3">Internal Desa</option>
                                    <option value="2">Kecamatan Wates</option>
                                    <option value="1">Pemkab Blitar</option>
                                    <option value="4">Umum</option>
                                    <option value="5">Email</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <textarea type="text" name="description" id="description" onChange={(e) => setDescription(e.target.value)} rows="4" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=""></textarea>
                                <label htmlFor="description" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Deskripsi</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <textarea type="text" name="information" id="information" onChange={(e) => setInformation(e.target.value)} rows="4" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=""></textarea>
                                <label htmlFor="information" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Informasi</label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="contact" id="contact" onChange={(e) => setContact(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="contact" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Kontak</label>
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="icon">Unggah Gambar</label>
                                <input name="icon" id="icon" type="file" onChange={handlerIcon} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="icon" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ServiceCreate