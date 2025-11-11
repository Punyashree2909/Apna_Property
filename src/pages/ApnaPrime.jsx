import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

// Feature list for each plan
const basicFeatures = [
  { text: 'Unlimited property views', included: true },
  { text: 'Basic analytics dashboard', included: true },
  { text: 'Email support', included: true },
  { text: 'Standard listing photos', included: false },
  { text: 'Up to 5 active listings', included: false },
  { text: 'Priority listing placement', included: false },
];

const standardFeatures = [
  { text: 'All Basic features', included: true },
  { text: 'Advanced analytics dashboard', included: true },
  { text: 'Phone & chat support', included: true },
  { text: 'Unlimited high-resolution photos', included: true },
  { text: 'Team collaboration tools', included: true },
  { text: 'Up to 50 active listings', included: false },
  { text: 'Property tour scheduling', included: false },
  { text: 'Dedicated account manager', included: false },
];

const premiumFeatures = [
  { text: 'All Standard features', included: true },
  { text: 'White-glove onboarding service', included: true },
  { text: '24/7 VIP phone support', included: true },
  { text: 'Unlimited active listings', included: true },
  { text: 'API access for custom integrations', included: true },
  { text: 'Dedicated account manager', included: true },
  { text: 'Custom branding options', included: true },
  { text: 'Advanced security features', included: true },
];

export default function ApnaPrime() {
  // State to manage the toggle: false = Monthly, true = Annual
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Find the Perfect Plan for Your Listings
          </h1>
          <p className="text-lg text-gray-600">
            Simple, flexible pricing for agents, brokers, and homeowners.
          </p>
        </header>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <span className={`font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Monthly
          </span>
          <label htmlFor="plan-toggle" className="relative inline-block w-12 h-7 cursor-pointer">
            <input 
              type="checkbox" 
              id="plan-toggle" 
              className="peer sr-only" 
              checked={isAnnual}
              onChange={() => setIsAnnual(!isAnnual)}
            />
            {/* The "track" */}
            <div className="w-full h-full bg-gray-200 rounded-full transition-colors peer-checked:bg-purple-600"></div>
            {/* The "thumb" */}
            <div className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform transform peer-checked:translate-x-5"></div>
          </label>
          <span className={`font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Annual
            {isAnnual && (
              <span className="text-sm text-green-600 font-semibold ml-2">
                (Save 2 months)
              </span>
            )}
          </span>
        </div>

        {/* Pricing Cards Container */}
        <main className="flex flex-col lg:flex-row justify-center items-stretch gap-8">

          {/* Plan 1: Basic */}
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Basic</h3>
            <p className="text-gray-600 mb-6 min-h-[3rem]">Ideal for individual agents and new homeowners getting started.</p>
            
            <div className="plan-price text-5xl font-bold text-gray-900 mb-6 min-h-[6rem]">
              {isAnnual ? (
                <div>
                  $0<span className="text-base font-normal text-gray-500">/year</span>
                </div>
              ) : (
                <div>
                  $0<span className="text-base font-normal text-gray-500">/month</span>
                </div>
              )}
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {basicFeatures.map((feature) => (
                <li key={feature.text} className={`flex items-center ${feature.included ? 'text-gray-800' : 'text-gray-400'}`}>
                  <CheckCircleIcon className={`w-6 h-6 mr-3 ${feature.included ? 'text-purple-600' : 'text-gray-400'}`} />
                  {feature.text}
                </li>
              ))}
            </ul>
            <button className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg transition-colors hover:bg-purple-700">
              Sign Up for Free
            </button>
          </div>

          {/* Plan 2: Standard (Most Popular) */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md flex flex-col border-2 border-purple-600">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
              Most Popular
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Standard</h3>
            <p className="text-gray-600 mb-6 min-h-[3rem]">Our most popular choice for growing teams and active brokers.</p>
            
            <div className="plan-price text-5xl font-bold text-gray-900 mb-6 min-h-[6rem]">
              {isAnnual ? (
                <div>
                  $290<span className="text-base font-normal text-gray-500">/year</span>
                  <span className="ml-2 inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full align-middle">
                    Save $58
                  </span>
                </div>
              ) : (
                <div>
                  $29<span className="text-base font-normal text-gray-500">/month</span>
                </div>
              )}
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {standardFeatures.map((feature) => (
                <li key={feature.text} className={`flex items-center ${feature.included ? 'text-gray-800' : 'text-gray-400'}`}>
                  <CheckCircleIcon className={`w-6 h-6 mr-3 ${feature.included ? 'text-purple-600' : 'text-gray-400'}`} />
                  {feature.text}
                </li>
              ))}
            </ul>
            <button className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg transition-colors hover:bg-purple-700">
              Choose Standard
            </button>
          </div>

          {/* Plan 3: Premium */}
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Premium</h3>
            <p className="text-gray-600 mb-6 min-h-[3rem]">For large agencies and enterprises requiring full-scale solutions.</p>
            
            <div className="plan-price text-5xl font-bold text-gray-900 mb-6 min-h-[6rem]">
              {isAnnual ? (
                <div>
                  $790<span className="text-base font-normal text-gray-500">/year</span>
                  <span className="ml-2 inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full align-middle">
                    Save $158
                  </span>
                </div>
              ) : (
                <div>
                  $79<span className="text-base font-normal text-gray-500">/month</span>
                </div>
              )}
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {premiumFeatures.map((feature) => (
                <li key={feature.text} className={`flex items-center ${feature.included ? 'text-gray-800' : 'text-gray-400'}`}>
                  <CheckCircleIcon className={`w-6 h-6 mr-3 ${feature.included ? 'text-purple-600' : 'text-gray-400'}`} />
                  {feature.text}
                </li>
              ))}
            </ul>
            <button className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg transition-colors hover:bg-purple-700">
              Go Premium
            </button>
          </div>

        </main>
      </div>
    </div>
  );
}