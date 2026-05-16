import React, { useState } from "react";

import {
  FaStar,
  FaTimes,
  FaMapMarkerAlt,
  FaWifi,
  FaSwimmingPool,
  FaSpa,
  FaCocktail,
  FaUtensils,
  FaArrowLeft,
  FaHeart,
  FaFire,
  FaCrown,
  FaGem,
  FaClock,
  FaUsers,
  FaBed,
  FaCheckCircle,
} from "react-icons/fa";

const offersData = [
  {
    id: 1,
    title: "Luxury Escape",

    shortDesc:
      "Experience world-class luxury stays with private suites, infinity pools and personalized hospitality.",

    fullDesc:
      "Luxury Escape offers an unforgettable premium vacation experience designed for travelers who love elegance and comfort.",

    img:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",

    rating: 4.8,
    location: "Dubai, UAE",
    price: "₹45,999",
    reviews: "2.4k Reviews",
    tag: "Trending",
    duration: "4 Nights",
    guests: "2 Guests",
    room: "Luxury Suite",
  },

  {
    id: 2,
    title: "Beach Paradise",

    shortDesc:
      "Relax in crystal-clear beaches with premium resorts and unforgettable ocean experiences.",

    fullDesc:
      "Beach Paradise is a dream destination for travelers who enjoy tropical beauty, ocean views, and peaceful luxury living.",

    img:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",

    rating: 4.7,
    location: "Maldives",
    price: "₹52,999",
    reviews: "1.8k Reviews",
    tag: "Hot Deal",
    duration: "5 Nights",
    guests: "2 Guests",
    room: "Ocean Villa",
  },

  {
    id: 3,
    title: "Mountain Retreat",

    shortDesc:
      "Enjoy peaceful mountain stays surrounded by nature and breathtaking sunrise views.",

    fullDesc:
      "Mountain Retreat provides a peaceful escape surrounded by green valleys, snowy mountains, and refreshing natural beauty.",

    img:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",

    rating: 4.6,
    location: "Manali, India",
    price: "₹29,999",
    reviews: "3.1k Reviews",
    tag: "Popular",
    duration: "3 Nights",
    guests: "4 Guests",
    room: "Wooden Cottage",
  },
];

