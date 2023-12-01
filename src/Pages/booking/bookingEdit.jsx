import DatePicker from "react-datepicker";
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import axios from "axios";
import UpdateValidation from "./updateValidation";

const BookingEdit = () => {

    const path = useLocation()
    const [startDate, setStartDate] = useState(new Date());
    const [lastDate, setLastDate] = useState(new Date())

    const [updateData, setupdateData] = useState(
        {
            from: "",
            airline: "",
            class: "",
            passenger: ''
        }
    )
    const [to, setTo] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {

                const getCurrentUrl = await axios.get(`https://bookingsdata.onrender.com/Bookings/${path.state}`)
                const data = getCurrentUrl.data

                {
                    if (data.departureDate.startDate && data.returnDate.lastDate) {

                        setupdateData({
                            ...updateData,
                            from: (data.from),
                            airline: (data.airline),
                            passenger: (data.passenger),
                            class: (data.class)
                        });
                        setTo(data.to),
                            setStartDate(new Date(data.departureDate.startDate))
                        setLastDate(new Date(data.returnDate.lastDate))

                    }
                    else if (!data.departureDate.startDate && !data.returnDate.lastDate) {
                        setupdateData({
                            ...updateData,
                            from: (data.from),
                            airline: (data.airline),
                            passenger: (data.passenger),
                            class: (data.class),

                        }),
                            setTo(data.to)
                        setStartDate(new Date(data.departureDate))
                        setLastDate(new Date(data.returnDate))

                    }
                    else if (data.departureDate.startDate && !data.returnDate.lastDate) {
                        setupdateData({
                            ...updateData,
                            from: (data.from),
                            airline: (data.airline),
                            passenger: (data.passenger),
                        }),
                            setTo(data.to)
                        setStartDate(new Date(data.departureDate.startDate))
                        setLastDate(new Date(data.returnDate))
                    }
                    else if (!data.departureDate.startDate && data.returnDate.lastDate) {
                        setupdateData({
                            ...updateData,
                            from: (data.from),
                            airline: (data.airline),
                            passenger: (data.passenger),
                            class: (data.class),
                        }),
                            setTo(data.to)
                        setStartDate(new Date(data.departureDate))
                        setLastDate(new Date(data.returnDate.lastDate))
                    }
                }

            } catch (error) {
                console.log(error);
            }
        }
        fetchData()

    }, [])



    return (
        <form
            className='grid sm:grid-cols-2 gap-x-5 gap-y-5 capitalize font-semibold w-10/12 mt-24 mx-auto'>
            <div className="">
                <FaMapMarkerAlt className=" inline-block" />
                <label>from</label>
                <input type="text" required className="block outline-none border-b-2 border-lightgray w-full"
                    value={updateData.from}
                    onChange={(e) => (
                        setupdateData({ ...updateData, from: e.target.value }),
                        document.querySelector('.errorFrom').classList.add('hidden')
                    )} />
                <p className="errorFrom normal-case text-red-600 hidden">Please enter a valid country name</p>
            </div>
            <div>
                <label>to</label>
                <input type="text" required
                    className="block outline-none border-b-2 border-lightgray w-full"
                    value={to}
                    onChange={(e) => (
                        setTo(e.target.value),
                        document.querySelector('.errorTo').classList.add('hidden')
                    )}
                />
                <p className="errorTo normal-case text-red-600 hidden">Please enter a valid country name</p>

            </div>

            <div className="">
                <div className="flex pb-2">
                    <FaCalendarAlt className="mt-1" />
                    <label>depart</label>
                </div>
                <div className="border-lightgray border-b-2 departDate">
                    {<DatePicker
                        className=" outline-none"
                        selected={startDate}
                        onChange={(date) => (
                            setStartDate(date),
                            document.querySelector('.errordepart').classList.add('hidden')
                        )} />}

                </div>
                <p className="errordepart normal-case text-red-600 hidden">Please enter a valid date</p>
            </div>

            <div className="">
                <label className="pb-2 block"> return</label>
                <div
                    className="border-lightgray border-b-2 returnDate">
                    {<DatePicker className=" outline-none"
                        selected={lastDate}
                        onChange={(date) => (
                            setLastDate(date),
                            document.querySelector('.errorreturn').classList.add('hidden')
                        )}

                    />}
                </div>
                <p className="errorreturn normal-case text-red-600 hidden">Please enter a valid date</p>
            </div>
            <div className="">
                <label className="block"> passenger </label>
                <input type="number"
                    min="1"
                    required
                    className="block outline-none border-b-2 border-lightgray w-full"
                    value={updateData.passenger}
                    onChange={(e) => (
                        setupdateData({ ...updateData, passenger: e.target.value })
                    )}
                />
            </div>
            <div>
                <label className="block">class</label>
                <select name="" id=""
                    className="outline-none border-b-2 border-lightgray w-full capitalize"
                    onChange={(e) => (
                        setupdateData({ ...updateData, class: e.target.value })
                    )}
                >
                    <option value="First Class">{updateData.class}</option>
                    <option value="Business Class">
                        {updateData.class == 'First Class' && 'business class'}
                        {updateData.class == 'Business Class' && 'First Class'}
                        {updateData.class == ' Economy Class' && 'Business Class'}
                    </option>
                    <option value="  Economy Class">
                        {updateData.class == 'First Class' && ' Economy Class'}
                        {updateData.class == 'Business Class' && ' Economy Class'}
                        {updateData.class == ' Economy Class' && 'first class'}
                    </option>
                </select>
            </div>

            <div>
                <label className="block">
                    airline
                </label>
                <select name="" id=""
                    className="outline-none border-b-2 border-lightgray w-full capitalize"
                    onChange={(e) => (
                        setupdateData({ ...updateData, class: e.target.value })
                    )}
                >
                    <option value="Ethiopian airline">{updateData.airline}</option>
                    <option value="american airline">

                        {updateData.airline == 'Ethiopian Airline' && 'american airline'}
                        {updateData.airline == 'american airline' && 'Ethiopian Airline'}
                        {updateData.airline == 'british airline' && 'american airline'}
                    </option>
                    <option value="british airline">
                        {updateData.airline == 'Ethiopian Airline' && 'british airline'}
                        {updateData.airline == 'american airline' && 'british airline'}
                        {updateData.airline == 'british airline' && 'Ethiopian Airline'}
                    </option>
                </select>
            </div>

            <UpdateValidation id={path.state}
                updateData={updateData}
                to={to}
                startDate={startDate}
                lastDate={lastDate}
            />
        </form>

    )
}

export default BookingEdit
