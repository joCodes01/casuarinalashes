import React from 'react'
import { NavLink } from 'react-router-dom'



export function Footer() {
    return(
        <div className='footer'>
           
            <nav className='footeritems'>
                <NavLink to='/termsandconditions'>Terms and Conditions</NavLink>
                <NavLink to='/privacypolicy'>PrivacyPolicy</NavLink>
                <NavLink to='/accessibilitystatement'>Accessibility Statement</NavLink>
            </nav>
        </div>
    )
}

export default Footer