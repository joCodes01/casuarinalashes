import React from "react";

export function MenuItem({ title, cost, description }) {
  return (
    <div className="menu-item">
      <div className="menu-item-title">
        <h3 className="menu-item-heading">{title}</h3>
        <span className="menu-item-cost">${cost}</span>
      </div>
      <p>{description}</p>
      <span className="menu-item-cost-mobile">${cost}</span>
    </div>
  );
}

export default MenuItem;
