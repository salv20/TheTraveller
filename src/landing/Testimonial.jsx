import { testimony } from '../../utilities/accesory';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
const Testimonial = () => {
    const name = testimony.name
    const statement = testimony.statement
    const profile = testimony.profile
    const work = testimony.work
    return (
        <section className='md:flex bg-places'>
            <div className='md:w-5/6 mx-5 leading-loose font-bold md:py-14 text-center md:text-left'>
                <h1 className='uppercase text-lightgray'>Testimonial</h1>
                <div className=" text-xl md:text-2xl">
                    <p >What people say </p>
                    <p>about us</p>
                </div>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                spaceBetween={55}
                effect='fade'
                slidesPerView={1}
                navigation={true}
                pagination={
                    {
                        clickable: true,
                        dynamicBullets: true,
                    }
                }
                className=' flex justify-center px-8 md:px-14 md:my-5 py-8'
            >

                {name.map((per, index) =>
                    <SwiperSlide key={index} className=' text-lightgray'>
                        <div className="lg:mx-14 xl:mx-32">
                            <img src={profile[index]} alt="" className='w-12 absolute' />
                            <p className='mx-14'>{statement[index]}</p>

                        </div>
                        <div className="capitalize font-bold py-2 mx-14 lg:mx-28 xl:mx-48">
                            <p className=' text-black'>{per}</p>
                            <p>{work[index]}</p>
                        </div>

                    </SwiperSlide>

                )
                }
            </Swiper>
        </section>
    )
}

export default Testimonial
