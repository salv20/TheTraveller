import { useEffect, useState } from 'react'
import axios from 'axios';

const APIURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=28e14ee596e0bdd973822600d621e018'
const Weather = () => {
    const [list, setList] = useState({})
    const [erro, setError] = useState('')
    useEffect(() => {
        const callWeather = async () => {
            axios.get(APIURL)
                .then(res => setList(res.data))
                .catch(err => setError(err.message))
        }
        callWeather()
    }, [])
    return (
        <div>
            <h1>weather</h1>
            <p>{list?.cnt}</p>
        </div>
    )
}


export default Weather
