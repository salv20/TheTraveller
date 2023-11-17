import { top } from '../../utilities/accesory';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const Favorite = () => {

    const image = top.img
    const name = top.name


    return (
        <div>
            <h2 className=' capitalize text-orange font-bold text-center pt-4'>favorites</h2>
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
                        <h1 className='text-orange capitalize text-sm text-center'>{name[index]}</h1>
                        <div className=' grid px-5'>
                            <button className='bg-visit py-1 px-5 rounded-lg font-bold'>Visit</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Favorite
