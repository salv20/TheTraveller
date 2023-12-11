import ThreeDotsWave from '../../components/dotwave'

const Weatherui = ({ list, setOpenState }) => {
    const arrNum = [5, 10, 18, 28, 38]
    const kelvin = 273
    const date = new Date()
    const day = new Intl.DateTimeFormat('en-us', { weekday: 'long' }
    ).format(date)
    const month_year = new Intl.DateTimeFormat('en-us',
        { day: '2-digit', year: 'numeric', month: 'long' }
    ).format(date)


    return (
        <article
            className='pb-4 h-screen'
            onClick={() => setOpenState(false)}
        >
            {
                list &&
                    list.list ?
                    (
                        <article className='capitalize font-bold space-y-5 mt-6'>
                            <div className=" text-center text-lg">
                                <h1>{`${list.city?.name}, ${list.city?.country}`}</h1>
                                <p>{month_year}</p>
                            </div>

                            <div
                                className='grid grid-cols-3 text-center bg-white rounded-2xl py-4 font-bold capitalize space-x-4 sm:text-lg'
                            >

                                {
                                    (list.list[0].weather[0].main).toLowerCase() == 'clear' ?
                                        <img src="sunny.png" alt="" className='w-24 h-24' />
                                        : (list.list[0].weather[0].main).toLowerCase() == 'clouds' ?
                                            <img src="cloudy.png" alt="" className='w-24 h-24' /> :
                                            (list.list[0].weather[0].main).toLowerCase() == 'snow' ?
                                                <img src="snow.png" alt="" className='w-24 h-24' />
                                                :
                                                <img src="rain.png" alt="" className='w-24 h-24' />
                                }
                                <div className="mt-4 ">
                                    <p className='text-lg'>{list.list[0].weather[0].main}</p>
                                    <p>{day} </p>
                                </div>
                                <p className='mt-8 text-2xl'>{Math.round((list.list[0]?.main.temp_max) - kelvin)}&deg;</p>
                            </div>

                            {
                                arrNum.map((num, index) => (

                                    <div
                                        className="grid grid-cols-3 font-bold capitalize text-center"
                                        key={index}>
                                        {
                                            (list.list[num].weather[0].main).toLowerCase() === 'clear' ?
                                                <img src="sunny.png" alt="" className='w-20 h-20' />
                                                : (list.list[0].weather[0].main).toLowerCase() == 'clouds' ?
                                                    <img src="cloudy.png" alt="" className='w-20 h-20' /> :
                                                    (list.list[0].weather[0].main).toLowerCase() == 'snow' ?
                                                        <img src="snow.png" alt="" className='w-20 h-20' />
                                                        :
                                                        <img src="rain.png" alt="" className='w-20 h-20' />
                                        }

                                        {
                                            <div>
                                                <p>
                                                    {new Intl.DateTimeFormat('en-us', { weekday: 'long' }
                                                    ).format(new Date(list.list[num].dt_txt))}
                                                </p>
                                                <p className=' font-semibold'>
                                                    {new Intl.DateTimeFormat('en-us',
                                                        { day: '2-digit', year: 'numeric', month: 'long' }
                                                    ).format(new Date(list.list[num].dt_txt))}
                                                </p>
                                            </div>
                                        }

                                        {
                                            <p className='mt-6 text-2xl'>{Math.round((list.list[num].main.temp_max) - kelvin)}&deg;</p>
                                        }
                                    </div>
                                ))
                            }
                        </article>

                    )
                    :
                    <ThreeDotsWave />
            }
        </article>
    )
}

export default Weatherui