import React from 'react';
import DealCard from './DealCard';

const dealsData = [
  {
    image: "https://placehold.co/400x300/e0e7ff/4338ca?text=Private+Employees",
    title: "Private Employees",
    description: "Attractive rates and quick approval.",
  },
  {
    image: "https://placehold.co/400x300/d1fae5/059669?text=Government+Employees",
    title: "Government Employees",
    description: "Easy and affordable home loans.",
  },
  {
    image: "https://placehold.co/400x300/fef3c7/d97706?text=Cash+Income",
    title: "Cash Income with ITR",
    description: "Don't let irregular income stop you.",
  },
  {
    image: "https://placehold.co/400x300/fee2e2/dc2626?text=Self-Employed",
    title: "Self-Employed",
    description: "Unlock your perfect home with a personalized offer.",
  },
];

const PersonalizedDeals = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-2">Personalized Deals for You</h2>
        <p className="text-center text-gray-500 mb-10">Explore home loan options that best match your requirements.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dealsData.map((deal, index) => (
            <DealCard key={index} {...deal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalizedDeals;
