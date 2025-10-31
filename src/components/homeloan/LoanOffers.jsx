import React, { useState } from 'react';

// Original 4 "featured" offers
const featuredOffersData = [
  {
    bankLogo: "https://placehold.co/100x40/0d9488/FFFFFF?text=SBI",
    bankName: "SBI",
    interest: "**8.5%**",
    loanAmount: "₹ 50L",
    tenure: "30 Yr",
    emi: "₹ 38.4k",
    reward: "₹10,000 Cash Reward",
    rewardType: "cash",
  },
  {
    bankLogo: "https://placehold.co/100x40/1e3a8a/FFFFFF?text=HDFC",
    bankName: "HDFC Bank",
    interest: "**8.7%**",
    loanAmount: "₹ 60L",
    tenure: "30 Yr",
    emi: "₹ 53.3k",
    reward: "Luxury Stay @ Taj Hotel",
    rewardType: "other",
  },
  {
    bankLogo: "https://placehold.co/100x40/d97706/FFFFFF?text=BoB",
    bankName: "Bank of Baroda",
    interest: "**8.4%**",
    loanAmount: "₹ 70L",
    tenure: "30 Yr",
    emi: "₹ 53.3k",
    reward: "₹14,000 Cash Reward",
    rewardType: "cash",
  },
  {
    bankLogo: "https://placehold.co/100x40/be123c/FFFFFF?text=ICICI",
    bankName: "ICICI Bank",
    interest: "**8.6%**",
    loanAmount: "₹ 45L",
    tenure: "20 Yr",
    emi: "₹ 39.4k",
    reward: "1% Processing Fee Waiver",
    rewardType: "other",
  },
];

// All 12 offers for the expanded list
const allLoanOffersData = [
  ...featuredOffersData, // Includes the first 4
  {
    bankLogo: "https://placehold.co/100x40/6d28d9/FFFFFF?text=Axis",
    bankName: "Axis Bank",
    interest: "8.75%",
    loanAmount: "₹ 75L",
    tenure: "30 Yr",
    emi: "₹ 58.8k",
    reward: "₹12,000 Amazon Voucher",
    rewardType: "other",
  },
  {
    bankLogo: "https://placehold.co/100x40/e11d48/FFFFFF?text=Kotak",
    bankName: "Kotak Mahindra",
    interest: "8.8%",
    loanAmount: "₹ 50L",
    tenure: "20 Yr",
    emi: "₹ 44.3k",
    reward: "50% Off Processing Fee",
    rewardType: "other",
  },
  {
    bankLogo: "https://placehold.co/100x40/ca8a04/FFFFFF?text=PNB",
    bankName: "PNB",
    interest: "8.45%",
    loanAmount: "₹ 40L",
    tenure: "25 Yr",
    emi: "₹ 32.8k",
    reward: "No Prepayment Penalty",
    rewardType: "other",
  },
  {
    bankLogo: "https://placehold.co/100x40/15803d/FFFFFF?text=Canara",
    bankName: "Canara Bank",
    interest: "8.55%",
    loanAmount: "₹ 50L",
    tenure: "30 Yr",
    emi: "₹ 38.7k",
    reward: "₹5,000 Cash Reward",
    rewardType: "cash",
  },
  {
    bankLogo: "https://placehold.co/100x40/0e7490/FFFFFF?text=IndusInd",
    bankName: "IndusInd Bank",
    interest: "8.9%",
    loanAmount: "₹ 60L",
    tenure: "25 Yr",
    emi: "₹ 50.8k",
    reward: "Free Amazon Echo Dot",
    rewardType: "other",
  },
  {
    bankLogo: "https://placehold.co/100x40/1d4ed8/FFFFFF?text=Bajaj",
    bankName: "Bajaj Finserv",
    interest: "9.0%",
    loanAmount: "₹ 80L",
    tenure: "30 Yr",
    emi: "₹ 66.2k",
    reward: "₹20,000 Cash Reward",
    rewardType: "cash",
  },
  {
    bankLogo: "https://placehold.co/100x40/7c2d12/FFFFFF?text=LIC",
    bankName: "LIC HFL",
    interest: "8.6%",
    loanAmount: "₹ 45L",
    tenure: "20 Yr",
    emi: "₹ 39.4k",
    reward: "0.5% PF Waiver",
    rewardType: "other",
  },
  {
    bankLogo: "https://placehold.co/100x40/4a044e/FFFFFF?text=Tata",
    bankName: "TATA Capital",
    interest: "8.7%",
    loanAmount: "₹ 55L",
    tenure: "25 Yr",
    emi: "₹ 46.5k",
    reward: "₹7,000 Amazon Voucher",
    rewardType: "other",
  },
];


