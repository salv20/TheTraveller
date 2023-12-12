import { Outlet } from "react-router-dom"
import Header from './Header'
import Hero from "./hero"

const Mainarea = ({ search, setSearch, navFunc }) => {
    return (
        <section className=" px-3 h-screen  overflow-y-scroll col-span-2">
            <Header navFunc={navFunc} />
            <Hero search={search} setSearch={setSearch} />
            <Outlet context={search} />
        </section>
    )
}

export default Mainarea
