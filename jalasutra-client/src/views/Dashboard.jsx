import GallerySection from "../components/home/GallerySection"
import HeroSection from "../components/home/HeroSection"
import InformationSection from "../components/home/InformationSection"
import ServiceSection from "../components/home/ServiceSection"

const Dashboard = () => {
    return (
        <>
            <HeroSection />
            <ServiceSection />
            <GallerySection />
            <InformationSection />
        </>
    )
}

export default Dashboard