import React from "react";
import Header from "/src/components/Header.jsx";
import MidSection from "/src/components/MidSection.jsx";
import Map from "/src/components/Map.jsx";
import ContactForm from "/src/components/ContactForm.jsx";

export function Contact() {
  function handleSubmitContact(event) {
    event.preventDefault();
  }

  const formData = new URLSearchParams();

  return (
    <main className="page-content">
      <Header title="CONTACT JOANNA" tagline="See my contact details below." />
      <MidSection
        title="Remember to book your patch test before your lash service."
        info="Contact Joanna to book your complimentary patch test."
      />
      <section className="contact-section">
        <div className="call-text-email">
          <div>
            <h2>Call or Text</h2>
            <p className="contact-details">0422 497 621</p>
          </div>
          <div>
            <h2>Email</h2>
            <p className="contact-details">casuarinalashes@gmail.com</p>
          </div>
        </div>
        <div className="form-container">
          <h2>Contact form</h2>
          <ContactForm />
        </div>
        <Map />
      </section>
    </main>
  );
}

export default Contact;
