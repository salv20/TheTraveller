import { useState } from "react"
import { FaTimes, FaStream } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Landingheader = () => {
    const [open, setOpen] = useState(true)
    return (

        <header className="flex justify-around py-6 font-bold bg-heading">
            <h1 className="uppercase text-lg">Easytravel</h1>
            <nav className={` ${open ? '-left-eighty' : 'left-0'} transition-all duration-500 bg-dawhite top-0 w-3/5 h-full ml:px-0 ml:w-auto ml:bg-transparent  fixed ml:static ml:flex gap-x-8 capitalize text-lightgray`}>
                <button type="button" className="ml:hidden text-3xl  relative left-nineper py-5" onClick={() => setOpen(!open)}> <FaTimes /></button>
                <ul className="grid gap-y-1 ml:flex gap-x-8">
                    <NavLink to='/' className='bg-light p-4 ml:bg-transparent ml:p-0'>home</NavLink>
                    <NavLink to='destination' className='bg-light p-4 ml:bg-transparent ml:p-0'>destination</NavLink>
                    <NavLink to='flight' className='bg-light p-4 ml:bg-transparent ml:p-0'>flight</NavLink>
                    <NavLink to='bookings' className='bg-light p-4 ml:bg-transparent ml:p-0'>bookings</NavLink>
                    <NavLink to='contact' className='bg-light p-4 ml:bg-transparent ml:p-0'>contact us</NavLink>
                    <NavLink to='login' className='bg-light p-4 ml:bg-transparent ml:p-0'>login</NavLink>
                </ul>
                <NavLink to='signup' className=' bg-darkpink border-lightgray absolute mt-8 ml:mt-0 px-10 py-3 ml-8 ml:ml-0 ml:bg-transparent ml:static border-2 border-solid  ml:px-4 rounded-lg ml:py-0.5'>signup</NavLink>
            </nav>
            <button type="button" className="text-xl text-lightgray ml:hidden transition-all duration-500" onClick={() => setOpen(!open)}>
                {open ? <FaStream /> : 'close'}
            </button>

        </header>

    )
}

export default Landingheader