const Offers = () => {
  const [selectedOffer, setSelectedOffer] =
    useState(null);

  return (
    <section className="offers">

      {/* TOP BANNER */}

      <div className="top-banner">

        <div className="banner-card">

          <FaCrown className="banner-icon" />

          <div>
            <h3>Royal Premium Collection</h3>

            <p>
              Exclusive luxury experiences
              crafted for elite travelers.
            </p>
          </div>

        </div>

        <div className="banner-card">

          <FaGem className="banner-icon" />

          <div>
            <h3>Luxury Destinations</h3>

            <p>
              Handpicked resorts with
              world-class hospitality.
            </p>
          </div>

        </div>

      </div>

      {/* HEADING */}

      <div className="heading-box">

        <h2>✨ Royal Luxury Offers</h2>

        <p>
          Explore premium royal stays,
          luxury resorts and unforgettable experiences.
        </p>

      </div>

      {/* CARDS */}

      <div className="offer-container">

        {offersData.map((item) => (

          <div
            className="offer-card"
            key={item.id}
          >

            {/* IMAGE */}

            <div className="img-box">

              <img
                src={item.img}
                alt={item.title}
              />

              <div className="overlay">

                <span className="price-tag">
                  {item.price}
                </span>

                <span className="offer-tag">

                  <FaFire />

                  {item.tag}

                </span>

              </div>

              <div className="heart-icon">

                <FaHeart />

              </div>

            </div>

            {/* CONTENT */}

            <div className="offer-content">

              <div className="top-row">

                <h3>{item.title}</h3>

                <span className="rating-box">

                  <FaStar />

                  {item.rating}

                </span>

              </div>

              <div className="location">

                <FaMapMarkerAlt />

                {item.location}

              </div>

              <p>
                {item.shortDesc}
              </p>

              {/* EXTRA INFO */}

              <div className="extra-info">

                <div>
                  ⭐ Premium Stay
                </div>

                <div>
                  🏨 Luxury Rooms
                </div>

                <div>
                  🍽 Fine Dining
                </div>

              </div>

              <button
                className="explore-btn"
                onClick={() =>
                  setSelectedOffer(item)
                }
              >
                Explore More
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* SERVICES */}

      <div className="services-section">

        <div className="service-box">

          <FaSpa className="service-icon" />

          <h3>Luxury Wellness</h3>

          <p>
            Premium spa therapies and relaxing experiences.
          </p>

        </div>

        <div className="service-box">

          <FaCocktail className="service-icon" />

          <h3>Premium Dining</h3>

          <p>
            Experience luxury restaurants and gourmet meals.
          </p>

        </div>

        <div className="service-box">

          <FaSwimmingPool className="service-icon" />

          <h3>Infinity Pools</h3>

          <p>
            Relax inside beautiful infinity pools.
          </p>

        </div>

      </div>

      {/* SMALL MODAL */}

      {selectedOffer && (

        <div
          className="modal-overlay"
          onClick={() =>
            setSelectedOffer(null)
          }
        >

          <div
            className="small-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* CLOSE */}

            <button
              className="close-btn"
              onClick={() =>
                setSelectedOffer(null)
              }
            >
              <FaTimes />
            </button>

            {/* IMAGE */}

            <img
              src={selectedOffer.img}
              alt={selectedOffer.title}
              className="small-modal-img"
            />

            {/* CONTENT */}

            <div className="small-modal-content">

              <div className="modal-title-row">

                <h2>
                  {selectedOffer.title}
                </h2>

                <div className="modal-rating">
                  ⭐ {selectedOffer.rating}
                </div>

              </div>

              <p className="modal-location">

                <FaMapMarkerAlt />

                {selectedOffer.location}

              </p>

              {/* INFO */}

              <div className="mini-info">

                <div>
                  <FaClock />
                  {selectedOffer.duration}
                </div>

                <div>
                  <FaUsers />
                  {selectedOffer.guests}
                </div>

                <div>
                  <FaBed />
                  {selectedOffer.room}
                </div>

              </div>

              {/* FEATURES */}

              <div className="features">

                <div>
                  <FaWifi />
                  Wifi
                </div>

                <div>
                  <FaSwimmingPool />
                  Pool
                </div>

                <div>
                  <FaSpa />
                  Spa
                </div>

                <div>
                  <FaCocktail />
                  Bar
                </div>

              </div>

              {/* DESC */}

              <p className="modal-desc">
                {selectedOffer.fullDesc}
              </p>

              {/* PRICE */}

              <div className="bottom-row">

                <h3>
                  {selectedOffer.price}
                </h3>

                <button className="book-btn">
                  Book Now
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

      {/* CSS */}

      <style>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:sans-serif;
        }

        body{
          background:#120b1f;
        }

        .offers{
          width:100%;
          min-height:100vh;
          background:
          linear-gradient(
          135deg,
          #120b1f,
          #1d1033,
          #2a1245,
          #14071f
          );
          padding:80px 6%;
          color:#fff;
        }

        .top-banner{
          display:grid;
          grid-template-columns:
          repeat(auto-fit,minmax(280px,1fr));
          gap:25px;
          margin-bottom:50px;
        }

        .banner-card{
          background:
          rgba(255,255,255,0.08);
          padding:25px;
          border-radius:22px;
          display:flex;
          align-items:center;
          gap:20px;
          border:1px solid
          rgba(255,255,255,0.1);
        }

        .banner-icon{
          font-size:45px;
          color:gold;
        }

        .heading-box{
          text-align:center;
          margin-bottom:60px;
        }

        .heading-box h2{
          font-size:52px;
          margin-bottom:15px;
          background:
          linear-gradient(
          to right,
          gold,
          #fff
          );
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .heading-box p{
          max-width:700px;
          margin:auto;
          color:#ddd;
          line-height:1.8;
        }

        .offer-container{
          display:grid;
          grid-template-columns:
          repeat(auto-fit,minmax(320px,1fr));
          gap:30px;
        }

        .offer-card{
          background:
          rgba(255,255,255,0.06);
          border-radius:24px;
          overflow:hidden;
          transition:0.4s;
          border:1px solid
          rgba(255,255,255,0.1);
        }

        .offer-card:hover{
          transform:translateY(-10px);
        }

        .img-box{
          height:250px;
          position:relative;
          overflow:hidden;
        }

        .img-box img{
          width:100%;
          height:100%;
          object-fit:cover;
          transition:0.5s;
        }

        .offer-card:hover img{
          transform:scale(1.08);
        }

        .overlay{
          position:absolute;
          inset:0;
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          padding:20px;
          background:
          linear-gradient(
          to top,
          rgba(0,0,0,0.7),
          transparent
          );
        }

        .price-tag,
        .offer-tag{
          padding:10px 16px;
          border-radius:30px;
          font-size:13px;
          font-weight:700;
        }

        .price-tag{
          background:gold;
          color:#000;
        }

        .offer-tag{
          background:#ff4d6d;
          display:flex;
          align-items:center;
          gap:6px;
        }

        .heart-icon{
          position:absolute;
          bottom:18px;
          right:18px;
          width:42px;
          height:42px;
          border-radius:50%;
          background:
          rgba(255,255,255,0.12);
          display:flex;
          justify-content:center;
          align-items:center;
          color:#ff4d6d;
        }

        .offer-content{
          padding:22px;
        }

        .top-row{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:12px;
        }

        .top-row h3{
          font-size:24px;
        }

        .rating-box{
          background:#2f2148;
          padding:8px 12px;
          border-radius:30px;
          display:flex;
          align-items:center;
          gap:6px;
          color:gold;
        }

        .location{
          display:flex;
          align-items:center;
          gap:8px;
          margin-bottom:15px;
          color:#d0c5e6;
        }

        .offer-content p{
          color:#ddd;
          line-height:1.7;
          margin-bottom:20px;
        }

        .extra-info{
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          margin-bottom:22px;
        }

        .extra-info div{
          background:
          rgba(255,255,255,0.08);
          padding:8px 14px;
          border-radius:30px;
          font-size:13px;
        }

        .explore-btn{
          width:100%;
          padding:14px;
          border:none;
          border-radius:14px;
          background:
          linear-gradient(
          to right,
          gold,
          #ffdd55
          );
          color:#000;
          font-weight:800;
          cursor:pointer;
          transition:0.4s;
        }

        .explore-btn:hover{
          transform:scale(1.03);
        }

        /* SERVICES */

        .services-section{
          display:grid;
          grid-template-columns:
          repeat(auto-fit,minmax(250px,1fr));
          gap:25px;
          margin-top:70px;
        }

        .service-box{
          background:
          rgba(255,255,255,0.06);
          padding:30px;
          border-radius:24px;
          text-align:center;
          border:1px solid
          rgba(255,255,255,0.08);
        }

        .service-icon{
          font-size:42px;
          color:gold;
          margin-bottom:18px;
        }

        /* SMALL MODAL */

        .modal-overlay{
          position:fixed;
          inset:0;
          background:rgba(0,0,0,0.75);
          display:flex;
          justify-content:center;
          align-items:center;
          padding:20px;
          z-index:999;
          backdrop-filter:blur(8px);
        }

        .small-modal{
          width:100%;
          max-width:500px;
          background:
          linear-gradient(
          135deg,
          #1a0f2c,
          #261540
          );
          border-radius:24px;
          overflow:hidden;
          position:relative;
          animation:popup 0.4s ease;
          border:1px solid
          rgba(255,255,255,0.1);
          box-shadow:
          0 20px 60px rgba(0,0,0,0.5);
        }

        @keyframes popup{
          from{
            transform:scale(0.7);
            opacity:0;
          }
          to{
            transform:scale(1);
            opacity:1;
          }
        }

        .close-btn{
          position:absolute;
          top:14px;
          right:14px;
          width:38px;
          height:38px;
          border:none;
          border-radius:50%;
          background:#ff3d3d;
          color:#fff;
          cursor:pointer;
          z-index:10;
        }

        .small-modal-img{
          width:100%;
          height:220px;
          object-fit:cover;
        }

        .small-modal-content{
          padding:22px;
        }

        .modal-title-row{
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:10px;
          margin-bottom:10px;
        }

        .modal-title-row h2{
          font-size:28px;
        }

        .modal-rating{
          background:gold;
          color:#000;
          padding:8px 14px;
          border-radius:30px;
          font-weight:700;
          font-size:14px;
        }

        .modal-location{
          display:flex;
          align-items:center;
          gap:8px;
          color:#ddd;
          margin-bottom:18px;
        }

        .mini-info{
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          margin-bottom:18px;
        }

        .mini-info div{
          background:
          rgba(255,255,255,0.08);
          padding:10px 14px;
          border-radius:30px;
          display:flex;
          align-items:center;
          gap:8px;
          font-size:13px;
        }

        .features{
          display:grid;
          grid-template-columns:
          repeat(2,1fr);
          gap:12px;
          margin-bottom:20px;
        }

        .features div{
          background:
          rgba(255,255,255,0.08);
          padding:12px;
          border-radius:14px;
          display:flex;
          align-items:center;
          gap:8px;
        }

        .modal-desc{
          color:#ddd;
          line-height:1.8;
          font-size:14px;
          margin-bottom:22px;
        }

        .bottom-row{
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:20px;
        }

        .bottom-row h3{
          color:gold;
          font-size:28px;
        }

        .book-btn{
          padding:12px 24px;
          border:none;
          border-radius:14px;
          background:
          linear-gradient(
          to right,
          gold,
          #ffe066
          );
          color:#000;
          font-weight:800;
          cursor:pointer;
        }

        @media(max-width:768px){

          .heading-box h2{
            font-size:38px;
          }

          .small-modal{
            max-width:95%;
          }

          .modal-title-row{
            flex-direction:column;
            align-items:flex-start;
          }

          .features{
            grid-template-columns:1fr;
          }

          .bottom-row{
            flex-direction:column;
            align-items:flex-start;
          }

        }

      `}</style>

    </section>
  );
};

export default Offers;