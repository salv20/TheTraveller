import { Link } from "react-router-dom"
const Ticket = () => {
    return (
        <section className='grid-cols-3 space-y-10 pt-4 pb-8'>
            {
                localStorage.bookedFlights && localStorage.bookedFlights.length
                    ? (
                        JSON.parse(localStorage.getItem('bookedFlights')).map((flight, index) => (

                            <article className=' col-span-2 space-y-4 bg-heading rounded-3xl' key={index}>
                                <div className=" grid grid-cols-3 gap-x-5 text-center bg-orange h-10 pt-1 rounded-ss-2xl rounded-se-2xl">
                                    <h1 className="uppercase text-lg font-bold col-span-2">Easy<span className="text-white">travel</span></h1>
                                    <img src="boeing.png" alt="" className=' relative -top-2 w-20 ' />
                                </div>

                                <div className="grid grid-cols-4 pl-2 ">
                                    <div className="capitalize font-semibold space-y-4 col-span-3">
                                        <div className='grid grid-cols-2 gap-y-2'>
                                            <div>
                                                <p>from: </p>
                                                <p>{flight.from}</p>
                                            </div>
                                            <div>
                                                <p>date: </p>
                                                <p>{
                                                    flight.departureDate.startDate ?
                                                        (`
                                                    ${new Intl.DateTimeFormat('en-us',
                                                            { day: '2-digit', year: 'numeric', month: 'short' }
                                                        ).format(new Date(flight.departureDate.startDate))} 
                                                     `
                                                        )
                                                        :
                                                        (`
                                                    ${new Intl.DateTimeFormat('en-us',
                                                            { day: '2-digit', year: 'numeric', month: 'long' }
                                                        ).format(new Date(flight.departureDate))} 
                                                         `
                                                        )

                                                }</p>
                                            </div>
                                            <div>
                                                <p>to:</p>
                                                <p>{flight.to}</p>
                                            </div>
                                            <div>
                                                <p>class:</p>
                                                <p>{flight.class}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="Scan.png" alt="" className='relative top-4 w-20' />
                                </div>

                                <div className=' capitalize font-bold grid-cols-4 grid pl-2'>
                                    <div>
                                        <p>number:</p>
                                        <p>{flight.id}</p>
                                    </div>
                                    <p>seat: {index + 1}</p>
                                    <div>
                                        <p>airline:</p>
                                        <p>{flight.airline.split(" ")[0]}</p>
                                    </div>
                                    <div>
                                        <p>time:</p>
                                        <p>
                                            {
                                                flight.departureDate.startDate ?
                                                    (`
                                                    ${new Intl.DateTimeFormat('en-us',
                                                        { hour: 'numeric', minute: 'numeric' }
                                                    ).format(new Date(flight.departureDate.startDate))} 
                                                     `
                                                    )
                                                    :
                                                    (`
                                                    ${new Intl.DateTimeFormat('en-us',
                                                        { hour: 'numeric', minute: 'numeric' }
                                                    ).format(new Date(flight.departureDate))} 
                                                         `
                                                    )
                                            }

                                        </p>
                                    </div>

                                </div>
                                <p className=' bg-orange h-6 rounded-es-2xl rounded-ee-2xl'></p>
                            </article>
                        ))


                    )
                    :
                    <div className='bg-services text-center capitalize space-y-3 text-lg font-semibold pt-4'>
                        <p>No booked flights yet</p>
                        <button type="button"
                            className=' bg-orange rounded-lg px-5 py-2 capitalize font-semibold text-white text-base'
                            aria-label='discoverbtn'
                        >
                            <Link to='/bookings'>book flight</Link>
                        </button>
                    </div>
            }
        </section>
    )
}

export default Ticket
