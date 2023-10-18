import { FaLocationArrow } from 'react-icons/fa'
import { top } from '../../utilities/accesory'
import { NavLink } from 'react-router-dom'
const Topplaces = () => {
    const image = top.img
    const name = top.name
    const location = top.location
    return (
        <section className='py-10 text-center text-lightgray px-5 space-y-1 bg-places'>
            <h2 className="font-bold text-semibold uppercase md:text-lg">top selling</h2>
            <h1 className="text-lg md:text-xl  font-semibold capitalize text-black ">destinations</h1>

            <div className='grid gap-y-6 md:grid-cols-3 gap-x-4 md:gap-x-5 pt-5 capitalize font-semibold'>
                {image.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt="" className='w-full  h-64 md:h-52 py-2' />
                        <h1 className='text-orange'>{name[index]}</h1>
                        <div className='flex space-x-1.5 justify-center'>
                            <FaLocationArrow className='mt-1' />
                            <h2 className='pb-5'>{location[index]}</h2>
                        </div>
                        <NavLink className=' text-white px-14 rounded-lg py-2.5 bg-visit'>pay a visit</NavLink>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Topplaces
