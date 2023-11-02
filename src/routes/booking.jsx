import { useState } from "react";
import DatePicker from "react-datepicker";
import { FaMapMarkerAlt, FaCalendarAlt, FaCircle } from 'react-icons/fa'
import "react-datepicker/dist/react-datepicker.css";


const Booking = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [book, setBook] = useState(false)
    return (
        <section className="space-y-6 pb-8">
            <article className="pr-1 font-semibold text-lg">
                <p>Online booking system for all services based industies and individals.
                    <span>We offer the easiest and the best booking services. Book your flight 24hrs with us.</span>
                </p>
            </article>

            <button type="button" aria-label='book btn' className="w-fit px-8 py-2.5 capitalize rounded-3xl bg-orange font-bold text-white"
                onClick={() => setBook(!book)}
            >Book here</button>
            <article className={`${!book ? 'hidden' : 'block'}`}>
                <form
                    className='grid sm:grid-cols-2 gap-x-5 gap-y-5 capitalize font-semibold'>
                    <div className="">
                        <FaMapMarkerAlt className=" inline-block" />
                        <label>from</label>
                        <input type="text" required className="block outline-none border-b-2 border-lightgray w-full" />
                    </div>

                    <div>
                        <label>to</label>
                        <input type="text" required className="block outline-none border-b-2 border-lightgray w-full" />
                    </div>

                    <div className="">
                        <div className="flex pb-2">
                            <FaCalendarAlt className="mt-1" />
                            <label>depart</label>
                        </div>
                        <div className="border-lightgray border-b-2">
                            {<DatePicker className=" outline-none" selected={startDate} onChange={(date) => setStartDate(date)} />}
                        </div>
                    </div>

                    <div className="">
                        <label className="pb-2 block">
                            return
                        </label>
                        <div className="border-lightgray border-b-2">{<DatePicker className=" outline-none" selected={startDate} onChange={(date) => setStartDate(date)} />}</div>
                    </div>
                    <div className="">
                        <label className="block">
                            passenger
                        </label>
                        <input type="number" required className="block outline-none border-b-2 border-lightgray w-full" />
                    </div>
                    <div>
                        <label className="block">
                            class
                        </label>
                        <select name="" id="" className="outline-none border-b-2 border-lightgray w-full capitalize">
                            <option value="First Class">First Class</option>
                            <option value="Business Class">Business Class</option>
                            <option value=" Economy Class"> Economy Class</option>
                        </select>
                    </div>

                    <div>
                        <label className="block">
                            airline
                        </label>
                        <select name="" id="" className="outline-none border-b-2 border-lightgray w-full capitalize">
                            <option value="Ethiopian airline">Ethiopian airline</option>
                            <option value="american airline">american airline</option>
                            <option value="british airline">british airline</option>
                        </select>
                    </div>
                    <button type="submit"
                        className=" mx-auto px-14 py-3 capitalize rounded-3xl bg-orange font-bold text-white"
                    >Book flight</button>
                </form>
            </article>

            <article className=" capitalize font-semibold space-y-3 bg-heading rounded-r-full p-4">
                <h1 className="font-bold text-lg pb-3">all bookings</h1>
                <div className="grid grid-cols-3 gap-x-2">
                    <p>
                        04:55
                        <span className="block"> nigeria </span>
                    </p>
                    <div className="">
                        <p>5hrs 15min</p>
                        <div className="flex pt-1 relative right-3.5"> <FaCircle className=" text-orange relative text-sm bottom-1.5 " /><hr className="w-20 h-0.5 bg-orange" />  <FaCircle className="relative bottom-1.5 text-sm text-orange" /></div>
                    </div>
                    <p>
                        09:55
                        <span className="block"> canada </span>
                    </p>
                </div>
                <hr className=" border-dotted bg-lightgray " />
                <div className="grid grid-cols-3">
                    <p>america airlines</p>
                    <p>$20.50</p>
                    <button type="button" className="w-fit px-8 py-2 bg-orange rounded-3xl text-white capitalize font-bold relative right-5 sm:right-0">edit</button>
                </div>
            </article>
        </section>
    )
}

export default Booking
