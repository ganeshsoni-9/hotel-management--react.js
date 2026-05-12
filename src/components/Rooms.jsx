import rooms from "../data/rooms";
import RoomCard from "./RoomCard";

const Rooms = () => {
  // Safety check (MOST IMPORTANT FIX)
  const roomData = Array.isArray(rooms) ? rooms : [];

  return (
    <section className="rooms">

      <div className="section-title">
        <h2>Luxury Rooms & Suites</h2>
        <p>Experience royal comfort and elegance.</p>
      </div>

      <div className="rooms-grid">

        {roomData.length > 0 ? (
          roomData.map((room) => (
            <RoomCard
              key={room?.id || Math.random()}
              room={room}
            />
          ))
        ) : (
          <p>No rooms available</p>
        )}

      </div>

    </section>
  );
};

export default Rooms;