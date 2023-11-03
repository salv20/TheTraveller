import DatePicker from "react-datepicker";
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
const Bookingform = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [value, setValues] = useState(
        {
            from: '',
            to: '',
            depart: '',
            return: '',
            passenger: 1,
            class: '',
            airline: ''

        }
    )

    const changFunc = () => {
        console.log(value);
    }

    return (
        <form
            className='grid sm:grid-cols-2 gap-x-5 gap-y-5 capitalize font-semibold'>
            <div className="">
                <FaMapMarkerAlt className=" inline-block" />
                <label>from</label>
                <input type="text" required className="block outline-none border-b-2 border-lightgray w-full"
                    value={value.from}
                    onChange={changFunc}
                />
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
    )
}

export default Bookingform
