
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PropertyDetails from "./pages/PropertyDetails";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/property" element={<PropertyDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
