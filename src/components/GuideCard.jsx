import React from 'react';

const GuideCard = ({ image, title, description }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
    <img
      src={image}
      alt={title}
      className="w-full h-40 object-cover"
      onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x200/eee/ccc?text=Guide'; }}
    />
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-1 flex-grow">{description}</p>
    </div>
  </div>
);

export default GuideCard; 