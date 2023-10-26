import { FaTimes } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom"

const Leftbar = ({ nav, navFunc }) => {
    return (
        <nav className={` ${!nav ? '-left-eighty' : 'left-0'} fixed w-full h-full bg-dawhite px-16 capitalize font-bold pt-8 md:w-3/4 lg:static lg:w-fit lg:h-screen transition-all duration-700`}>
            <button type="button" className="relative left-ninty text-2xl rounded-full p-1.5 lg:hidden bg-orange" onClick={navFunc}><FaTimes /></button>
            <h1 className="pb-8 text-lg md:text-xl ">Easytravel</h1>
            <ul className="ul grid gap-y-4 font-bold text-lightgray" onClick={navFunc}>
                <li>
                    <NavLink to='/' className='text-black'>home</NavLink>
                </li>
                <li>
                    <NavLink to='discover'>discover</NavLink>
                </li>
                <li>
                    <NavLink to='bookings' >bookings</NavLink>
                </li>
                <li>
                    <NavLink to='weather' >weather</NavLink>
                </li>
                <li>
                    <NavLink to='favorite'>favorite</NavLink>
                </li>
                <li>
                    <NavLink to='notification'>notification</NavLink>
                </li>
                <li>
                    <NavLink to='trash'>trash</NavLink>
                </li>
                <li>
                    <NavLink to='contact'>contact us</NavLink>
                </li>
            </ul>

            <button type="button" className=" bg-orange px-6 py-2 my-12 rounded-lg capitalize text-lg"><Link to='/' replace>logout</Link></button>
        </nav>
    )
}

export default Leftbar
