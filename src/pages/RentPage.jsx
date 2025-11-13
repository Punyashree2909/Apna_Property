import React from 'react';
import PropertyList from './PropertyList';

const RentPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900">Rent Properties</h1>
          <p className="text-gray-600 mt-2">Discover rental properties that match your lifestyle and budget</p>
        </div>
      </div>
      <PropertyList />
    </div>
  );
};

export default RentPage;