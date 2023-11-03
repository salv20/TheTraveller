import DatePicker from "react-datepicker";
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useEffect } from "react";

const Bookingform = () => {

    // const success = (e) => {
    //     console.log(e);
    // }
    // const error = () => {
    //     console.log('loaction error')
    // }
    // const location = navigator.geolocation.getCurrentPosition(
    //     success, error
    // )
    // useEffect(() => {
    //     console.log(location);
    // })

    const [startDate, setStartDate] = useState(new Date());
    const [lastDate, setLastDate] = useState(new Date())

    const [formdata, setFormdata] = useState(
        {
            from: '',
            to: '',
            depart: { startDate },
            back: { lastDate },
            passenger: 1,
            class: 'First Class',
            airline: 'Ethiopian Airline'

        }
    )

    return (
        <form
            className='grid sm:grid-cols-2 gap-x-5 gap-y-5 capitalize font-semibold'>
            <div className="">
                <FaMapMarkerAlt className=" inline-block" />
                <label>from</label>
                <input type="text" required className="block outline-none border-b-2 border-lightgray w-full"
                    value={formdata.from}
                    onChange={(e) => (
                        setFormdata({ ...formdata, from: e.target.value })
                    )}

                />
            </div>

            <div>
                <label>to</label>
                <input type="text" required
                    className="block outline-none border-b-2 border-lightgray w-full"
                    value={formdata.to}
                    onChange={(e) => (
                        setFormdata({ ...formdata, to: e.target.value })
                    )}
                />
            </div>

            <div className="">
                <div className="flex pb-2">
                    <FaCalendarAlt className="mt-1" />
                    <label>depart</label>
                </div>
                <div className="border-lightgray border-b-2">
                    {<DatePicker
                        className=" outline-none"
                        selected={startDate}
                        onChange={(date) => (
                            setStartDate(date),
                            setFormdata({ ...formdata, depart: date })
                        )} />}
                </div>
            </div>

            <div className="">
                <label className="pb-2 block"> return</label>
                <div
                    className="border-lightgray border-b-2">
                    {<DatePicker className=" outline-none"
                        selected={lastDate}
                        onChange={(date) => (
                            setLastDate(date),
                            setFormdata({ ...formdata, back: date })
                        )}

                    />}
                </div>
            </div>
            <div className="">
                <label className="block"> passenger </label>
                <input type="number" required
                    className="block outline-none border-b-2 border-lightgray w-full"
                    value={formdata.passenger}
                    onChange={(e) => (
                        setFormdata({ ...formdata, passenger: e.target.value })
                    )}
                />
            </div>
            <div>
                <label className="block">class</label>
                <select name="" id=""
                    className="outline-none border-b-2 border-lightgray w-full capitalize"
                    onChange={(e) => (
                        setFormdata({ ...formdata, class: e.target.value })
                    )}
                >
                    <option value="First Class">First Class</option>
                    <option value="Business Class">Business Class</option>
                    <option value=" Economy Class"> Economy Class</option>
                </select>
            </div>

            <div>
                <label className="block">
                    airline
                </label>
                <select name="" id=""
                    className="outline-none border-b-2 border-lightgray w-full capitalize"
                    onChange={(e) => (
                        setFormdata({ ...formdata, class: e.target.value })
                    )}
                >
                    <option value="Ethiopian airline">Ethiopian airline</option>
                    <option value="american airline">american airline</option>
                    <option value="british airline">british airline</option>
                </select>
            </div>
            <button type="submit"
                onClick={(e) => (
                    e.preventDefault(),
                    console.log(formdata)
                )}
                className=" mx-auto px-14 py-3 capitalize rounded-3xl bg-orange font-bold text-white"
            >Book flight</button>
        </form>
    )
}

export default Bookingform
