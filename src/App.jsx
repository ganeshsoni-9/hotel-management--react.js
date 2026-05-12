import { useState } from "react";

import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

/* TOAST */
import { Toaster } from "react-hot-toast";

/* PAGES */
import Home from "./pages/Home";
import SearchHotels from "./pages/SearchHotels";
import HotelDetails from "./pages/HotelDetails";
import BookingConfirmation from "./pages/BookingConfirmation";
import Payment from "./pages/Payment";
import UserDashboard from "./pages/UserDashboard";
import AdminPanel from "./pages/AdminPanel";
import Experiences from "./pages/Experience";
import Offers from "./pages/Offers";
import Event from "./pages/Events";
import FoodPage from "./pages/FoodPage";


/* NEW EVENT PAGES */
import BookingPage from "./pages/BookingPage";
import EventDetails from "./pages/EventDetails";

/* COMPONENTS */
import Loader from "./components/Loader";
import ScrollProgressBar from "./components/ScrollProgressBar";

function App() {

  /* =========================
      LOADING STATE
  ========================== */

  const [loading, setLoading] = useState(true);

  return (

    <>

      {/* =========================
            TOASTER
      ========================== */}

      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      {/* =========================
            LOADER
      ========================== */}

      {loading ? (

        <Loader
          onFinish={() => setLoading(false)}
        />

      ) : (

        <>

          {/* =========================
                SCROLL BAR
          ========================== */}

          <ScrollProgressBar />

          {/* =========================
                ROUTES
          ========================== */}

          <Routes>

            {/* HOME */}

            <Route
              path="/"
              element={<Home />}
            />

            {/* SEARCH HOTELS */}

            <Route
              path="/search-hotels"
              element={<SearchHotels />}
            />

            {/* HOTEL DETAILS */}

            <Route
              path="/hotel-details/:id"
              element={<HotelDetails />}
            />

            {/* PAYMENT */}

            <Route
              path="/payment"
              element={<Payment />}
            />

            {/* BOOKING CONFIRMATION */}

            <Route
              path="/booking-confirmation"
              element={<BookingConfirmation />}
            />

            {/* USER DASHBOARD */}

            <Route
              path="/dashboard"
              element={<UserDashboard />}
            />

            {/* ADMIN PANEL */}

            <Route
              path="/admin"
              element={<AdminPanel />}
            />

            {/* EXPERIENCE */}

            <Route
              path="/experience"
              element={<Experiences />}
            />

            {/* OFFERS */}

            <Route
              path="/offers"
              element={<Offers />}
            />

            {/* EVENTS */}

            <Route
              path="/more"
              element={<Event />}
            />

            {/* EVENT BOOKING */}

            <Route
              path="/booking"
              element={<BookingPage />}
            />

            {/* EVENT DETAILS */}

            <Route
              path="/event/:id"
              element={<EventDetails />}
            />

            {/* INVALID ROUTE */}

            <Route
              path="*"
              element={<Navigate to="/" />}
            />

            {/* FOOD */}

            <Route
              path="/food"
              element={<FoodPage />}
            />

          </Routes>

        </>

      )}

    </>

  );

}

export default App;