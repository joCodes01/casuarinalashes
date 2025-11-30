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
      <Header
        title="LASH TECH IN CASUARINA"
        tagline="Book your complimentary consultation."
      />
      <MidSection
        title="Free of charge consultation"
        info="A  20-30 minute consultation is required for every new client to discuss your lashing requirements and do a patch test by placing a little glue or lift solution on your skin and if you’re booking for extensions then a few short lashes to the outer corner of each eye."
      />
      <section className="contact-section">
        <div className="contact-items">
          <div classname="contact-left">
            <div className="call-text">
              <div>
                <h2>Call or Text</h2>
                <p className="contact-details">0422 497 621</p>
              </div>
              <div>
                <h2>Email</h2>
                <p className="contact-details">casuarinalashes@gmail.com</p>
              </div>
            </div>
            <Map />
          </div>
          <div className="form-container">
            <h2>Online form</h2>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
