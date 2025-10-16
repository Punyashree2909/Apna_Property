import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import "./index.css";
import "./app.css";

// Components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LandingPage from "./components/LandingPage.jsx";

// // Pages
// import PropertyDetails from "./pages/PropertyDetails.jsx";
// import AboutUs from "./pages/AboutUs.jsx";
// // import BuyPage from "./pages/BuyPage.jsx";
// import HomePage from "./pages/HomePage.jsx";
// import HomeLoanPage from "./pages/HomeLoanPage.jsx";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/landing" element={<LandingPage />} />
//         <Route path="/propertydetails" element={<PropertyDetails />} />
//         <Route path="/about-us" element={<AboutUs />} />
//         {/* <Route path="/buy" element={<BuyPage />} /> */}
//         <Route path="/homeloanpage" element={<HomeLoanPage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      {/* Your App content goes here. Routes are already handled in index.jsx */}
      <Footer />
    </div>
  );
}
export default App;
