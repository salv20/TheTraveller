import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"

const Landingfooter = () => {
    return (
        <footer className="grid grid-cols-2 p-5 gap-y-5 gap-x-10 text-lightgray capitalize md:flex md:justify-evenly bg-footer ">
            <div>
                <h1 className="text-black  font-bold pb-2">Travel</h1>
                <p className="normal-case ">Spread love everywhere you go.</p>
                <p className="normal-case"> We show that we care.</p>
            </div>
            <div className="grid w-fit">
                <h1 className="font-semibold pb-2 ">company</h1>
                <a href="#">home</a>
                <a href="#about">about</a>
                <a href="#service">services</a>
            </div>
            <div className="grid w-fit">
                <h1 className="font-semibold pb-2 ">Access</h1>
                <Link to='/signup'><span className="pr-1">sign</span>up</Link>
                <Link to='/login'>login</Link>
                <Link to='/contact'>contact</Link>
            </div>

            <div className="grid w-fit ">
                <h1 className="font-semibold pb-2">more</h1>
                <Link to='/discover'>discover</Link>
                <Link to='/bookings'>flight</Link>
                <Link to='/weather'>weather</Link>
            </div>

            <div className="pt-4 md:pt-0">
                <div className="gap-x-2.5 text-center flex w-fit text-orange pb-2 text-xl">
                    <Link to='https://github.com/salv20' className='p-2 rounded-full bg-gray-700'><FaGithub /></Link>
                    <Link to='https://twitter.com/Salvati75317889' className='p-2 rounded-full bg-gray-700'><FaTwitter /></Link>
                    <Link to='https://www.linkedin.com/in/amoke-salvation-6b89a7248/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BIXeMSD9iRoqOs%2BYeoySMiw%3D%3D' className='p-2 rounded-full bg-gray-700'><FaLinkedin /></Link>
                </div>
                <h1 className="font-semibold">discover our app</h1>
                <div className="grid grid-cols-2 w-fit">
                    <button type="button"><img src="/google.png" alt="" className="w-20" /></button>
                    <button type="button"><img src="/apple.png" alt="" className="w-20" /></button>
                </div>
            </div>
        </footer>
    )
}

export default Landingfooter
