import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/src/assets/images/CasuarinaLashesLogo.png'



export function Navbar() {
    return(
        <div className='navbar'>
            <div>
                <img src={logo} alt="business logo" width="150px"/>
            </div>
            <nav >
                <ul className='navbaritems'>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'>Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to='/newclientform'>New client form</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar