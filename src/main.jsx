import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';

import App from './App.jsx';
import LandingPage from './components/LandingPage.jsx';
import PropertyDetails from './pages/PropertyDetails.jsx';
import HomePage from './pages/HomePage.jsx';
import HomeLoanPage from './pages/HomeLoanPage.jsx';

import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

