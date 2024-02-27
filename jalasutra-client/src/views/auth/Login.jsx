import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Api from "../../api/index"
import LoginPic from "../../assets/login/login-1.png"
import Logo from "../../assets/logo/logo-black.png"
import Swal from "sweetalert2"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const successNotification = () => {
        Swal.fire({
            icon: "success",
            title: "Login Berhasil.",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const failedNotification = async () => {
        Swal.fire({
            icon: "error",
            title: "Login gagal!",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const loginHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('email', email);
        formData.append('password', password);

        await Api.post('/api/login', formData)
            .then((response) => {
                successNotification();
                localStorage.setItem('token', response.data.token);
                console.log(response.data.data.role);
                navigate('/');
            })
            .catch((error) => {
                failedNotification();
                setErrors(error.response.message);
            })
    }

    return (
        <>
            <div className="grid grid-rows-1 md:grid-cols-2 gap-4 h-screen bg-blue-700">
                <div className="w-full max-w-sm p-8 md:p-12 mx-auto mb-5 md:m-auto order-2 md:order-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" onSubmit={loginHandler}>
                        <header className="flex flex-col">
                            <img src={Logo} className="w-36 md:w-48 mx-auto" alt="" />
                        </header>
                        {
                            errors.message && (
                                <div className="p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                    <span className="font-semibold">Perhatian!</span> {errors.message}
                                </div>
                            )
                        }
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="username@gamail.com" required />

                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Masuk</button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Belum terdaftar? <a href="/login" className="text-blue-700 hover:underline dark:text-blue-500">Hubungi Petugas</a>
                        </div>
                    </form>
                </div>
                <div className="max-w-xl m-auto order-1 ">
                    <img src={LoginPic} alt="" />
                </div>
            </div>
        </>
    )
}

export default Login