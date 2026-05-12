import { useLocation } from "react-router-dom";
import hotelImage from "../assets/images/hotelimage1.jpg";

const HotelDetails = () => {
  const { state } = useLocation();

  if (!state) return <h2>No hotel data found</h2>;

  return (
    <section className="hotel-details-page">
      <div className="hotel-hero">
        <img src={state.image || hotelImage} alt={state.name} />

        <div className="hotel-overlay">
          <h1>{state.name}</h1>
          <p>{state.location}</p>
        </div>
      </div>

      <div className="hotel-details-container">
        <div className="hotel-description">
          <h2>Experience Royal Luxury</h2>

          <p>
            Experience timeless elegance and unmatched hospitality at{" "}
            {state.name}. Surrounded by breathtaking views, luxury interiors
            and royal comfort.
          </p>
        </div>

        <div className="amenities">
          <h2>Hotel Amenities</h2>

          <div className="amenities-grid">
            <div className="amenity">Free WiFi</div>
            <div className="amenity">Swimming Pool</div>
            <div className="amenity">Spa & Wellness</div>
            <div className="amenity">Fine Dining</div>
            <div className="amenity">Fitness Center</div>
            <div className="amenity">Airport Pickup</div>
          </div>
        </div>

        <div className="hotel-gallery">
          <h2>Luxury Gallery</h2>

          <div className="gallery-images">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945" alt="hotel" />
            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" alt="hotel" />
            <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461" alt="hotel" />
          </div>
        </div>

        <div className="booking-section">
          <button>Book Your Stay</button>
        </div>
      </div>
    </section>
  );
};

export default HotelDetails;