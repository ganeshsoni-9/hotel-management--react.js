import "./Gallery.css";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  FaStar,
  FaMapMarkerAlt,
  FaWifi,
  FaSwimmingPool,
  FaCocktail,
  FaUtensils,
  FaSpa,
  FaBed,
  FaCrown,
  FaTimes,
  FaCheckCircle,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaUsers,
  FaCalendarAlt
} from "react-icons/fa";

const Gallery = () => {

  const [selectedCard, setSelectedCard] =
    useState(null);

  const [showForm, setShowForm] =
    useState(false);

  // FORM STATE

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: "",
      request: ""
    });

  // HANDLE INPUT

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  // WHATSAPP SUBMIT

  const handleSubmit = () => {

    const message = `
🏨 HOTEL BOOKING DETAILS

👤 Name: ${formData.name}

📧 Email: ${formData.email}

📱 Phone: ${formData.phone}

📅 Check In: ${formData.checkIn}

📅 Check Out: ${formData.checkOut}

👥 Guests: ${formData.guests}

📝 Special Request:
${formData.request}

🏨 Hotel:
${selectedCard.title}

💰 Price:
${selectedCard.price}
`;

    const whatsappURL =
      `https://wa.me/8078623915?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

  };

  const galleryData = [

  {
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    title: "Luxury Hotel Exterior",
    description:
      "Royal luxury hotel with premium architecture and infinity pool.",
    fullDescription:
      "Experience Dubai’s finest luxury hotel featuring rooftop infinity pools, premium suites, spa treatments, and world-class hospitality services.",
    review:
      "Guests loved the premium hospitality and infinity pool experience.",
    location: "Dubai",
    rating: "5.0",
    feature: "Infinity Pool",
    price: "$599 / Night",
    facilities: [
      "Infinity Pool",
      "Luxury Spa",
      "Premium Dining",
      "Free WiFi"
    ],
    icon: <FaSwimmingPool />
  },

  {
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    title: "Premium Deluxe Room",
    description:
      "Modern deluxe room with luxury interiors and smart facilities.",
    fullDescription:
      "Beautiful Paris deluxe room with king-size beds, smart TV, mini bar, elegant lighting, and peaceful ambiance.",
    review:
      "Visitors appreciated the peaceful rooms and modern decoration.",
    location: "Paris",
    rating: "4.9",
    feature: "Free WiFi",
    price: "$420 / Night",
    facilities: [
      "King Bed",
      "Mini Bar",
      "Free WiFi",
      "Smart TV"
    ],
    icon: <FaWifi />
  },

  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    title: "Royal Suite Room",
    description:
      "Elegant royal suite with premium comfort and city views.",
    fullDescription:
      "Luxury royal suite designed for honeymoon couples and VIP guests with private balcony and luxury interiors.",
    review:
      "Amazing room service and luxury experience.",
    location: "London",
    rating: "4.8",
    feature: "Luxury Suite",
    price: "$750 / Night",
    facilities: [
      "Private Balcony",
      "King Bed",
      "Room Service",
      "Free WiFi"
    ],
    icon: <FaBed />
  },

  {
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    title: "Ocean View Resort",
    description:
      "Beautiful beachside resort with sunset ocean views.",
    fullDescription:
      "Enjoy ocean breeze, luxury rooms, swimming pools, beach dining, and premium hospitality services.",
    review:
      "Guests loved the beach view and peaceful environment.",
    location: "Maldives",
    rating: "5.0",
    feature: "Ocean View",
    price: "$899 / Night",
    facilities: [
      "Beach Access",
      "Swimming Pool",
      "Spa",
      "Restaurant"
    ],
    icon: <FaSwimmingPool />
  },

  {
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    title: "Luxury Spa Resort",
    description:
      "Premium spa resort with relaxing wellness treatments.",
    fullDescription:
      "A perfect destination for relaxation with spa therapies, massage rooms, yoga center, and luxury suites.",
    review:
      "Visitors loved the spa treatments and peaceful atmosphere.",
    location: "Bali",
    rating: "4.9",
    feature: "Luxury Spa",
    price: "$640 / Night",
    facilities: [
      "Spa Center",
      "Yoga Hall",
      "Swimming Pool",
      "Free Breakfast"
    ],
    icon: <FaSpa />
  },

  {
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
    title: "Mountain View Hotel",
    description:
      "Beautiful hotel surrounded by peaceful mountain views.",
    fullDescription:
      "Luxury mountain hotel with wooden interiors, cozy rooms, and breathtaking natural scenery.",
    review:
      "Perfect place for nature lovers and families.",
    location: "Switzerland",
    rating: "4.7",
    feature: "Mountain View",
    price: "$530 / Night",
    facilities: [
      "Mountain View",
      "Fireplace",
      "Free WiFi",
      "Breakfast"
    ],
    icon: <FaCrown />
  },

  {
    image:
      "https://images.unsplash.com/photo-1455587734955-081b22074882",
    title: "Luxury Dining Hall",
    description:
      "Premium dining experience with international cuisines.",
    fullDescription:
      "Elegant dining hall offering luxury seating, chef special dishes, cocktails, and romantic ambiance.",
    review:
      "Food quality and ambiance were exceptional.",
    location: "Rome",
    rating: "4.8",
    feature: "Premium Dining",
    price: "$300 / Night",
    facilities: [
      "Restaurant",
      "Cocktail Bar",
      "Live Music",
      "Free WiFi"
    ],
    icon: <FaUtensils />
  },

  {
    image:
      "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8",
    title: "Infinity Pool Hotel",
    description:
      "Modern luxury hotel with rooftop infinity pool.",
    fullDescription:
      "Enjoy rooftop pool parties, premium suites, cocktails, and luxury city skyline views.",
    review:
      "Infinity pool and night view were amazing.",
    location: "Singapore",
    rating: "5.0",
    feature: "Infinity Pool",
    price: "$720 / Night",
    facilities: [
      "Infinity Pool",
      "Cocktail Bar",
      "Gym",
      "Luxury Suites"
    ],
    icon: <FaSwimmingPool />
  },

  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Forest Luxury Resort",
    description:
      "Eco-friendly luxury resort surrounded by forests.",
    fullDescription:
      "Peaceful forest resort with luxury cottages, eco-friendly living, and natural beauty.",
    review:
      "Perfect peaceful destination for couples.",
    location: "Canada",
    rating: "4.8",
    feature: "Nature Resort",
    price: "$450 / Night",
    facilities: [
      "Forest View",
      "Luxury Cottage",
      "Free Breakfast",
      "Private Garden"
    ],
    icon: <FaCrown />
  },

  {
    image:
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a",
    title: "Luxury Business Hotel",
    description:
      "Perfect hotel for business meetings and conferences.",
    fullDescription:
      "Premium hotel featuring conference halls, business lounges, and luxury executive suites.",
    review:
      "Excellent service for business travelers.",
    location: "New York",
    rating: "4.9",
    feature: "Business Lounge",
    price: "$680 / Night",
    facilities: [
      "Conference Hall",
      "Executive Rooms",
      "High-Speed WiFi",
      "Gym"
    ],
    icon: <FaWifi />
  },

  {
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    title: "Private Villa Resort",
    description:
      "Luxury private villa with swimming pool and garden.",
    fullDescription:
      "Private villa designed for families and honeymoon couples with full privacy and premium comfort.",
    review:
      "Beautiful villa with peaceful surroundings.",
    location: "Thailand",
    rating: "5.0",
    feature: "Private Villa",
    price: "$950 / Night",
    facilities: [
      "Private Pool",
      "Garden Area",
      "Luxury Rooms",
      "Free Parking"
    ],
    icon: <FaSwimmingPool />
  },

  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    title: "Classic Heritage Hotel",
    description:
      "Traditional heritage hotel with royal interiors.",
    fullDescription:
      "Experience royal architecture, antique furniture, and premium hospitality inspired by historic culture.",
    review:
      "Guests enjoyed the royal traditional atmosphere.",
    location: "Jaipur",
    rating: "4.8",
    feature: "Heritage Stay",
    price: "$390 / Night",
    facilities: [
      "Royal Rooms",
      "Traditional Dining",
      "Cultural Events",
      "Free WiFi"
    ],
    icon: <FaCrown />
  },

  {
    image:
      "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c",
    title: "Luxury Cocktail Lounge",
    description:
      "Modern cocktail lounge with luxury nightlife experience.",
    fullDescription:
      "Premium rooftop cocktail lounge with live music, luxury seating, and city skyline views.",
    review:
      "Amazing nightlife and premium cocktails.",
    location: "Las Vegas",
    rating: "4.9",
    feature: "Cocktail Lounge",
    price: "$520 / Night",
    facilities: [
      "Cocktail Bar",
      "Live DJ",
      "Luxury Seating",
      "Night View"
    ],
    icon: <FaCocktail />
  },

  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    title: "Family Luxury Resort",
    description:
      "Luxury family resort with kids activities and pools.",
    fullDescription:
      "Perfect family resort offering entertainment zones, pools, restaurants, and spacious family suites.",
    review:
      "Families loved the activities and hospitality.",
    location: "Australia",
    rating: "4.7",
    feature: "Family Resort",
    price: "$610 / Night",
    facilities: [
      "Kids Zone",
      "Swimming Pool",
      "Family Suites",
      "Free Breakfast"
    ],
    icon: <FaSwimmingPool />
  },

  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    title: "Skyline Penthouse",
    description:
      "Luxury penthouse with breathtaking skyline views.",
    fullDescription:
      "Premium penthouse featuring rooftop lounge, private jacuzzi, luxury bedrooms, and city skyline experience.",
    review:
      "One of the best luxury stays for couples.",
    location: "Tokyo",
    rating: "5.0",
    feature: "Skyline View",
    price: "$1200 / Night",
    facilities: [
      "Private Jacuzzi",
      "Skyline View",
      "Luxury Lounge",
      "Premium Service"
    ],
    icon: <FaCrown />
  }

];
  return (

    <section className="gallery">

      <motion.div
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <h2 className="gallery-title">
          Luxury Gallery
        </h2>

        <p className="gallery-subtitle">
          Explore premium hotels and luxury stays.
        </p>

      </motion.div>

      {/* GALLERY */}

      <div className="gallery-grid">

        {
          galleryData.map((item, index) => (

            <motion.div
              className="gallery-card"
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1
              }}
            >

              <div className="gallery-image-wrapper">

                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                />

                <div className="gallery-rating">

                  <FaStar />

                  {item.rating}

                </div>

              </div>

              <div className="gallery-content">

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="gallery-location">

                  <FaMapMarkerAlt />

                  {item.location}

                </div>

                <div className="gallery-feature">

                  {item.icon}

                  {item.feature}

                </div>

                <button
                  className="gallery-btn"
                  onClick={() => {
                    setSelectedCard(item);
                    setShowForm(false);
                  }}
                >

                  Explore Now

                </button>

              </div>

            </motion.div>

          ))
        }

      </div>

      {/* POPUP */}

      <AnimatePresence>

        {
          selectedCard && (

            <motion.div
              className="popup-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >

              <motion.div
                className="popup-card"
                initial={{
                  scale: 0.5,
                  opacity: 0
                }}
                animate={{
                  scale: 1,
                  opacity: 1
                }}
                exit={{
                  scale: 0.5,
                  opacity: 0
                }}
              >

                {/* CLOSE */}

                <button
                  className="close-popup"
                  onClick={() => {
                    setSelectedCard(null);
                    setShowForm(false);
                  }}
                >

                  <FaTimes />

                </button>

                <img
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  className="popup-image"
                />

                <div className="popup-content">

                  <h2>{selectedCard.title}</h2>

                  <p className="popup-desc">
                    {selectedCard.fullDescription}
                  </p>

                  <div className="review-box">

                    <h4>Guest Review</h4>

                    <p>{selectedCard.review}</p>

                  </div>

                  <div className="popup-info">

                    <span>
                      <FaMapMarkerAlt />
                      {selectedCard.location}
                    </span>

                    <span>
                      <FaStar />
                      {selectedCard.rating}
                    </span>

                  </div>

                  <h3 className="popup-price">
                    {selectedCard.price}
                  </h3>

                  <div className="facilities">

                    {
                      selectedCard.facilities.map(
                        (facility, i) => (

                        <div
                          className="facility-item"
                          key={i}
                        >

                          <FaCheckCircle />

                          {facility}

                        </div>

                      ))
                    }

                  </div>

                  {/* BOOK BUTTON */}

                  <button
                    className="book-btn"
                    onClick={() =>
                      setShowForm(true)
                    }
                  >

                    Book Luxury Stay

                  </button>

                  {/* FORM */}

                  <AnimatePresence>

                    {
                      showForm && (

                        <motion.div
                          className="booking-form-card"
                          initial={{
                            opacity: 0,
                            scale: 0.7
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1
                          }}
                        >

                          <h2 className="form-title">
                            Hotel Booking Form
                          </h2>

                          <div className="form-group">
                            <FaUser />
                            <input
                              type="text"
                              name="name"
                              placeholder="Enter Full Name"
                              onChange={handleChange}
                            />
                          </div>

                          <div className="form-group">
                            <FaEnvelope />
                            <input
                              type="email"
                              name="email"
                              placeholder="Enter Email Address"
                              onChange={handleChange}
                            />
                          </div>

                          <div className="form-group">
                            <FaPhone />
                            <input
                              type="number"
                              name="phone"
                              placeholder="Enter Phone Number"
                              onChange={handleChange}
                            />
                          </div>

                          <div className="form-group">
                            <FaCalendarAlt />
                            <input
                              type="date"
                              name="checkIn"
                              onChange={handleChange}
                            />
                          </div>

                          <div className="form-group">
                            <FaCalendarAlt />
                            <input
                              type="date"
                              name="checkOut"
                              onChange={handleChange}
                            />
                          </div>

                          <div className="form-group">
                            <FaUsers />
                            <input
                              type="number"
                              name="guests"
                              placeholder="Number Of Guests"
                              onChange={handleChange}
                            />
                          </div>

                          <textarea
                            placeholder="Special Requests"
                            className="special-request"
                            name="request"
                            onChange={handleChange}
                          ></textarea>

                          <button
                            className="submit-btn"
                            onClick={handleSubmit}
                          >

                            Submit Booking

                          </button>

                        </motion.div>

                      )
                    }

                  </AnimatePresence>

                </div>

              </motion.div>

            </motion.div>

          )
        }

      </AnimatePresence>

    </section>

  );

};

export default Gallery;