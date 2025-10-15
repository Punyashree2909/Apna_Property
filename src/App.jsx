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