import React from 'react'

export function Testimonial({content, clientName}) {

    return(
        <div className="testimonial-container">
            <h4>{ content }</h4>
            <p>{ clientName }</p>
        </div>

    )
}

export default Testimonial