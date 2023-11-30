import { useState, useEffect } from "react"
import { CountryApi } from "../../components/Api"
import axios from "axios"
// const jsonUrl = 'https://bookings-pvq7.onrender.com/Bookings'
const jsonUrl = 'http://localhost:3020/Bookings'
const Bookvalidation = ({ formdata, to, bookings, setBookings }) => {
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
        bookings.id && axios.post(jsonUrl, bookings)
    }, [bookings])

    return (
        <div>
            <button type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    const idNum = (Math.floor(Math.random() * 2000));
                    const priceNum = (Math.round(Math.random() * 50));
                    const time = (Math.round(Math.random() * 10) + 1);


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

                        setBookings({
                            ...bookings, id: idNum, from: takeOff[0], to: destination[0], airline: (formdata.airline), fee: `${priceNum}.00`, duration: `${time}hrs`
                        })
                    }
                }}
                className=" mx-auto px-14 py-3 capitalize rounded-3xl bg-orange font-bold text-white">
                Book flight</button>
        </div>
    )
}

export default Bookvalidation
