import { useEffect, useState } from 'react'
import axios from 'axios';
import ThreeDotsWave from '../components/dotwave';

const Weather = () => {
    const [list, setList] = useState({})
    const [errorWeather, setErrorWeather] = useState('')
    const [errorCountry, setErrorCountry] = useState('')
    const [countryName, setCountryName] = useState([])
    const [search, setSearch] = useState('')
    const [openState, setOpenState] = useState(false)
    const [fetchTime, setFetchTime] = useState(false)


    useEffect(() => {
        if (!search) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords
                    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=28e14ee596e0bdd973822600d621e018`)
                        .then(res => setList(res.data))
                        .catch(err => console.log(err.message))
                },)
        }

        axios.get('https://restcountries.com/v3.1/all')
            .then(res => {
                const countryData = res.data.map(country => country?.name?.common)
                setCountryName(countryData)
            })
            .catch(err => setErrorCountry(err.message))

    }, [])

    useEffect(() => {

        if (search) {

            axios.get(`https://restcountries.com/v3.1/name/${search}`)
                .then(res => {
                    const latlng = res.data[0].latlng
                    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latlng[0]}&lon=${latlng[1]}&appid=28e14ee596e0bdd973822600d621e018`)
                        .then(res => setList(res.data))
                        .catch(err => setErrorWeather(err.message))
                })
                .catch(err => {
                    search && (
                        console.log(err.message)
                    )
                })

        }
    }, [fetchTime])

    return (
        <section className='py-8 bg-heading h-screen'>
            {
                errorCountry ?
                    <div className=' text-red-800 bg-black font-bold p-5 text-center mt-10 mx-auto w-3/4'>
                        {errorCountry} please check internet connection and reload.
                    </div>
                    :
                    countryName.length && list ?
                        <div className="w-5/6 mx-auto">
                            <article className="">
                                <div className="flex justify-between space-x-3">
                                    <input
                                        type="search" name="" id="" placeholder="Search destinations" className="outline-none py-2 rounded-lg text-center w-3/4 border-2"
                                        value={search}
                                        onChange={
                                            (e) => {
                                                setOpenState(true);
                                                setSearch(e.target.value);
                                            }
                                        }
                                    />
                                    <button
                                        type="button"
                                        aria-label="search"
                                        className=" capitalize bg-orange text-white font-bold text-center px-6 rounded-lg"
                                        onClick={() => {
                                            setOpenState(false);
                                            setFetchTime(!fetchTime);
                                        }}
                                    >search</button>
                                </div>
                            </article>

                            <article
                                className={`${countryName.length && openState ? 'block' : 'hidden'} searchOptions absolute overflow-y-scroll h-80 bg-white w-3/4 md:w-1/2 pl-6 pt-2 space-y-2 font-semibold mt-2`}>
                                {

                                    countryName?.filter(country => country.toLowerCase().includes(search.toLowerCase()))?.map((country, index) => (
                                        <div key={index} className=' cursor-pointer'>
                                            <p
                                                onClick={e => {
                                                    setOpenState(false);
                                                    setFetchTime(!fetchTime);
                                                    (e.target.textContent) && setSearch(e.target.textContent);
                                                }
                                                }
                                            >{country}</p>
                                        </div>
                                    ))}
                            </article>
                            {/*  */}
                            <article>
                                {console.log(list)}
                                <h1>nigeria</h1>
                            </article>
                        </div>
                        :
                        <ThreeDotsWave />
            }

        </section>
    )
}


export default Weather
