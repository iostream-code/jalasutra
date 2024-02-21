import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Api from "../../api"
import Swal from "sweetalert2"
import Loader from "../../components/Loader"
import Nav from "../../components/partial/Nav"
import { Button } from "flowbite-react"
import { MdOutlineSaveAlt } from "react-icons/md"

const UserCreate = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    const [identityId, setIdentityId] = useState("")
    const [fullName, setFullName] = useState("")
    const [birth, setBirth] = useState("")
    const [sex, setSex] = useState("")
    const [address, setAddress] = useState("")
    const [job, setJob] = useState("")
    const [maritalStatus, setMaritalStatus] = useState("")
    const [photo, setPhoto] = useState("")
    const [village, setVillage] = useState("")

    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const handlePhoto = (e) => {
        setPhoto(e.target.files[0])
    }

    const successNotification = () => {
        Swal.fire({
            icon: "success",
            title: "Perngguna baru berhasil ditambahkan.",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const storeData = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('role', role);
        formData.append('identity_id', identityId);
        formData.append('full_name', fullName);
        formData.append('birth', birth);
        formData.append('sex', sex);
        formData.append('address', address);
        formData.append('job', job);
        formData.append('marital_status', maritalStatus);
        formData.append('photo', photo);
        formData.append('fk_village_id', village);

        await Api.post('/api/users', formData)
            .then(() => {
                successNotification();
                navigate('/pengguna');
            })
            .catch(error => {
                setErrors(error.response.data);
            })
    }

    if (!storeData) {
        <div><Loader /></div>
    }

    const parent = "pengguna"
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
                        Tambah Pengguna Baru
                    </h1>
                </div>
                <form>
                    <div className="inline-flex items-center my-2 border-b border-gray-200 dark:border-gray-700">
                        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#tab-content" role="tablist">
                            <li className="me-2" role="presentation">
                                <button className="inline-block p-4 border-b-2 rounded-t-lg" id="main-tab" data-tabs-target="#main" type="button" role="tab" aria-controls="main" aria-selected="false">Main</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="detail-tab" data-tabs-target="#detail" type="button" role="tab" aria-controls="detail" aria-selected="false">Detail</button>
                            </li>
                        </ul>
                    </div>
                    <div id="tab-content">
                        <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="main" role="tabpanel" aria-labelledby="main-tab">
                            <div className="px-4 text-sm text-gray-500 dark:text-gray-400">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
                                    {
                                        errors.username && (
                                            <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                <span className="font-semibold">Perhatian!</span> {errors.username[0]}
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                                        {
                                            errors.email && (
                                                <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                    <span className="font-semibold">Perhatian!</span> {errors.email[0]}
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                        {
                                            errors.password && (
                                                <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                    <span className="font-semibold">Perhatian!</span> {errors.password[0]}
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <select id="role" name="role" onChange={(e) => setRole(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option>--- Pilih Status ---</option>
                                        <option value="KECAMATAN">Admin Kecamatan</option>
                                        <option value="DESA">Operator Desa</option>
                                        <option value="WARGA">Warga</option>
                                    </select>
                                    {
                                        errors.role && (
                                            <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                <span className="font-semibold">Perhatian!</span> {errors.role[0]}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="detail" role="tabpanel" aria-labelledby="detail-tab">
                            <div className="px-4 text-sm text-gray-500 dark:text-gray-400">
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="identity_id" id="identityId" onChange={(e) => setIdentityId(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="identityId" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nomor Induk Kependudukan</label>
                                        {
                                            errors.identityId && (
                                                <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                    <span className="font-semibold">Perhatian!</span> {errors.identityId[0]}
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="full_name" id="fullName" onChange={(e) => setFullName(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="fullName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nama Lengkap</label>
                                        {
                                            errors.fullName && (
                                                <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                    <span className="font-semibold">Perhatian!</span> {errors.fullName[0]}
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="job" id="job" onChange={(e) => setJob(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="job" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pekerjaan</label>
                                        {
                                            errors.job && (
                                                <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                    <span className="font-semibold">Perhatian!</span> {errors.job[0]}
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="mb-5">
                                        <select id="village" name="fk_village_id" onChange={(e) => setVillage(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>--- Pilih Desa Asal ---</option>
                                            <option value="1">Mojorejo</option>
                                            <option value="2">Purworejo</option>
                                            <option value="3">Ringin Rejo</option>
                                            <option value="4">Sukorejo</option>
                                            <option value="5">Suberarum</option>
                                            <option value="6">Tugu Rejo</option>
                                            <option value="7">Tulungrejo</option>
                                            <option value="8">Wates</option>
                                        </select>
                                        {
                                            errors.village && (
                                                <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                    <span className="font-semibold">Perhatian!</span> {errors.village[0]}
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <textarea type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)} rows="4" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=""></textarea>
                                    <label htmlFor="address" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Alamat</label>
                                    {
                                        errors.address && (
                                            <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                <span className="font-semibold">Perhatian!</span> {errors.address[0]}
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="mb-5">
                                        <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Masukan Tanggal Lahir</label>
                                        <input type="date" name="birth" onChange={(e) => setBirth(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        {
                                            errors.birth && (
                                                <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                    <span className="font-semibold">Perhatian!</span> {errors.birth[0]}
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="mb-5">
                                        <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white" htmlFor="gender">Jenis Kelamin</label>
                                        <div className="grid md:grid-cols-2 md:gap-6">
                                            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                                <input id="bordered-radio-1" type="radio" value="mlae" name="sex" onChange={(e) => setSex(e.target.value)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pria</label>
                                            </div>
                                            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                                <input id="bordered-radio-2" type="radio" value="female" name="sex" onChange={(e) => setSex(e.target.value)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label htmlFor="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Wanita</label>
                                            </div>
                                            {
                                                errors.sex && (
                                                    <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                        <span className="font-semibold">Perhatian!</span> {errors.sex[0]}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="mb-5">
                                        <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white" htmlFor="photo">Unggah Photo</label>
                                        <input name="photo" id="photo" type="file" onChange={handlePhoto} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="photo" placeholder="Unggah Foto" />
                                        {
                                            errors.photo && (
                                                <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                    <span className="font-semibold">Perhatian!</span> {errors.photo[0]}
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div>
                                        <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-white" htmlFor="maritalStatus">Status Perkawinan</label>
                                        <select id="maritalStatuts" name="marital_status" onChange={(e) => setMaritalStatus(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>--- Pilih Salah Satu ---</option>
                                            <option value="married">Sudah Menikah</option>
                                            <option value="single">Belum Menikah</option>
                                            <option value="divorced">Cerai Hidup</option>
                                        </select>
                                        {
                                            errors.maritalStatus && (
                                                <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                    <span className="font-semibold">Perhatian!</span> {errors.maritalStatus[0]}
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UserCreate