import "./About.css";

const About = () => {
  return (
    <section className="about">

      {/* HERO SECTION */}
      <div className="about-hero">
        <h1>Royal Stay Hub</h1>
        <p className="tagline">
          Where Luxury Meets Comfort & Every Stay Becomes a Royal Experience         <img src="http://youtube.com/post/Ugkxp6UPN1wqTDKtrgLQEWjarii9z2m9tGRn?si=wQ_YRrDiB5vleOOS" alt="" />

        </p>
      </div>

      <div className="about-container">

        <h2>About Us</h2>

        <p>
          <b>Royal Stay Hub</b> is a premium luxury hospitality brand dedicated to
          delivering world-class comfort, elegance, and unforgettable experiences.
          We are not just a hotel — we are a complete luxury lifestyle destination.
        </p>

        <p>
          Founded with a vision to redefine modern hospitality, we combine royal
          aesthetics, modern technology, and personalized service to create a
          truly exceptional stay for every guest.
        </p>

        {/* ===== FEATURES GRID ===== */}
        <div className="about-grid">

          {/* Luxury Rooms */}
          <div className="about-box">
            <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80" alt="Luxury Rooms" />
            <div className="content">
              <h3>🏨 Luxury Rooms</h3>
              <p>Premium suites, royal interiors, and ultimate comfort experience.</p>
            </div>
          </div>

          {/* Fine Dining */}
          <div className="about-box">
            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80" alt="Fine Dining" />
            <div className="content">
              <h3>🍽 Fine Dining</h3>
              <p>Multi-cuisine gourmet restaurants with world-class chefs.</p>
            </div>
          </div>

          {/* Infinity Pools */}
          <div className="about-box">
            <img src="https://imgs.search.brave.com/sDKPZG3l8MtPls4T5hXR-Qmop_rdT5qpbnZsbW0fXOo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly92YW5r/aXJrcG9vbHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI1/LzA3L2N1c3RvbS1s/dXh1cnktaW5maW5p/dHktcG9vbHMtZGVl/cmZpZWxkLWJlYWNo/LTEtNDAweDI4NC5q/cGc" alt="Infinity Pool" />
            <div className="content">
              <h3>🏊 Infinity Pools</h3>
              <p>Relax in luxury pools with stunning scenic views.</p>
            </div>
          </div>

          {/* Spa & Wellness */}
          <div className="about-box">
            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80" alt="Spa & Wellness" />
            <div className="content">
              <h3>💆 Spa & Wellness</h3>
              <p>Holistic spa therapies for relaxation and rejuvenation.</p>
            </div>
          </div>

        </div>

        {/* ===== WHAT COMPANY DOES ===== */}
        <h2>What We Offer</h2>

        <p>
          Royal Stay Hub provides a complete range of luxury hospitality services:
        </p>

        <ul className="services-list">
          <li>✔ Luxury Rooms & Royal Suites</li>
          <li>✔ Fine Dining Restaurants & Buffets</li>
          <li>✔ Wedding & Event Management</li>
          <li>✔ Honeymoon & Romantic Packages</li>
          <li>✔ Airport Pickup & Travel Assistance</li>
          <li>✔ 24/7 Concierge & Personalized Guest Service</li>
          <li>✔ Spa, Wellness & Fitness Centers</li>
          <li>✔ Luxury Pool & Resort Experience</li>
        </ul>

        {/* MISSION */}
        <h2>Our Mission</h2>
        <p>
          To deliver unforgettable luxury experiences with world-class hospitality, unmatched comfort, and deeply personalized service that anticipates every guest’s need. We are committed to creating elegant, memorable moments through attention to detail, refined aesthetics, and warm care. Our goal is to exceed expectations and provide a truly exceptional and lasting impression.
        </p>

        {/* VISION */}
        <h2>Our Vision</h2>
        <p>
          To become a globally recognized luxury hospitality brand known for excellence, trust, and royal experiences that reflect timeless elegance and superior service. We aim to set new standards in hospitality through innovation, authenticity, and guest satisfaction. Our vision is to create iconic destinations that deliver unforgettable, world-class luxury experiences everywhere.
        </p>

        {/* HIGHLIGHT */}
        <div className="highlight">
          ✨ At Royal Stay Hub, we don’t just offer stays — we create royal experiences that last forever.
        </div>

      </div>
    </section>
  );
};

export default About;