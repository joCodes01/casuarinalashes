import React from "react";
import Header from "/src/components/Header.jsx";
import MidSection from "/src/components/MidSection.jsx";

export function Menu() {
  return (
    <main className="page-content">
      <Header
        title="LASH SERVICE MENU"
        tagline="Lash Lift/Lamination & Eyelash Extensions."
      />
      <MidSection layout="menu" />
    </main>
  );
}

export default Menu;
