import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Getting Your Loan is Easy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="text-center p-6">
            <div className="text-teal-600 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i data-lucide="file-plus-2" className="w-12 h-12"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Simple Application</h3>
            <p className="text-gray-500">Submit a simple online form to see the best offers from our partner banks.</p>
          </div>
          {/* Step 2 */}
          <div className="text-center p-6">
            <div className="text-teal-600 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i data-lucide="check-circle" className="w-12 h-12"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Approval</h3>
            <p className="text-gray-500">Our executive helps you choose the best offer tailored for your needs.</p>
          </div>
          {/* Step 3 */}
          <div className="text-center p-6">
            <div className="text-teal-600 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i data-lucide="users" className="w-12 h-12"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Offers</h3>
            <p className="text-gray-500">We pick up documents at your doorstep and submit them to the bank.</p>
          </div>
          {/* Step 4 */}
          <div className="text-center p-6">
            <div className="text-teal-600 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i data-lucide="home" className="w-12 h-12"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Dream Home</h3>
            <p className="text-gray-500">The bank reviews your application and confirms the loan approval.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
