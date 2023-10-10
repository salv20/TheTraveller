import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaAngleDown } from 'react-icons/fa'

const Header = () => {
    const options = ['destination, flights,currency, weather, login ']
    return (
        <header>
            <h1>anwuli</h1>
            <nav>
                {options.map((option, index) => <NavLink to='/' key={index}>{option}</NavLink>)}
                <NavLink>sign up </NavLink>
                <button type="button">en <FaAngleDown /></button>
            </nav>
        </header>
    )
}

export default Header
