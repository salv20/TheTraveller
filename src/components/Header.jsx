import { FaBars, FaRegBell } from "react-icons/fa"

const Header = ({ navFunc }) => {

    return (
        <section className='pt-8 flex justify-between md:mx-0 space-x-3'>

            <div className="space-y-0.5">
                <h1 className=" capitalize font-bold text-lg md:text-xl">hello, sean</h1>
                <h2 className=" text-orange font-bold sm:text-lg w-4/5 md:w-full ">Welcome back and explore the world.</h2>
            </div>

            <button type="button" aria-label="bars" className="text-xl h-fit lg:hidden" onClick={navFunc}> <FaBars /> </button>

            <div className="flex h-fit">
                <button type="button" aria-label="notificationbtn" className="h-fit text-xl md:text-2xl ml-2"><FaRegBell /></button>
                <button className="bg-orange rounded-full h-fit relative right-3 bottom-2 px-1.5 text-sm">1</button>
            </div>

        </section >
    )
}

export default Header
