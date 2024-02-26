import Icon from "../../assets/dashboard/service-icon-1.png"

const MailCard = ({ mail }) => {
    return (
        <>
            <div className="flex flex-col gap-2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img src={Icon} className="w-8 md:w-12 md:h-12" alt="" />
                <p className="text-md md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {mail.name}
                </p>
                <p className="mb-4 text-xs font-normal text-gray-500 dark:text-gray-400">
                    Surat yang dibuat untuk keperluan mengajukan izin ke kantor Kecamatan atau Desa
                </p>
                <a href={mail.form} target="_blank" rel="noreferrer" className="inline-flex items-center text-blue-600 text-sm md:text-md hover:underline">
                    Buat {mail.name}
                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                    </svg>
                </a>
            </div>
        </>
    )
}

export default MailCard