import MailCard from "../../components/mail/MailCard"
import Carousel from "better-react-carousel"

const MailIndex = () => {
    return (
        <>
            <div className="w-4/5 pb-14 mx-auto">
                <Carousel cols={3} rows={2} gap={10} loop>
                    <Carousel.Item>
                        <MailCard />
                    </Carousel.Item>
                    <Carousel.Item>
                        <MailCard />
                    </Carousel.Item>
                    <Carousel.Item>
                        <MailCard />
                    </Carousel.Item>
                    <Carousel.Item>
                        <MailCard />
                    </Carousel.Item>
                    <Carousel.Item>
                        <MailCard />
                    </Carousel.Item>
                    <Carousel.Item>
                        <MailCard />
                    </Carousel.Item>
                    <Carousel.Item>
                        <MailCard />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default MailIndex