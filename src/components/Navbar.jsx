import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/src/assets/CasuarinaLashesLogo.png'

const styleNavBar = {
  backgroundColor: 'var(--cl-lightest)',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: "space-between",
  border: "1px solid red",
  padding: "var(--cl-main-padding)"
};


export function Navbar() {
    return(
        <div style={styleNavBar}>
            <div>
                <img src={logo} alt="business logo" width="170px"/>
            </div>
            <nav className='navbar'>
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