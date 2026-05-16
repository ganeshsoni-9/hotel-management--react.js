import React, { useState } from "react";
import "./EventsPage.css";

import { motion, AnimatePresence } from "framer-motion";

import {
  FaHeart,
  FaBirthdayCake,
  FaGlassCheers,
  FaMusic,
  FaCamera,
  FaGift,
  FaStar,
  FaUsers,
  FaTimes,
} from "react-icons/fa";

/* =====================================================
   EVENTS DATA
===================================================== */

const eventsData = [
  {
    id: 1,
    title: "Royal Wedding",
    desc: "Luxury wedding decoration with amazing lighting and music.",
    fullDesc:
      "Experience a royal wedding celebration filled with luxury decoration, elegant stage setup, beautiful flower arrangements, cinematic lighting, live music, and unforgettable memories. Our wedding event includes premium seating, designer entrance, stunning mandap decoration, professional photography, and grand catering services. Every detail is carefully planned to create a magical atmosphere for couples and guests. From traditional rituals to modern entertainment, this wedding experience delivers style, comfort, and happiness. Make your special day truly memorable with our premium wedding management services and world-class event planning.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    icon: <FaHeart />,
  },

  {
    id: 2,
    title: "Birthday Party",
    desc: "Colorful birthday celebration with cake and DJ setup.",
    fullDesc:
      "Celebrate your birthday with exciting decorations, vibrant balloons, delicious cakes, energetic DJ music, and unforgettable fun. Our birthday party setup includes customized themes, dance floors, LED lighting, selfie corners, and entertainment activities for guests of all ages. We create joyful moments with professional event planning and attractive decorations that make every birthday extra special. Whether it is for kids, teenagers, or adults, our birthday events are designed to deliver happiness, excitement, and beautiful memories. Enjoy a stress-free celebration while we manage everything from decoration to entertainment with creativity and perfection.",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1200&auto=format&fit=crop",
    icon: <FaBirthdayCake />,
  },

  {
    id: 3,
    title: "Anniversary Night",
    desc: "Romantic anniversary decoration with candle dinner.",
    fullDesc:
      "Enjoy a romantic anniversary night with elegant candlelight decoration, soft music, luxury dining, and a beautiful atmosphere designed for couples. This special celebration includes flower arrangements, personalized table setup, premium lighting, and memorable surprises that create magical moments. Our anniversary events focus on comfort, romance, and unforgettable experiences for couples celebrating their journey together. From private dining to grand anniversary parties, every detail is planned professionally to make the evening truly special. Celebrate love, happiness, and togetherness with a luxurious anniversary setup that creates memories to cherish forever.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
    icon: <FaGlassCheers />,
  },

  {
    id: 4,
    title: "Music Concert",
    desc: "Live concert stage with energetic crowd and lighting.",
    fullDesc:
      "Experience an electrifying music concert with powerful sound systems, vibrant stage lighting, energetic crowds, and unforgettable live performances. Our concert events include modern stage design, LED visuals, professional audio setup, and exciting entertainment that creates an amazing atmosphere for music lovers. From live bands to celebrity DJs, every performance is designed to keep the audience engaged and excited throughout the event. Enjoy thrilling music, dance, and unforgettable moments with friends in a professionally managed concert experience filled with energy, excitement, and world-class entertainment for everyone attending the show.",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
    icon: <FaMusic />,
  },

  {
    id: 5,
    title: "Photography Event",
    desc: "Professional photography and cinematic video shoot.",
    fullDesc:
      "Capture beautiful memories with our professional photography and cinematic videography services designed for special occasions and luxury events. This photography event includes high-quality cameras, creative photoshoots, cinematic video editing, drone coverage, and stunning visual storytelling. Our experienced photographers focus on capturing emotions, smiles, and unforgettable moments with perfection and creativity. Whether it is weddings, parties, fashion shoots, or corporate events, we provide premium photography experiences that create timeless memories. Enjoy professional lighting, artistic concepts, and high-quality visuals that make every event look extraordinary and visually impressive.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
    icon: <FaCamera />,
  },

  {
    id: 6,
    title: "Corporate Meeting",
    desc: "Professional corporate event management and setup.",
    fullDesc:
      "Organize professional corporate meetings with modern conference setups, elegant seating arrangements, premium audio systems, and business-focused event management services. Our corporate events provide a productive atmosphere for seminars, presentations, business discussions, and networking opportunities. We offer professional stage design, projector setup, lighting, catering, and technical support to ensure smooth event execution. From small business meetings to large corporate conferences, every detail is handled carefully for maximum professionalism and comfort. Create a strong impression on clients, employees, and business partners with our organized and luxury corporate event solutions.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    icon: <FaUsers />,
  },

  {
    id: 7,
    title: "Festival Celebration",
    desc: "Traditional festival setup with lights and decoration.",
    fullDesc:
      "Celebrate festivals with colorful decorations, traditional lighting, cultural music, and joyful entertainment that creates a vibrant atmosphere for everyone. Our festival celebrations include decorative lights, themed setups, traditional performances, delicious food arrangements, and engaging activities designed to bring happiness and togetherness. Whether it is Diwali, Holi, Navratri, or other cultural festivals, we provide complete event planning and decoration services with creativity and elegance. Experience the beauty of traditions combined with modern event management to create unforgettable celebrations filled with energy, culture, and excitement for families and guests.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    icon: <FaGift />,
  },

  {
    id: 8,
    title: "Luxury Dining",
    desc: "Premium dining experience with beautiful atmosphere.",
    fullDesc:
      "Enjoy a premium luxury dining experience with elegant table setups, beautiful interiors, soft lighting, and delicious gourmet cuisine prepared by expert chefs. Our luxury dining events create a sophisticated atmosphere perfect for romantic dinners, family gatherings, and exclusive celebrations. Guests can enjoy high-quality food, excellent hospitality, and relaxing music in a stylish environment designed for comfort and elegance. From fine dining services to customized decorations, every detail is carefully arranged to deliver a memorable experience. Experience taste, luxury, and hospitality together in a beautifully designed dining atmosphere.",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
    icon: <FaStar />,
  },

  {
    id: 9,
    title: "Pool Party",
    desc: "Exciting poolside party with music and cocktails.",
    fullDesc:
      "Enjoy an exciting pool party experience with refreshing poolside vibes, energetic music, colorful lighting, and fun entertainment activities. Our pool parties include DJ music, stylish seating arrangements, cocktail counters, dance zones, and vibrant decorations that create the perfect party atmosphere. Guests can relax, dance, and enjoy unforgettable moments with friends in a lively environment filled with excitement and luxury. Whether it is a birthday celebration, summer event, or private gathering, our pool party setup delivers style, comfort, and entertainment together. Experience fun, music, and relaxation in an amazing poolside celebration.",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop",
    icon: <FaGlassCheers />,
  },

  {
    id: 10,
    title: "DJ Night",
    desc: "Amazing DJ night with dance floor and neon lights.",
    fullDesc:
      "Experience an energetic DJ night filled with powerful music, neon lighting, exciting dance performances, and unforgettable party vibes. Our DJ events include premium sound systems, stylish dance floors, laser lighting, smoke effects, and live entertainment that keeps the audience engaged all night long. Guests can enjoy trending music mixes, vibrant decorations, and a thrilling atmosphere perfect for celebrations and nightlife events. Whether it is a club event, college party, or private celebration, our DJ nights deliver excitement, fun, and entertainment with professional event management and world-class music experiences.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
    icon: <FaMusic />,
  },
];

