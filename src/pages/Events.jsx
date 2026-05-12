import React from "react";

import {
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

/* IMPORT EVENT DATA */

import eventData from "../data/eventData";

const Events = () => {

  const navigate = useNavigate();

  return (

    <section className="events-section">

      {/* TOP BACKGROUND */}
      <div className="events-top-bg"></div>

      {/* HEADING */}
      <div className="events-heading">

        <p className="small-title">
          PREMIUM CELEBRATIONS
        </p>

        <h2>
          Luxury Events & Celebrations
        </h2>

        <p className="heading-text">
          Create unforgettable memories with royal decoration,
          premium dining, live entertainment, luxury ambience,
          and world-class hospitality crafted for your perfect celebration.
        </p>

      </div>

      {/* EVENT CARDS */}
      <div className="events-grid">

        {eventData.map((event) => (

          <div
            className="event-card"
            key={event.id}
          >

            {/* IMAGE */}
            <div className="event-image-wrapper">

              <img
                src={event.image}
                alt={event.title}
                className="event-image"
              />

              <div className="overlay"></div>

              {/* PRICE */}
              <div className="price-tag">
                {event.price}
              </div>

              {/* ICON */}
              <div className="event-icon">
                {event.icon}
              </div>

            </div>

            {/* CONTENT */}
            <div className="event-content">

              <div className="guests">

                <FaUsers />

                <span>
                  {event.guests}
                </span>

              </div>

              <h3>
                {event.title}
              </h3>

              <p>
                {event.description}
              </p>

              {/* BUTTONS */}
              <div className="buttons">

                {/* BOOK NOW BUTTON */}
                <button
                  className="book-btn"
                  onClick={() => navigate("/booking")}
                >
                  Book Now
                </button>

                {/* EXPLORE BUTTON */}
                <button
                  className="details-btn"
                  onClick={() => navigate(`/event/${event.id}`)}
                >

                  Explore

                  <FaArrowRight />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* STATS SECTION */}
      <div className="stats-section">

        <div className="stat-box">
          <h3>15K+</h3>
          <p>Happy Customers</p>
        </div>

        <div className="stat-box">
          <h3>500+</h3>
          <p>Luxury Events</p>
        </div>

        <div className="stat-box">
          <h3>5 Star</h3>
          <p>Premium Hospitality</p>
        </div>

        <div className="stat-box">
          <h3>24/7</h3>
          <p>Event Support</p>
        </div>

      </div>

      {/* CSS */}
      <style>{`

        .events-section{
          position:relative;
          padding:120px 70px;
          background:#f5f5f5;
          overflow:hidden;
        }

        .events-top-bg{
          position:absolute;
          top:0;
          left:0;
          width:100%;
          height:420px;
          background:linear-gradient(
            135deg,
            #111,
            #1f1f1f,
            #2a2a2a
          );
          clip-path:polygon(
            0 0,
            100% 0,
            100% 75%,
            0 100%
          );
          z-index:0;
        }

        .events-heading{
          position:relative;
          z-index:2;
          text-align:center;
          margin-bottom:80px;
        }

        .small-title{
          color:#d4af37;
          letter-spacing:3px;
          font-size:15px;
          font-weight:700;
          margin-bottom:20px;
        }

        .events-heading h2{
          font-size:65px;
          font-weight:900;
          color:#fff;
          margin-bottom:25px;
          line-height:1.1;
        }

        .heading-text{
          max-width:850px;
          margin:auto;
          color:#ddd;
          font-size:20px;
          line-height:1.9;
        }

        .events-grid{
          position:relative;
          z-index:2;
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(380px,1fr));
          gap:35px;
        }

        .event-card{
          background:#fff;
          border-radius:30px;
          overflow:hidden;
          box-shadow:0 15px 40px rgba(0,0,0,0.12);
          transition:0.5s;
        }

        .event-card:hover{
          transform:translateY(-12px);
        }

        .event-image-wrapper{
          position:relative;
          height:300px;
          overflow:hidden;
        }

        .event-image{
          width:100%;
          height:100%;
          object-fit:cover;
          transition:0.7s;
        }

        .event-card:hover .event-image{
          transform:scale(1.12);
        }

        .overlay{
          position:absolute;
          inset:0;
          background:linear-gradient(
            to top,
            rgba(0,0,0,0.7),
            rgba(0,0,0,0.1)
          );
        }

        .price-tag{
          position:absolute;
          top:20px;
          right:20px;
          background:#d4af37;
          color:#111;
          padding:10px 18px;
          border-radius:50px;
          font-weight:800;
          font-size:15px;
          box-shadow:0 5px 15px rgba(0,0,0,0.2);
        }

        .event-icon{
          position:absolute;
          bottom:-28px;
          left:30px;
          width:60px;
          height:60px;
          background:#d4af37;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          color:#111;
          font-size:22px;
          font-weight:bold;
          box-shadow:0 10px 20px rgba(0,0,0,0.15);
        }

        .event-content{
          padding:45px 30px 30px;
        }

        .guests{
          display:flex;
          align-items:center;
          gap:10px;
          color:#b8860b;
          font-weight:700;
          margin-bottom:15px;
          font-size:15px;
        }

        .event-content h3{
          font-size:32px;
          font-weight:800;
          margin-bottom:18px;
          color:#111;
        }

        .event-content p{
          color:#666;
          line-height:1.9;
          font-size:16px;
          margin-bottom:28px;
        }

        .buttons{
          display:flex;
          gap:15px;
        }

        .book-btn{
          flex:1;
          padding:15px;
          border:none;
          border-radius:12px;
          background:#111;
          color:#fff;
          font-size:16px;
          font-weight:700;
          cursor:pointer;
          transition:0.4s;
        }

        .book-btn:hover{
          background:#d4af37;
          color:#111;
        }

        .details-btn{
          flex:1;
          padding:15px;
          border:none;
          border-radius:12px;
          background:#f2f2f2;
          color:#111;
          font-size:16px;
          font-weight:700;
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:10px;
          transition:0.4s;
        }

        .details-btn:hover{
          background:#111;
          color:#fff;
        }

        .stats-section{
          margin-top:100px;
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:25px;
        }

        .stat-box{
          background:#fff;
          padding:40px 30px;
          border-radius:25px;
          text-align:center;
          box-shadow:0 10px 30px rgba(0,0,0,0.08);
          transition:0.4s;
        }

        .stat-box:hover{
          transform:translateY(-8px);
        }

        .stat-box h3{
          font-size:48px;
          color:#d4af37;
          margin-bottom:12px;
          font-weight:900;
        }

        .stat-box p{
          font-size:18px;
          color:#555;
          font-weight:600;
        }

        @media(max-width:992px){

          .events-section{
            padding:100px 25px;
          }

          .events-heading h2{
            font-size:48px;
          }

          .heading-text{
            font-size:17px;
          }

        }

        @media(max-width:768px){

          .events-grid{
            grid-template-columns:1fr;
          }

          .events-heading h2{
            font-size:38px;
          }

          .event-content h3{
            font-size:26px;
          }

          .buttons{
            flex-direction:column;
          }

        }

      `}</style>

    </section>

  );
};

export default Events;