import ThreeDotsWave from '../../components/dotwave'

const Weatherui = ({ list, setOpenState }) => {
    const arrNum = [0, 7, 15, 23, 31, 38]
    const kelvin = 273
    const date = new Date()
    const day = new Intl.DateTimeFormat('en-us', { weekday: 'long' }
    ).format(date)
    const month_year = new Intl.DateTimeFormat('en-us',
        { day: '2-digit', year: 'numeric', month: 'long' }
    ).format(date)


    return (
        <article
            className='pb-2'
            onClick={() => setOpenState(false)}
        >
            {
                list &&
                    list.list ?
                    (
                        <article className='capitalize font-bold mt-6 space-y-6'>
                            <div className=" text-center text-lg">
                                <h1>{`${list.city?.name}, ${list.city?.country}`}</h1>
                                <p>{month_year}</p>
                            </div>


                            <div className="space-y-2">
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
                            </div>
                        </article>

                    )
                    :
                    <ThreeDotsWave />
            }
        </article>
    )
}

export default Weatherui