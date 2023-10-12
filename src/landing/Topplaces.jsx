import { FaLocationArrow } from 'react-icons/fa'
const Topplaces = () => {
    return (
        <section className='py-10 text-center text-lightgray px-5 space-y-1 topplaces'>
            <h2 className="font-bold text-semibold uppercase md:text-lg">top selling</h2>
            <h1 className="text-lg md:text-xl  font-semibold capitalize text-black ">destinations</h1>

            <div className='grid sm:grid-cols-3 gap-x-4 md:gap-x-10 pt-5'>

                <div>
                    <img src="/rome.png" alt="" className='w-full  h-72 sm:h-52' />
                    <div className='flex justify-evenly capitalize'>
                        <p>rome italy</p>
                        <p>450k</p>
                    </div>
                    <div className='flex justify-center pt-2'>
                        <FaLocationArrow className='mt-1' />
                        <p> 30 days trip</p>
                    </div>

                </div>
                {/*  */}
                <div>
                    <img src="/washigton.png" alt="" className='w-full h-72 md:h-52' />
                    <div className='flex justify-evenly capitalize'>
                        <p>rome italy</p>
                        <p>450k</p>
                    </div>
                    <div className='flex justify-center pt-2'>
                        <FaLocationArrow className='mt-1' />
                        <p> 30 days trip</p>
                    </div>

                </div>
                {/*  */}
                <div>
                    <img src="/manchester.png" alt="" className='w-full h-72 md:h-52' />
                    <div className='flex justify-evenly capitalize'>
                        <p>rome italy</p>
                        <p>450k</p>
                    </div>
                    <div className='flex justify-center pt-2'>
                        <FaLocationArrow className='mt-1' />
                        <p> 30 days trip</p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Topplaces
