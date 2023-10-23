import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <div>
            <h1>footer main</h1>
            <Link to='social' className="fixed top-3/4 md:text-xl font-bold -right-9 bg-darkpink px-8 py-1 rotate-90 text-black">social</Link>

        </div>
    )
}

export default Footer
