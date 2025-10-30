
import React from "react";
import {   Routes, Route } from "react-router-dom";

import "./index.css";
import "./App.css";

// Components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LandingPage from "./components/LandingPage.jsx";

// Pages
import PropertyDetails from "./pages/PropertyDetails.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import HomePage from "./pages/HomePage.jsx";
import HomeLoanPage from "./pages/HomeLoanPage.jsx";
import Mainlayout from "./Layout/Mainlayout.jsx";
import SellPage from "./pages/SellPage.jsx";

function App() {
  return (
    
      

      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<HomePage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/propertydetails" element={<PropertyDetails />} />
          <Route path="/about-us" element={<AboutUs />} />
           <Route path="/home-loan" element={<HomeLoanPage />} />
            <Route path="/sell_page" element={<SellPage />} />
        </Route>
      </Routes>
      
  );
}


export default App;




