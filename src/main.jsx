import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import your main App layout and all page components
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import HomeLoanPage from './pages/HomeLoanPage.jsx';
import PropertyDetails from './pages/PropertyDetails.jsx';

// Import your global stylesheet
import './index.css';

// Define the application routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App can act as a layout wrapper
    children: [
      {
        index: true, // This makes HomePage the default child route for "/"
        element: <HomePage />,
      },
      {
        path: "/home-loan",
        element: <HomeLoanPage />,
      },
      {
        path: "/property-details/:id", // Example route for property details
        element: <PropertyDetails />,
      },
    ],
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);