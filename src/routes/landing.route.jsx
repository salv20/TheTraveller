import Footer from "../components/Landingfooter"
import Header from "../components/Landingheader"
import Hero from "../landing/Hero"
import Services from "../landing/Services"
import Subscription from "../landing/Subscription"
import Testimonial from "../landing/Testimonial"

const Landingroute = () => {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <Testimonial />
            <Subscription />
            <Footer />

        </>
    )
}
export default Landingroute
