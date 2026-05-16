import "./Testimonials.css";
import { useState } from "react";

import guest1 from "../assets/images/guest1.png";
import guest2 from "../assets/images/guest2.jpg";
import guest3 from "../assets/images/guest3.png";
import guest4 from "../assets/images/guest4.png";
import guest5 from "../assets/images/guest5.png";

const Testimonials = () => {

  const [selectedGuest, setSelectedGuest] = useState(null);

  const reviews = [

    {
      id:1,
      image:guest1,
      name:"Anjali Sharma",
      country:"Mumbai, India",
      profession:"Travel Blogger",
      stay:"Stayed In Royal Luxury Suite",
      review:
        "An unforgettable luxury experience with exceptional hospitality, breathtaking skyline views, elegant interiors, and premium services.",
      experience:
        "Infinity pool, luxury spa, rooftop dining, and professional staff made the stay exceptional.",
      rating:"★★★★★"
    },

    {
      id:2,
      image:guest2,
      name:"Rohan Kapoor",
      country:"Delhi, India",
      profession:"Business Consultant",
      stay:"Stayed In Executive Deluxe Room",
      review:
        "World-class rooms, dining, and wellness services with premium comfort and hospitality.",
      experience:
        "High-speed WiFi, luxury interiors, and peaceful environment for business travel.",
      rating:"★★★★★"
    },

    {
      id:3,
      image:guest3,
      name:"Priya Mehta",
      country:"Ahmedabad, India",
      profession:"Fashion Designer",
      stay:"Stayed In Honeymoon Suite",
      review:
        "A romantic royal stay with beautiful decor and unforgettable luxury experience.",
      experience:
        "Candlelight dinner, spa, and private balcony created magical memories.",
      rating:"★★★★★"
    },

    {
      id:4,
      image:guest4,
      name:"Jackline",
      country:"New York, USA",
      profession:"Photographer",
      stay:"Stayed In Ocean View Resort",
      review:
        "Luxury stay with breathtaking ocean views and premium comfort.",
      experience:
        "Sunset dining, beachside ambiance, and infinity pool were amazing.",
      rating:"★★★★★"
    },

    {
      id:5,
      image:guest5,
      name:"Henny Francisko",
      country:"Paris, France",
      profession:"Entrepreneur",
      stay:"Stayed In Skyline Penthouse",
      review:
        "Premium penthouse experience with modern luxury and top services.",
      experience:
        "Private jacuzzi, skyline view, and luxury lounge made it unforgettable.",
      rating:"★★★★★"
    }

  ];

  return (

    <section className="testimonials">

      <div className="section-title">
        <h2>Guest Experiences</h2>
        <p>Hear unforgettable luxury experiences shared by our guests.</p>
      </div>

      <div className="testimonials-grid">

        {reviews.map((item) => (

          <div className="testimonial-card" key={item.id}>

            <img src={item.image} alt={item.name} className="guest-image" />

            <h3>{item.name}</h3>
            <h4 className="profession">{item.profession}</h4>
            <span className="country">{item.country}</span>
            <span className="stars">{item.rating}</span>

            {/* STAY BUTTON */}
            <button
              className="stay-btn"
              onClick={() => setSelectedGuest(item)}
            >
              {item.stay}
            </button>

            <p className="review-text">{item.review}</p>
            <p className="experience-text">{item.experience}</p>

          </div>

        ))}

      </div>

      {/* POPUP MODAL */}

      {selectedGuest && (

        <div className="popup-overlay" onClick={() => setSelectedGuest(null)}>

          <div className="popup-card" onClick={(e) => e.stopPropagation()}>

            <h2>{selectedGuest.name}'s Luxury Experience</h2>

            <p>
              🌟 <b>Luxury Stay Summary (Approx 100 Words)</b><br /><br />

              {selectedGuest.name} stayed at <b>{selectedGuest.stay}</b> and experienced a premium hospitality environment designed for comfort and elegance. The hotel offers world-class services including luxury rooms, fine dining, spa, swimming pools, and professional staff assistance.

              <br /><br />

              Guests consistently highlight cleanliness, comfort, and personalized service. The ambiance is peaceful and perfect for relaxation, honeymoon, business trips, or family vacations.

              <br /><br />

              Overall rating: <b>⭐⭐⭐⭐⭐</b> based on excellent guest reviews and unforgettable experience.
            </p>

            <button className="close-btn" onClick={() => setSelectedGuest(null)}>
              Close
            </button>

          </div>

        </div>

      )}

    </section>

  );
};

export default Testimonials;