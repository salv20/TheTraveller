import { FaTrashAlt } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Bookinglist = ({ storageFunc, fetchStorage }) => {
    const navigate = useNavigate()
    const [Details, setDetails] = useState([])

    useEffect(() => {
        if (localStorage.bookedFlights) {
            const data = JSON.parse(localStorage.getItem('bookedFlights'))
            setDetails(data)
        }
    }, [fetchStorage])

    const onDelete = (e) => {
        const data = JSON.parse(localStorage.getItem('bookedFlights'))
        const ID = Number(e.currentTarget.closest('.bookContainer').id)
        const userID = data.findIndex(book => book.id === ID)
        data.splice(userID, 1)
        localStorage.setItem('bookedFlights', JSON.stringify(data))
        storageFunc()
    }

    return (
        <article className="capitalize font-semibold space-y-5">
            <h1 className="font-bold text-lg">all bookings</h1>
            {
                Details.length ?
                    Details.map((country) => (

                        <div className="bookContainer flex bg-heading rounded-r-full p-3 py-8" key={(country.id)} id={country.id}>
                            <div className="w-full space-y-3" >
                                <div className="grid grid-cols-3 gap-x-2">
                                    <p> {country.from}</p>
                                    <p>{country.duration}</p>
                                    <p> {country.to}</p>
                                </div>
                                <hr className=" border-dotted bg-lightgray " />
                                <div className="grid grid-cols-3">
                                    <p>{country.airline}</p>
                                    <p>${country.fee}</p>
                                    <button type="button"
                                        className="w-fit px-8 py-2 bg-orange rounded-3xl text-white capitalize font-bold relative right-5 sm:right-0"
                                        onClick={(e) => {
                                            const dataId = e.currentTarget.closest('.bookContainer').id;
                                            navigate('/updatebooking', { state: dataId })
                                        }}
                                    >
                                        edit
                                    </button>
                                </div>
                            </div>

                            {/*  */}
                            <div className="text-3xl text-orange h-fit mt-8">
                                <button type="button"
                                    onClick={(e) => onDelete(e)}
                                >
                                    <FaTrashAlt />
                                </button>
                            </div>
                        </div>
                    )
                    )
                    :
                    <div className='bg-heading font-bold p-5 text-center mt-60 mx-auto w-3/4'>
                        no booked flight yet
                    </div>
            }
        </article>
    )
}

export default Bookinglist

