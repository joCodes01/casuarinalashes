import React from 'react'
import Header from '/src/components/Header.jsx'


export function About() {

   return(
        <>
            <main className="routerPage">
                <p>About page</p> 
                 <Header 
                        title="LASH ARTIST IN CASUARINA" 
                        tagline="Enjoy some time out to relax and unwind in comfort while I beautify your lashes!"               
                    />
            </main>
        </>
    )
}

export default About