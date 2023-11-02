import { useState } from "react";
import DatePicker from "react-datepicker";
import { FaMapMarkerAlt, FaCalendarAlt, FaPlane, FaCircle, FaLandmark, FaLine, FaMarsStroke, FaMinus } from 'react-icons/fa'

import "react-datepicker/dist/react-datepicker.css";
const Booking = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <section className="space-y-6">
            <article className="pr-1 font-semibold text-lg">
                <p>Online booking system for all services based industies and individals.
                    <span>We offer the easiest and the best booking services. Book your flight 24hrs with us.</span>
                </p>
            </article>

            <button type="button" aria-label='book btn' className="w-fit px-8 py-2.5 capitalize rounded-3xl bg-orange font-bold text-white">Book here</button>
            <article>
                <form className='grid sm:grid-cols-2 gap-x-5 gap-y-5 capitalize font-semibold'>
                    <div className="">
                        <FaMapMarkerAlt className=" inline-block" />
                        <label>from</label>
                        <input type="text" className="block outline-none border-b-2 border-lightgray w-full" />
                    </div>

                    <div>
                        <label>to</label>
                        <input type="text" className="block outline-none border-b-2 border-lightgray w-full" />
                    </div>

                    <div className="">
                        <div className="flex pb-2">
                            <FaCalendarAlt className="mt-1" />
                            <label>depart</label>
                        </div>
                        <p className="border-lightgray border-b-2">
                            {<DatePicker className=" outline-none" selected={startDate} onChange={(date) => setStartDate(date)} />}
                        </p>
                    </div>

                    <div className="">
                        <label className="pb-2 block">
                            return
                        </label>
                        <p className="border-lightgray border-b-2">{<DatePicker className=" outline-none" selected={startDate} onChange={(date) => setStartDate(date)} />}</p>
                    </div>
                    <div className="">
                        <label className="block">
                            passenger
                        </label>
                        <input type="number" className="block outline-none border-b-2 border-lightgray w-full" />
                    </div>
                    <div>
                        <label className="block">
                            class
                        </label>
                        <input type="text" className="block outline-none border-b-2 border-lightgray w-full" />
                    </div>

                    <button type="submit" className=" mx-auto px-14 py-3 capitalize rounded-3xl bg-orange font-bold text-white">Book flight</button>
                </form>
            </article>

            <article className=" capitalize font-semibold">
                <h1 className="font-bold text-lg">all bookings</h1>
                <div >
                    <div className="grid grid-cols-3">
                        <p>
                            04:55
                            <span className="block"> nigeria </span>
                        </p>
                        <p className="flex pt-6"> <FaCircle className=" text-orange relative text-sm bottom-1.5 " /><hr className="w-14 h-0.5 bg-orange" />  <FaCircle className="relative bottom-1.5 text-sm text-orange" /></p>
                        <p>
                            09:55
                            <span className="block"> canada </span>
                        </p>
                    </div>
                    <hr className=" border-dotted bg-lightgray " />
                    <div className="grid grid-cols-3">
                        <p>america airlines</p>
                        <p>$20.50</p>
                        <button type="button" className="w-fit">edit</button>
                    </div>

                </div>
            </article>
        </section>
    )
}

export default Booking
