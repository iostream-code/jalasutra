import Pic1 from "../assets/dashboard/information.png"
import Pic2 from "../assets/dashboard/letter.png"
import Pic3 from "../assets/dashboard/person.png"
import Pic4 from "../assets/dashboard/office.png"
import Pic5 from "../assets/dashboard/news.png"

const Dashboard = () => {
    return (
        <>
            <div className="p-2">
                <div className="flex flex-col">
                    <h3 className="mb-4 text-lg font-medium leading-none tracking-tight text-gray-700 dark:text-white">Selamat Datang !</h3>
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Jalasutra</h1>
                    <p className="mb-6 text-md font-normal text-gray-500 dark:text-gray-400">Jenis Apapun Layanan Cukup di Kantor Kecamatan atau Desa</p>
                    <div className="grid gap-2 text-gray-700 hover:text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3">
                        <a href="/layanan" className="block p-3 rounded-lg border border-collapse border-blue-200 transition-colors ease-in-out delay-75 duration-300 hover:bg-blue-200 hover:border-blue-400">
                            <img src={Pic1} className="w-1/6 mb-2" alt="" />
                            <div className="font-semibold">Layanan</div>
                            <span className="text-sm text-gray-500">Lihat layanan yang Anda butuhkan.</span>
                        </a>
                        <a href="/surat" className="block p-3 rounded-lg border border-collapse border-blue-200 transition-colors ease-in-out delay-75 duration-300 hover:bg-blue-200 hover:border-blue-400">
                            <img src={Pic2} className="w-1/6 mb-2" alt="" />
                            <div className="font-semibold">Surat</div>
                            <span className="text-sm text-gray-500">Lihat daftar surat yang tersedia.</span>
                        </a>
                        <a href="/pengguna" className="block p-3 rounded-lg border border-collapse border-blue-200 transition-colors ease-in-out delay-75 duration-300 hover:bg-blue-200 hover:border-blue-400">
                            <img src={Pic3} className="w-1/6 mb-2" alt="" />
                            <div className="font-semibold">Pengguna</div>
                            <span className="text-sm text-gray-500">Lihat pengguna yang terdaftar.</span>
                        </a>
                        <a href="/desa" className="block p-3 rounded-lg border border-collapse border-blue-200 transition-colors ease-in-out delay-75 duration-300 hover:bg-blue-200 hover:border-blue-400">
                            <img src={Pic4} className="w-1/6 mb-2" alt="" />
                            <div className="font-semibold">Desa</div>
                            <span className="text-sm text-gray-500">Lihat desa yang terdaftar.</span>
                        </a>
                        <a href="/berita" className="block p-3 rounded-lg border border-collapse border-blue-200 transition-colors ease-in-out delay-75 duration-300 hover:bg-blue-200 hover:border-blue-400">
                            <img src={Pic5} className="w-1/6 mb-2" alt="" />
                            <div className="font-semibold">Berita</div>
                            <span className="text-sm text-gray-500">Lihat berita yang tersedia.</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard