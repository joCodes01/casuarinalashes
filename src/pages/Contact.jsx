import React from 'react'
import Header from '/src/components/Header.jsx'
import MidSection from '/src/components/MidSection.jsx'


export function Contact() {
   return(
        <main className="page-content">
              <Header 
                    title="LASH TECH IN CASUARINA" 
                    tagline="Book your complimentary consultation."               
                />
                <MidSection title="Free of charge consultation​"
                info="A  20-30 minute consultation is required for every new client to discuss your lashing requirements and do a patch test by placing a little glue or lift solution on your skin and if you’re booking for extensions then a few short lashes to the outer corner of each eye."/>
        </main>
    )
}

export default Contact