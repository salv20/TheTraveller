
import { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { CountryApi } from '../components/Api'
import { useOutletContext } from 'react-router-dom'
const Explore = () => {
    const [countryData, setCountry] = useState([])
    const flags = []
    const names = []
    const search = useOutletContext()

    useEffect(() => {
        const countries = async () => {
            const data = await CountryApi()
            const finalData = (data?.filter(country => ((country.name.common).toLowerCase()).includes(search.toLowerCase())))
            setCountry(finalData)
        }
        countries()
    }, [search])

    const storage = () => {
        localStorage.setItem('restflags', JSON.stringify(flags))
        localStorage.setItem('restnames', JSON.stringify(names))
        const restnames = JSON.parse(localStorage.getItem('restnames'))
        const restflags = JSON.parse(localStorage.getItem('restflags'))
        console.log(restflags, restnames);
        return [restflags, restnames]
    }
    return (
        <section className='grid grid-cols-2 gap-4'>

            {countryData?.map((country, index) => (
                <div key={index} className='shadow-lg bg-services p-1 bg-white '>
                    <img src={country.flags.svg} alt="" className='w-full h-36 sm:h-52' />
                    <p>{country.name.common}</p>
                    <div className='flex justify-between py-2 pr-2'>
                        <button className=' bg-visit py-1 px-5 rounded-lg font-bold'
                            onClick={(e) => console.log(e.target)}
                        >Visit</button>
                        <button type="button"
                            aria-label='likebtn'
                            className='transition-all duration-500 text-xl h-fit mt-1  text-black'
                        ><FaHeart
                                onClick={e => {
                                    const target = e.currentTarget
                                    target.classList.toggle('liked')
                                    const parentElement = (target.closest('div').parentElement.children)
                                    const flag = parentElement[0].src
                                    const name = parentElement[1].textContent

                                    // ADDING AND REMOVING FLAG SRC AND COUNTRY NAME
                                    if (target.classList.contains('liked')) {
                                        flags.push(flag)
                                        names.push(name)
                                        storage()
                                    } else {
                                        const index = flags.findIndex((src) => src === flag)
                                        flags.splice(index, 1)
                                        names.splice(index, 1)
                                        storage()
                                    }

                                }} />
                        </button>
                    </div>
                </div>
            ))}

        </section>
    )
}

export default Explore
