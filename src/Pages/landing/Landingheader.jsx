import { FaTimes, FaStream } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { appcontext } from "../../routes/landing.route"
import { useContext } from "react"
import { landingNav } from "../../../utilities/accesory"
import { motion } from "framer-motion"

const Landingheader = () => {
    const container = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                duration: 1.5,
                type: 'Tween'
            }
        }
    }

    const item = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
        }
    }
    const { open } = useContext(appcontext)
    const { setOpen } = useContext(appcontext)

    return (
        <header className="flex justify-around py-6 font-bold bg-heading">
            <h1 className="uppercase text-lg">Easytravel</h1>
            <nav className={` ${!open ? '-left-eighty' : 'left-0'} transition-all duration-500 bg-dawhite top-0 w-3/4 h-full ml:px-0 ml:w-auto ml:bg-transparent  fixed ml:static ml:flex gap-x-8 capitalize text-lightgray`}>
                <button type="button" className="ml:hidden text-3xl  relative left-nineper py-5" onClick={() => setOpen(!open)}> <FaTimes /></button>
                <motion.ul
                    className="grid gap-y-1 ml:flex gap-x-8"
                    onClick={() => setOpen(false)}
                    variants={container}
                    viewport={{ once: true, amount: 0.3 }}
                    initial="initial"
                    whileInView="animate"
                >
                    {landingNav.list.map((list, index) => (
                        <motion.li key={index}
                            variants={item}
                        >
                            <NavLink
                                to={(landingNav.path)[index]}
                                className='bg-light p-4 ml:bg-transparent ml:p-0 block'

                            >{list}
                            </NavLink>
                        </motion.li>
                    ))}

                </motion.ul>
                <NavLink to='signup' className=' bg-darkpink border-lightgray absolute mt-8 ml:mt-0 px-10 py-3 ml-8 ml:ml-0 ml:bg-transparent ml:static border-2 border-solid  ml:px-4 rounded-lg ml:py-0.5'>signup</NavLink>
            </nav>
            <button type="button" className="text-xl text-lightgray ml:hidden transition-all duration-500" onClick={() => setOpen(!open)}>
                {!open ? <FaStream /> : 'close'}
            </button>

        </header>

    )
}

export default Landingheader
