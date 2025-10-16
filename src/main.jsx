import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import LandingPage from './components/LandingPage.jsx';
import PropertyDetails from './pages/PropertyDetails.jsx';
import HomePage from './pages/HomePage.jsx';
import HomeLoanPage from './pages/HomeLoanPage.jsx';

import './index.css';

// Define all routes for your app
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/landing',
    element: <LandingPage />,
  },
  {
    path: '/property/:id',
    element: <PropertyDetails />,
  },
  {
    path: '/home-loan',
    element: <HomeLoanPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
