import { useState } from "react";
import Bookingform from "../Pages/booking/bookingform";
import Bookinglist from "../Pages/booking/bookinglist";

const Booking = () => {
    const [fetchState, setFetchState] = useState(false)

    return (
        <section className="space-y-6 pb-8">
            <article className="pr-1 font-semibold text-lg">
                <p>Online booking system for all services based industies and individals.
                    <span>We offer the easiest and the best booking services. Book your flight 24hrs with us.</span>
                </p>
            </article>

            <article>
                <Bookingform />
            </article>
            <Bookinglist />
        </section>
    )
}

export default Booking
