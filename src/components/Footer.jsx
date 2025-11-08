import React from 'react';

// Make sure this path is correct
import logo from '../assets/no background logo.png'; 

const Footer = () => (
  // 1. CHANGED: bg-gray-800 to bg-white, text-gray-300 to text-gray-600
  <footer className="bg-white text-gray-600">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        
        {/* == LOGO AND BRAND == */}
        <div className="col-span-2 lg:col-span-1">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="ApnaProperty Logo" className="w-8 h-8" />
            {/* 2. CHANGED: text-white to text-gray-900 */}
            <span className="text-2xl font-bold text-gray-900">ApnaProperty</span>
          </div>
          {/* 3. CHANGED: text-gray-400 to text-gray-500 */}
          <p className="text-sm mt-4 text-gray-500">Your trusted partner in finding the perfect property.</p>
        </div>

        {/* == COMPANY LINKS == */}
        <div>
          {/* 4. CHANGED: text-white to text-gray-900 */}
          <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
          <ul>
            <li className="mt-2"><a href="#" className="hover:text-teal-500">About Us</a></li>
            <li className="mt-2"><a href="#" className="hover:text-teal-500">Careers</a></li>
            <li className="mt-2"><a href="#" className="hover:text-teal-500">Press</a></li>
            <li className="mt-2"><a href="#" className="hover:text-teal-500">Contact</a></li>
          </ul>
        </div>

        {/* == RESOURCES LINKS == */}
        <div>
          {/* 4. CHANGED: text-white to text-gray-900 */}
          <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
          <ul>
            <li className="mt-2"><a href="#" className="hover:text-teal-500">Blog</a></li>
            <li className="mt-2"><a href="#" className="hover:text-teal-500">FAQs</a></li>
            <li className="mt-2"><a href="#" className="hover:text-teal-500">This-Way</a></li>
          </ul>
        </div>

        {/* == LEGAL LINKS == */}
        <div>
          {/* 4. CHANGED: text-white to text-gray-900 */}
          <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
          <ul>
            <li className="mt-2"><a href="#" className="hover:text-teal-500">Terms of Use</a></li>
            <li className="mt-2"><a href="#" className="hover:text-teal-500">Privacy Policy</a></li>
          </ul>
        </div>
        
        {/* == SUBSCRIPTION FORM == */}
        <div>
          {/* 4. CHANGED: text-white to text-gray-900 */}
          <h4 className="font-semibold text-gray-900 mb-4">Subscribe</h4>
          {/* 3. CHANGED: text-gray-400 to text-gray-500 */}
          <p className="text-sm text-gray-500 mb-4">Get the latest listings and news straight to your inbox.</p>
          <form className="flex">
            {/* 5. CHANGED: Input colors for light background */}
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full px-3 py-2 rounded-l-md focus:outline-none bg-gray-100 text-gray-900 border border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500" 
              aria-label="Your Email"
            />
            <button 
              type="submit" 
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-r-md flex-shrink-0"
            >
              Go
            </button>
          </form>
        </div>

      </div>
      {/* 6. CHANGED: border-gray-700 to border-gray-200 */}
      <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        &copy; 2025 ApnaProperty. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;