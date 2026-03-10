import Header from "/src/components/Header.jsx";

function Book() {
  return (
    <>
      <Header
        title="BOOK APPOINTMENT"
        tagline="Book for your lash service and I'll see you soon! "
      />
      <a
        className="booking-link"
        href="https://app.squareup.com/appointments/book/7b42019zwhj5vg/LDR3GYEHTMN7C/start"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book Appointment
      </a>
      <div className="booking-container">
        <ul>
          <li>
            Book Monday and Tuesday appointments online - contact me for
            alternative dates.
          </li>
          <li>
            I'll text you the address once your first appointment is booked (you
            can also find it in the confirmation email).
          </li>
          <li>
            You must book for a product patch test at least 24 hours before your
            first service.
          </li>
          <li>
            A 50% deposit is required for online bookings - refunded if you give
            at least 24 hours notice of cancellation.
          </li>
        </ul>
        <div className="call-text-email book-call">
          <div>
            <h2>Call or Text</h2>
            <p className="contact-details">0422 497 621</p>
          </div>
          <div>
            <h2>Email</h2>
            <p className="contact-details">casuarinalashes@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;
