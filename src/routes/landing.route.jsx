import Footer from "../Pages/landing/Landingfooter"
import Header from "../Pages/landing/Landingheader"
import Hero from "../Pages/landing/Hero"
import Services from "../Pages/landing/Services"
import Subscription from "../Pages/landing/Subscription"
import Testimonial from "../Pages/landing/Testimonial"
import { useEffect, useState } from "react"
import { createContext } from "react"

export const appcontext = createContext()
const body = document.querySelector('body')
const Landingroute = () => {
    const [open, setOpen] = useState(false)
    const clickFunc = () => setOpen(false)
    useEffect(() => (
        open ? body.style.overflowY = 'hidden' : body.style.overflow = 'unset'
    )[setOpen])
    return (
        <>
            <appcontext.Provider value={{ open, setOpen, clickFunc }}>
                <Header />
                <Hero />
                <Services />
            </appcontext.Provider>
            <Testimonial />
            <Subscription />
            <Footer />

        </>
    )
}
export default Landingroute
