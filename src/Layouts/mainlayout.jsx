import { Link, Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
const mainlayout = () => {
    return (
        <>
            <Header />
            <Link to='social' className="fixed top-1/2 right-0 bg-lightorange px-8 py-1 rotate-90">social</Link>
            <main><Outlet /></main>

            <Footer />
        </>
    )
}

export default mainlayout
