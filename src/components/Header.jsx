import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon.jsx'; // Assuming you have this component

const Header = () => (
  <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-teal-600" viewBox="0 0 24 24" fill="currentColor" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/></svg>
          <span className="text-2xl font-bold text-gray-800">ApnaProperty</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
<<<<<<< HEAD
          <Link to="#" className="text-gray-600 hover:text-teal-600 transition-colors">Buy</Link>
          <Link to="#" className="text-gray-600 hover:text-teal-600 transition-colors">Rent</Link>
          <Link to="#" className="text-gray-600 hover:text-teal-600 transition-colors">Sell</Link>
          <Link to="/home-loan" className="text-teal-600 font-semibold">Home Loans</Link>
          <Link to="#" className="text-gray-600 hover:text-teal-600 transition-colors">Help</Link>
=======
               <Link to="/" className="text-gray-600 hover:text-teal-600 transition-colors">Home</Link>
          <Link to="#" className="text-gray-600 hover:text-teal-600 transition-colors">Buy</Link>
          <Link to="/PropertyDetails" className="text-gray-600 hover:text-teal-600 transition-colors">Rent</Link>
          <Link to="#" className="text-gray-600 hover:text-teal-600 transition-colors">Sell</Link>
          <Link to="/home-loan" className="text-gray-600 hover:text-teal-600 transition-colors">Home Loans</Link>
          <Link to="#" className="text-gray-600 hover:text-teal-600 transition-colors">Help</Link>
           <Link to="#" className="text-gray-600 hover:text-teal-600 transition-colors">About Us</Link>
            <Link to="#" className="text-gray-600 hover:text-teal-600 transition-colors">Contact Us</Link>
>>>>>>> Punyashree
        </div>
        <button className="hidden md:block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
          Log In
        </button>
        <button className="md:hidden">
            {/* Make sure your Icon component path is correct */}
            <Icon path="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  </header>
);

export default Header;