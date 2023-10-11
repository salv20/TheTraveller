import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="grid">
            <div>
                <h1>anwuli</h1>
                <p>Spread love everywhere you go.</p>
                <p>we show that we care</p>
            </div>
            <div className="capitalize">
                <div className="">
                    <h1>company</h1>
                    <NavLink to='/'>home</NavLink>
                    <NavLink to='/#about'>about</NavLink>
                    <NavLink to='/#services'>services</NavLink>
                </div>
                <div className="">
                    <h1>contact</h1>
                    <NavLink to='login'>login</NavLink>
                    <NavLink to='social'>social</NavLink>
                    <NavLink to='/'>Help/FAQ</NavLink>
                </div>

                <div className="">
                    <h1>more</h1>
                    <NavLink to='destination'>destination</NavLink>
                    <NavLink to='flight'>flight</NavLink>
                    <NavLink to='weather'>weather</NavLink>
                </div>

                <div>
                    <div>
                        <NavLink><FaFacebook /></NavLink>
                        <NavLink><FaTwitter /></NavLink>
                        <NavLink><FaLinkedin /></NavLink>
                    </div>
                    <h1>discover our app</h1>

                    <div className="">
                        <img src="/google.png" alt="" />
                        <img src="/apple.png" alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
