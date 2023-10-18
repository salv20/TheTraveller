import { service } from "../../utilities/accesory"
import { NavLink } from "react-router-dom"


const Services = () => {
    const name = service.name
    const symbol = service.symbol
    const text = service.text
    const path = service.path
    return (
        <section className="p-5  bg-services gap-y-2 grid text-lightgray text-center">
            <h2 className="font-bold text-semibold uppercase text-lg md:text-xl">category</h2>
            <h1 className="text-xl md:text-2xl  font-semibold capitalize text-black ">we offer the best services</h1>

            <div className="grid gap-y-5  sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-10 pt-5">
                {name.map((per, index) => (
                    <NavLink to={path[index]} key={index} className="space-y-1.5">
                        <img src={symbol[index]} alt="" className="w-14 mx-auto" />
                        <h1 className=" font-semibold uppercase text-black">{per}</h1>
                        <p> {text[index]} </p>
                    </NavLink>
                ))}
            </div>
        </section>
    )
}

export default Services
