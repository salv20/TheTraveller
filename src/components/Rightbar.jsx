import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const Rightbar = () => {
    let data = []
    const [finaData, setFinalData] = useState([])
    const [detail, setDetail] = useState([])
    const fullName = JSON.parse(localStorage.getItem('userDetails'))[0].fullName

    useEffect(() => {

        if (localStorage.bookedFlights && JSON.parse(localStorage.bookedFlights).length) {
            JSON.parse(localStorage.getItem('bookedFlights')).map((flight, index) => (

                axios.get(`https://restcountries.com/v3.1/name/${flight.to}`)
                    .then(res => (
                        data.push(res.data[0]),
                        setFinalData(data)
                    ))
                    .catch(err => console.log(err.message))
            ))
            setDetail((JSON.parse(localStorage.bookedFlights)))
        }

    }, [])

    return (
        <section className=' sect overflow-y-scroll h-screen bg-heading text-center px-5 capitalize pt-8 font-bold space-y-6 hidden md:block'>
            <h1 className='text-lg md:text-xl'>my profile</h1>
            <img src="/user.png" alt="" className='w-24 mx-auto border-2 border-orange rounded-full ' />

            <div>
                <h1>{fullName}</h1>
            </div>

            <div className=" space-y-5 pb-5">
                <h2>destination trips</h2>

                {

                    finaData.length ?
                        finaData.map((country, index) => (
                            <article key={index}>
                                <div className='flex bg-orange py-7 px-4 space-x-3 rounded-xl hover:-translate-y-1.5 transition-all duration-1000'>
                                    <img src={country.flags.png} alt="" className='w-24' />
                                    <div>
                                        <h3>{country.name.common}</h3>
                                        <p>
                                            {
                                                detail.length &&
                                                (
                                                    detail[0].departureDate.startDate ?
                                                        (`
                                            ${new Intl.DateTimeFormat('en-us',
                                                            { day: '2-digit', year: 'numeric', month: 'short' }
                                                        ).format(new Date(detail[0].departureDate.startDate))} 
                                             `
                                                        )
                                                        :
                                                        (`
                                            ${new Intl.DateTimeFormat('en-us',
                                                            { day: '2-digit', year: 'numeric', month: 'long' }
                                                        ).format(new Date(detail[0].departureDate))} 
                                                 `
                                                        )
                                                )
                                            }

                                        </p>
                                    </div>
                                </div>
                            </article>

                        ))
                        :
                        <div className=' text-center capitalize space-y-3 text-lg font-semibold mt-10'>
                            <p>No booked flights yet</p>
                            <button type="button"
                                className=' bg-orange rounded-lg px-5 py-2 capitalize font-semibold text-white text-base'
                                aria-label='discoverbtn'
                            >
                                <Link to='/bookings'>book flight</Link>
                            </button>
                        </div>
                }

            </div>
        </section>
    )
}

export default Rightbar