const OfferCard = ({ bankLogo, bankName, interest, loanAmount, tenure, emi, reward, rewardType, isCurrent }) => {
  const cleanInterest = interest.replace(/\*/g, '');
  const isCashReward = rewardType === 'cash';
  const rewardClasses = isCashReward ? "bg-teal-50 text-teal-700" : "bg-gray-100 text-gray-700";

  const RewardIcon = isCashReward ? (
    <svg className="w-5 h-5 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H7.5a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1014.625 7.5H12V4.875z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h2.625A2.625 2.625 0 1112 4.875M12 7.5V11.25m0 0A2.625 2.625 0 0014.625 13.5h2.625a1.5 1.5 0 011.5 1.5v3.75a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-3.75a1.5 1.5 0 011.5-1.5h2.625A2.625 2.625 0 0012 11.25zm-8.25 4.5h16.5" />
    </svg>
  ) : (
    <svg className="w-5 h-5 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.31h5.408c.49 0 .695.659.332 1.018l-4.37 3.176a.563.563 0 00-.18.53l1.63 5.158c.125.39-.328.72-.67.53l-4.37-3.176a.563.563 0 00-.651 0l-4.37 3.176c-.341.19-.795-.14-.67-.53l1.63-5.158a.563.563 0 00-.18-.53l-4.37-3.176c-.363-.359-.157-1.018.332-1.018h5.408a.563.563 0 00.475-.31L11.48 3.5z" />
    </svg>
  );

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg h-full flex flex-col transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:shadow-xl">
      <div className="p-6 flex-grow">
        <div className="mb-4 h-10">
          <img 
            src={bankLogo} 
            alt={`${bankName} Logo`} 
            className="h-full object-contain object-left"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x40/cccccc/FFFFFF?text=Logo'; }}
          />
        </div>
        <div className="mb-6">
          <span className="text-sm text-gray-500">Interest Rate (p.a.)</span>
          <p className="text-4xl font-bold text-teal-600">{cleanInterest}</p>
        </div>
        <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6">
          <div>
            <span className="text-xs text-gray-500 block">Loan Amount</span>
            <span className="text-lg font-semibold text-gray-800">{loanAmount}</span>
          </div>
          <div>
            <span className="text-xs text-gray-500 block">Tenure</span>
            <span className="text-lg font-semibold text-gray-800">{tenure}</span>
          </div>
          <div className="col-span-2">
            <span className="text-xs text-gray-500 block">Monthly EMI</span>
            <span className="text-lg font-semibold text-gray-800">{emi}</span>
          </div>
        </div>
      </div>
      
      {isCurrent && (
        <div className="px-6 pb-6">
          <button className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
            Claim Now
          </button>
        </div>
      )}

      <div className={`px-6 py-4 rounded-b-xl ${rewardClasses} ${isCurrent ? 'mt-0' : 'mt-auto'}`}>
        <div className="flex items-center">
          {RewardIcon}
          <span className="text-sm font-semibold">{reward}</span>
        </div>
      </div>
    </div>
  );
};

/**
 * Component to render a row in the expanded list
 */
const OfferRow = ({ offer }) => {
  const cleanInterest = offer.interest.replace(/\*/g, '');
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 items-center gap-4 transition-all hover:shadow-md">
      {/* Bank Logo & Name */}
      <div className="md:col-span-2 flex flex-col">
        <img 
          src={offer.bankLogo} 
          alt={`${offer.bankName} Logo`} 
          className="h-8 object-contain object-left mb-1"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x40/cccccc/FFFFFF?text=Logo'; }}
        />
        <span className="text-sm font-semibold text-gray-700">{offer.bankName}</span>
      </div>

      {/* Interest Rate */}
      <div>
        <span className="text-xs text-gray-500 block">Interest</span>
        <span className="text-base font-bold text-teal-600">{cleanInterest}</span>
      </div>

      {/* EMI */}
      <div>
        <span className="text-xs text-gray-500 block">EMI</span>
        <span className="text-base font-semibold text-gray-800">{offer.emi}</span>
      </div>

      {/* Reward */}
      <div className="md:col-span-1">
        <span className="text-xs text-gray-500 block">Reward</span>
        <span className="text-sm font-semibold text-gray-800">{offer.reward}</span>
      </div>

      {/* Apply Button */}
      <div className="md:col-span-1 justify-self-stretch md:justify-self-end">
        <button className="w-full bg-teal-600 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-teal-700 transition-all duration-300 text-sm">
          Apply
        </button>
      </div>
    </div>
  );
};


