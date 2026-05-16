import React from "react";

import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import LuxurySlider from "../components/LuxurySlider";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {

  return (

    <div className="home-page">

      {/* HERO SECTION */}

      <Hero />

      {/* WELCOME SECTION */}

      <section
        style={{
          minHeight: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "40px 20px",
          background:
            "linear-gradient(to right, #0f172a, #1e293b)",
          color: "white",
        }}
      >

        <h1
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Hotel Management Website
        </h1>

        <p
          style={{
            fontSize: "18px",
            maxWidth: "700px",
            lineHeight: "1.8",
            color: "#cbd5e1",
          }}
        >
          Experience luxury, comfort, and premium
          hospitality with our modern hotel
          management platform. Book rooms,
          explore events, enjoy delicious food,
          and discover unforgettable experiences.
        </p>

      </section>

      {/* MAIN CONTENT */}

      <main className="main-content">

        <Gallery />

        <LuxurySlider />

        <Testimonials />

        <Stats />

        <FAQ />

      </main>

      {/* FOOTER */}

      <Footer />

    </div>

  );

};

export default Home;