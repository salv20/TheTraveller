import { Link, Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Socialtab from "../components/socialtab"
const mainlayout = () => {
    return (
        <>
            <Header />
            <Socialtab />
            <main><Outlet /></main>

            <Footer />
        </>
    )
}

export default mainlayout
