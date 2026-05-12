import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [savedHotels, setSavedHotels] = useState([]);
  const [activeTab, setActiveTab] = useState("bookings");

  /* =========================
      LOAD BOOKINGS (RAW DATA ONLY)
  ========================== */

  useEffect(() => {
    const bookingData =
      JSON.parse(localStorage.getItem("bookings")) || [];

    // ❌ NO IMAGE FALLBACK, ❌ NO PRICE FALLBACK
    const cleanBookings = bookingData.map((b, index) => ({
      id: b.id || Date.now() + index,

      hotel: b.hotel || b.eventType || "Custom Event Booking",
      location: b.location,
      date: b.date,
      
      // ✅ EXACT USER PRICE ONLY
      price: b.price,

      rating: b.rating,
      review: b.review,
      status: b.status,

      // ❌ IMAGE WILL NOT SHOW IF NOT PROVIDED
      image: b.image || "",

      description: b.description,

      fullName: b.fullName,
      email: b.email,
      phone: b.phone,
      requirements: b.requirements,
      bookingTime: b.bookingTime,
    }));

    setBookings(cleanBookings);

    const saved = JSON.parse(localStorage.getItem("savedHotels")) || [];
    setSavedHotels(saved);
  }, []);

  /* =========================
      DELETE
  ========================== */

  const handleDelete = (id) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <section style={styles.dashboard}>
      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>User Panel</h2>

        <button
          style={activeTab === "bookings" ? styles.activeBtn : styles.btn}
          onClick={() => setActiveTab("bookings")}
        >
          My Bookings
        </button>

        <button
          style={activeTab === "saved" ? styles.activeBtn : styles.btn}
          onClick={() => setActiveTab("saved")}
        >
          Saved Hotels
        </button>

        <button style={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* MAIN */}
      <div style={styles.main}>
        {activeTab === "bookings" && (
          <>
            <h1 style={styles.heading}>My Bookings</h1>

            <div style={styles.grid}>
              {bookings.length === 0 ? (
                <p>No bookings found</p>
              ) : (
                bookings.map((b) => (
                  <div key={b.id} style={styles.card}>

                    {/* ❌ IMAGE ONLY SHOW IF EXISTS */}
                    {b.image ? (
                      <img
                        src={b.image}
                        alt={b.hotel}
                        style={styles.image}
                      />
                    ) : null}

                    <div style={styles.cardContent}>
                      <h3 style={styles.title}>{b.hotel}</h3>

                      <p style={styles.text}>👤 {b.fullName}</p>
                      <p style={styles.text}>📧 {b.email}</p>
                      <p style={styles.text}>📱 {b.phone}</p>

                      <p style={styles.text}>📍 {b.location}</p>

                      {/* ✅ EXACT PRICE (NO FALLBACK) */}
                      {b.price && (
                        <p style={styles.price}>{b.price}</p>
                      )}

                      <p style={styles.rating}>{b.rating}</p>
                      <p style={styles.review}>{b.review}</p>

                      <span style={styles.date}>📅 {b.date}</span>

                      <div style={styles.status}>{b.status}</div>

                      <button
                        style={styles.deleteBtn}
                        onClick={() => handleDelete(b.id)}
                      >
                        Delete Booking
                      </button>
                    </div>

                  </div>
                ))
              )}
            </div>
          </>
        )}

        {activeTab === "saved" && (
          <>
            <h1 style={styles.heading}>Saved Hotels</h1>

            <div style={styles.grid}>
              {savedHotels.map((hotel) => (
                <div key={hotel.id} style={styles.card}>

                  {hotel.image ? (
                    <img
                      src={hotel.image}
                      alt={hotel.hotel}
                      style={styles.image}
                    />
                  ) : null}

                  <div style={styles.cardContent}>
                    <h3 style={styles.title}>{hotel.hotel}</h3>
                    <p style={styles.text}>📍 {hotel.location}</p>

                    {/* EXACT PRICE */}
                    {hotel.price && (
                      <p style={styles.price}>{hotel.price}</p>
                    )}

                    <p style={styles.rating}>{hotel.rating}</p>
                    <p style={styles.review}>{hotel.review}</p>

                    <div style={styles.savedBadge}>Saved</div>
                  </div>

                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

/* =========================
    STYLES
========================== */

const styles = {
  dashboard: {
    display: "flex",
    minHeight: "100vh",
    background: "linear-gradient(135deg,#f8f8f8,#ececec)",
  },
  sidebar: {
    width: "260px",
    background: "#111",
    color: "#fff",
    padding: "25px",
    display: "flex",
    flexDirection: "column",
  },
  logo: { fontSize: "28px", marginBottom: "30px", color: "#d4af37" },
  btn: { padding: "12px", marginBottom: "10px", background: "#222", color: "#fff" },
  activeBtn: { padding: "12px", marginBottom: "10px", background: "#d4af37" },
  logoutBtn: { marginTop: "auto", background: "red", padding: "12px", color: "#fff" },

  main: { flex: 1, padding: "30px" },
  heading: { fontSize: "32px", marginBottom: "20px" },

  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "20px" },

  card: { background: "#fff", borderRadius: "15px", overflow: "hidden" },
  image: { width: "100%", height: "200px", objectFit: "cover" },

  cardContent: { padding: "15px" },
  title: { fontSize: "20px", fontWeight: "bold" },
  text: { color: "#555" },

  price: {
    fontWeight: "bold",
    color: "#000",
    fontSize: "16px",
  },

  rating: { color: "#f5a623" },
  review: { marginBottom: "10px" },

  date: { display: "block", marginBottom: "10px" },

  status: {
    background: "#d4af37",
    padding: "5px 10px",
    display: "inline-block",
    borderRadius: "5px",
    marginBottom: "10px",
  },

  deleteBtn: {
    background: "red",
    color: "#fff",
    padding: "10px",
    width: "100%",
  },

  savedBadge: {
    background: "green",
    color: "#fff",
    padding: "5px",
    display: "inline-block",
    borderRadius: "5px",
  },
};

export default UserDashboard;