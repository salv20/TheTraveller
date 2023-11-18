import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Favorite = () => {

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
    }, [])

    return (
        <section className='py-4'>
            <h2 className=' uppercase text-orange font-bold text-center'>favorites</h2>

            {
                details.flags.length ?
                    <div className=" grid grid-cols-2 gap-5 pt-4">
                        {details.flags.map((flag, index) => (
                            <div key={index} className='shadow-lg bg-services'>
                                <img src={flag} alt="" className='w-full h-36 sm:h-52' />
                                <h1 className='text-orange capitalize font-bold text-center pt-2 pb-1'>{details.names[index]}</h1>
                                <section className=' grid px-5'>
                                    <button className='bg-visit py-1 px-5 rounded-lg font-bold'>Visit</button>
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
                            <Link to='/discover'>discover place</Link>
                        </button>
                    </div>
            }
        </section>
    )
}

export default Favorite
