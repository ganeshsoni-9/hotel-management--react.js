import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles/global.css";

/* React Router */
import { BrowserRouter } from "react-router-dom";

/* AOS Animation */
import AOS from "aos";
import "aos/dist/aos.css";

/* Initialize AOS */
AOS.init({
  duration: 1000,
  once: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>
);