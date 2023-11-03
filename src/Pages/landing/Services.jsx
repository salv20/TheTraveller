import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { appcontext } from "../../routes/landing.route"
import { useContext } from "react"
import { service } from "../../../utilities/accesory"
const Services = () => {

    const container = {
        initial: { opacity: 0, y: '30%' },
        animate: {
            opacity: 1,
            y: '0%',
            transition: {
                staggerChildren: 0.6,
                duration: 2,
                type: 'fade',
            }
        }
    }

    const item = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
        }
    }


    const { clickFunc } = useContext(appcontext)
    const name = service.name
    const symbol = service.symbol
    const text = service.text
    const path = service.path
    return (
        <section className="p-5  bg-services gap-y-2 grid text-lightgray text-center" onClick={clickFunc}>
            <h2 className="font-bold text-semibold uppercase text-lg md:text-xl">category</h2>
            <h1 className="text-xl md:text-2xl  font-semibold capitalize text-black ">we offer the best services</h1>

            <motion.ul
                className="grid gap-y-5  sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-10 pt-5"
                viewport={{ once: true, amount: 0.2 }}
                variants={container}
                initial="initial"
                whileInView="animate"
            >
                {name.map((per, index) => (
                    <motion.li key={index}
                        variants={item}
                    >
                        <NavLink to={path[index]} >
                            <img src={symbol[index]} alt="" className="w-14 mx-auto" />
                            <h1 className=" font-semibold uppercase text-black">{per}</h1>
                            <p> {text[index]} </p>
                        </NavLink>
                    </motion.li>

                ))}
            </motion.ul>
        </section>
    )
}

export default Services
