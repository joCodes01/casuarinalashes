import React from 'react'
import { NavLink } from 'react-router-dom'



export function Footer() {
    return(
        <div className='footer'>
           
            <nav className='footeritems'>
                <NavLink to='/termsandconditions'>TermsAndConditions</NavLink>
                <NavLink to='/privacypolicy'>PrivacyPolicy</NavLink>
                <NavLink to='/accessibilitystatement'>AccessibilityStatement</NavLink>
            </nav>
        </div>
    )
}

export default Footer