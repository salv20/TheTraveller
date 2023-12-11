import React from 'react'
import ThreeDotsWave from '../../components/dotwave'

const Weatherui = ({ list }) => {
    const kelvin = 273


    if (list?.list) {

        const detail0 = list?.list[0]
        const detail = (list?.list).slice(0, 6)
        console.log(detail);
        const date = new Date(detail0.dt_txt)
        const hour = date.getHours()
        const country = list?.city.country
        const town = list?.city.name
        const day = new Intl.DateTimeFormat('en-us', { weekday: 'long' }
        ).format(date)
        const month_year = new Intl.DateTimeFormat('en-us',
            { day: '2-digit', year: 'numeric', month: 'long' }
        ).format(date)

        console.log(hour, month_year, day, country, town);

        return (
            <article className='capitalize font-bold space-y-5 mt-6'>

                <div className=" text-center text-lg">
                    <h1>lagos, nigeria</h1>
                    <p>may, 25 2023</p>
                </div>

                <div className='grid grid-cols-3 text-center bg-white rounded-2xl py-6 font-bold capitalize space-x-4 sm:text-lg'>
                    <img src="sunny.png" alt="" className='w-24 h-24' />
                    <div className="mt-6 ">
                        <p className='text-lg'>clear</p>
                        <p>tuesday </p>
                    </div>
                    <p className='mt-6 text-2xl'>19&deg;</p>
                </div>
                <div className="grid grid-cols-3  font-bold capitalize text-center">
                    <img src="cloudy.png" alt="" className='w-14 h-14' />
                    <div>
                        <p>wednesday</p>
                        <p className=' font-semibold'>may, 25 2023</p>
                    </div>
                    <p className='mt-2 text-2xl'>19&deg;</p>
                </div>
            </article>
        )
    } else <ThreeDotsWave />
}

export default Weatherui
