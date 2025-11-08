import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "leaflet/dist/leaflet.css";
import "./index.css";
import { CityProvider } from './context/CityContext.jsx'; // <-- 1. ADD THIS IMPORT

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CityProvider> {/* <-- 2. WRAP YOUR APP */}
        <App />
      </CityProvider> {/* <-- 3. CLOSE THE WRAPPER */}
    </BrowserRouter>
  </React.StrictMode>
);