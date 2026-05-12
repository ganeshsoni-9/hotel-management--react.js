import hotels from "../data/hotels";
import HotelCard from "../components/HotelCard";

const SearchHotels = () => {

  return (

    <section className="search-hotels">

      <div className="search-banner">

        <h1>Find Your Perfect Luxury Stay</h1>

        <div className="search-box">

          <input
            type="text"
            placeholder="Search destination..."
          />

          <button>
            Search
          </button>

        </div>

      </div>

      <div className="hotel-grid">

        {
          hotels.map((hotel)=>(
            <HotelCard
              key={hotel.id}
              hotel={hotel}
            />
          ))
        }

      </div>

    </section>
  );

};

export default SearchHotels;