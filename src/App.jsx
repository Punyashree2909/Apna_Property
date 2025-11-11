import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";

// Layout
import Mainlayout from "./Layout/Mainlayout.jsx";

// Pages
import HomePage from "./pages/HomePage.jsx";
import LandingPage from "./components/LandingPage.jsx";
import PropertyDetails from "./pages/PropertyDetails.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import HomeLoanPage from "./pages/HomeLoanPage.jsx";
import BuyPage from "./pages/BuyPage.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from './pages/Login.jsx';
import RentPage from "./pages/RentPage.jsx";
import SellPage from "./pages/SellPage.jsx";
import HelpPage from "./pages/HelpPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<HomePage />} />
        <Route path="/landing" element={<LandingPage />} />
        
        {/* --- THIS IS THE CORRECTED LINE --- */}
        <Route path="/property/:id" element={<PropertyDetails />} />
        {/* ---------------------------------- */}

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/home-loan" element={<HomeLoanPage />} />
        <Route path="/sell_page" element={<SellPage />} />
  _     <Route path="/buy" element={<BuyPage />} />
        <Route path="/rent" element={<RentPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;