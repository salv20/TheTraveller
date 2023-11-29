import { FaCircle, FaTrashAlt } from 'react-icons/fa'
import axios from 'axios'
import { useEffect, useState } from 'react'
const Bookinglist = () => {
    const [Details, setDetails] = useState({})

    useEffect(() => {
        const countries = async () => {
            try {
                const data = await axios.get('https://jsondata-mk5d.onrender.com/Bookings')
                setDetails(data.data)
            } catch (error) {
                console.log(error);
            }
        }
        countries()
    }, [])

    return (
        <article className="capitalize font-semibold space-y-5">

            <h1 className="font-bold text-lg">all bookings</h1>
            {(Details.from)?.map((country, index) => (
                <div className="flex bg-heading rounded-r-full p-3 py-8" key={index}>
                    <div className="w-full space-y-3" >
                        <div className="grid grid-cols-3 gap-x-2">
                            <p> {country}</p>
                            <div>
                                <p>{Details.duration[index]}</p>
                                <div className="flex  relative right-1.5 sm:right-3.5"> <FaCircle className=" text-orange relative text-sm bottom-1.5 " /><hr className="w-20 h-0.5 bg-orange" />  <FaCircle className="relative bottom-1.5 text-sm text-orange" /></div>
                            </div>
                            <p> {Details.to[index]}</p>
                        </div>
                        <hr className=" border-dotted bg-lightgray " />
                        <div className="grid grid-cols-3">
                            <p>{Details.airline[index]} airlines</p>
                            <p>${Details.fee[index]}</p>
                            <button type="button" className="w-fit px-8 py-2 bg-orange rounded-3xl text-white capitalize font-bold relative right-5 sm:right-0">edit</button>
                        </div>
                    </div>

                    {/*  */}
                    <div className="text-3xl text-orange h-fit mt-8">
                        <button type="button"><FaTrashAlt /></button>
                    </div>
                </div>
            ))}

        </article>
    )
}

export default Bookinglist
