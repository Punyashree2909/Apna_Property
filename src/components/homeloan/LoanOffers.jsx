                    import React from 'react';
import OfferCard from './OfferCard.jsx';

const loanOffersData = [
  {
    bankLogo: "https://placehold.co/100x40/000000/FFFFFF?text=SBI+Logo",
    interest: "8.5%",
    loanAmount: "₹ 50L",
    tenure: "30 Yr",
    emi: "₹ 38.4k",
    reward: "₹10,000 Cash Reward",
    rewardType: "cash",
  },
  {
    bankLogo: "https://placehold.co/100x40/000000/FFFFFF?text=HDFC+Logo",
    interest: "8.7%",
    loanAmount: "₹ 60L",
    tenure: "30 Yr",
    emi: "₹ 53.3k",
    reward: "Luxury Stay @ Taj Hotel",
    rewardType: "other",
  },
  {
    bankLogo: "https://placehold.co/100x40/000000/FFFFFF?text=BoB+Logo",
    interest: "8.4%",
    loanAmount: "₹ 70L",
    tenure: "30 Yr",
    emi: "₹ 53.3k",
    reward: "₹14,000 Cash Reward",
    rewardType: "cash",
  },
   // ... Add more offers as needed
];

const LoanOffers = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-2">Compare Top Home Loan Offers</h2>
        <p className="text-center text-gray-500 mb-10">Get offers from top banks in just 2 minutes.</p>
        <div className="relative">
          <div className="flex space-x-6 pb-4 overflow-x-auto offer-scrollbar">
            {loanOffersData.map((offer, index) => (
              <OfferCard key={index} {...offer} />
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="bg-white border-2 border-teal-600 text-teal-600 font-semibold px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors">Explore More Offers</button>
        </div>
      </div>
    </section>
  );
};

export default LoanOffers;

