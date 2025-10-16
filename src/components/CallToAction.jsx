import React from 'react';

const CallToAction = () => (
  <div className="bg-teal-600">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Post Your Property For Free</h2>
      <p className="text-teal-100 mb-6 max-w-2xl mx-auto">List your property with us to connect with millions of potential buyers and tenants.</p>
      <button className="bg-white text-teal-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
        Post Property
      </button>
    </div>
  </div>
);

export default CallToAction;