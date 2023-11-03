import { useState } from "react";
import Bookingform from "../Pages/booking/bookingform";
import Bookinglist from "../Pages/booking/bookinglist";


const Booking = () => {
    const [book, setBook] = useState(true)

    return (
        <section className="space-y-6 pb-8">
            <article className="pr-1 font-semibold text-lg">
                <p>Online booking system for all services based industies and individals.
                    <span>We offer the easiest and the best booking services. Book your flight 24hrs with us.</span>
                </p>
            </article>

            <button type="button" aria-label='book btn'
                className="w-fit px-8 py-2.5 capitalize rounded-3xl bg-orange font-bold text-white"
                onClick={() => setBook(!book)} >
                Book here
            </button>

            <article className={`${!book ? 'hidden' : 'block'}`}>
                <Bookingform />
            </article>
            <Bookinglist />
        </section>
    )
}

export default Booking
