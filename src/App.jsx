<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> Punyashree
import React from "react";
import {   Routes, Route } from "react-router-dom";

import "./index.css";
import "./app.css";

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

function App() {
  return (
    
      

      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<HomePage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/propertydetails" element={<PropertyDetails />} />
          <Route path="/AboutUs" element={<AboutUs />} />
           <Route path="/home-loan" element={<HomeLoanPage />} />
          {/* <Route path="/buy" element={<BuyPage />} /> */}
        </Route>
      </Routes>
      
  );
}


export default App;
=======
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import "./app.css";

// 1. Import your new page components from the 'pages' directory
import BuyPage from './pages/BuyPage.jsx';
import HomePage from './pages/HomePage.jsx';
import HomeLoanPage  from './pages/HomeLoanPage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
function App() {
  return (
    // 2. Set up the router
    <BrowserRouter>
      <Routes>
        {/* 3. Define the routes for each page */}
        <Route path="/" element={<><Header/><HomePage/><Footer/></>} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/homeloanpage" element={<HomeLoanPage />} />
        {/* You can add more routes here later for /rent, /sell, etc. */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
>>>>>>> Owais
