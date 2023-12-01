import axios from 'axios';
import React from 'react'

const UpdateValidation = ({ id }) => {
    return (
        <div>
            <button
                className=" mx-auto px-14 py-3 capitalize rounded-3xl bg-orange font-bold text-white"
                onClick={(e) => {
                    e.preventDefault();
                    console.log('hello');
                    axios.put(`http://localhost:3020/Bookings/${id}`, {
                        airline: 'america',
                        from: 'canada',
                        to: 'nigeria',
                    })
                    // const destination = contryName?.filter(country => (country.toLowerCase() === to.toLowerCase()))
                    // if (!(destination?.length)) {
                    //     document.querySelector('.errorTo').classList.remove('hidden')
                    // }
                    // const takeOff = contryName?.filter(country => (country.toLowerCase() === updateData.from.toLowerCase()))
                    // if (!(takeOff?.length)) {
                    //     document.querySelector('.errorFrom').classList.remove('hidden')
                    // }
                    // if (!startDate) {
                    //     document.querySelector('.errordepart').classList.remove('hidden')
                    // }
                    // if (!lastDate) {
                    //     document.querySelector('.errorreturn').classList.remove('hidden')
                    // }
                    // // // 
                    // console.log(destination, takeOff, to, updateData.departureDate, updateData.returnDate);
                    // if (takeOff && destination && updateData.depart && updateData.back) {
                    //     setupdateData({
                    //         ...updateData, from: takeOff, to: destination, airline: (updateData.airline), class: (updateData.class), departureDate: (updateData.depart), returnDate: (updateData.back), passenger: (formdata.passenger)
                    //     })
                    //     // setTo('')
                    //     axios.patch(`${jsonUrl}/${path.state}`, updateData).then(res => console.log(res))
                    //     console.log('hello');
                    // }
                }}
            >
                update
            </button>
        </div>
    )
}

export default UpdateValidation
