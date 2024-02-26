import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Button } from "flowbite-react"
import { MdOutlineContentPasteSearch, MdOutlineEdit } from "react-icons/md"
import Api from "../../api"
import Nav from "../../components/partial/Nav"
import Loader from "../../components/Loader"

const MailDetail = () => {
    const [mail, setMail] = useState("")

    const { id } = useParams()

    const fetchDetailMail = async () => {
        await Api.get(`/api/mails/${id}`)
            .then(response => {
                setMail(response.data.data)
            })
    }

    useEffect(() => {
        fetchDetailMail()
        // eslint-disable-next-line
    }, [])

    if (!mail) {
        return <><Loader /></>
    }

    const parent = "surat"
    const child = "detail"

    return (
        <>
            <div className="grid grid-cols-2">
                <span>
                    <Nav parent={parent} child={child} />
                </span>
                <div className="mb-4 place-self-end">
                    <Link to={`/surat/${id}/ubah`}>
                        <Button color="gray">
                            <MdOutlineEdit className="mr-2 h-5 w-5" />
                            Ubah
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="w-full mt-auto rounded-lg bg-white border-t-4 border-blue-500 p-6 text-left align-middle shadow-lg">
                <div className="text-md font-medium md:leading-3 mb-4 text-gray-900 flex justify-between items-center">
                    <h1 className="font-bold uppercase">
                        Detail {mail.name}
                    </h1>
                </div>
                <div className="mt-2 px-2 flex flex-col">
                    <div className="mt-4">
                        <dl className="divide-y divide-gray-100">
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-semibold md:font-medium leading-6 text-gray-900">Surat</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <a href={mail.form} target="_blank" rel="noreferrer" className="inline-flex text-sm font-medium items-center text-blue-600 hover:underline">
                                        <MdOutlineContentPasteSearch className="w-4 h-4 me-2" />
                                        Form {mail.name}
                                    </a>
                                </dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-semibold md:font-medium leading-6 text-gray-900">Jenis Layanan</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">{mail.service.name}</dd>
                            </div>
                            <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-semibold md:font-medium leading-6 text-gray-900">Deskripsi</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize">
                                    Amet cillum cupidatat ea duis et commodo amet reprehenderit velit deserunt. Do amet sunt dolore adipisicing. Est ad adipisicing ea aute esse ullamco enim ex non.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MailDetail