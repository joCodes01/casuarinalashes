import React from 'react'
import Header from '/src/components/Header.jsx'
import MidSection from '/src/components/MidSection.jsx'


export function Home() {

   return(
            <main className="routerPage">
                <Header 
                    title="LASH LIFT & EXTENSIONS" 
                    tagline="Enjoy elegant, effortless & naturally beautiful lashes from beach walks to evenings out."               
                />
                <MidSection layout="grid"/>
            </main>
    )
}

export default Home