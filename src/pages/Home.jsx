import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import BookingForm from "../components/BookingForm";
import Rooms from "../components/Rooms";
import LuxurySlider from "../components/LuxurySlider";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {

  return (

    <div className="home-page">

      {/* =========================
            NAVBAR
      ========================== */}

      <Navbar />

      {/* =========================
            HERO SECTION
      ========================== */}

      <Hero />

      {/* =========================
            MAIN CONTENT
      ========================== */}

      <main className="main-content">

        <Gallery />

        <BookingForm />

        <Rooms />

        <LuxurySlider />

        <Testimonials />

        <Stats />

        <FAQ />

      </main>

      {/* =========================
            FOOTER
      ========================== */}

      <Footer />

    </div>

  );

};

export default Home;