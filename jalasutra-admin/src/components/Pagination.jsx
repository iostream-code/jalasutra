// import { Link } from "react-router-dom"

const Pagination = ({ links }) => {
    console.log(links)
    return (
        // links.length > 0 && (
        //     <div className="mb-3">
        //         <div>
        //             {
        //                 links.map((link, index) => {
        //                     link.url === null ?
        //                         (
        //                             <div
        //                                 key={index}
        //                                 className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded">
        //                                 {link.label}
        //                             </div>
        //                         )
        //                         :
        //                         (
        //                             <Link
        //                                 to={link.url}
        //                                 key={index}
        //                                 className="mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary" >
        //                                 {link.label}
        //                             </Link>
        //                         )
        //                 })
        //             }
        //         </div>
        //     </div>
        // )
        <>
            <div>
                Pagination
                {
                    links.map((link, index) => {
                        <div key={index}>
                            <div>
                                URL : {link.url}
                            </div>
                            <div>
                                Label : {link.label}
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Pagination