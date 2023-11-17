import { Outlet } from "react-router-dom"
import Header from './Header'
import Hero from "./hero"

const Mainarea = ({ search, setSearch, navFunc }) => {
    return (
        <section className="md:w-3/5 lg:w-1/2 px-3 sticky h-screen  overflow-y-scroll">
            <Header navFunc={navFunc} />
            <Hero search={search} setSearch={setSearch} />
            <Outlet context={search} />
        </section>
    )
}

export default Mainarea
