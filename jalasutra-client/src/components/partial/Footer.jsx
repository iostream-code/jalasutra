import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const Footer = () => {
    const [key, setKey] = useState(1);

    const scrolling = useSpring({
        from: { transform: "translate(100%,0)" },
        to: { transform: "translate(-100%,0)" },
        config: { duration: 20000, overflow: 'hidden', },
        reset: true,
        onRest: () => {
            setKey(key + 1);
        }
    });

    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full bg-blue-700 text-white">
            <div className="container mx-auto py-2.5">
                <div key={key}>
                    <animated.div style={scrolling}>Selamat Datang di Jalasutra, Jenis Layanan Apapun Cukup di Kantor Kecamatan atau Desa.</animated.div>
                </div>
            </div>
        </footer>
    )
}

export default Footer