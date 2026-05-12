import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BookingConfirmation = () => {
  const navigate = useNavigate();

  return (
    <section className="confirmation-page">
      <div className="confirmation-card">

        <FaCheckCircle className="success-icon" />

        <h1>Booking Confirmed!</h1>

        <p>Your luxury stay has been successfully booked.</p>

        <div className="booking-info">

          <div>
            <span>Hotel</span>
            <h3>Taj Lake Palace</h3>
          </div>

          <div>
            <span>Check In</span>
            <h3>12 May 2026</h3>
          </div>

          <div>
            <span>Check Out</span>
            <h3>15 May 2026</h3>
          </div>

          <div>
            <span>Guests</span>
            <h3>2 Adults</h3>
          </div>

        </div>

        {/* UPDATED BUTTON */}
        <button
          onClick={() => navigate("/payment")}
        >
          Proceed to Payment
        </button>

      </div>
    </section>
  );
};

export default BookingConfirmation;