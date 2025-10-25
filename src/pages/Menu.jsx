import React from 'react'
import Header from '/src/components/Header.jsx'


export function Menu() {

   return(
            <main className="routerPage">
                <p>Menu page</p>
                 <Header 
                        title="LASH SERVICE MENU" 
                        tagline="Lash Lift/Lamination & Eyelash Extensions."               
                    />
            </main>
    )
}

export default Menu