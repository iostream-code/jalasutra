import { Link, NavLink, useNavigate } from "react-router-dom";
import LogoBlack from "../../assets/logo/logo-black.png";
import Api from "../../api";
import Swal from "sweetalert2";

const Navbar = () => {
    const token = localStorage.getItem('token')

    const navigate = useNavigate()

    const successNotification = () => {
        Swal.fire({
            icon: "success",
            title: "Berhasil Keluar.",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const failedNotification = async () => {
        Swal.fire({
            icon: "error",
            title: "Logout gagal!",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const logoutHandler = async () => {
        Api.defaults.headers.common.Authorization = `Bearer ${token}`
        await Api.post('/api/logout')
            .then(() => {
                localStorage.removeItem("token")
                successNotification()
                // window.location.reload()
                navigate('/welcome')
            })
            .catch(error => {
                failedNotification()
                console.log(error.response.data)
            })
    }

    return (
        <>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/welcome" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={LogoBlack} className="h-12" alt="Flowbite Logo" />
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        {
                            token == null ?
                                <NavLink to="/login" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</NavLink>
                                :
                                <div className="flex items-center">
                                    <div className="flex items-center ms-3">
                                        <div>
                                            <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                                <span className="sr-only">Open user menu</span>
                                                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user" />
                                            </button>
                                        </div>
                                        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                                            <div className="px-4 py-3" role="none">
                                                <p className="text-sm text-gray-900 dark:text-white" role="none">
                                                    Username
                                                </p>
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                                    Email
                                                </p>
                                            </div>
                                            <ul className="py-1" role="none">
                                                <li>
                                                    <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</Link>
                                                </li>
                                                <li>
                                                    <Link to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Profile</Link>
                                                </li>
                                                <li>
                                                    <button type="button" onClick={logoutHandler} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>}
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li className="font-semibold">
                                <Link to="/" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300">
                                    Home
                                </Link>
                            </li>
                            <li className="font-semibold">
                                <Link to="/layanan" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300">
                                    Layanan
                                </Link>
                            </li>
                            <li className="font-semibold">
                                <Link to="/surat" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300">
                                    Surat
                                </Link>
                            </li>
                            <li className="font-semibold">
                                <Link to="/galeri" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300">
                                    Galeri
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar