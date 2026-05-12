const Footer = () => {
  return (
    <footer className="footer">

      <h3>SUBSCRIBE FOR LATEST UPDATES</h3>

      <input
        type="email"
        placeholder="Enter your email"
      />

      <div className="footer-links">

        <div>
          <h4>QUICK LINKS</h4>
          <p>Hotels</p>
          <p>Dining</p>
          <p>Offers</p>
        </div>

        <div>
          <h4>CUSTOMER SUPPORT</h4>
          <p>contacttaj@tajhotels.com</p>
        </div>

      </div>

      <p>
        © 2026 The Indian Hotels Company Limited
      </p>

    </footer>
  );
};

export default Footer;