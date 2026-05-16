import "./Navbar.css";

import React, {
  useState,
  useEffect,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [darkMode, setDarkMode] =
    useState(false);

  const [user, setUser] =
    useState(null);

  const navigate = useNavigate();

  /* =========================
        LOGIN STATUS
  ========================== */

  const isLoggedIn =
    localStorage.getItem(
      "isLoggedIn"
    );

  /* =========================
        LOAD USER
  ========================== */

  useEffect(() => {

    const savedUser =
      localStorage.getItem("user");

    if (savedUser) {

      setUser(JSON.parse(savedUser));

    }

  }, []);

  /* =========================
        DARK MODE
  ========================== */

  useEffect(() => {

    if (darkMode) {

      document.body.classList.add("dark");

      document.body.style.background =
        "#111";

      document.body.style.color =
        "#fff";

    } else {

      document.body.classList.remove("dark");

      document.body.style.background =
        "#fff";

      document.body.style.color =
        "#000";

    }

  }, [darkMode]);

  /* =========================
        CLOSE MOBILE MENU
  ========================== */

  const closeMenu = () => {

    setMenuOpen(false);

  };

  /* =========================
        LOGOUT
  ========================== */

  const handleLogout = () => {

    // REMOVE LOGIN STATUS

    localStorage.removeItem(
      "isLoggedIn"
    );

    // REMOVE USER

    localStorage.removeItem(
      "user"
    );

    // RESET USER

    setUser(null);

    // GO TO AUTH PAGE

    navigate("/auth");

    // REFRESH PAGE

    window.location.reload();

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
          <Link to="/rooms">
            ROOMS
          </Link>
        </li>

        <li>
          <Link to="/about">
            ABOUT
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
          <Link to="/food">
            FOOD
          </Link>
        </li>

        <li>
          <Link to="/events">
            EVENTS
          </Link>
        </li>

        <li>
          <Link to="/contact">
            CONTACT
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
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >

          {
            darkMode
              ? <FaSun />
              : <FaMoon />
          }

        </div>

        {/* =========================
              LOGIN / LOGOUT
        ========================== */}

        {
          !isLoggedIn ? (

            <button
              className="login-btn"
              onClick={() =>
                navigate("/auth")
              }
            >

              Login / Signup

            </button>

          ) : (

            <div className="user-info">

              {/* USER EMAIL */}

              {
                user && (

                  <span className="welcome-user">

                    <FaUser />

                    {user.email}

                  </span>

                )
              }

              {/* LOGOUT BUTTON */}

              <button
                className="logout-btn"
                onClick={handleLogout}
              >

                <FaSignOutAlt />

                Logout

              </button>

            </div>

          )
        }

        {/* =========================
              HAMBURGER
        ========================== */}

        <div
          className="menu-icon"
          onClick={() =>
            setMenuOpen(true)
          }
        >

          <FaBars />

        </div>

      </div>

      {/* =========================
            MOBILE MENU
      ========================== */}

      <div
        className={`mobile-menu ${
          menuOpen ? "active" : ""
        }`}
      >

        {/* MOBILE TOP */}

        <div className="mobile-top">

          {/* CLOSE */}

          <div
            className="close-icon"
            onClick={closeMenu}
          >

            <FaTimes />

          </div>

          {/* DARK MODE */}

          <div
            className="theme-toggle"
            onClick={() =>
              setDarkMode(!darkMode)
            }
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
              to="/rooms"
              onClick={closeMenu}
            >
              ROOMS
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={closeMenu}
            >
              ABOUT
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
              to="/food"
              onClick={closeMenu}
            >
              FOOD
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

          <li>
            <Link
              to="/contact"
              onClick={closeMenu}
            >
              CONTACT
            </Link>
          </li>

          {/* =========================
                MOBILE LOGIN / LOGOUT
          ========================== */}

          <li>

            {
              !isLoggedIn ? (

                <button
                  className="login-btn mobile-login"
                  onClick={() => {

                    navigate("/auth");

                    closeMenu();

                  }}
                >

                  LOGIN / SIGNUP

                </button>

              ) : (

                <button
                  className="logout-btn mobile-logout"
                  onClick={() => {

                    handleLogout();

                    closeMenu();

                  }}
                >

                  LOGOUT

                </button>

              )
            }

          </li>

        </ul>

      </div>

    </nav>

  );

};

export default Navbar;