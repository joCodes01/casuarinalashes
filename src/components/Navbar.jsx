import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/src/assets/images/CasuarinaLashesLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars' 
import { useState } from 'react'




export function Navbar() {

const [mobileNav, setMobileNav] = useState(false);


function toggleMobileNav() {
    setMobileNav(prev => !prev);
}

function closeMobileNav() {
    setTimeout(toggleMobileNav, 300)

}
    return(<>
        <nav className='navbar'>
            <div className="logo-container">
                <NavLink onClick={ closeMobileNav } to='/'><img src={logo} alt="business logo" width="150px"/></NavLink>
            </div>
            
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
        
        <nav className="navbar-mobile">
             <div className="mobile-bar">
                 <div className="logo-container-mobile">
                    <NavLink onClick={ closeMobileNav } to='/'><img src={logo} alt="business logo" width="150px"/></NavLink>
                    
                </div>
                             
                <button aria-label="open nav menu" onClick={ toggleMobileNav }>
                    <FontAwesomeIcon className="hamburger-btn" size="2x" icon={faBars} /> 
                </button>
             </div>
            
            {mobileNav && (
                <ul className='navbaritems-mobile'>
                    <li>
                        <NavLink onClick={ closeMobileNav } to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={ closeMobileNav } to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={ closeMobileNav } to='/menu'>Menu</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={ closeMobileNav } to='/contact'>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={ closeMobileNav } to='/newclientform'>New client form</NavLink>
                    </li>
                </ul>

            )}
        </nav>
        </>
    )
}

export default Navbar