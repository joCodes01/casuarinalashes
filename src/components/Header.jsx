import React from "react";

export function Header({ title, tagline }) {
  return (
    <div className="header">
      <div className="headerContainer">
        <section className="headeritems">
          <h1>{title}</h1>
          <p className="headertag">{tagline}</p>
        </section>
      </div>
    </div>
  );
}

export default Header;
