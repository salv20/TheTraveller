import { FaTimes } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom"
import { navlist } from "../../utilities/accesory"

const Leftbar = ({ nav, navFunc }) => {
    return (
        <nav className={` ${!nav ? '-left-eighty' : 'left-0'} fixed w-full  h-full bg-dawhite px-10 space-y-5 capitalize font-bold py-5  lg:sticky overflow-y-scroll lg:h-screen transition-all duration-700`}>
            <button type="button" className="relative left-ninty text-2xl rounded-full p-1.5 lg:hidden bg-orange" onClick={navFunc}><FaTimes /></button>
            <h1 className=" text-lg md:text-xl ">Easy<span className="text-orange">travel</span></h1>
            <ul className="grid gap-y-2 font-bold text-lightgray w-fit ">
                {navlist.list.map((list, index) => (
                    <li key={index} >
                        <NavLink to={(navlist.path)[index]} onClick={navFunc}
                            className="px-5 py-2  hover:bg-orange hover:text-white hover:rounded-lg transition-all duration-1000 block"
                        >{list}</NavLink>
                    </li>
                ))}
            </ul>

            <button type="button"
                className=" bg-orange px-6 py-2 rounded-lg capitalize text-lg "
                onClick={() => {
                    localStorage.setItem('userActiveState', JSON.stringify(false))
                }}

            ><Link to='/' replace >logout</Link></button>
        </nav>
    )
}

export default Leftbar
