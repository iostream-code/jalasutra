import { useState } from "react";
import { Modal, Footer } from "flowbite-react";

const ServiceCard = ({ service }) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className="flex flex-col gap-2 md:gap-4 h-[250px] md:h-[275px] w-auto md:w-56 p-4 border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-start gap-2">
                    <img src={service.icon} className="h-10" alt="" />
                    <span>
                        <h2 className="text-md md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">{service.name}</h2>
                    </span>
                </div>
                <div className="h-full flex flex-col justify-between">
                    <p className="text-xs text-justify font-normal text-gray-700 dark:text-gray-400">{service.description}</p>
                    <div className="flex justify-end">
                        <button onClick={() => setOpenModal(true)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Selengkapnya
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Info</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            (Informasi Lyananan)
                            Exercitation culpa esse mollit dolore fugiat quis nulla id consequat aliqua sunt fugiat. Ut sint irure excepteur proident in proident labore nisi fugiat exercitation consequat magna. Eiusmod nulla nostrud tempor magna aliquip. Exercitation duis nostrud dolore anim laboris et magna sit ullamco reprehenderit. In aliqua exercitation tempor ullamco aute laborum proident reprehenderit enim ut magna irure.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Footer.Copyright href="/" by="Jalasutra" year={2023} />
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ServiceCard