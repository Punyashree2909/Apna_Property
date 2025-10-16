import React from 'react';
import Icon from './Icon.jsx';

const ServiceCard = ({ iconPath, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm text-center flex flex-col h-full">
    <div className="bg-teal-100 text-teal-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
      <Icon path={iconPath} className="w-8 h-8"/>
    </div>
    <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm flex-grow">{description}</p>
  </div>
);

export default ServiceCard; 