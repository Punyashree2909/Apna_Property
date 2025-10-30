import React from 'react';
import Icon from './Icon.jsx';

const PropertyCard = ({ image, price, name, beds, baths, sqft, type }) => (
  // --- THIS LINE IS UPDATED ---
  <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 flex flex-col h-full cursor-pointer hover:-translate-y-1 hover:shadow-xl">
    <div className="relative h-48">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/eee/ccc?text=Property'; }}
      />
      <div className="absolute top-2 left-2 bg-white/90 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">{type}</div>
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <p className="text-xl font-bold text-gray-800">{price}</p>
      <h3 className="text-lg font-semibold text-gray-700 truncate mt-1">{name}</h3>
      <div className="flex items-center text-gray-500 mt-auto pt-4 space-x-4 text-sm">
        <div className="flex items-center space-x-1">
          <Icon path="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4" className="w-4 h-4"/>
          <span>{beds} Beds</span>
        </div>
        <div className="flex items-center space-x-1">
          <Icon path="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.25a14.98 14.98 0 00-5.96 12.12c0 3.297 1.029 6.36 2.845 8.865a14.98 14.98 0 005.96 2.844z" className="w-4 h-4"/>
          <span>{baths} Baths</span>
        </div>
        <div className="flex items-center space-x-1">
          <Icon path="M21.75 12a9.75 9.75 0 11-19.5 0 9.75 9.75 0 0119.5 0z" className="w-4 h-4"/>
          <span>{sqft} sqft</span>
        </div>
      </div>
    </div>
  </div>
);

export default PropertyCard;