import React from 'react';

// --- IMPORTANT ---
// 1. Make sure you have imported your image. For this code, I'm
//    assuming the image is in your `public` folder.
// 2. You might need to adjust the tint color/opacity (e.g., 'bg-cyan-50/80')
//    to get the exact look you want.

const HomeLoanHero = () => {
  return (
    <section 
      className="py-20 md:py-24 bg-cover bg-center"
      // Change 1: Added inline style for the background image.
      // Make sure to replace the path with the correct one for your project.
      style={{ backgroundImage: "url('/Home Loan hero.jpg')" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* --- Text Content (Left Side) --- */}
          <div className="text-center md:text-left">
            {/* Change 2: Updated text color from 'text-white' to 'text-gray-900' 
                to be dark and readable on the light background image.
            */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-gray-900">
              Your Dream Home Awaits.
            </h1>
            {/* Change 3: Updated text color from 'text-gray-200' to 'text-gray-700'.
                Change 4: Updated the paragraph text to match the image exactly.
            */}
            <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto md:mx-0">
              Partner with Apna Property to find the best home loan offers from over 10+ leading banks, tailored just for you.
            </p>
          </div>

          {/* --- Form Card (Right Side) --- */}
          <div id="loan-form" 
            // Change 5: Replaced 'bg-white' with a translucent, tinted background
            // and added a 'backdrop-blur' for the frosted glass effect.
            className="bg-cyan-50/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-md mx-auto md:mx-0"
          >
            {/* Change 6: Updated title to "Offers" (plural) */}
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Find Your Best Loan Offers</h2>
            <form className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="loan-amount" className="block text-sm font-medium text-left text-gray-600 mb-1">Loan Amount (₹)</label>
                {/* Change 7: Removed 'border' and added 'bg-white' for the solid white input look */}
                {/* Change 10: Added classes to hide the number input's increase/decrease buttons */}
                <input 
                  type="number" 
                  id="loan-amount" 
                  placeholder="e.g., 50,00,000" 
                  className="w-full p-3 bg-white rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                />
              </div>
              <div>
                <label htmlFor="mobile-number" className="block text-sm font-medium text-left text-gray-600 mb-1">Mobile Number</label>
                {/* Change 8: Updated placeholder to match image */}
                <input 
                  type="tel" 
                  id="mobile-number" 
                  placeholder="e.g., 9876543210" 
                  className="w-full p-3 bg-white rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-left text-gray-600 mb-1">City</label>
                <input 
                  type="text" 
                  id="city" 
                  placeholder="e.g., Mumbai" 
                  className="w-full p-3 bg-white rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                />
              </div>
              <button type="submit" className="w-full bg-teal-600 text-white p-3 rounded-lg font-semibold hover:bg-teal-700 transition-transform duration-300 transform hover:scale-105 mt-2">Check Offers</button>
            </form>
            {/* Change 9: Removed the "By continuing..." footer div, as it's not in the target image */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLoanHero;