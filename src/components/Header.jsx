import { FaBars, FaRegBell, FaSearch } from "react-icons/fa"

const Header = ({ nav, navFunc }) => {

    return (
        <section className='pt-8'>
            <article className="flex justify-evenly mx-5 md:mx-0">

                <div className="space-y-2">
                    <h1 className=" capitalize font-bold text-lg md:text-xl">hello, sean</h1>
                    <h2 className=" text-orange font-bold text-lg">Welcome back and explore the world.</h2>
                </div>

                <button type="button" aria-label="bars" className="text-lg bg-orange py-0.5 px-1.5 h-fit text-white lg:hidden" onClick={navFunc}> <FaBars /> </button>

                <div className="flex h-fit">
                    <button type="button" aria-label="notificationbtn" className="h-fit text-xl md:text-2xl ml-2"><FaRegBell /></button>
                    <button className="bg-orange rounded-full h-fit relative right-3 bottom-2 px-1.5 text-sm">1</button>
                </div>

            </article>

            <article className="flex justify-evenly py-5">
                <input type="search" name="" id="" placeholder="Search destinations" className="outline-none py-2 rounded-lg text-center w-1/2 border-2" />
                <button type="button" aria-label="search" className=" capitalize bg-orange text-white font-bold text-center px-6 rounded-lg">search</button>
            </article>
        </section >
    )
}

export default Header
