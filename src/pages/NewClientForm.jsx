import React from "react";
import Header from "/src/components/Header.jsx";
import MidSection from "/src/components/MidSection.jsx";
import JotForm from "/src/components/JotForm.jsx";
import newClient from "/src/assets/images/new-client-circle.png";

export function NewClientForm() {
  return (
    <main className="page-content">
      <Header title="New Client Form" tagline="Welcome to Casuarina lashes." />
      <div className="lash-circle-container">
        <img
          className="lash-circle"
          src={newClient}
          alt="classic eyelash extensions applied to natural eyelashes."
          width="200px"
          height="200px"
        />
      </div>
      <MidSection
        title="Please complete this form before your first appointment"
        info="Thank you"
        layout="center"
      />
      <JotForm />
    </main>
  );
}
export default NewClientForm;
