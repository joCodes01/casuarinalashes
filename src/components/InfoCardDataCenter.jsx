   import React from 'react'
            
            
    export function InfoCardDataCenter({ title, info }) {
        return(
            
        <div className='info-card'>
            <h2>{ title }</h2>
            <p className="info-center">{ info }</p>
        </div>
        )
    }
    
    export default InfoCardDataCenter