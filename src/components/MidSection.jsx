import React from 'react'
import InfoCardDataCenter from '/src/components/InfoCardDataCenter.jsx'
import InfoCardDataGrid from '/src/components/InfoCardDataGrid.jsx'
import InfoCardDataMenu from '/src/components/InfoCardDataMenu.jsx'


            

export function MidSection({ title, info, layout }) {

    let content;

    if ( layout == 'menu') {
        content = <InfoCardDataMenu />
    } else if ( layout == 'grid') {
        content = <InfoCardDataGrid /> 
    } else {
        content = <InfoCardDataCenter title={title} info={info} />
    }
            

    return(
        <section className='midsection'>
            { content }    
        </section>      
    ) 
}

export default MidSection
