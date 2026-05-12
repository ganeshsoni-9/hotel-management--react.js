import {
  FaStar,
  FaMapMarkerAlt,
  FaWifi,
  FaSwimmingPool
} from "react-icons/fa";

const Gallery = () => {

  const galleryData = [

    {
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      title: "Luxury Hotel Exterior",
      description:
        "Experience royal architecture with premium luxury ambiance.",
      location: "Dubai",
      rating: "5.0",
      feature: "Infinity Pool"
    },

    {
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      title: "Premium Deluxe Room",
      description:
        "Elegant rooms designed with modern comfort and style.",
      location: "Paris",
      rating: "4.9",
      feature: "Free WiFi"
    },

    {
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      title: "Infinity Pool Area",
      description:
        "Relax beside breathtaking pool views and luxury seating.",
      location: "Maldives",
      rating: "5.0",
      feature: "Luxury Pool"
    },

    {
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
      title: "Luxury Suite",
      description:
        "Premium suites with royal interiors and king-size comfort.",
      location: "London",
      rating: "4.8",
      feature: "Royal Suite"
    },

    {
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      title: "Modern Bedroom",
      description:
        "Beautifully designed bedrooms with luxury decor.",
      location: "Singapore",
      rating: "4.9",
      feature: "King Bed"
    },

    {
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      title: "Royal Dining",
      description:
        "Enjoy fine dining with premium hotel services.",
      location: "Italy",
      rating: "5.0",
      feature: "Premium Dining"
    },

    {
      image:
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
      title: "Luxury Swimming Pool",
      description:
        "World-class swimming experience with peaceful atmosphere.",
      location: "Thailand",
      rating: "4.9",
      feature: "Pool Access"
    },

    {
      image:
        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a",
      title: "Luxury Restaurant",
      description:
        "Taste premium dishes prepared by expert chefs.",
      location: "New York",
      rating: "4.8",
      feature: "Chef Special"
    },

    {
      image:
        "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8",
      title: "Royal Hotel Lobby",
      description:
        "Elegant hotel lobby with premium interior design.",
      location: "Tokyo",
      rating: "5.0",
      feature: "Luxury Lobby"
    }

  ];

  return (

    <section className="gallery">

      {/* TITLE */}

      <h2 className="gallery-title">
        Luxury Gallery
      </h2>

      {/* SUBTITLE */}

      <p className="gallery-subtitle">
        Discover premium luxury experiences,
        royal interiors and world-class comfort.
      </p>

      {/* GRID */}

      <div className="gallery-grid">

        {
          galleryData.map((item, index) => (

            <div
              className="gallery-card"
              key={index}
            >

              {/* IMAGE */}

              <div className="gallery-image-wrapper">

                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                />

                {/* TOP BADGE */}

                <div className="gallery-badge">

                  <FaStar />

                  {item.rating}

                </div>

              </div>

              {/* CONTENT */}

              <div className="gallery-content">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

                {/* FEATURES */}

                <div className="gallery-info">

                  <span>

                    <FaMapMarkerAlt />

                    {item.location}

                  </span>

                  <span>

                    <FaWifi />

                    {item.feature}

                  </span>

                </div>

                {/* EXTRA FEATURE */}

                <div className="gallery-feature">

                  <FaSwimmingPool />

                  {item.feature}

                </div>

                {/* BUTTON */}

                <button className="gallery-btn">

                  Explore More

                </button>

              </div>

            </div>

          ))
        }

      </div>

    </section>

  );

};

export default Gallery;