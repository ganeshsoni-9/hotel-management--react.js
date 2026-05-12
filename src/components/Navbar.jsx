import "./Navbar.css";

import { useState, useEffect } from "react";

import { useNavigate, Link } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun
} from "react-icons/fa";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const navigate = useNavigate();

  /* =========================
        DARK MODE
  ========================== */

  useEffect(() => {

    if (darkMode) {

      document.body.classList.add("dark");

    } else {

      document.body.classList.remove("dark");

    }

  }, [darkMode]);

  /* =========================
        CLOSE MOBILE MENU
  ========================== */

  const closeMenu = () => {

    setMenuOpen(false);

  };

  return (

    <nav className="navbar">

      {/* =========================
            LOGO
      ========================== */}

      <div
        className="logo"
        onClick={() => navigate("/")}
      >

        <img
  src="/hotellogo.png"
  alt="logo"
  className="logo-image"
/>

        <h2>ROYAL STAY HUB</h2>

      </div>

      {/* =========================
            DESKTOP MENU
      ========================== */}

      <ul className="nav-links">

        <li>
          <Link to="/search-hotels">
            ROOMS
          </Link>
        </li>

        <li>
          <Link to="/experience">
            EXPERIENCES
          </Link>
        </li>

        <li>
          <Link to="/offers">
            OFFERS
          </Link>
        </li>

        <li>
          <Link to="/events">
            EVENTS
          </Link>
        </li>
        <li>
  <Link to="/food">
    FOOD
  </Link>
</li>

      </ul>

      {/* =========================
            RIGHT SIDE
      ========================== */}

      <div className="nav-right">

        {/* DARK MODE */}

        <div
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >

          {
            darkMode
              ? <FaSun />
              : <FaMoon />
          }

        </div>

        {/* HAMBURGER */}

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(true)}
        >

          <FaBars />

        </div>

      </div>

      {/* =========================
            MOBILE MENU
      ========================== */}

      <div
        className={`mobile-menu ${menuOpen ? "active" : ""}`}
      >

        {/* TOP */}

        <div className="mobile-top">

          {/* CLOSE */}

          <div
            className="close-icon"
            onClick={closeMenu}
          >

            <FaTimes />

          </div>

          {/* MOBILE DARK MODE */}

          <div
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >

            {
              darkMode
                ? <FaSun />
                : <FaMoon />
            }

          </div>

        </div>

        {/* MOBILE LINKS */}

        <ul>

          <li>
            <Link
              to="/search-hotels"
              onClick={closeMenu}
            >
              ROOMS
            </Link>
          </li>

          <li>
            <Link
              to="/experience"
              onClick={closeMenu}
            >
              EXPERIENCES
            </Link>
          </li>

          <li>
            <Link
              to="/offers"
              onClick={closeMenu}
            >
              OFFERS
            </Link>
          </li>

          <li>
            <Link
              to="/events"
              onClick={closeMenu}
            >
              EVENTS
            </Link>
          </li>

        </ul>

      </div>

    </nav>

  );

};

export default Navbar;