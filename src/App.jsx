import React, { useState } from "react";

import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

/* TOAST */
import { Toaster } from "react-hot-toast";

/* COMPONENTS */
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ProtectedRoute from "./components/ProtectedRoute";

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
import FoodPage from "./pages/FoodPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Rooms from "./pages/Rooms";
import EventsPage from "./pages/EventsPage";
import BookingPage from "./pages/BookingPage";

/* AUTH PAGES */
import AuthPage from "./pages/AuthPage";

function App() {

  const [loading, setLoading] =
    useState(true);

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
          onFinish={() =>
            setLoading(false)
          }
        />

      ) : (

        <>

          {/* =========================
                NAVBAR
          ========================== */}

          <Navbar />

          {/* =========================
                SCROLL BAR
          ========================== */}

          <ScrollProgressBar />

          {/* =========================
                ROUTES
          ========================== */}

          <Routes>

            {/* =========================
                  AUTH PAGE
            ========================== */}

            <Route
              path="/auth"
              element={<AuthPage />}
            />

            {/* LOGIN */}

            

            {/* =========================
                  HOME
            ========================== */}

            <Route
              path="/"
              element={
                <ProtectedRoute>

                  <Home />

                </ProtectedRoute>
              }
            />

            {/* =========================
                  SEARCH HOTELS
            ========================== */}

            <Route
              path="/search-hotels"
              element={
                <ProtectedRoute>

                  <SearchHotels />

                </ProtectedRoute>
              }
            />

            {/* =========================
                  HOTEL DETAILS
            ========================== */}

            <Route
              path="/hotel-details/:id"
              element={
                <ProtectedRoute>

                  <HotelDetails />

                </ProtectedRoute>
              }
            />

            {/* =========================
                  PAYMENT
            ========================== */}

            <Route
              path="/payment"
              element={
                <ProtectedRoute>

                  <Payment />

                </ProtectedRoute>
              }
            />

            {/* =========================
                  BOOKING CONFIRMATION
            ========================== */}

            <Route
              path="/booking-confirmation"
              element={
                <ProtectedRoute>

                  <BookingConfirmation />

                </ProtectedRoute>
              }
            />

            {/* =========================
                  USER DASHBOARD
            ========================== */}

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>

                  <UserDashboard />

                </ProtectedRoute>
              }
            />

            {/* =========================
                  ADMIN PANEL
            ========================== */}

            <Route
              path="/admin"
              element={
                <ProtectedRoute>

                  <AdminPanel />

                </ProtectedRoute>
              }
            />

            {/* =========================
                  EXPERIENCE
            ========================== */}

            <Route
              path="/experience"
              element={
                <ProtectedRoute>

                  <Experiences />

                </ProtectedRoute>
              }
            />

            {/* =========================
                  OFFERS
            ========================== */}

            <Route
              path="/offers"
              element={
                <ProtectedRoute>

                  <Offers />

                </ProtectedRoute>
              }
            />

            {/* =========================
                  FOOD
            ========================== */}

            <Route
              path="/food"
              element={
                <ProtectedRoute>

                  <FoodPage />

                </ProtectedRoute>
              }
            />

            {/* =========================
                  EVENTS
            ========================== */}

            <Route
              path="/events"
              element={
                <ProtectedRoute>

                  <EventsPage />

                </ProtectedRoute>
              }
            />

            {/* =========================
                  EVENT BOOKING
            ========================== */}

            <Route
              path="/booking"
              element={
                <ProtectedRoute>

                  <BookingPage />

                </ProtectedRoute>
              }
            />

            {/* =========================
                  ABOUT
            ========================== */}

            <Route
              path="/about"
              element={
                <ProtectedRoute>

                  <About />

                </ProtectedRoute>
              }
            />

            {/* =========================
                  CONTACT
            ========================== */}

            <Route
              path="/contact"
              element={
                <ProtectedRoute>

                  <Contact />

                </ProtectedRoute>
              }
            />

            {/* =========================
                  ROOMS
            ========================== */}

            <Route
              path="/rooms"
              element={
                <ProtectedRoute>

                  <Rooms />

                </ProtectedRoute>
              }
            />

            {/* =========================
                  INVALID ROUTE
            ========================== */}

            <Route
              path="*"
              element={
                <Navigate to="/auth" />
              }
            />

          </Routes>

        </>

      )}

    </>

  );

}

export default App;