import { Link } from "react-router-dom"
import Picture from "../../assets/error/not-found.svg"

const NotFound = () => {
    return (
        <>
            <div className="flex flex-col justify-between items-center gap-6 p-10">
                <img src={Picture} className="h-auto w-1/3" alt="Page Not Found" />
                <p className="font-light text-lg">The page You are looking for is not available at this time!</p>
                <Link to="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Back to Home!
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </>
    )
}

export default NotFound