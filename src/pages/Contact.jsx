import React from "react";
import Header from "/src/components/Header.jsx";
import MidSection from "/src/components/MidSection.jsx";
import Map from "/src/components/Map.jsx";

export function Contact() {
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
                <h3>0422 497 621</h3>
              </div>
              <div>
                <h2>Email</h2>
                <h3>casuarinalashes@gmail.com</h3>
              </div>
            </div>
            <Map />
          </div>
          <div className="form-container">
            <h2>Online form</h2>
            <form className="contact-form">
              <div className="contact-form-inputs">
                <div>
                  <label for="contact-name">Name</label>
                  <input type="text"></input>
                </div>
                <div>
                  <label for="contact-email">Email</label>
                  <input type="text"></input>
                </div>
                <div>
                  <label for="contact-message">Message</label>
                  <textarea></textarea>
                </div>
                <button className="button-style" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
