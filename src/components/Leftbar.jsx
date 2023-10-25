import { Link, NavLink } from "react-router-dom"

const Leftbar = () => {
    return (
        <nav className=" px-10 capitalize font-bold h-screen pt-8  md:block md:w-fit">
            <h1 className="pb-8 text-lg md:text-xl ">Easytravel</h1>
            <ul className="grid gap-y-4 ul font-bold text-lightgray">
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

            <button type="button" className=" bg-orange px-6 relative top-1/3 py-2 rounded-lg capitalize text-lg"><Link to='/' replace>logout</Link></button>
        </nav>
    )
}

export default Leftbar
