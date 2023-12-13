import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { contextProvider } from "../App"

const Rightbar = () => {

    const tripContext = useContext(contextProvider)
    const trip = tripContext[0]

    const [detail, setDetail] = useState([])
    const fullName = JSON.parse(localStorage.getItem('userDetails'))[0].fullName

    useEffect(() => {

        if (localStorage.bookedFlights) {
            setDetail((JSON.parse(localStorage.bookedFlights)))
        }

    }, [trip])

    return (
        <section className=' sect overflow-y-scroll h-screen bg-dawhite text-center px-2 capitalize pt-8 font-bold space-y-6 hidden md:block'>
            <h1 className='text-lg md:text-xl'>my profile</h1>
            <img src="/user.png" alt="" className='w-24 mx-auto border-2 border-orange rounded-full ' />

            <div>
                <h1>{fullName}</h1>
            </div>

            <div className=" space-y-5 pb-5">
                <h2>destination trips</h2>

                {
                    detail.length ?
                        detail.map((country, index) => (
                            <article key={index}
                                className="text-left bg-heading  space-y-2 rounded-xl hover:-translate-y-1.5 transition-all duration-1000  ">

                                <h1 className="uppercase font-bold text-center bg-orange py-1 rounded-ss-xl rounded-se-xl ">Easy<span className="text-white">travel</span></h1>
                                <div className="px-2">
                                    <p>from: {country.from}</p>
                                    <p>to: {country.to}</p>
                                    <p>
                                        {
                                            country.departureDate.startDate ?
                                                (`
                                       flight Date: ${new Intl.DateTimeFormat('en-us',
                                                    { day: '2-digit', year: 'numeric', month: 'short' }
                                                ).format(new Date(country.departureDate.startDate))} 
                                             `
                                                )
                                                :
                                                (`
                                        flight Date: ${new Intl.DateTimeFormat('en-us',
                                                    { day: '2-digit', year: 'numeric', month: 'short' }
                                                ).format(new Date(country.departureDate))} 
                                                 `
                                                )
                                        }
                                    </p>
                                    {/*  */}
                                    <p>
                                        {
                                            country.departureDate.startDate ?
                                                (`
                                       departureTime: ${new Intl.DateTimeFormat('en-us',
                                                    { hour: '2-digit', minute: '2-digit' }
                                                ).format(new Date(country.departureDate.startDate))} 
                                             `
                                                )
                                                :
                                                (`
                                        departureTime: ${new Intl.DateTimeFormat('en-us',
                                                    { hour: '2-digit', minute: '2-digit' }
                                                ).format(new Date(country.departureDate))} 
                                                 `
                                                )
                                        }
                                    </p>
                                    {/*  */}
                                    <p>
                                        {
                                            country.returnDate.lastDate ?
                                                (`
                                       return Date: ${new Intl.DateTimeFormat('en-us',
                                                    { day: '2-digit', year: 'numeric', month: 'short' }
                                                ).format(new Date(country.returnDate.lastDate))} 
                                             `
                                                )
                                                :
                                                (`
                                        return Date: ${new Intl.DateTimeFormat('en-us',
                                                    { day: '2-digit', year: 'numeric', month: 'short' }
                                                ).format(new Date(country.returnDate))} 
                                                 `
                                                )
                                        }

                                    </p>
                                </div>
                                <p className=' bg-orange h-6 rounded-es-xl rounded-ee-xl'></p>
                            </article>

                        ))
                        :
                        <div className=' font-bold text-center space-y-3  mt-14'>
                            <p>No booked flights yet</p>
                            <button type="button"
                                className=' bg-orange capitalize rounded-lg px-5 py-2  font-bold text-white text-base'
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
