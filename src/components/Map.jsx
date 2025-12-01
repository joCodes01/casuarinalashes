import React from "react";
import { useState } from "react";

export function Map() {
  const [loaded, setLoaded] = useState();
  return (
    <div className="map-container">
      <div style={{ position: "relative", width: "100%", height: "300px" }}>
        {!loaded && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "grey",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
              color: "var(--cl-text)",
              zIndex: 1,
            }}
          >
            Loading map...
          </div>
        )}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14051.327933256824!2d153.5688083!3d-28.30341335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1762334566661!5m2!1sen!2sau"
          allowfullscreen=""
          width="100%"
          height="100%;"
          id="googlemap"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          onLoad={() => setLoaded(true)}
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
