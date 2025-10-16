<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LandingPage from './components/LandingPage.jsx'

import './index.css' // ✅ This is required for Tailwind to apply
import PropertyDetails from './pages/PropertyDetails.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
=======
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import HomeLoanPage from './pages/HomeLoanPage.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home-loan",
    element: <HomeLoanPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
>>>>>>> Owais
  </React.StrictMode>,
);

