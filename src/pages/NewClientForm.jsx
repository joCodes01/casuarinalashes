import React from "react";
import Header from "/src/components/Header.jsx";
import MidSection from "/src/components/MidSection.jsx";
import JotForm from "/src/components/JotForm.jsx";

export function NewClientForm() {
  return (
    <main className="page-content">
      <Header title="New Client Form" tagline="Welcome to Casuarina lashes." />
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
