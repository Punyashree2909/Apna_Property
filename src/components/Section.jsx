import React from 'react';

const Section = ({ title, children, bgColor = "bg-gray-50" }) => (
  <section className={`py-16 ${bgColor}`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">{title}</h2>
      {children}
    </div>
  </section>
);

export default Section; 