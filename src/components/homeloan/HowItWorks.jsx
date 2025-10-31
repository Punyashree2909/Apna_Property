import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-4 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Getting Your Loan is Easy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Step 1 - Simple Application */}
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-teal-600 w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-teal-50 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Simple Application</h3>
            <p className="text-gray-600">Submit a simple online form to see the best offers from our partner banks.</p>
          </div>

          {/* Step 2 - Quick Approval */}
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-teal-600 w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-teal-50 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Quick Approval</h3>
            <p className="text-gray-600">Our executive helps you choose the best offer tailored for your needs.</p>
          </div>

          {/* Step 3 - Personalized Offers */}
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-teal-600 w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-teal-50 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Personalized Offers</h3>
            <p className="text-gray-600">We pick up documents at your doorstep and submit them to the bank.</p>
          </div>

          {/* Step 4 - Dream Home */}
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-teal-600 w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-teal-50 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Dream Home</h3>
            <p className="text-gray-600">The bank reviews your application and confirms the loan approval.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
