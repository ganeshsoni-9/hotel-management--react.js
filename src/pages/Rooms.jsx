import React, { useState } from "react";

/* =========================================================
   ROOM DATA
========================================================= */

const roomCategories = [
  {
    id: 1,
    title: "Deluxe Room",
    price: "₹5,999 / Night",
    button: "MORE DELUXE ROOM",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",

    desc: "Luxury deluxe room with king-size bed and balcony.",

    review:
      "⭐ 4.8 Rating - Guests loved the luxury ambience, balcony view and premium comfort.",

    facilities: [
      "King Size Bed",
      "Free WiFi",
      "Smart TV",
      "Private Balcony",
      "Luxury Bathroom",
    ],

    rooms: [
  {
    name: "Royal Gold Deluxe",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    price: "₹7,500",
    rating: "⭐ 4.9",
    desc:
      "Royal luxury room with premium golden interior and mountain balcony view.",
    facilities: [
      "King Bed",
      "Jacuzzi",
      "WiFi",
      "Balcony",
      "Breakfast",
    ],
  },

  {
    name: "Luxury Palace Deluxe",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    price: "₹8,200",
    rating: "⭐ 4.8",
    desc:
      "Elegant palace-style deluxe room with royal lighting and sofa lounge.",
    facilities: [
      "Mini Bar",
      "LED TV",
      "Luxury Sofa",
      "AC",
      "Bathtub",
    ],
  },

  {
    name: "Diamond Sky Suite",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    price: "₹9,000",
    rating: "⭐ 4.9",
    desc:
      "Modern suite room with luxury workspace and beautiful city skyline.",
    facilities: [
      "Workspace",
      "King Bed",
      "WiFi",
      "Mini Bar",
      "Balcony",
    ],
  },

  {
    name: "Ocean Pearl Room",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    price: "₹6,800",
    rating: "⭐ 4.7",
    desc:
      "Relaxing ocean-inspired room with peaceful interior and comfort seating.",
    facilities: [
      "Queen Bed",
      "Smart TV",
      "WiFi",
      "AC",
      "Breakfast",
    ],
  },

  {
    name: "Silver Crown Deluxe",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    price: "₹7,900",
    rating: "⭐ 4.8",
    desc:
      "Elegant silver-themed deluxe room with premium royal ambience.",
    facilities: [
      "King Bed",
      "Bathtub",
      "LED TV",
      "Room Service",
      "WiFi",
    ],
  },

  {
    name: "Imperial Luxury Room",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    price: "₹8,600",
    rating: "⭐ 4.9",
    desc:
      "Luxury room featuring modern decor and elegant interior design.",
    facilities: [
      "Luxury Sofa",
      "Mini Bar",
      "WiFi",
      "King Bed",
      "Breakfast",
    ],
  },

  {
    name: "Sunset Paradise Suite",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    price: "₹9,200",
    rating: "⭐ 5.0",
    desc:
      "Beautiful sunset-facing suite room with relaxing atmosphere.",
    facilities: [
      "Balcony",
      "Jacuzzi",
      "WiFi",
      "LED TV",
      "Mini Bar",
    ],
  },

  {
    name: "Classic Heritage Room",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
    price: "₹6,200",
    rating: "⭐ 4.6",
    desc:
      "Heritage-style room with wooden furniture and elegant comfort.",
    facilities: [
      "Classic Bed",
      "AC",
      "WiFi",
      "TV",
      "Room Cleaning",
    ],
  },

  {
    name: "Golden Horizon Suite",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
    price: "₹10,500",
    rating: "⭐ 5.0",
    desc:
      "Premium suite room with luxury interiors and horizon city view.",
    facilities: [
      "King Bed",
      "Luxury Bath",
      "Balcony",
      "Mini Bar",
      "WiFi",
    ],
  },

  {
    name: "Elite Comfort Deluxe",
    image:
      "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1200&q=80",
    price: "₹7,300",
    rating: "⭐ 4.7",
    desc:
      "Comfortable deluxe room with premium hospitality and elegant decor.",
    facilities: [
      "Queen Bed",
      "AC",
      "Smart TV",
      "WiFi",
      "Breakfast",
    ],
  },

    ],
  },

  {
    id: 2,
    title: "Executive Suite Room",
    price: "₹9,999 / Night",
    button: "MORE EXECUTIVE SUITE ROOM",

    image:
      "https://imgs.search.brave.com/JHKU0Qs8B1WVM6MakLPSU-9Bv5MB1vjkcBgF4QGOGPY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dGhlaG90ZWxpdnku/Y29tL2NvbnRlbnQv/dXBsb2Fkcy8yMDI1/LzAyL0V4ZWN1dGl2/ZS1TdWl0ZS1CZWRy/b29tLUxpdmluZy1S/b29tLmpwZw",

    desc:
      "Premium executive suite with luxury living area and modern facilities.",

    review:
      "⭐ 4.9 Rating - Guests enjoyed premium suite services and luxury interiors.",

    facilities: [
      "Luxury Living Area",
      "Mini Bar",
      "Office Workspace",
      "Luxury Sofa",
      "24/7 Room Service",
    ],

    rooms: [
  {
    name: "Modern Executive Suite",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    price: "₹6,500",
    rating: "⭐ 4.7",
    desc:
      "Modern executive suite with comfortable workspace and stylish decor.",
    facilities: ["Workspace", "WiFi", "AC", "TV", "Mini Bar"],
  },

  {
    name: "Premium Business Suite",
    image:
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=1200&q=80",
    price: "₹7,200",
    rating: "⭐ 4.8",
    desc:
      "Spacious business suite designed for comfort and productivity with premium interiors.",
    facilities: ["Office Desk", "WiFi", "AC", "Smart TV", "Coffee Maker"],
  },

  {
    name: "Luxury Executive King Suite",
    image:
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80",
    price: "₹8,000",
    rating: "⭐ 4.9",
    desc:
      "Elegant king-size executive suite with luxury seating and city view.",
    facilities: ["King Bed", "City View", "WiFi", "AC", "Mini Bar"],
  },

  {
    name: "Skyline Executive Suite",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
    price: "₹7,800",
    rating: "⭐ 4.8",
    desc:
      "High-floor executive suite with stunning skyline view and modern interiors.",
    facilities: ["Sky View", "WiFi", "AC", "Work Desk", "Smart TV"],
  },

  {
    name: "Royal Executive Lounge Suite",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
    price: "₹8,500",
    rating: "⭐ 4.9",
    desc:
      "Luxury lounge-style executive suite with premium seating and royal ambiance.",
    facilities: ["Lounge Area", "WiFi", "AC", "Luxury Sofa", "Mini Bar"],
  },
]
  },

  {
    id: 3,
    title: "Normal Room",
    price: "₹3,999 / Night",
    button: "MORE NORMAL ROOM",

    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",

    desc:
      "Comfortable normal room with elegant interior and relaxing atmosphere.",

    review:
      "⭐ 4.5 Rating - Guests appreciated clean rooms and peaceful environment.",

    facilities: [
      "Comfort Bed",
      "Air Conditioner",
      "LED TV",
      "Free Parking",
      "Room Cleaning",
    ],

    rooms: [
  {
    name: "Classic Normal Room",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    price: "₹3,000",
    rating: "⭐ 4.3",
    desc: "Simple and comfortable room with peaceful atmosphere.",
    facilities: ["Bed", "AC", "TV", "WiFi", "Parking"],
  },

  {
    name: "Comfort Stay Room",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    price: "₹3,200",
    rating: "⭐ 4.4",
    desc: "Cozy room designed for a relaxing and peaceful stay.",
    facilities: ["Bed", "AC", "TV", "WiFi", "Clean Bathroom"],
  },

  {
    name: "Standard Comfort Room",
    image:
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80",
    price: "₹3,100",
    rating: "⭐ 4.2",
    desc: "Well-maintained room with all basic modern amenities.",
    facilities: ["Bed", "AC", "TV", "WiFi", "Parking"],
  },

  {
    name: "Peaceful Stay Room",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
    price: "₹3,400",
    rating: "⭐ 4.5",
    desc: "Quiet and peaceful room ideal for relaxation.",
    facilities: ["Bed", "AC", "WiFi", "TV", "Room Service"],
  },

  {
    name: "Budget Friendly Room",
    image:
      "https://imgs.search.brave.com/poxsxz03ANcwc8j1pYnHS45jWrLNhwlbIeo9p9CrvHU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZmLzQ5/LzliLzZmNDk5YjAx/NmIxNGM4ZWQ3MjAz/YmZjNzQyZTA0MDM1/LmpwZw",
    price: "₹2,800",
    rating: "⭐ 4.1",
    desc: "Affordable room with essential comfort and clean space.",
    facilities: ["Bed", "Fan", "TV", "WiFi", "Parking"],
  },

  {
    name: "City View Normal Room",
    image:
      "https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&w=1200&q=80",
    price: "₹3,600",
    rating: "⭐ 4.5",
    desc: "Comfortable room with beautiful city view.",
    facilities: ["Bed", "AC", "WiFi", "City View", "TV"],
  },

  {
    name: "Family Normal Room",
    image:
      "https://imgs.search.brave.com/da88Hyo4XkAcKb0i7egVRm4vwpN4VLGN4wUZanKKwBo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aGVt/YW5vcmhvdXNlaG9t/ZXN0YXlzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/OC9UU0EwMzc5Ni1I/RFItMi1zY2FsZWQt/MS5qcGc",
    price: "₹3,800",
    rating: "⭐ 4.6",
    desc: "Spacious room suitable for small family stay.",
    facilities: ["2 Beds", "AC", "TV", "WiFi", "Bathroom"],
  },

  {
    name: "Delight Stay Room",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    price: "₹3,300",
    rating: "⭐ 4.4",
    desc: "Neat and clean room with comfortable ambiance.",
    facilities: ["Bed", "AC", "WiFi", "TV", "Room Service"],
  },

  {
    name: "Relaxing Normal Room",
    image:
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=1200&q=80",
    price: "₹3,250",
    rating: "⭐ 4.3",
    desc: "Simple room perfect for relaxation and rest.",
    facilities: ["Bed", "Fan", "TV", "WiFi", "Parking"],
  },

  {
    name: "Comfort Twin Room",
    image:
      "https://imgs.search.brave.com/nK8bFmcMcm5B7EAe2Lz2LAO26Js-CXkIXpNohRDSpIQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9tb2Rl/cm4taG90ZWwtcm9v/bS0yNzU0NDgyMC5q/cGc",
    price: "₹3,700",
    rating: "⭐ 4.5",
    desc: "Two-bed room ideal for friends or colleagues.",
    facilities: ["2 Beds", "AC", "WiFi", "TV", "Bathroom"],
  },

  {
    name: "Economy Stay Room",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    price: "₹2,900",
    rating: "⭐ 4.2",
    desc: "Low budget room with basic facilities and comfort.",
    facilities: ["Bed", "Fan", "WiFi", "TV", "Parking"],
  },

  {
    name: "Simple Comfort Room",
    image:
      "https://imgs.search.brave.com/E4S_5b37H4tLR_NRivWWFgDb9FGrG8s0tsA7NIQY2v0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zaW1w/bGUtaG90ZWwtcm9v/bS1pbnRlcmlvci1z/aW1wbGUtaG90ZWwt/cm9vbS1pbnRlcmlv/ci1qYWthcnRhLWlu/ZG9uZXNpYS1hcHJp/bC0zMjc0NzIxNDMu/anBn",
    price: "₹3,050",
    rating: "⭐ 4.3",
    desc: "Clean and simple room for short stay.",
    facilities: ["Bed", "AC", "TV", "WiFi", "Bathroom"],
  },

  {
    name: "Modern Normal Room",
    image:
      "https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&w=1200&q=80",
    price: "₹3,500",
    rating: "⭐ 4.6",
    desc: "Modern design room with stylish interiors.",
    facilities: ["Bed", "AC", "Smart TV", "WiFi", "Parking"],
  },

  {
    name: "Cozy Night Room",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
    price: "₹3,450",
    rating: "⭐ 4.4",
    desc: "Perfect cozy room for night stay and relaxation.",
    facilities: ["Bed", "AC", "WiFi", "TV", "Room Service"],
  },

  {
    name: "Standard Relax Room",
    image:
      "https://imgs.search.brave.com/fRLPLD7IKjXIzl4G3CqkuaZRCbtzOnox1cC8npui8iM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMjYwMDAwMDAv/MTI1MzIwMDAwLzEy/NTMxODUwMC8xMjUz/MTg0MTAvY2RkZjRj/YWMuanBnP2ltcG9s/aWN5PXJlc2l6ZWNy/b3Amcnc9NTk4JnJh/PWZpdA",
    price: "₹3,600",
    rating: "⭐ 4.5",
    desc: "Balanced comfort room with all essential facilities.",
    facilities: ["Bed", "AC", "WiFi", "TV", "Parking"],
  },
]
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const Rooms = () => {
  const [selectedRooms, setSelectedRooms] = useState([]);

  // BOOKING FORM
  const [showForm, setShowForm] = useState(false);

  const [selectedRoomName, setSelectedRoomName] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: "",
    checkIn: "",
    checkOut: "",
    address: "",
  });

  /* =========================================================
     SHOW ROOMS
  ========================================================= */

  const handleRooms = (rooms) => {
    setSelectedRooms(rooms);
  };

  /* =========================================================
     BOOK NOW BUTTON
  ========================================================= */

  const handleBookNow = (roomName) => {
    setSelectedRoomName(roomName);
    setShowForm(true);
  };

  /* =========================================================
     HANDLE INPUT
  ========================================================= */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* =========================================================
     SUBMIT FORM
  ========================================================= */

  const handleSubmit = (e) => {
  e.preventDefault();

  // APNA WHATSAPP NUMBER
  const phoneNumber = "";

  // MESSAGE

  const message = `
🏨 *NEW ROOM BOOKING*

🛏 Room: ${selectedRoomName}

👤 Full Name: ${formData.fullName}

📧 Email: ${formData.email}

📱 Phone: ${formData.phone}

👥 Guests: ${formData.guests}

📅 Check In: ${formData.checkIn}

📅 Check Out: ${formData.checkOut}

📍 Address: ${formData.address}
  `;

  // ENCODE MESSAGE

  const encodedMessage = encodeURIComponent(message);

  // WHATSAPP URL

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // OPEN WHATSAPP

  window.open(whatsappURL, "_blank");

  // RESET FORM

  setShowForm(false);

  setFormData({
    fullName: "",
    email: "",
    phone: "",
    guests: "",
    checkIn: "",
    checkOut: "",
    address: "",
  });
};

  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>Luxury Rooms</h1>

      <p style={styles.subHeading}>
        Explore premium rooms with luxury hospitality experience
      </p>

      {/* MAIN ROOM SECTION */}

      <div style={styles.grid}>
        {roomCategories.map((room) => (
          <div key={room.id} style={styles.card}>
            <div style={styles.imageWrapper}>
              <img src={room.image} alt={room.title} style={styles.image} />
            </div>

            <div style={styles.content}>
              <h2 style={styles.title}>{room.title}</h2>

              <p style={styles.desc}>{room.desc}</p>

              <h3 style={styles.price}>{room.price}</h3>

              <p style={styles.review}>{room.review}</p>

              <div style={styles.facilityBox}>
                <h4 style={styles.facilityHeading}>Facilities</h4>

                <ul style={styles.list}>
                  {room.facilities.map((item, index) => (
                    <li key={index}>✔ {item}</li>
                  ))}
                </ul>
              </div>

              <button
                style={styles.button}
                onClick={() => handleRooms(room.rooms)}
              >
                {room.button}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ROOM DETAILS */}

      {selectedRooms.length > 0 && (
        <>
          <h1 style={styles.detailHeading}>Available Rooms</h1>

          <div style={styles.detailGrid}>
            {selectedRooms.map((item, index) => (
              <div key={index} style={styles.detailCard}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={styles.detailImage}
                />

                <div style={styles.detailContent}>
                  <h2 style={styles.detailTitle}>{item.name}</h2>

                  <p style={styles.detailDesc}>{item.desc}</p>

                  <h3 style={styles.detailPrice}>
                    {item.price} / Night
                  </h3>

                  <p style={styles.detailRating}>
                    {item.rating} Guest Review
                  </p>

                  <div style={styles.facilityArea}>
                    {item.facilities.map((fac, i) => (
                      <span key={i} style={styles.facilityTag}>
                        {fac}
                      </span>
                    ))}
                  </div>

                  {/* BOOK NOW BUTTON */}

                  <button
                    style={styles.bookBtn}
                    onClick={() => handleBookNow(item.name)}
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* =========================================================
          BOOKING FORM MODAL
      ========================================================= */}

      {showForm && (
        <div style={styles.modalOverlay}>
          <div style={styles.formContainer}>
            <button
  style={styles.closeBtn}
  onClick={() => setShowForm(false)}
>
  ✕
</button>

            <h2 style={styles.formHeading}>Room Booking Form</h2>

            <p style={styles.selectedRoom}>
              Selected Room: {selectedRoomName}
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                value={formData.fullName}
                onChange={handleChange}
                style={styles.input}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
              />

              <input
                type="number"
                name="guests"
                placeholder="Number of Guests"
                required
                value={formData.guests}
                onChange={handleChange}
                style={styles.input}
              />

              <label style={styles.label}>Check In Date</label>

              <input
                type="date"
                name="checkIn"
                required
                value={formData.checkIn}
                onChange={handleChange}
                style={styles.input}
              />

              <label style={styles.label}>Check Out Date</label>

              <input
                type="date"
                name="checkOut"
                required
                value={formData.checkOut}
                onChange={handleChange}
                style={styles.input}
              />

              <textarea
                name="address"
                placeholder="Enter Address"
                rows="4"
                required
                value={formData.address}
                onChange={handleChange}
                style={styles.textarea}
              ></textarea>

              <button type="submit" style={styles.submitBtn}>
                SUBMIT BOOKING
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

/* =========================================================
   STYLES
========================================================= */

const styles = {
  container: {
    padding: "60px 20px",
    background: "linear-gradient(135deg,#0f0f0f,#1c1c1c)",
    minHeight: "100vh",
    color: "#fff",
  },

  heading: {
    textAlign: "center",
    fontSize: "50px",
    color: "gold",
    marginBottom: "10px",
    fontWeight: "800",
  },

  subHeading: {
    textAlign: "center",
    color: "#bbb",
    marginBottom: "50px",
    fontSize: "17px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
    gap: "35px",
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    borderRadius: "20px",
    overflow: "hidden",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
  },

  imageWrapper: {
    width: "100%",
    height: "260px",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  content: {
    padding: "22px",
  },

  title: {
    fontSize: "28px",
    color: "gold",
    marginBottom: "10px",
  },

  desc: {
    color: "#ddd",
    marginBottom: "15px",
    lineHeight: "1.6",
  },

  price: {
    color: "#ffd700",
    marginBottom: "12px",
    fontSize: "24px",
  },

  review: {
    color: "#ffcc70",
    marginBottom: "18px",
    fontSize: "14px",
  },

  facilityBox: {
    marginBottom: "20px",
  },

  facilityHeading: {
    color: "#fff",
    marginBottom: "10px",
    fontSize: "18px",
  },

  list: {
    paddingLeft: "18px",
    color: "#ccc",
    lineHeight: "1.8",
    fontSize: "14px",
  },

  button: {
    width: "100%",
    padding: "14px",
    border: "none",
    background: "gold",
    color: "#111",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "15px",
  },

  detailHeading: {
    marginTop: "80px",
    textAlign: "center",
    color: "gold",
    fontSize: "42px",
    marginBottom: "40px",
  },

  /* =========================================================
   SAME SIZE ROOM DETAIL CARDS
========================================================= */

detailGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "22px",
  marginTop: "20px",
},

detailCard: {
  background: "rgba(255,255,255,0.05)",
  borderRadius: "18px",
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
  transition: "0.3s",
  maxWidth: "280px",
  margin: "auto",
},

/* IMAGE FULL SHOW */

detailImage: {
  width: "100%",
  height: "190px",
  objectFit: "contain",
  background: "#111",
  padding: "8px",
},

detailContent: {
  padding: "16px",
},

detailTitle: {
  color: "gold",
  fontSize: "20px",
  marginBottom: "8px",
  fontWeight: "700",
},

detailDesc: {
  color: "#ccc",
  lineHeight: "1.5",
  marginBottom: "12px",
  fontSize: "13px",
},

detailPrice: {
  color: "#ffd700",
  fontSize: "20px",
  marginBottom: "8px",
},

detailRating: {
  color: "#ffcc70",
  marginBottom: "14px",
  fontSize: "13px",
},

facilityArea: {
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  marginBottom: "18px",
},

facilityTag: {
  background: "rgba(255,215,0,0.12)",
  color: "gold",
  padding: "6px 10px",
  borderRadius: "20px",
  fontSize: "11px",
},

bookBtn: {
  width: "100%",
  padding: "12px",
  background: "linear-gradient(135deg,gold,#ffcc00)",
  border: "none",
  borderRadius: "10px",
  fontWeight: "700",
  cursor: "pointer",
  fontSize: "14px",
},

  detailTitle: {
    color: "gold",
    fontSize: "26px",
    marginBottom: "10px",
  },

  detailDesc: {
    color: "#ccc",
    lineHeight: "1.6",
    marginBottom: "15px",
  },

  detailPrice: {
    color: "#ffd700",
    fontSize: "24px",
    marginBottom: "10px",
  },

  detailRating: {
    color: "#ffcc70",
    marginBottom: "18px",
  },

  facilityArea: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "20px",
  },

  facilityTag: {
    background: "rgba(255,215,0,0.15)",
    color: "gold",
    padding: "8px 12px",
    borderRadius: "30px",
    fontSize: "13px",
  },

  bookBtn: {
    width: "100%",
    padding: "14px",
    background: "gold",
    border: "none",
    borderRadius: "10px",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: "15px",
  },

  /* FORM MODAL */

  /* =========================================================
   SMALL BOOKING FORM MODAL STYLES
========================================================= */

modalOverlay: {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  background: "rgba(0,0,0,0.85)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999,
  padding: "20px",
},

formContainer: {
  width: "100%",
  maxWidth: "380px", // SMALL FORM
  background: "#181818",
  padding: "25px",
  borderRadius: "18px",
  position: "relative",
  border: "1px solid rgba(255,215,0,0.25)",
  boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
  animation: "popup 0.3s ease",
},

/* CROSS BUTTON */

closeBtn: {
  position: "absolute",
  top: "12px",
  right: "15px",
  width: "34px",
  height: "34px",
  borderRadius: "50%",
  border: "none",
  background: "rgba(255,255,255,0.08)",
  color: "#fff",
  fontSize: "18px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "0.3s",
},

formHeading: {
  color: "gold",
  textAlign: "center",
  marginBottom: "8px",
  fontSize: "26px",
  fontWeight: "700",
},

selectedRoom: {
  textAlign: "center",
  color: "#bbb",
  marginBottom: "20px",
  fontSize: "14px",
},

input: {
  width: "100%",
  padding: "12px",
  marginBottom: "14px",
  borderRadius: "10px",
  border: "1px solid #333",
  background: "#101010",
  color: "#fff",
  fontSize: "14px",
  outline: "none",
},

textarea: {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #333",
  background: "#101010",
  color: "#fff",
  fontSize: "14px",
  marginBottom: "18px",
  outline: "none",
  resize: "none",
},

label: {
  color: "#ddd",
  display: "block",
  marginBottom: "6px",
  fontSize: "14px",
},

submitBtn: {
  width: "100%",
  padding: "13px",
  border: "none",
  borderRadius: "10px",
  background: "linear-gradient(135deg,gold,#ffcc00)",
  color: "#111",
  fontWeight: "700",
  fontSize: "15px",
  cursor: "pointer",
  transition: "0.3s",
},
};

export default Rooms;