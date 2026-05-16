import React, { useState } from "react";
import "./Contact.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";

import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const whatsappNumber = "8078623915"; // Replace with your WhatsApp number (without + or -)

  const handleSubmit = (e) => {
  e.preventDefault();

  const message = `
🏨 New Hotel Contact Request

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📌 Subject: ${formData.subject}
💬 Message: ${formData.message}
  `;

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");

  setFormData({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
};

  return (
    <div className="contact-page">
      {/* ================= HERO SECTION ================= */}

      <section className="contact-hero">
        <div className="overlay"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="subtitle">Luxury Hotel & Resort</span>

          <h1>Contact Our Hospitality Team</h1>

          <p>
  We are here to assist you with hotel reservations, luxury stays,
  events, room bookings, customer support, and business inquiries.
  Feel free to connect with us anytime.
</p>
        </motion.div>
      </section>

      {/* ================= CONTACT SECTION ================= */}

      <section className="contact-section">
        {/* LEFT SIDE */}

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Get In Touch</h2>

          <p className="info-text">
            Experience premium hospitality and professional customer service.
            Our support team is available 24/7 to assist you.
          </p>

          {/* INFO BOX */}

          <div className="info-card">
            <div className="icon-box">
              <FaPhoneAlt />
            </div>

            <div>
              <h4>Phone Number</h4>
              <p>+91 8078623915</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-box">
              <FaEnvelope />
            </div>

            <div>
              <h4>Email Address</h4>
              <p>ganeshsonirmg2004@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-box">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h4>Hotel Location</h4>
              <p>Hotel Green Point, Ramgarh Shekhawati(sikar), Rajasthan, India</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-box">
              <FaClock />
            </div>

            <div>
              <h4>Working Hours</h4>
              <p>Open 24 Hours • 7 Days A Week</p>
            </div>
          </div>

          {/* SOCIAL ICONS */}

          <div className="social-icons">
            <a href="https://www.facebook.com/share/1HWSVQktge/">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/ganesh_soni_99?igsh=MTNvOXgzMjN2bm9hNA==">
              <FaInstagram />
            </a>

            <a href="https://www.linkedin.com/in/ganesh-soni-a45575339?utm_source=share_via&utm_content=profile&utm_medium=member_android">
              <FaLinkedinIn />
            </a>

            
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}

        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send Us A Message</h2>

            <div className="input-group">
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              rows="7"
              placeholder="Write Your Message..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">
              Send Message <FaPaperPlane />
            </button>
          </form>
        </motion.div>
      </section>

      {/* ================= MAP SECTION ================= */}

      <section className="map-section">
  <iframe
    title="hotel-map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.472189134534!2d74.96744819999999!3d28.1625518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3914a15714689b2d%3A0xffbad246f7e4ba8f!2sGreen%20point%20hotel%20and%20restaurant!5e0!3m2!1sen!2sin!4v1778757491859!5m2!1sen!2sin"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</section>
    </div>
  );
};

export default ContactPage;