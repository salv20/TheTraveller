import { Link, Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
const mainlayout = () => {
    return (
        <>
            <Header />
            <Link to='social' className="fixed top-3/4 -right-9 bg-darkpink px-8 py-1 rotate-90">social</Link>
            <main><Outlet /></main>

            <Footer />
        </>
    )
}

export default mainlayout
