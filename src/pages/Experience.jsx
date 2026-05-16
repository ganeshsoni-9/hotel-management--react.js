import React, { useState } from "react";

const Experiences = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const sections = [
    {
      title: "Room Experience",
      desc: "Luxury rooms with premium comfort and modern facilities.",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
      details:
        "Enjoy 5-star luxury rooms with king-size beds, private balcony, smart lighting, and scenic views.",
      items: [
        "360° Room tour",
        "Deluxe / Suite / Villa",
        "Smart AC & Lighting",
        "Premium bedding experience",
      ],
    },

    {
      title: "Dining Experience",
      desc: "World-class dining with multi-cuisine options.",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
      details:
        "Fine dining with international chefs and luxury buffet experience.",
      items: [
        "Buffet & A-la-carte",
        "Indian & Continental cuisine",
        "Private dining setup",
        "Chef special menu",
      ],
    },

    {
      title: "Spa & Wellness",
      desc: "Relax your body and mind with premium wellness services.",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      details:
        "Luxury spa with aromatherapy, massage and wellness therapies.",
      items: ["Spa therapy", "Steam room", "Yoga sessions", "Aromatherapy"],
    },

    {
      title: "Activities & Recreation",
      desc: "Enjoy fun and fitness during your stay.",
      image:
        "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80",
      details: "Indoor & outdoor sports with premium recreation zones.",
      items: ["Swimming pool", "Gym", "Indoor games", "Outdoor sports"],
    },

    {
      title: "Wedding & Grand Celebration",
      desc: "Luxury wedding planning with royal arrangements.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      details:
        "Make your dream wedding unforgettable with royal decor and luxury event management.",
      items: [
        "Royal wedding setup",
        "Luxury stage decoration",
        "DJ & lighting system",
        "Catering management",
      ],
    },

    {
      title: "Birthday & Private Party",
      desc: "Exclusive celebration setup for your special day.",
      image:
        "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
      details:
        "Celebrate birthdays and private parties with luxury decoration.",
      items: [
        "Theme decoration",
        "Cake setup",
        "Music & DJ",
        "Private party hall",
      ],
    },
  ];

  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>✨ Luxury Hotel Experiences</h1>

      <p style={styles.subHeading}>
        Hover on cards to explore premium hospitality experiences
      </p>

      <div style={styles.grid}>
        {sections.map((item, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              style={{
                ...styles.card,
                transform: isHovered ? "scale(1.04)" : "scale(1)",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* IMAGE */}
              <div style={styles.imageWrapper}>
                <img src={item.image} alt={item.title} style={styles.image} />
              </div>

              {/* CONTENT */}
              <div style={styles.content}>
                <h2 style={styles.title}>{item.title}</h2>

                <p style={styles.desc}>{item.desc}</p>

                {/* HOVER DETAILS */}
                <div
                  style={{
                    ...styles.extra,
                    maxHeight: isHovered ? "300px" : "0px",
                    opacity: isHovered ? 1 : 0,
                  }}
                >
                  <p style={styles.details}>{item.details}</p>

                  <ul style={styles.list}>
                    {item.items.map((point, i) => (
                      <li key={i}>✔ {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

/* =========================
   PREMIUM UI STYLES
========================= */

const styles = {
  container: {
    padding: "60px 20px",
    background: "linear-gradient(135deg,#0f0f0f,#1c1c1c)",
    minHeight: "100vh",
    color: "#fff",
  },

  heading: {
    textAlign: "center",
    fontSize: "44px",
    fontWeight: "800",
    color: "#d4af37",
  },

  subHeading: {
    textAlign: "center",
    color: "#aaa",
    marginBottom: "40px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: "25px",
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    borderRadius: "20px",
    overflow: "hidden",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "0.4s ease",
    cursor: "pointer",
  },

  imageWrapper: {
    width: "100%",
    height: "220px",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "0.4s",
  },

  content: {
    padding: "18px",
  },

  title: {
    fontSize: "22px",
    color: "#d4af37",
  },

  desc: {
    fontSize: "14px",
    color: "#ccc",
    marginBottom: "10px",
  },

  extra: {
    overflow: "hidden",
    transition: "0.5s ease",
  },

  details: {
    fontSize: "13px",
    color: "#bbb",
    marginBottom: "10px",
    lineHeight: "1.5",
  },

  list: {
    fontSize: "13px",
    color: "#aaa",
    paddingLeft: "15px",
  },
};

export default Experiences;