import React from 'react';
import PropertyList from './PropertyList';

const CommercialPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900">Commercial Properties</h1>
          <p className="text-gray-600 mt-2">Find office spaces, shops, and commercial properties for your business</p>
        </div>
      </div>
      <PropertyList />
    </div>
  );
};

export default CommercialPage;