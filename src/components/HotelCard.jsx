import { useNavigate } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} />

      <div className="hotel-info">
        <h3>{hotel.name}</h3>
        <p>{hotel.location}</p>

        <div className="hotel-details">
          <span>{hotel.price}</span>
          <span>⭐ {hotel.rating}</span>
        </div>

        <button
          onClick={() =>
            navigate(`/hotel-details/${hotel.id}`, {
              state: hotel,
            })
          }
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default HotelCard;