import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"
import { NavLink, Link } from "react-router-dom"

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
                <NavLink to='/'>home</NavLink>
                <NavLink to='#about'>about</NavLink>
                <NavLink to='#services'>services</NavLink>
            </div>
            <div className="grid w-fit">
                <h1 className="font-semibold pb-2 ">Access</h1>
                <NavLink to='login'>login</NavLink>
                <NavLink to='social'>social</NavLink>
                <NavLink to='contact' className=' normal-case'>contact</NavLink>
            </div>

            <div className="grid w-fit ">
                <h1 className="font-semibold pb-2">more</h1>
                <NavLink to='destination'>destination</NavLink>
                <NavLink to='flight'>flight</NavLink>
                <NavLink to='weather'>weather</NavLink>
            </div>

            <div className="pt-4 md:pt-0">
                <div className="gap-x-2.5 text-center flex w-fit text-orange pb-2 text-xl">
                    <NavLink to='https://github.com/salv20' className='p-2 rounded-full bg-gray-700'><FaGithub /></NavLink>
                    <NavLink to='https://twitter.com/Salvati75317889' className='p-2 rounded-full bg-gray-700'><FaTwitter /></NavLink>
                    <NavLink to='https://www.linkedin.com/in/amoke-salvation-6b89a7248/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BIXeMSD9iRoqOs%2BYeoySMiw%3D%3D' className='p-2 rounded-full bg-gray-700'><FaLinkedin /></NavLink>
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
