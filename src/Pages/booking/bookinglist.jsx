import { FaTrashAlt } from 'react-icons/fa'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import { bookingContext } from '../../routes/booking'

const Bookinglist = () => {
    const [Details, setDetails] = useState([])
    const bookArray = useContext(bookingContext)

    useEffect(() => {
        const countries = async () => {
            try {
                // const data = await axios.get('https://bookings-pvq7.onrender.com/Bookings')
                const data = await axios.get('http://localhost:3020/Bookings')
                setDetails(data.data)
            } catch (error) {
                console.log(error);
            }
        }
        countries()
    }, [bookArray[0]])

    return (
        <article className="capitalize font-semibold space-y-5">
            <h1 className="font-bold text-lg">all bookings</h1>
            {
                Details.map((country) => (

                    <div className="flex bg-heading rounded-r-full p-3 py-8" key={(country.id)}>
                        <div className="w-full space-y-3" >
                            <div className="grid grid-cols-3 gap-x-2">
                                <p> {country.from}</p>
                                <p>{country.duration}</p>
                                <p> {country.to}</p>
                            </div>
                            <hr className=" border-dotted bg-lightgray " />
                            <div className="grid grid-cols-3">
                                <p>{country.airline} airlines</p>
                                <p>${country.fee}</p>
                                <button type="button" className="w-fit px-8 py-2 bg-orange rounded-3xl text-white capitalize font-bold relative right-5 sm:right-0">edit</button>
                            </div>
                        </div>

                        {/*  */}
                        <div className="text-3xl text-orange h-fit mt-8">
                            <button type="button"><FaTrashAlt /></button>
                        </div>
                    </div>
                )
                )
            }

        </article>
    )
}

export default Bookinglist

