import React from "react";
import { Routes, Route } from "react-router-dom";

import "./index.css";
import "./app.css";

// Import Layout
import Mainlayout from "./Layout/Mainlayout.jsx";

// Import all pages from both versions
import HomePage from "./pages/HomePage.jsx";
import LandingPage from "./components/LandingPage.jsx";
import PropertyDetails from "./pages/PropertyDetails.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import HomeLoanPage from "./pages/HomeLoanPage.jsx";
import BuyPage from './pages/BuyPage.jsx'; // Added from Owais's version

function App() {
  return (
    <Routes>
      {/* All pages will now share the same layout (Header, Footer, etc.) */}
      <Route path="/" element={<Mainlayout />}>

        {/* 'index' makes HomePage the default page for the "/" path */}
        <Route index element={<HomePage />} />
        
        {/* All other pages */}
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/propertydetails" element={<PropertyDetails />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/home-loan" element={<HomeLoanPage />} />
        <Route path="/buy" element={<BuyPage />} />
        
      </Route>
    </Routes>
  );
}

export default App;