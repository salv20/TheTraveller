import { FaHeart, FaArrowRight } from 'react-icons/fa'
import { top } from '../../utilities/accesory'
import { NavLink } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Locations from '../Pages/explore/locations';
import { useEffect } from 'react';

const url = 'https://tourist-attraction.p.rapidapi.com/photos';
const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'd8d4f4037dmsh519e26bdd9691d0p11d827jsn4afed5607b4b',
        'X-RapidAPI-Host': 'tourist-attraction.p.rapidapi.com'
    },
    body: new URLSearchParams({
        location_id: '8797440',
        language: 'en_US',
        currency: 'USD',
        offset: '0'
    })
};
const Explore = () => {

    useEffect(() => {
        const fetchFunc = async () => {
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result);
                console.log(result.status);
                console.log(result.results);
            } catch (error) {
                console.error(error);
            }
        }
        fetchFunc()

    })

    const image = top.img
    const name = top.name
    return (
        <section>
            <h1 className='font-bold uppercase text-center'>dicover the world</h1>

            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="pb-10 my-2"
            >
                {image.map((img, index) => (
                    <SwiperSlide key={index} className='mb-12 shadow-lg bg-services p-1 bg-white'>
                        <img src={img} alt="" className='w-full h-36 sm:h-52' />
                        <h1 className='text-orange capitalize text-sm'>{name[index]}</h1>
                        <div className='flex justify-between py-2 pr-2'>
                            <button className='hover:bg-orange hover:text-white bg-transparent transition-all duration-1000 py-1 hover:px-5 rounded-lg font-bold'>Visit</button>
                            <button type="button" aria-label='likebtn' className='hover:text-orange text-black transition-all duration-500 text-xl h-fit mt-1'><FaHeart /></button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Locations />
        </section>
    )
}

export default Explore
