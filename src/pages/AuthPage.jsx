import React, {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

const AuthPage = () => {

  const navigate =
    useNavigate();

  const [isSignup,
    setIsSignup] =
    useState(false);

  const [formData,
    setFormData] =
    useState({
      email: "",
      password: "",
    });

  // INPUT CHANGE

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // SIGNUP

  const handleSignup = (e) => {

    e.preventDefault();

    localStorage.setItem(
      "user",
      JSON.stringify(formData)
    );

    alert("Signup Successful");

    setIsSignup(false);
  };

  // LOGIN

  const handleLogin = (e) => {

    e.preventDefault();

    const savedUser =
      JSON.parse(
        localStorage.getItem(
          "user"
        )
      );

    if (
      savedUser?.email ===
        formData.email &&
      savedUser?.password ===
        formData.password
    ) {

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      alert("Login Successful");

      navigate("/");

      window.location.reload();

    } else {

      alert(
        "Wrong Email Or Password"
      );
    }
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent:
          "center",
        alignItems: "center",
        background:
          "#f1f5f9",
      }}
    >

      <div
        style={{
          width: "400px",
          background: "#fff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >

        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >

          {
            isSignup
              ? "Signup"
              : "Login"
          }

        </h1>

        <form
          onSubmit={
            isSignup
              ? handleSignup
              : handleLogin
          }
        >

          {/* EMAIL */}

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={
              handleChange
            }
            required
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "10px",
              border:
                "1px solid #ccc",
            }}
          />

          {/* PASSWORD */}

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={
              handleChange
            }
            required
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "10px",
              border:
                "1px solid #ccc",
            }}
          />

          {/* BUTTON */}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              border: "none",
              borderRadius: "10px",
              background: "#111",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >

            {
              isSignup
                ? "Signup"
                : "Login"
            }

          </button>

        </form>

        {/* TOGGLE */}

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >

          {
            isSignup
              ? "Already have account?"
              : "Don't have account?"
          }

          <span
            onClick={() =>
              setIsSignup(
                !isSignup
              )
            }
            style={{
              marginLeft: "5px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >

            {
              isSignup
                ? "Login"
                : "Signup"
            }

          </span>

        </p>

      </div>

    </div>

  );
};

export default AuthPage;