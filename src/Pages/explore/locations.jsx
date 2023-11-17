
import { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { CountryApi } from '../../components/Api'
import { useOutletContext } from 'react-router-dom'
const Locations = () => {
    const [countryData, setCountry] = useState([])
    const search = useOutletContext()
    console.log(search);
    useEffect(() => {
        const countries = async () => {
            const data = await CountryApi()
            const finalData = (data?.filter(country => ((country.name.common).toLowerCase()).includes(search.toLowerCase())))
            setCountry(finalData)
        }
        countries()
    }, [search])

    return (
        <section className='grid grid-cols-2 gap-4'>

            {countryData?.map((country, index) => (
                <div key={index} className='shadow-lg bg-services p-1 bg-white '>
                    <img src={country.flags.svg} alt="" className='w-full h-36 sm:h-52' />
                    <p>{country.name.common}</p>
                    <div className='flex justify-between py-2 pr-2'>
                        <button className=' bg-visit py-1 px-5 rounded-lg font-bold'>Visit</button>
                        <button type="button" aria-label='likebtn' className='hover:text-orange text-black transition-all duration-500 text-xl h-fit mt-1'><FaHeart /></button>
                    </div>
                </div>
            ))}

        </section>
    )
}

export default Locations
