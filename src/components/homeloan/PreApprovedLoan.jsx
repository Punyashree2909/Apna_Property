import React from 'react';

const HomeLoanStatement = () => {
  return (
    <section className="pb-16 bg-white">
      <div className="container mx-auto px-6">
        {/* We keep the same outer box style */}
        <div className="bg-teal-50 rounded-2xl p-8 md:p-12 text-center">
          
          {/* Large decorative icon instead of an illustration */}
          <div className="flex justify-center mb-6">
            {/* SVG icon instead of Lucide */}
            <svg className="w-16 h-16 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>

          {/* A statement headline, not a CTA */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Financing Simplified, Futures Secured
          </h2>
          
          {/* A brief, reassuring paragraph */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're committed to making your home financing journey as smooth and transparent as possible.
            Below, you'll find answers to common questions to help guide your next steps.
          </p>
          
          {/* No buttons or interactive elements */}

        </div>
      </div>
    </section>
  );
};

export default HomeLoanStatement;
