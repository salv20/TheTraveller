import { FaArrowRight, FaHeart, FaLocationArrow } from 'react-icons/fa'
import { top } from '../../utilities/accesory'
import { NavLink } from 'react-router-dom'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



const Explore = () => {

    const background = ['bgRolex', 'bgObudu', 'bgParis']

    const image = top.img
    const name = top.name
    const location = top.location
    return (
        <section>
            <div className="flex justify-between">
                <h1 className='font-bold uppercase'>dicover the world</h1>
                <button type="button" aria-label='view all' className=' text-orange font-bold'><NavLink to='all'>view all <FaArrowRight className=' inline-block' /></NavLink> </button>
            </div>

            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="flex justify-center px-4 pb-10 my-2 capitalize"
            >
                {image.map((img, index) => (
                    <SwiperSlide key={index} className='mb-12 shadow-lg bg-services p-1'>
                        <img src={img} alt="" className='w-full h-36 sm:h-52' />
                        <h1 className='text-orange'>{name[index]}</h1>
                        <div className='flex justify-between py-2'>
                            <div className='flex space-x-1.5 '>
                                <FaLocationArrow className='mt-1 ' />
                                <h2 className='pb-5'>{location[index]}</h2>
                            </div>
                            <button type="button" aria-label='likebtn' className='hover:text-orange text-black transition-all duration-500 text-xl h-fit mt-1'><FaHeart /></button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    )
}

export default Explore
