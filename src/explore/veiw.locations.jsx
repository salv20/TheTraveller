import React from 'react'
import { FaHeart } from 'react-icons/fa'
const Locations = () => {
    const image = ["/rolex.webp", "/obudu.jpg", "/paris.jpg", "/rolex.webp", "/obudu.jpg", "/paris.jpg"]
    return (
        <section className='grid grid-cols-2 gap-4'>
            {image.map((img, index) => (
                <div key={index} className='shadow-lg bg-services p-1 bg-white '>
                    <img src={img} alt="" className='w-full h-36 sm:h-52' />
                    <div className='flex justify-between py-2 pr-2'>
                        <button className='hover:bg-orange hover:text-white bg-transparent transition-all duration-1000 py-1 hover:px-5 rounded-lg font-bold'>Visit</button>
                        <button type="button" aria-label='likebtn' className='hover:text-orange text-black transition-all duration-500 text-xl h-fit mt-1'><FaHeart /></button>
                    </div>
                </div>
            ))}

        </section>
    )
}

export default Locations
