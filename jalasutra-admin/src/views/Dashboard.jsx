const Dashboard = () => {
    return (
        <>
            <div className="p-6">
                <div className="flex flex-col">
                    <h3 className="mb-4 text-lg font-medium leading-none tracking-tight text-gray-700 dark:text-white">Selamat Datang !</h3>
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Jalasutra</h1>
                    <p className="mb-6 text-md font-normal text-gray-500 dark:text-gray-400">Jenis Apapun Layanan Cukup di Kantor Kecamatan atau Desa</p>
                    <div className="grid gap-2 text-gray-700 hover:text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3">
                        <a href="/" className="block p-3 rounded-lg border border-collapse border-blue-200 transition-colors ease-in-out delay-75 duration-300 hover:bg-blue-200 hover:border-blue-400">
                            <div className="font-semibold mb-1">Layanan</div>
                            <span className="text-sm text-gray-500">Cari layanan yang Anda butuhkan.</span>
                        </a>
                        <a href="/" className="block p-3 rounded-lg border border-collapse border-blue-200 transition-colors ease-in-out delay-75 duration-300 hover:bg-blue-200 hover:border-blue-400">
                            <div className="font-semibold mb-1">Surat</div>
                            <span className="text-sm text-gray-500">Lihat daftar surat yang Anda ajukan.</span>
                        </a>
                        <a href="/" className="block p-3 rounded-lg border border-collapse border-blue-200 transition-colors ease-in-out delay-75 duration-300 hover:bg-blue-200 hover:border-blue-400">
                            <div className="font-semibold mb-1">Profile</div>
                            <span className="text-sm text-gray-500">Atur data profile Anda.</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard