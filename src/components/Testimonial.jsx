import React from 'react'

export function Testimonial({content, clientName}) {

    return(
        <div className="testimonial-container">
            <h5>{ content }</h5>
            <p>{ clientName }</p>
        </div>

    )
}

export default Testimonial