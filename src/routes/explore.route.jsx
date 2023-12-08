
import { useEffect } from 'react'
import { FaHeart } from 'react-icons/fa'
import { useOutletContext, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import asyncFunc from '../redux/countryApi/countryAction'
import ThreeDotsWave from '../components/dotwave'

const Explore = ({ countryData, fetchCountry }) => {
    const navigate = useNavigate()
    let flags = []
    let names = []
    const search = useOutletContext()
    const restnames = JSON.parse(localStorage.getItem('restnames'))
    const restflags = JSON.parse(localStorage.getItem('restflags'))
    if (localStorage.restflags && localStorage.restnames) {
        flags = restflags
        names = restnames
    }

    useEffect(() => {
        fetchCountry()
    }, [])

    const storage = () => {
        localStorage.setItem('restflags', JSON.stringify(flags))
        localStorage.setItem('restnames', JSON.stringify(names))
    }

    return (
        <section>
            {(!countryData || (countryData.loading)) && <ThreeDotsWave />}

            {
                countryData &&
                !(countryData.loading) &&
                (
                    !countryData.country.length ?
                        <div className=' text-red-800 bg-black font-bold p-5 text-center mt-10 mx-auto w-3/4'>
                            {countryData.error} please check internet connection and reload.
                        </div>
                        :

                        <article className='grid grid-cols-2 gap-4 '>
                            {
                                countryData.country.map((country, index) => (
                                    <div key={index} className='shadow-lg bg-services p-1 bg-white '>
                                        <img src={country.flags.svg} alt="" className='w-full h-36 sm:h-52' />
                                        <p>{country.name.common}</p>
                                        <div className='flex justify-between py-2 pr-2'>
                                            <button className=' bg-visit py-1 px-5 rounded-lg font-bold'
                                                onClick={(e) => {
                                                    const parentElement = (e.currentTarget.closest('div').parentElement.children)
                                                    const name = parentElement[1].textContent
                                                    console.log(name);
                                                    navigate('/bookings', { state: name })
                                                }}
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
                                                    }}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </article>
                )
            }
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        countryData: state,
    };
};
const mapDispatchProps = (dispach) => {
    return {
        fetchCountry: () => dispach(asyncFunc()),
    };
};



export default connect(mapStateToProps, mapDispatchProps)(Explore)
