import { useEffect, useState } from 'react'
import axios from 'axios';

const APIURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=28e14ee596e0bdd973822600d621e018'
const Weather = () => {
    const [list, setList] = useState({})
    const [errorWeather, setErrorWeather] = useState('')
    const [errorCountry, setErrorCountry] = useState('')
    const [country, setCountry] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const callWeather = async () => {
            axios.get(APIURL)
                .then(res => setList(res.data))
                .catch(err => setErrorWeather(err.message))

            // 

            axios.get('https://restcountries.com/v3.1/all')
                .then(res => {
                    const countryData = res.data.map(country => country?.name?.common)
                    setCountry(countryData)
                    console.log(countryData);
                }
                )
                .catch(err => setErrorCountry(err.message))
        }
        callWeather()

    }, [])


    return (
        <section className='py-8 bg-heading h-screen'>
            <div className="w-5/6 mx-auto">
                <article className="">
                    <div className="flex justify-between space-x-3">
                        <input
                            type="search" name="" id="" placeholder="Search destinations" className="outline-none py-2 rounded-lg text-center w-3/4 border-2"
                            value={search}
                            onChange={
                                (e) => {
                                    setSearch(e.target.value)
                                }
                            }
                        />
                        <button
                            type="button"
                            aria-label="search"
                            className=" capitalize bg-orange text-white font-bold text-center px-6 rounded-lg"
                            onClick={() => {
                                setSearch(search)
                            }}
                        >search</button>
                    </div>
                </article>

                <article className={`${country.length ? 'block' : 'hidden'} searchOptions absolute overflow-y-scroll h-96 bg-white px-4 space-y-2 font-semibold mt-2`}>
                    {country?.map((country, index) => (
                        <div key={index} className=' cursor-pointer'>
                            <p
                                onClick={e =>
                                    (e.target.textContent) && setSearch(e.target.textContent)
                                }
                            >{country}</p>
                        </div>
                    ))}
                </article>

            </div>
        </section>
    )
}


export default Weather
