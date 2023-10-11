import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="flex justify-around py-6 font-bold">
            <h1 className="uppercase text-lg">travel</h1>
            <nav className="hidden md:flex gap-x-8 capitalize text-lightgray">
                <ul className="flex gap-x-8">
                    <NavLink to='/'>home</NavLink>
                    <NavLink to='destination'>destination</NavLink>
                    <NavLink to='flight'>flight</NavLink>
                    <NavLink to='bookings'>bookings</NavLink>
                    <NavLink to='weather'>weather</NavLink>
                    <NavLink to='login'>login</NavLink>
                </ul>
                <NavLink to='signup' className='border-2 border-solid border-black px-4 rounded-lg py-0.5'>signup</NavLink>
            </nav>
        </header>
    )
}

export default Header
