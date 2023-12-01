import axios from 'axios';
import { useState, useEffect } from 'react'
import { CountryApi } from '../../components/Api';
import { useNavigate } from 'react-router-dom';
const jsonUrl = 'http://localhost:3020/Bookings'
const UpdateValidation = ({ id, updateData, to, lastDate, startDate }) => {
    const navigate = useNavigate()
    const [jsondata, setJsonData] = useState({})
    const [contryName, setCountryName] = useState()
    useEffect(() => {
        const countries = async () => {

            const getCurrentUrl = await axios.get(`${jsonUrl}/${id}`)
            const completedata = getCurrentUrl.data
            setJsonData(completedata)
            // 
            const data = await CountryApi()
            if (typeof data === 'string') {
                console.log('please reload');
            } else {
                const finalData = (data.map(country => country.name.common));
                setCountryName(finalData)
            }
        }
        countries()
    }, [])


    return (
        <div>
            <button
                className=" mx-auto px-14 py-3 capitalize rounded-3xl bg-orange font-bold text-white"
                onClick={(e) => {
                    e.preventDefault();
                    const destination = contryName?.filter(country => (country.toLowerCase() === to.toLowerCase()))

                    if (!(destination?.length)) {
                        document.querySelector('.errorTo').classList.remove('hidden')
                    }
                    const takeOff = contryName?.filter(country => (country.toLowerCase() === updateData.from.toLowerCase()))
                    if (!(takeOff?.length)) {
                        document.querySelector('.errorFrom').classList.remove('hidden')
                    }
                    if (!startDate) {
                        document.querySelector('.errordepart').classList.remove('hidden')
                    }
                    if (!lastDate) {
                        document.querySelector('.errorreturn').classList.remove('hidden')
                    }
                    // // // 

                    if (takeOff.length && destination.length && startDate && lastDate) {
                        const post = {
                            ...jsondata,
                            from: updateData.from,
                            to: to,
                            airline: updateData.airline,
                            passenger: updateData.passenger,
                            class: updateData.class,
                            departureDate: startDate,
                            returnDate: lastDate
                        }
                        axios.put(`${jsonUrl}/${id}`, post)
                        navigate('/bookings', { replace: true })
                    }
                }}>
                update
            </button>
        </div >
    )
}

export default UpdateValidation
