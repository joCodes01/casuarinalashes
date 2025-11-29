import React from "react";
import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(null);

  async function handleSubmitContact(event) {
    event.preventDefault();

    const formData = new URLSearchParams();

    formData.append("client-name", name);
    formData.append("client-email", email);
    formData.append("client-message", message);
    formData.append("submit", "1");

    try {
      const resp = await fetch(
        "http://localhost:2487/lash-api/lash-contact-mailer.php",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${resp.status}`);
      }

      const data = await resp.json();
      setResponse(data.message);

      if (data.success) {
        console.log("Email sent: ", data);
      }
    } catch (error) {
      console.error("Error sending the form: ", error);
      alert("There was an error sending the form, please try again.");
    }
    setName("");
    setEmail("");
    setMessage(
      "Thank you for your message! Jo will be in touch with you soon."
    );
  }

  return (
    <>
      <form onSubmit={handleSubmitContact} className="contact-form">
        <div className="contact-form-inputs">
          <div>
            <label htmlFor="client-name">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              name="client-name"
              type="text"
              value={name}
            />
          </div>
          <div>
            <label htmlFor="contact-email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              name="client-email"
              type="text"
              value={email}
            />
          </div>
          <div>
            <label htmlFor="contact-message">Message</label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              name="client-message"
              value={message}
            ></textarea>
          </div>
          <button className="button-style" name="submit" type="submit">
            Send
          </button>
        </div>
      </form>

      {response && <p>{response}</p>}
    </>
  );
}

export default ContactForm;
