import DatePicker from "react-datepicker";
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import Bookvalidation from "./bookvalidation";



const Bookingform = () => {
    const path = useLocation()
    const [startDate, setStartDate] = useState(new Date());
    const [lastDate, setLastDate] = useState(new Date())


    const [formdata, setFormdata] = useState(
        {
            from: '',
            depart: { startDate },
            back: { lastDate },
            passenger: 1,
            class: 'First Class',
            airline: 'Ethiopian Airline'

        }
    )
    const [to, setTo] = useState('')

    useEffect(() => {
        // GETTING USERS CURRENT LOCATION
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords
                const locationApi = async () => {
                    const res = await fetch(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=${longitude},${latitude}`)
                    const data = await res.json()
                    const countryName = data.address.CntryName
                    setFormdata({ ...formdata, from: countryName })
                }
                locationApi()
            },)

        // RETRIVING LOCATION DESTINATION FROM DISCOVER PAGE
        if (path.state) setTo(path.state)

    }, [])



    return (
        <form
            className='grid sm:grid-cols-2 gap-x-5 gap-y-5 capitalize font-semibold'>
            <div className="">
                <FaMapMarkerAlt className=" inline-block" />
                <label>from</label>
                <input type="text" required className="block outline-none border-b-2 border-lightgray w-full"
                    value={formdata.from}
                    onChange={(e) => (
                        setFormdata({ ...formdata, from: e.target.value }),
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
                            setFormdata({ ...formdata, depart: date }),
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
                            setFormdata({ ...formdata, back: date }),
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


            <Bookvalidation formdata={formdata} to={to} />
        </form>

    )
}

export default Bookingform
