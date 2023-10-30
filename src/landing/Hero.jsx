import { useContext } from 'react'
import { FaPlay } from 'react-icons/fa'
import { appcontext } from '../routes/landing.route'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { DefaultPlayer as Video } from "react-html5video"
import 'react-html5video/dist/styles.css'
import { useState } from 'react'
const Hero = () => {

    const container = {
        initial: {
            opacity: 0,
            y: '50%'
        },
        animate: {
            opacity: 1,
            y: '0%',
            scrollBehavior: 'smooth',
            transition: {
                type: "fade",
                delay: .6,
                duration: 1,
            }
        }
    }

    const { clickFunc } = useContext(appcontext)
    const [play, setPlay] = useState(false)
    return (
        <section onClick={clickFunc}
            className=' bg-heroone py-5 md:py-14'
        >
            <article className='md:flex px-6 gap-y-10 text-center md:text-left'>
                <div className='space-y-5 md:w-1/2'>
                    <h1 className='uppercase font-bold text-darkpink '>best destination around the world</h1>
                    <p className='font-semibold  text-xl md:w-3/4 leading-relaxed'>Travel, enjoy and live a new and full life.</p>
                    <motion.p className='md:w-3/4 md:leading-relaxed'
                        variants={container}
                        initial='initial'
                        animate='animate'
                    >
                        We make travel planning easy, our services includes;
                        flight bookings,
                        helping you pick out the best destinations,
                        checking the average weather conditions of your preferred travel options.
                    </motion.p>
                    <motion.p
                        className='uppercase font-bold text-darkpink md:pt-4'
                        variants={container}
                        initial='initial'
                        animate='animate'
                    >“Travel far enough, you meet yourself.”</motion.p>

                    <div className='space-y-4 md:flex md:space-x-5 md:space-y-0 md:pt-6'>
                        <button type="button" className='bg-orange px-4 py-2.5 capitalize rounded-lg text-white font-semibold '>
                            <Link to='discover'>find out more</Link>
                        </button>
                        <div className="flex space-x-4 justify-center md:justify-normal" onClick={() => setPlay(!play)}>
                            <button type="button" className='bg-lightorange text-white rounded-full p-3.5'  >
                                <FaPlay />
                            </button>
                            <button type="button" > watch video </button>
                        </div>
                    </div>

                    <div className={!play ? 'hidden' : 'mx-auto lg:pt-10 w-3/4 block  md:hidden '}>
                        {play &&
                            <Video loop
                                controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                                poster="http://sourceposter.jpg"
                            >
                                <source src="/VID.mp4" type="video/mp4" />
                            </Video>
                        }
                    </div>

                </div>
                <div>
                    <motion.img src={'/cartoon.png'} alt="" className='md:w-4/5 w-1/2 mx-auto'
                        initial={{ opacity: 0, x: '80%' }}
                        animate={{ opacity: 1, x: '0%', scrollBehavior: 'smooth' }}
                        transition={{ type: "tween", stiffness: 100, delay: .5, duration: 1, }}
                    />
                </div>
            </article>

            <div className={!play ? 'hidden' : 'mx-auto lg:pt-10 w-2/5 hidden md:block'}>
                {play &&
                    <Video loop
                        controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                        poster="http://sourceposter.jpg"
                    >
                        <source src="/VID.mp4" type="video/mp4" />
                    </Video>
                }
            </div>
        </section>
    )
}

export default Hero
