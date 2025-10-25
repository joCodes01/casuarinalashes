import React from 'react'


export function Header({title, tagline}) {
    return(
        <div className='header'>
            <div className='headerContainer'>
                <section className='headeritems'>
                    <h1>{title}</h1>
                    <h3>{tagline}</h3>
                </section>
            </div>
        </div>
    )
}

export default Header