import React from 'react'

export function Map() {

    return(
        <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14051.327933256824!2d153.5688083!3d-28.30341335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1762334566661!5m2!1sen!2sau" 
                allowfullscreen="" 
                width="400px"
                height="300px;"
                id="googlemap"
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        
        </div>
    )
}

export default Map