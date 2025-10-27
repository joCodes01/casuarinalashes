import React from 'react'
import Header from '/src/components/Header.jsx'
import MidSection from '/src/components/MidSection.jsx'



export function About() {


   


   return(
        <>
            <main className="routerPage">
                 <Header 
                        title="LASH ARTIST IN CASUARINA" 
                        tagline="Enjoy some time out to relax and unwind in comfort while I beautify your lashes!"               
                    />
                    
                <MidSection 
                    title="Lash trained at pinewood film studios UK with high standards in service and application." 
                    info="Qualified and experienced Beauty Specialist & Make-up Artist since 2002. "
                />
            </main>
        </>
    )
}

export default About