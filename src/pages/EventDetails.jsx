import React from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

/* TOAST */

import toast from "react-hot-toast";

/* IMPORT EVENT DATA */

import eventData from "../data/eventData";

const EventDetails = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  /* FIND SINGLE EVENT */

  const singleEvent = eventData.find(
    (event) => event.id === Number(id)
  );

  /* EVENT NOT FOUND */

  if (!singleEvent) {

    return (

      <h1
        style={{
          textAlign: "center",
          marginTop: "100px",
          fontSize: "45px",
          color: "#111",
        }}
      >
        Event Not Found
      </h1>

    );
  }

  return (

    <section
      style={{
        padding: "100px 50px",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >

      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          background: "#fff",
          borderRadius: "25px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >

        {/* EVENT IMAGE */}

        <img
          src={singleEvent.image}
          alt={singleEvent.title}
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
          }}
        />

        {/* CONTENT */}

        <div
          style={{
            padding: "40px",
          }}
        >

          <h1
            style={{
              fontSize: "50px",
              marginBottom: "20px",
            }}
          >
            {singleEvent.title}
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#666",
              lineHeight: "1.8",
              marginBottom: "25px",
            }}
          >
            {singleEvent.description}
          </p>

          <h2
            style={{
              color: "#b8860b",
              marginBottom: "20px",
            }}
          >
            Price: {singleEvent.price}
          </h2>

          {/* GUESTS */}

          <h3
            style={{
              marginBottom: "30px",
              color: "#111",
            }}
          >
            Guests: {singleEvent.guests}
          </h3>

          {/* BUTTONS */}

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >

            {/* BOOK BUTTON */}

            <button

              onClick={() => {

                toast.success(
                  "🎉 Event Booked Successfully!",
                  {
                    duration: 3000,

                    style: {
                      background: "#111",
                      color: "#fff",
                      padding: "18px",
                      borderRadius: "14px",
                      fontWeight: "700",
                      fontSize: "16px",
                    },

                    iconTheme: {
                      primary: "#d4af37",
                      secondary: "#111",
                    },
                  }
                );

                setTimeout(() => {
                  navigate("/");
                }, 3000);

              }}

              style={{
                padding: "18px 35px",
                background: "#111",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontSize: "17px",
                cursor: "pointer",
                fontWeight: "700",
              }}
            >
              Book This Event
            </button>

            {/* BACK BUTTON */}

            <button
              onClick={() => navigate("/more")}
              style={{
                padding: "18px 35px",
                background: "#d4af37",
                color: "#111",
                border: "none",
                borderRadius: "10px",
                fontSize: "17px",
                cursor: "pointer",
                fontWeight: "700",
              }}
            >
              Back To Events
            </button>

          </div>

        </div>

      </div>

    </section>

  );
};

export default EventDetails;