import { FaLinkedin, FaTwitter, FaFacebookF } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="grid grid-cols-2 gap-y-5 gap-x-10 text-lightgray capitalize px-5 md:flex md:justify-evenly py-5">
            <div>
                <h1 className="text-black  font-bold pb-2">Travel</h1>
                <p className="normal-case ">Spread love everywhere you go.</p>
                <p className="normal-case"> We show that we care</p>
            </div>
            <div className="grid w-fit">
                <h1 className="font-semibold pb-2 ">company</h1>
                <NavLink to='/'>home</NavLink>
                <NavLink to='/#about'>about</NavLink>
                <NavLink to='/#services'>services</NavLink>
            </div>
            <div className="grid w-fit">
                <h1 className="font-semibold pb-2 ">contact</h1>
                <NavLink to='login'>login</NavLink>
                <NavLink to='social'>social</NavLink>
                <NavLink to='/' className=' normal-case'>Help/FAQ</NavLink>
            </div>

            <div className="grid w-fit ">
                <h1 className="font-semibold pb-2">more</h1>
                <NavLink to='destination'>destination</NavLink>
                <NavLink to='flight'>flight</NavLink>
                <NavLink to='weather'>weather</NavLink>
            </div>

            <div className="pt-4 md:pt-0">
                <div className="gap-x-5 text-center flex w-fit text-orange pb-2 text-xl">
                    <NavLink className='p-2 rounded-full bg-gray-700'><FaFacebookF /></NavLink>
                    <NavLink className='p-2 rounded-full bg-gray-700'><FaTwitter /></NavLink>
                    <NavLink className='p-2 rounded-full bg-gray-700'><FaLinkedin /></NavLink>
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

export default Footer