/* =====================================================
   COMPONENT
===================================================== */

const EventsPage = () => {
  const [showForm, setShowForm] = useState(false);

  const [selectedEvent, setSelectedEvent] = useState("");

  const [selectedExplore, setSelectedExplore] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    date: "",
    message: "",
  });

  /* =========================
      OPEN BOOKING
  ========================== */

  const handleBooking = (eventTitle) => {
    setSelectedEvent(eventTitle);
    setShowForm(true);
  };

  /* =========================
      OPEN EXPLORE CARD
  ========================== */

  const handleExplore = (event) => {
    setSelectedExplore(event);
  };

  /* =========================
      INPUT CHANGE
  ========================== */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* =========================
      SEND TO WHATSAPP
  ========================== */

  const sendToWhatsApp = () => {
    const phoneNumber = "8078623915";

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.guests ||
      !formData.date
    ) {
      alert("Please fill all required fields");
      return;
    }

    const message = `
━━━━━━━━━━━━━━━━━━
🎉 EVENT BOOKING 🎉
━━━━━━━━━━━━━━━━━━

📌 EVENT:
${selectedEvent}

👤 NAME:
${formData.name}

📞 PHONE:
${formData.phone}

📧 EMAIL:
${formData.email}

👥 GUESTS:
${formData.guests}

📅 DATE:
${formData.date}

📝 MESSAGE:
${formData.message}

━━━━━━━━━━━━━━━━━━
Thank You ❤️
━━━━━━━━━━━━━━━━━━
`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="events-page">
      {/* HERO */}

      <div className="events-hero">
        <h1>Our Premium Events</h1>

        <p>
          Explore beautiful events with luxury decoration, music and
          unforgettable memories.
        </p>
      </div>

      {/* EVENTS */}

      <div className="events-container">
        {eventsData.map((event, index) => (
          <motion.div
            className="event-card"
            key={event.id}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="event-image-box">
              <img src={event.image} alt={event.title} />

              <div className="overlay">
                <button
                  className="explore-btn"
                  onClick={() => handleExplore(event)}
                >
                  Explore
                </button>

                <button
                  className="book-btn"
                  onClick={() => handleBooking(event.title)}
                >
                  Book Now
                </button>
              </div>
            </div>

            <div className="event-content">
              <div className="icon">{event.icon}</div>

              <h2>{event.title}</h2>

              <p>{event.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* =====================================================
          EXPLORE MODAL
      ===================================================== */}

      <AnimatePresence>
        {selectedExplore && (
          <motion.div
            className="explore-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="explore-card"
              initial={{ scale: 0.7, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 100 }}
              transition={{ duration: 0.5 }}
            >
              {/* CLOSE */}

              <div
                className="explore-close"
                onClick={() => setSelectedExplore(null)}
              >
                <FaTimes />
              </div>

              {/* IMAGE */}

              <img
                src={selectedExplore.image}
                alt={selectedExplore.title}
              />

              {/* CONTENT */}

              <div className="explore-content">
                <div className="explore-icon">
                  {selectedExplore.icon}
                </div>

                <h2>{selectedExplore.title}</h2>

                <p>{selectedExplore.fullDesc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          BOOKING MODAL
      ===================================================== */}

      {showForm && (
        <div className="booking-modal">
          <div className="booking-form">
            <div
              className="close-btn"
              onClick={() => setShowForm(false)}
            >
              <FaTimes />
            </div>

            <h2>Book Event</h2>

            <div className="selected-box">
              <label>Selected Event</label>

              <input
                type="text"
                value={selectedEvent}
                readOnly
                className="selected-input"
              />
            </div>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
            />

            <input
              type="number"
              name="guests"
              placeholder="Number of Guests"
              onChange={handleChange}
            />

            <input
              type="date"
              name="date"
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Special Message..."
              rows="4"
              onChange={handleChange}
            ></textarea>

            <button
              className="confirm-btn"
              onClick={sendToWhatsApp}
            >
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;