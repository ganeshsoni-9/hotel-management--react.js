import React, { useState } from "react";

const Experience = () => {
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
      title: "Events & Celebrations",
      desc: "Make your special moments unforgettable.",
      image:
        "https://imgs.search.brave.com/tAl3wdiB_L4AGj3VKQKUKEX0CYXhMpGyAw-kAz6gnaI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJ2bC1tZWRp/YS5jb20vbG9kZ2lu/Zy8xMTUwMDAwMDAv/MTE0MzcwMDAwLzEx/NDM2MDcwMC8xMTQz/NjA2MDQvMDczMzY0/OGIuanBnP2ltcG9s/aWN5PXJlc2l6ZWNy/b3Amcnc9Mjk3JnJh/PWZpdA",
      details: "Luxury wedding & event planning with decoration themes.",
      items: ["Wedding setup", "Birthday events", "Corporate halls", "Theme decor"],
    },
    {
      title: "Local Experience",
      desc: "Explore nearby attractions and culture.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
      details: "Guided tours and local cultural experiences.",
      items: ["City tours", "Heritage visits", "Local food tours", "Taxi service"],
    },
    {
      title: "Hotel Services",
      desc: "Premium services for a smooth stay.",
      image:
        "https://imgs.search.brave.com/0-tC_pT2OyRtwb9q6Ct3ITASQfJ-075TnzWLMaXYe-w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzEv/NDA4LzM0NC9zbWFs/bC9idXNpbmVzc21h/bi1vbi13b3JrLXRy/aXAtYXQtaG90ZWwt/dGFsa2luZy10by1m/cm9udC1kZXNrLXN0/YWZmLWFib3V0LXJv/b20tc2VydmljZXMt/YW5kLWNoZWNrLWlu/LXByb2Nlc3Mtd29t/YW4tc2hhcmluZy1p/bmZvcm1hdGlvbi13/aXRoLWltcG9ydGFu/dC1jbGllbnQtdHJh/dmVsbGluZy1mb3It/YnVzaW5lc3MtbWVl/dGluZ3MtcGhvdG8u/anBn",
      details: "24/7 concierge and luxury hotel services.",
      items: ["24/7 room service", "Concierge", "Laundry", "Airport pickup"],
    },
    {
      title: "Guest Reviews",
      desc: "Real experiences from happy guests.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      details: "Verified guest reviews and ratings.",
      items: ["Verified reviews", "Ratings", "Guest photos", "Feedback"],
    },
    {
      title: "Media Experience",
      desc: "Visual journey of luxury hospitality.",
      image:
        "https://imgs.search.brave.com/uHb5gFrOPyf4pPSslxuva-63qqjJLTR5tH0029VGZU4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/ODgyMTY0YmQwNmI3/ZTBhM2NkODM0OTYv/Njg5M2E2MTM3MzY5/ZmVhZGY0NmUwM2Mz/X3NvY2lhbC1tZWRp/YS1pY29ucy1qcGcu/YXZpZg",
      details: "Drone views, gallery and virtual tours.",
      items: ["Gallery", "Virtual tour", "Drone view", "Videos"],
    },
    {
      title: "Personalized Experience",
      desc: "Tailored services for every guest.",
      image:
        "https://imgs.search.brave.com/tQCDwXc_ETTqMfP5GpNp6XBHFyXCoybPwhQa2euWNYU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mcmFt/ZXJ1c2VyY29udGVu/dC5jb20vaW1hZ2Vz/L1R2U096SUI5UnNv/R2dyR3NwUHNoTHlY/dFRZLmpwZz93aWR0/aD0xNjAwJmhlaWdo/dD05MDA",
      details: "Custom luxury experience as per guest needs.",
      items: ["Custom setup", "Welcome message", "Honeymoon decor", "Special requests"],
    },
    
    {
  title: "Wedding & Grand Celebration",
  desc: "Luxury wedding planning with royal arrangements.",
  image:
    "https://imgs.search.brave.com/LIfIWXmnVKv4x5ogzRgVrCnVBLAdGl_6j1Sl6js6n7k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI1/NDAzNjU1MC9waG90/by90aGUtd2VkZGlu/Zy1ldmVyeW9uZXMt/YmVlbi13YWl0aW5n/LWZvci5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9dHhnZjVU/U3c2bllQcEhkaW5n/SEZEREZsRThpVVdB/RlZVUGxEeERaNWg4/bz0",
  details:
    "Make your dream wedding unforgettable with royal decor, luxury venues, stage setup, lighting and full event management.",
  items: [
    "Royal wedding setup",
    "Luxury stage decoration",
    "DJ & lighting system",
    "Catering & guest management",
  ],
},
{
  title: "Birthday & Private Party",
  desc: "Exclusive celebration setup for your special day.",
  image:
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
  details:
    "Celebrate birthdays and private parties with balloons, themed decoration, cake arrangements and music setup.",
  items: [
    "Theme decoration",
    "Cake & catering setup",
    "Music & DJ system",
    "Private party hall",
  ],
}



  ];

  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>✨ Luxury Hotel Experience</h1>
      <p style={styles.subHeading}>
        Hover on cards to explore premium hospitality experience
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
              {/* IMAGE FIXED (FULL COVER + CLEAN VIEW) */}
              <div style={styles.imageWrapper}>
                <img src={item.image} alt={item.title} style={styles.image} />
              </div>

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

export default Experience;