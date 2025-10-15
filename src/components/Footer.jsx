import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-gray-300">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="col-span-2 lg:col-span-1">
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-teal-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/></svg>
            <span className="text-2xl font-bold text-white">ApnaProperty</span>
          </div>
          <p className="text-sm mt-4 text-gray-400">Your trusted partner in finding the perfect property.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Company</h4>
          <ul>
            <li className="mt-2"><a href="#" className="hover:text-teal-400">About Us</a></li>
            <li className="mt-2"><a href="#" className="hover:text-teal-400">Careers</a></li>
            <li className="mt-2"><a href="#" className="hover:text-teal-400">Press</a></li>
            <li className="mt-2"><a href="#" className="hover:text-teal-400">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Resources</h4>
          <ul>
            <li className="mt-2"><a href="#" className="hover:text-teal-400">Blog</a></li>
            <li className="mt-2"><a href="#" className="hover:text-teal-400">FAQs</a></li>
            <li className="mt-2"><a href="#" className="hover:text-teal-400">Site Map</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Legal</h4>
          <ul>
            <li className="mt-2"><a href="#" className="hover:text-teal-400">Terms of Use</a></li>
            <li className="mt-2"><a href="#" className="hover:text-teal-400">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; 2025 ApnaProperty. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer; 