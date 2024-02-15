import { Outlet } from "react-router-dom"
import Navbar from "../../components/partial/Navbar"
import Footer from "../../components/partial/Footer"

const Unauthenticated = () => {
    return (
        <>
            <Navbar />
            <div className="mt-20 pt-6 bg-slate-100">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Unauthenticated