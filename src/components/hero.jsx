import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = ({ search, setSearch }) => {
    const navigate = useNavigate()
    const ref = useRef()
    return (
        <div className="flex justify-between py-5 space-x-3">
            <input
                type="search" name="" id="" placeholder="Search destinations" className="outline-none py-2 rounded-lg text-center w-3/4 border-2"
                value={search}
                ref={ref}
                onChange={
                    (e) => {
                        setSearch(e.target.value)
                        navigate('discover')
                    }
                }
            />
            <button
                type="button"
                aria-label="search"
                className=" capitalize bg-orange text-white font-bold text-center px-6 rounded-lg"
                onClick={() => {
                    setSearch(search)
                    !search && ref.current.focus()
                }}
            >search</button>
        </div>
    )
}

export default Hero
