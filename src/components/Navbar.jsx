import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/src/assets/CasuarinaLashesLogo.png'



export function Navbar() {
    return(
        <div className='navbar'>
            <div>
                <img src={logo} alt="business logo" width="150px"/>
            </div>
            <nav className='navbaritems'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/menu'>Menu</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/newclientform'>New client form</NavLink>
            </nav>
        </div>
    )
}

export default Navbar