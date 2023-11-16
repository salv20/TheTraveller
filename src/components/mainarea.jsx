import { Outlet } from "react-router-dom"
import Header from './Header'

const Mainarea = ({ nav, navFunc }) => {
    return (
        <section className="md:w-3/5 lg:w-1/2 px-3 sticky h-screen  overflow-y-scroll">
            <Header nav={nav} navFunc={navFunc} />
            <Outlet />
        </section>
    )
}

export default Mainarea
