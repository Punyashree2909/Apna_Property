import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./app.css";

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
import Login from './pages/Login.jsx'; // This import was already correct!

function App() {
 return (
 <Routes>
 {/* Layout wrapper */}
 <Route path="/" element={<Mainlayout />}>
 <Route index element={<HomePage />} />
 <Route path="landing" element={<LandingPage />} />
 <Route path="propertydetails" element={<PropertyDetails />} />
<Route path="about-us" element={<AboutUs />} />
 <Route path="home-loan" element={<HomeLoanPage />} />
 <Route path="buy" element={<BuyPage />} />
 <Route path="contact-us" element={<ContactUs />} />
 <Route path="signup" element={<SignUp />} /> 
 <Route path="login" element={<Login />} /> {/* <-- I added this line */}
</Route>
</Routes>
);
}

export default App;
