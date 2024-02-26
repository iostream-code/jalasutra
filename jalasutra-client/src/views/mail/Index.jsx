import { useEffect, useState } from "react"
import Api from "../../../../jalasutra-admin/src/api"
import Carousel from "better-react-carousel"
import MailCard from "../../components/mail/MailCard"
import Picture from "../../assets/error/empty.svg";

const MailIndex = () => {
    const [mails, setMails] = useState([])

    const url = "/api/mails"

    const fetchMails = async (url) => {
        await Api.get(url)
            .then(response => {
                setMails(response.data.data)
            })
    }

    useEffect(() => {
        fetchMails(url)
    }, [])

    return (
        <>
            <div className="w-4/5 pb-12 mx-auto">
                {
                    mails.length > 0 ?
                        <Carousel cols={3} rows={2} gap={10} loop>
                            {
                                mails &&
                                mails.map((mail, index) => {
                                    return (
                                        <Carousel.Item key={index}>
                                            <MailCard mail={mail} />
                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                        :
                        <div className="h-[400px] flex flex-col justify-center items-center gap-4">
                            <img src={Picture} className="h-auto md:h-[260px] mx-auto" />
                            <p className="font-light text-gray-500">Data belum tersedia!</p>
                        </div>
                }
            </div>
        </>
    )
}

export default MailIndex