import { useNavigate } from "react-router-dom";

const RoomCard = ({ room }) => {
  const navigate = useNavigate();

  // 🔴 ULTRA SAFE GUARD (prevents white screen crash)
  if (!room || typeof room !== "object") return null;

  return (
    <div className="room-card">
      <div className="room-image">
        <img
          src={room.image || "https://via.placeholder.com/300"}
          alt={room.name || "Room"}
        />

        <span className="price-tag">
          {room.price || "N/A"}
        </span>
      </div>

      <div className="room-info">
        <h3>{room.name || "Unknown Room"}</h3>

        <p>⭐ {room.rating || "0"}</p>

        <div className="room-details">
          <span>{room.size || "-"}</span>
          <span>{room.guests || "-"}</span>
        </div>

        <button
          onClick={() =>
            navigate("/booking-confirmation", {
              state: room, // 🔥 optional but useful for booking page
            })
          }
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomCard;