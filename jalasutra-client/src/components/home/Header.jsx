/* eslint-disable react/prop-types */
const Header = (props) => {
    return (
        <>
            <div className="flex flex-row items-center justify-between gap-5 px-6 lg:px-0 ">
                <p className="flex-none text-2xl md:text-4xl md:font-bold font-semibold">
                    {props.title}
                </p>
                <hr className="flex-auto md:w-screen h-0.5 mx-auto my-4 bg-black md:border-0 border-1 rounded md:my-10 dark:bg-gray-600" />
            </div>
        </>
    )
}

export default Header