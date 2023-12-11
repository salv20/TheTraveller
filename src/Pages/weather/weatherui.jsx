import React from 'react'

const Weatherui = ({ list }) => {
    const kelvin = 273


    if (list?.list) {

        const detail0 = list?.list[0]
        // const detail1 = list?.list[1]
        // const detail2 = list?.list[2]
        // const detail3 = list?.list[3]
        // const detail4 = list?.list[4]
        // const detail5 = list?.list[5]
        // console.log(list?.list);
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
            <article className='capitalize font-bold'>

                <div className=" text-center  py-8 text-lg">
                    <h1>lagos, nigeria</h1>
                    <p>may, 25 2023</p>
                </div>

                <div className='grid grid-cols-4 bg-white rounded-2xl py-10 font-bold capitalize space-x-4 sm:text-lg'>
                    <img src="/public/sunny.png" alt="" className='w-24 h-24' />
                    <div className="mt-6 col-span-2">
                        <p className='text-lg'>clear</p>
                        <p>tuesday 11:00 <span className='lowercase'>pm</span></p>
                    </div>
                    <p className='mt-6 text-2xl'>19&deg;</p>
                </div>
                <div className="grid grid-cols-4 py-6  font-bold capitalize">
                    <p className='mt-2 text-2xl'>19&deg;</p>
                    <div className="col-span-2">
                        <p>wednesday</p>
                        <p className=' font-semibold'>may, 25 2023</p>
                    </div>
                    <img src="/public/cloudy.png" alt="" className='w-14 h-14' />
                </div>
            </article>
        )
    } else {
        return (
            <div className=' text-red-800 bg-black font-bold p-5 text-center mt-10 mx-auto w-3/4'>
                please check internet connection and reload.
            </div>
        )
    }
}

export default Weatherui
