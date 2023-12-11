import React from 'react'

const Weatherui = ({ list }) => {
    console.log(list);
    const kelvin = 273
    const date = new Date(list.list[0].dt_txt)
    const hour = date.getHours()
    const day = new Intl.DateTimeFormat('en-us',
        { weekday: 'long' }
    ).format(date)
    console.log(hour, day);

    const month_year = new Intl.DateTimeFormat('en-us',
        {
            day: '2-digit',
            year: 'numeric',
            month: 'long'
        }
    ).format(date)
    console.log(month_year);

    return (
        <article>
            {/* {console.log(list)} */}
            <h1>nigeria</h1>
            {/* cloudy/sunny ,edegress,day,date*/}

            {/* {list.list.map(item => console.log(item.weather?.icon))} */}
            {
                <div>
                    <h1>weather: {list.list[0].weather[0].main}</h1>
                    <h2>temperature: {Math.round((list.list[0].main.temp_max) - kelvin)}</h2>
                    {/* {console.log(list.list[0].dt)}
                    {console.log(list.list[0].dt_txt)}
                    { */}


                    {/* } */}
                    {/* {console.log(new Date(list.list[0].dt*1000+(obj.timezone*1000)))} */}
                </div>

            }
        </article>
    )
}

export default Weatherui
