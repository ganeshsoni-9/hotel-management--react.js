import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      {/* NEWSLETTER */}
      <div className="footer-top">
        <h2>SUBSCRIBE FOR LATEST OFFERS</h2>
      </div>

      {/* LINKS SECTION */}
      <div className="footer-links">

        <div className="footer-box">
          <h3>🏨 HOTEL</h3>

          <div className="footer-items">
            <Link to="/about">ABOUT</Link><br />
            <Link to="/offers">OFFERS</Link><br />
            <Link to="/food">FOOD</Link><br />
            <Link to="/events">EVENTS</Link><br />
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>

        <div className="footer-box">
          <h3>📞 SUPPORT</h3>

          <div className="footer-items">
            <Link to="/contact">Contact Us</Link><br />
            <Link to="/help">Help Center</Link>
          </div>
        </div>

        <div className="footer-box">
          <h3>🌐 FOLLOW US</h3>

          <div className="social">

  <a href="https://www.facebook.com/share/1HWSVQktge/" target="_blank" rel="noreferrer">
    <FaFacebookF />
  </a>

  <a href="https://www.instagram.com/ganesh_soni_99?igsh=MTNvOXgzMjN2bm9hNA==" target="_blank" rel="noreferrer">
    <FaInstagram />
  </a>

  <a href="https://youtube.com/@ganeshsoni-y5k?si=twlzK4WhQsvgMxHZ" target="_blank" rel="noreferrer">
    <FaYoutube />
  </a>

</div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom"><br /><br />
        <p>© 2026 Royal Stay Hub. All Rights Reserved.</p>
        <p>Luxury Hospitality Experience</p>
      </div>

    </footer>
  );
};

export default Footer;