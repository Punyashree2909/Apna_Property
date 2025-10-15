import React from 'react';
import Icon from './Icon.jsx';

const HeroSection = () => (
  <div className="relative bg-gray-800 h-[500px] flex items-center justify-center">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
        alt="Modern living room"
        className="w-full h-full object-cover opacity-50"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1920x1080/333/fff?text=Living+Room'; }}
      />
    </div>
    <div className="relative z-10 text-center text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">We've got properties in <span className="text-teal-400">Bengaluru</span> for everyone</h1>
      <div className="bg-white p-4 md:p-6 rounded-xl shadow-2xl max-w-4xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          <div className="relative md:col-span-3">
            <Icon path="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" className="w-5 h-5 absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for locality, landmark, project or builder"
              className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 flex items-center justify-center space-x-2 h-12">
            <Icon path="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" className="w-5 h-5" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;