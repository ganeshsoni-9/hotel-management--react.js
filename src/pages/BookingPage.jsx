import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    eventType: "",
    requirements: "",
  });

  /* =========================
      INPUT CHANGE
  ========================== */

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  /* =========================
      SUBMIT FUNCTION
  ========================== */

  const handleSubmit = (e) => {

    e.preventDefault();

    /* VALIDATION */

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.date ||
      !formData.eventType
    ) {

      toast.error(
        "⚠️ Please fill all required fields!"
      );

      return;

    }

    /* OLD BOOKINGS */

    const oldBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    /* NEW BOOKING */

    const newBooking = {

      id: Date.now(),

      ...formData,

      bookingTime:
        new Date().toLocaleString(),

    };

    /* SAVE BOOKINGS */

    const updatedBookings = [
      ...oldBookings,
      newBooking,
    ];

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    /* SUCCESS MESSAGE */

    toast.success(
      "🎉 Booking Confirmed Successfully!"
    );

    /* =========================
        WHATSAPP MESSAGE
    ========================== */

    const whatsappMessage = `

🌟 NEW EVENT BOOKING 🌟

👤 Full Name: ${formData.fullName}

📧 Email: ${formData.email}

📱 Phone: ${formData.phone}

📅 Event Date: ${formData.date}

🎉 Event Type: ${formData.eventType}

📝 Requirements:
${formData.requirements}

    `;

    /* =========================
        YOUR WHATSAPP NUMBER
    ========================== */

    const whatsappNumber =
      "918078623915";

    /* OPEN WHATSAPP */

    window.open(

      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,

      "_blank"

    );

    /* RESET FORM */

    setFormData({

      fullName: "",
      email: "",
      phone: "",
      date: "",
      eventType: "",
      requirements: "",

    });

    /* REDIRECT */

    setTimeout(() => {

      navigate("/dashboard");

    }, 1500);

  };

  return (

    <div style={styles.wrapper}>

      <div style={styles.card}>

        <h1 style={styles.heading}>
          Event Booking
        </h1>

        <p style={styles.subheading}>
          Book your luxury celebration now
        </p>

        <form onSubmit={handleSubmit}>

          {/* FULL NAME */}

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            style={styles.input}
          />

          {/* EMAIL */}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />

          {/* PHONE */}

          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />

          {/* DATE */}

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={styles.input}
          />

          {/* EVENT TYPE */}

          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            style={styles.input}
          >

            <option value="">
              Select Event Type
            </option>

            <option>
              Birthday Celebration
            </option>

            <option>
              Wedding Ceremony
            </option>

            <option>
              Anniversary
            </option>

            <option>
              DJ Night
            </option>

          </select>

          {/* REQUIREMENTS */}

          <textarea
            name="requirements"
            placeholder="Special Requirements"
            rows="4"
            value={formData.requirements}
            onChange={handleChange}
            style={styles.textarea}
          />

          {/* BUTTON */}

          <button
            type="submit"
            style={styles.button}
          >
            Confirm Booking
          </button>

        </form>

      </div>

    </div>

  );

};

/* =========================
    STYLES
========================== */

const styles = {

  wrapper: {

    minHeight: "100vh",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    background:
      "linear-gradient(135deg,#f5f5f5,#ececec)",

    padding: "20px",

  },

  card: {

    width: "100%",

    maxWidth: "650px",

    background: "#fff",

    padding: "40px",

    borderRadius: "24px",

    boxShadow:
      "0 10px 35px rgba(0,0,0,0.12)",

    textAlign: "center",

  },

  heading: {

    fontSize: "40px",

    marginBottom: "10px",

    fontWeight: "800",

    color: "#111",

  },

  subheading: {

    color: "#666",

    marginBottom: "30px",

    fontSize: "16px",

  },

  input: {

    width: "100%",

    padding: "16px",

    marginBottom: "18px",

    borderRadius: "12px",

    border: "1px solid #ddd",

    fontSize: "16px",

    outline: "none",

    background: "#fafafa",

  },

  textarea: {

    width: "100%",

    padding: "16px",

    marginBottom: "18px",

    borderRadius: "12px",

    border: "1px solid #ddd",

    fontSize: "16px",

    outline: "none",

    background: "#fafafa",

    resize: "none",

  },

  button: {

    width: "100%",

    padding: "18px",

    background:
      "linear-gradient(135deg,#111,#333)",

    color: "#fff",

    border: "none",

    borderRadius: "14px",

    fontSize: "18px",

    fontWeight: "700",

    cursor: "pointer",

    transition: "0.3s",

  },

};

export default BookingPage;