import React from 'react';

// Example props: { image, title, description }
const DealCard = ({ image, title, description }) => {
  return (
    <div className="group relative rounded-xl overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-200 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default DealCard;
