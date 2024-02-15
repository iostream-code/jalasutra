import { Outlet } from "react-router-dom"
import Sidebar from "../../components/partial/Sidebar"

const MainLayout = () => {
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default MainLayout