const LoanOffers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const totalOffers = featuredOffersData.length;

  const goToNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % totalOffers);
  const goToPrev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + totalOffers) % totalOffers);

  const BASE_CARD_WIDTH_PERCENTAGE = 85; 
  const GAP_REM = 1.5;
  const initialOffset = (100 - BASE_CARD_WIDTH_PERCENTAGE) / 2;
  const transformStyle = {
    transform: `translateX(calc(${initialOffset}% - ${currentIndex * BASE_CARD_WIDTH_PERCENTAGE}% - ${currentIndex * GAP_REM}rem))`,
    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const prevIndex = (currentIndex - 1 + totalOffers) % totalOffers;
  const nextIndex = (currentIndex + 1) % totalOffers;
  const visibleDesktopOffers = [
    featuredOffersData[prevIndex],
    featuredOffersData[currentIndex],
    featuredOffersData[nextIndex]
  ];

  const arrowButtonClasses = "absolute top-1/2 transform -translate-y-1/2 p-3 bg-white border border-gray-300 rounded-full shadow-lg z-20 text-teal-600 hover:bg-teal-50 transition-colors duration-200 focus:outline-none";

  return (
    <section className="py-16 bg-white font-sans">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Compare Top Home Loan Offers ✨</h2>
        <p className="text-center text-gray-500 mb-10">Swipe or click to view offers from top banks.</p>

        {/* Carousel Section */}
        <div className="relative w-full overflow-hidden">
          <button onClick={goToPrev} className={`${arrowButtonClasses} left-2 md:left-6`} aria-label="Previous Offer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button onClick={goToNext} className={`${arrowButtonClasses} right-2 md:right-6`} aria-label="Next Offer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>

          {/* Mobile Carousel */}
          <div className="flex space-x-6 pb-4 items-stretch lg:hidden" style={transformStyle}>
            {featuredOffersData.map((offer, index) => (
              <div 
                key={index}
                className="min-w-[85%] sm:min-w-[70%] md:min-w-[50%] flex-shrink-0" 
                style={{ 
                  transition: 'opacity 0.6s ease, transform 0.6s ease',
                  opacity: currentIndex === index ? 1 : 0.5,
                  transform: `scale(${currentIndex === index ? 1 : 0.95})`
                }}
              >
                <OfferCard {...offer} isCurrent={currentIndex === index} />
              </div>
            ))}
          </div>

          {/* Desktop Carousel */}
          <div className="hidden lg:flex justify-center space-x-6 pb-4 items-stretch">
            {visibleDesktopOffers.map((offer, index) => {
              const isCenter = index === 1;
              return (
                <div
                  key={offer.bankLogo}
                  className="w-80 flex-shrink-0"
                  style={{
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: isCenter ? 1 : 0.6,
                    transform: `scale(${isCenter ? 1 : 0.94})`,
                  }}
                >
                  <OfferCard {...offer} isCurrent={isCenter} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {featuredOffersData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'w-6 bg-teal-600' : 'w-2 bg-gray-300 hover:bg-teal-400'
              }`}
              aria-label={`Go to offer ${index + 1}`}
            />
          ))}
        </div>

        {/* Expanded List Section */}
        <div className="text-center mt-10">
          {!isExpanded ? (
            <button 
              onClick={() => setIsExpanded(true)}
              className="bg-white border-2 border-teal-600 text-teal-600 font-bold px-8 py-3 rounded-lg shadow-md hover:bg-teal-50 transition-colors duration-200"
            >
              Explore More Offers
            </button>
          ) : (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">All Bank Offers</h3>
              
              {/* List Header */}
              <div className="hidden md:grid grid-cols-6 items-center gap-4 text-left text-xs text-gray-500 font-semibold uppercase p-4">
                <span className="md:col-span-2">Bank</span>
                <span>Interest Rate</span>
                <span>EMI</span>
                <span>Reward</span>
                <span className="justify-self-end">Action</span>
              </div>

              <div className="space-y-3">
                {allLoanOffersData.map((offer, index) => (
                  <OfferRow key={index} offer={offer} />
                ))}
              </div>

              <button 
                onClick={() => setIsExpanded(false)}
                className="bg-white border-2 border-gray-400 text-gray-700 font-bold px-8 py-3 rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-200 mt-8"
              >
                Show Less
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="antialiased text-gray-900 bg-gray-50 min-h-screen">
      <LoanOffers />
    </div>
  );
}
