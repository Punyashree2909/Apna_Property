import React from 'react';

const PreApprovedLoan = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-teal-50 rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get Pre-Approved for Your Dream Home</h2>
            <p className="text-gray-600 mb-6">Unlock the power of a Pre-approved Loan. Apply now and make your property search more focused and easy.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><i data-lucide="check-circle-2" className="w-5 h-5 text-green-500 mr-3"></i> Plan your budget smartly</li>
              <li className="flex items-center"><i data-lucide="check-circle-2" className="w-5 h-5 text-green-500 mr-3"></i> Get the loan processed quickly</li>
              <li className="flex items-center"><i data-lucide="check-circle-2" className="w-5 h-5 text-green-500 mr-3"></i> Negotiate a better deal with the seller</li>
            </ul>
            <button className="bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors">Explore Now</button>
          </div>
          <div className="hidden md:block">
            <img src="https://placehold.co/500x400/ccfbf1/0d9488?text=Illustration+of+Houses" alt="Pre-approved loan illustration" className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreApprovedLoan;
