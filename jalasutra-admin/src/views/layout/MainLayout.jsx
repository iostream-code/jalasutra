import { Outlet } from "react-router-dom"
import Sidebar from "../../components/partial/Sidebar"

const MainLayout = () => {
    return (
        <>
            <Sidebar />
            <div className="h-screen bg-slate-100/50">
                <div className="p-4 sm:ml-64">
                    <div className="p-4 rounded-lg mt-14 ">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainLayout