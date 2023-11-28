import { useState, useEffect } from "react"
import { CountryApi } from "../../components/Api"
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

    return (
        <div>
            <button type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    // console.log(formdata, to);
                    console.log(contryName);
                    const destination = contryName?.filter(country => (country.toLowerCase() === to.toLowerCase()))
                    if (destination?.length) {
                        console.log(destination);
                    } else {
                        document.querySelector('.errorTo').classList.remove('hidden')
                    }
                    const takeOff = contryName?.filter(country => (country.toLowerCase() === formdata.from.toLowerCase()))
                    if (takeOff?.length) {
                        console.log(takeOff);
                    } else {
                        document.querySelector('.errorFrom').classList.remove('hidden')
                    }
                    console.log(formdata);
                    if (formdata.depart) {
                        console.log(formdata.depart);

                    } else {
                        document.querySelector('.errordepart').classList.remove('hidden')
                    }
                    if (formdata.back) {
                        console.log(formdata.back);

                    } else {
                        document.querySelector('.errorreturn').classList.remove('hidden')
                    }

                }}
                className=" mx-auto px-14 py-3 capitalize rounded-3xl bg-orange font-bold text-white">
                Book flight</button>
        </div>
    )
}

export default Bookvalidation
