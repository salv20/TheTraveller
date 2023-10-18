import { useState } from "react"
import { FaTimes, FaStream } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Header = () => {
    const [open, setOpen] = useState(true)
    return (
        <header className="flex justify-around py-6 font-bold bg-heading">
            <h1 className="uppercase text-lg">travel</h1>
            <nav className={` ${open ? '-left-eighty' : 'left-0'} transition-all duration-500 bg-dawhite top-0 w-3/5 h-full md:px-0 md:w-auto md:bg-transparent  fixed md:static md:flex gap-x-8 capitalize text-lightgray`}>
                <button type="button" className="md:hidden text-3xl  relative left-3/4 py-5" onClick={() => setOpen(!open)}> <FaTimes /></button>
                <ul className="grid gap-y-1 md:flex gap-x-8">
                    <NavLink to='/' className='bg-light p-4 md:bg-transparent md:p-0'>home</NavLink>
                    <NavLink to='destination' className='bg-light p-4 md:bg-transparent md:p-0'>destination</NavLink>
                    <NavLink to='flight' className='bg-light p-4 md:bg-transparent md:p-0'>flight</NavLink>
                    <NavLink to='bookings' className='bg-light p-4 md:bg-transparent md:p-0'>bookings</NavLink>
                    <NavLink to='weather' className='bg-light p-4 md:bg-transparent md:p-0'>weather</NavLink>
                    <NavLink to='login' className='bg-light p-4 md:bg-transparent md:p-0'>login</NavLink>
                </ul>
                <NavLink to='signup' className=' bg-darkpink border-lightgray absolute mt-8 md:mt-0 px-10 py-3 ml-8 md:ml-0 md:bg-transparent md:static border-2 border-solid  md:px-4 rounded-lg md:py-0.5'>signup</NavLink>
            </nav>
            <button type="button" className="text-xl text-lightgray md:hidden transition-all duration-500" onClick={() => setOpen(!open)}>
                {open ? <FaStream /> : 'close'}
            </button>
        </header>
    )
}

export default Header
