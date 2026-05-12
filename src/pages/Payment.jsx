import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [finalData, setFinalData] = useState(null);

  const [booking, setBooking] = useState({
    hotel: "",
    room: "",
    days: "",
    members: "",
  });

  const [payment, setPayment] = useState({
    name: "",
    card: "",
    expiry: "",
    cvv: "",
    address: "",
  });

  const roomPrices = {
    Standard: 5000,
    Deluxe: 8000,
    Luxury: 12000,
    Suite: 20000,
  };

  const totalPrice =
    (roomPrices[booking.room] || 0) *
    Number(booking.days || 0) *
    Number(booking.members || 0);

  // STEP 1
  const handleNext = () => {
    if (!booking.hotel || !booking.room) {
      alert("Select hotel & room");
      return;
    }
    setStep(2);
  };

  // STEP 2 → FIXED SNAPSHOT LOGIC
  const handlePayment = () => {
    if (!payment.name || !payment.card) {
      alert("Fill payment details");
      return;
    }

    const snapshot = {
      hotel: booking.hotel,
      room: booking.room,
      days: booking.days,
      members: booking.members,
      name: payment.name,
      card: payment.card,
      expiry: payment.expiry,
      cvv: payment.cvv,
      address: payment.address,
      total: totalPrice,
    };

    setFinalData(snapshot);
    setShowPopup(true);
  };

  const confirmBooking = () => {
    setShowPopup(false);
    navigate("/booking-confirmation");
  };

  return (
    <section className="payment-page">

      <style>{`
        .payment-page {
          min-height: 100vh;
          background: #111;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .box {
          width: 900px;
          display: flex;
          background: #1a1a1a;
          border-radius: 20px;
          overflow: hidden;
        }

        .left, .right {
          flex: 1;
          padding: 30px;
          color: white;
        }

        h2 { color: #d4af37; }

        input, select {
          width: 100%;
          padding: 12px;
          margin-bottom: 10px;
          border-radius: 8px;
          border: none;
          background: #222;
          color: white;
        }

        button {
          width: 100%;
          padding: 12px;
          background: #d4af37;
          border: none;
          border-radius: 30px;
          cursor: pointer;
        }

        .popup {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .popup-box {
          width: 420px;
          background: #111;
          padding: 25px;
          border-radius: 15px;
          color: white;
        }

        .price {
          color: #d4af37;
          font-size: 20px;
        }
      `}</style>

      <div className="box">

        {/* LEFT */}
        <div className="left">
          <h2>Luxury Booking</h2>

          {step === 1 && (
            <>
              <select
                value={booking.hotel}
                onChange={(e) =>
                  setBooking({ ...booking, hotel: e.target.value })
                }
              >
                <option value="">Select Hotel</option>
                <option>Taj Lake Palace</option>
                <option>Royal Marriott</option>
                <option>Grand Hilton</option>
              </select>

              <select
                value={booking.room}
                onChange={(e) =>
                  setBooking({ ...booking, room: e.target.value })
                }
              >
                <option value="">Select Room</option>
                <option>Standard</option>
                <option>Deluxe</option>
                <option>Luxury</option>
                <option>Suite</option>
              </select>

              <input
                value={booking.days}
                type="number"
                placeholder="Days"
                onChange={(e) =>
                  setBooking({ ...booking, days: e.target.value })
                }
              />

              <input
                value={booking.members}
                type="number"
                placeholder="Members"
                onChange={(e) =>
                  setBooking({ ...booking, members: e.target.value })
                }
              />

              <button onClick={handleNext}>Proceed</button>
            </>
          )}

          {step === 2 && (
            <>
              <input
                placeholder="Name"
                value={payment.name}
                onChange={(e) =>
                  setPayment({ ...payment, name: e.target.value })
                }
              />

              <input
                placeholder="Card Number"
                value={payment.card}
                onChange={(e) =>
                  setPayment({ ...payment, card: e.target.value })
                }
              />

              <input
                placeholder="Expiry"
                value={payment.expiry}
                onChange={(e) =>
                  setPayment({ ...payment, expiry: e.target.value })
                }
              />

              <input
                placeholder="CVV"
                value={payment.cvv}
                onChange={(e) =>
                  setPayment({ ...payment, cvv: e.target.value })
                }
              />

              <input
                placeholder="Address"
                value={payment.address}
                onChange={(e) =>
                  setPayment({ ...payment, address: e.target.value })
                }
              />

              <button onClick={handlePayment}>Pay Now</button>
            </>
          )}
        </div>

        {/* RIGHT */}
        <div className="right">
          <h2>Summary</h2>
          <p>Hotel: {booking.hotel}</p>
          <p>Room: {booking.room}</p>
          <p>Days: {booking.days}</p>
          <p>Members: {booking.members}</p>
          <div className="price">₹ {totalPrice || 0}</div>
        </div>
      </div>

      {/* POPUP */}
      {showPopup && finalData && (
        <div className="popup">
          <div className="popup-box">
            <h3>Booking Confirmed</h3>

            <p>Hotel: {finalData.hotel}</p>
            <p>Room: {finalData.room}</p>
            <p>Days: {finalData.days}</p>
            <p>Members: {finalData.members}</p>
            <p>Name: {finalData.name}</p>

            <h4 className="price">Total: ₹ {finalData.total}</h4>

            <button onClick={confirmBooking}>
              Confirm Booking
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

export default Payment;