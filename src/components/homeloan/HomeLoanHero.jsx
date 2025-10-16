        import React from 'react';

const HomeLoanHero = () => {
  return (
    <section className="hero-bg py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">Your Dream Home Awaits.</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto md:mx-0">Get the best home loan offers from 40+ partner banks. Simple, transparent, and fast approvals.</p>
          </div>
          <div id="loan-form" className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-md mx-auto md:mx-0">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Find Your Best Loan Offer</h2>
            <form className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="loan-amount" className="block text-sm font-medium text-left text-gray-600 mb-1">Loan Amount (₹)</label>
                <input type="number" id="loan-amount" placeholder="e.g., 50,00,000" className="w-full p-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label htmlFor="mobile-number" className="block text-sm font-medium text-left text-gray-600 mb-1">Mobile Number</label>
                <input type="tel" id="mobile-number" placeholder="+91 98765 43210" className="w-full p-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-left text-gray-600 mb-1">City</label>
                <input type="text" id="city" placeholder="e.g., Mumbai" className="w-full p-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <button type="submit" className="w-full bg-teal-600 text-white p-3 rounded-lg font-semibold hover:bg-teal-700 transition-transform duration-300 transform hover:scale-105 mt-2">Check Offers</button>
            </form>
            <div className="flex items-center justify-center mt-4 text-xs text-gray-500">
              {/* Note: You might need to handle icons differently in React, e.g., with an icon library like lucide-react */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gray-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              By continuing, you agree to our Terms & Conditions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLoanHero;
