import { useState, useEffect } from "react"
import { CountryApi } from "../../components/Api"
import axios from "axios"
const jsonUrl = 'https://jsondata-mk5d.onrender.com/Bookings'

const Bookvalidation = ({ formdata, to }) => {
    const [contryName, setCountryName] = useState()

    useEffect(() => {
        const countries = async () => {
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
    useEffect(() => {
        const apiData = async () => {
            const data = axios.post(jsonUrl,
            )
        }
    }, [])

    return (
        <div>
            <button type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    const destination = contryName?.filter(country => (country.toLowerCase() === to.toLowerCase()))
                    if (!(destination?.length)) {
                        document.querySelector('.errorTo').classList.remove('hidden')
                    }
                    const takeOff = contryName?.filter(country => (country.toLowerCase() === formdata.from.toLowerCase()))
                    if (!(takeOff?.length)) {
                        document.querySelector('.errorFrom').classList.remove('hidden')
                    }
                    if (!formdata.depart) {
                        document.querySelector('.errordepart').classList.remove('hidden')
                    }
                    if (!formdata.back) {
                        document.querySelector('.errorreturn').classList.remove('hidden')
                    }
                    // 
                    if (takeOff.length && destination.length && formdata.depart && formdata.back) {
                        console.log(formdata, to);

                    }
                }}
                className=" mx-auto px-14 py-3 capitalize rounded-3xl bg-orange font-bold text-white">
                Book flight</button>
        </div>
    )
}

export default Bookvalidation
