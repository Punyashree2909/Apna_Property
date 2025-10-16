import React from 'react';

// Example props: { bankLogo, interest, loanAmount, tenure, emi, reward }
const OfferCard = ({ bankLogo, interest, loanAmount, tenure, emi, reward, rewardType = 'cash' }) => {
  const isCashReward = rewardType === 'cash';
  const rewardBgColor = isCashReward ? 'bg-green-100' : 'bg-orange-100';
  const rewardTextColor = isCashReward ? 'text-green-700' : 'text-orange-700';

  return (
    <div className="flex-shrink-0 w-80 bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <img src={bankLogo} alt="Bank Logo" className="h-8 mb-4" />
      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
        <div><p className="text-gray-500">Interest</p><p className="font-bold text-lg text-teal-600">{interest}</p></div>
        <div><p className="text-gray-500">Loan Amount</p><p className="font-semibold">{loanAmount}</p></div>
        <div><p className="text-gray-500">Tenure</p><p className="font-semibold">{tenure}</p></div>
        <div><p className="text-gray-500">Monthly EMI</p><p className="font-semibold">{emi}</p></div>
      </div>
      <div className={`${rewardBgColor} ${rewardTextColor} text-center text-sm font-semibold p-2 rounded-lg mb-4`}>
        {reward}
      </div>
      <button className="w-full bg-teal-600 text-white font-semibold py-2 rounded-lg hover:bg-teal-700 transition-colors">Claim Now</button>
    </div>
  );
};

export default OfferCard;
