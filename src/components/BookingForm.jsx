const BookingForm = () => {
  return (
    <section className="booking">

      <div className="booking-container">

        <h2>Book Your Luxury Stay</h2>

        <form className="booking-form">

          <div className="input-box">
            <label>Check In</label>

            <input type="date" />
          </div>

          <div className="input-box">
            <label>Check Out</label>

            <input type="date" />
          </div>

          <div className="input-box">
            <label>Guests</label>

            <select>
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
            </select>
          </div>

          <div className="input-box">
            <label>Rooms</label>

            <select>
              <option>1 Room</option>
              <option>2 Rooms</option>
              <option>3 Rooms</option>
            </select>
          </div>

          <button type="submit">
            Search Hotels
          </button>

        </form>

      </div>

    </section>
  );
};

export default BookingForm;