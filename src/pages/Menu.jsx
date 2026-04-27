import React from "react";
import Header from "/src/components/Header.jsx";
import MidSection from "/src/components/MidSection.jsx";
import menuCircle from "/src/assets/images/menu-circle.png";

export function Menu() {
  return (
    <main className="page-content">
      <Header
        title="Lash Service Menu"
        tagline="Lash Lift/Lamination & Eyelash Extensions."
      />
      <div className="lash-circle-container">
        <img
          className="lash-circle"
          src={menuCircle}
          alt="classic eyelash extensions applied to natural eyelashes."
          width="200px"
          height="200px"
        />
      </div>

      <MidSection layout="menu" />
    </main>
  );
}

export default Menu;
