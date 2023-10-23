import Footer from "../landing/Landingfooter"
import Header from "../landing/Landingheader"
import Hero from "../landing/Hero"
import Services from "../landing/Services"
import Subscription from "../landing/Subscription"
import Testimonial from "../landing/Testimonial"
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
