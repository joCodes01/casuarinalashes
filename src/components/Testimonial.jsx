import React from "react";

export function Testimonial({ content, clientName }) {
  return (
    <div className="testimonial-container">
      <p className="testimonial-text">{content}</p>
      <p className="testimonial-name">{clientName}</p>
    </div>
  );
}

export default Testimonial;
