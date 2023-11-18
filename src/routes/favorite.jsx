import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const Favorite = () => {
    const [dataState, setDataState] = useState(false)
    const navigate = useNavigate()
    const [details, setDetails] = useState({
        names: [],
        flags: []
    })
    useEffect(() => {
        if (localStorage.restnames) {
            const name = JSON.parse(localStorage.getItem('restnames'))
            const flag = JSON.parse(localStorage.getItem('restflags'))
            setDetails({ names: name, flags: flag })
        }
    }, [dataState])

    return (
        <section className='pt-4 pb-8'>
            <h2 className=' uppercase text-orange font-bold text-center'>favorites</h2>

            {
                details.flags.length ?
                    <div className=" grid grid-cols-2 gap-6 pt-4">
                        {details.flags.map((flag, index) => (
                            <div key={index} className='shadow-lg bg-services'>
                                <img src={flag} alt="" className='w-full h-36 sm:h-52' />
                                <h1 className='text-orange capitalize font-bold text-center p-2'>{details.names[index]}</h1>
                                <section className='flex justify-between font-bold pb-4 px-2'>
                                    <button
                                        className='bg-visit py-1 px-8 rounded-lg'
                                        onClick={(e) => {
                                            const parentElement = (e.currentTarget.closest('div').children)
                                            const name = parentElement[1].textContent
                                            navigate('/bookings', { state: name })
                                        }}
                                    >Visit</button>

                                    <button
                                        type="button"
                                        aria-label='deletebtn'
                                        className='text-2xl text-orange'
                                        onClick={(e) => {
                                            const target = e.currentTarget
                                            const parentElement = (target.closest('div').children)
                                            const flag = parentElement[0].src

                                            const value = details.flags.findIndex((src) => src === flag)
                                            details.flags.splice(value, 1)
                                            details.names.splice(value, 1)
                                            localStorage.setItem('restflags', JSON.stringify(details.flags))
                                            localStorage.setItem('restnames', JSON.stringify(details.names))

                                            setDataState(!dataState)
                                        }}
                                    ><FaTrashAlt /></button>
                                </section>
                            </div>

                        ))}
                    </div>
                    :
                    <div className='bg-services text-center capitalize space-y-3 text-lg font-semibold pt-4'>
                        <p>oops no favorites yet</p>
                        <button type="button"
                            className=' bg-orange rounded-lg px-5 py-2 capitalize font-semibold text-white text-base'
                            aria-label='discoverbtn'
                        >
                            <Link to='/discover'>discover places</Link>
                        </button>
                    </div>
            }
        </section>
    )
}

export default Favorite
