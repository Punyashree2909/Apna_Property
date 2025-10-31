import React from 'react';
import DealCard from './DealCard';

// Import images - directly from assets folder
import privateEmployeeImg from '../../assets/Private Employee Img.webp';
import governmentEmployeeImg from '../../assets/Government Employee img.webp';
import cashIncomeImg from '../../assets/cash income with itr img.webp';
import selfEmployedImg from '../../assets/Self Employeed img.webp';


const dealsData = [
  {
    image: privateEmployeeImg,
    title: "Private Employees",
    description: "Attractive rates and quick approval.",
  },
  {
    image: governmentEmployeeImg,
    title: "Government Employees",
    description: "Easy and affordable home loans.",
  },
  {
    image: cashIncomeImg,
    title: "Cash Income with ITR",
    description: "Don't let irregular income stop you.",
  },
  {
    image: selfEmployedImg,
    title: "Self-Employed",
    description: "Unlock your perfect home with a personalized offer.",
  },
];


const PersonalizedDeals = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Personalized Deals for You</h2>
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
