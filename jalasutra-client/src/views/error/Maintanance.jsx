import Pic from "../../assets/error/coming-soon-1.svg"

export default function Maintanance() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-6 py-5">
                <h1 className="font-medium text-lg text-gray-500">Halaman yang Anda cari sedang dalam pengembangan, mohon kembali lain waktu!</h1>
                <img src={Pic} className="h-auto md:h-[300px]" alt="Coming Soon" />
                <p className="font-light text-gray-500">Coming Soon ...</p>
            </div>
        </div>
    )
}