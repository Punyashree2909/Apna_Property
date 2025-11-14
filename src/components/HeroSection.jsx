import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCity } from '../context/CityContext';

// Re-created Icon component since it was in a separate file
const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

// List of 24 famous Indian cities
const famousCities = [
  "Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Ahmedabad", "Chennai",
  "Kolkata", "Surat", "Pune", "Jaipur", "Lucknow", "Kanpur",
  "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Patna",
  "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad"
];

// Property type options based on the active tab
const propertyTypeOptions = {
  buy: ["Apartment", "Independent House", "Villa", "Plot", "Builder Floor"],
  rent: ["Apartment", "Independent House", "Villa", "Builder Floor", "Studio Apartment", "PG/Co-living"],
  commercial: ["Office Space", "Shop", "Showroom", "Warehouse", "Commercial Land", "Co-working"]
};

// Budget options based on the active tab
const budgetOptions = {
  buy: ["₹10 Lac", "₹20 Lac", "₹30 Lac", "₹40 Lac", "₹50 Lac", "₹60 Lac", "₹70 Lac", "₹80 Lac", "₹90 Lac", "₹1 Cr", "₹1.25 Cr", "₹1.5 Cr", "₹2 Cr", "Above ₹2 Cr"],
  rent: ["₹5,000", "₹10,000", "₹15,000", "₹20,000", "₹25,000", "₹30,000", "₹35,000", "₹40,000", "₹45,000", "₹50,000", "Above ₹50,000"],
  commercial: ["₹10,000", "₹20,000", "₹30,000", "₹50,000", "₹75,000", "₹1 Lac", "₹1.5 Lac", "₹2 Lac", "₹3 Lac", "₹4 Lac", "₹5 Lac", "Above ₹5 Lac"]
};

// Selection Modal Component
const SelectionModal = ({ title, options, onClose, onSelect, gridColsClass = "grid-cols-2 sm:grid-cols-3 md:grid-cols-4" }) => {
  return (
    // ... (No changes in this component)
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30 transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative z-60 w-full max-w-3xl overflow-hidden rounded-xl bg-white p-6 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <Icon path="M6 18L18 6M6 6l12 12" className="w-6 h-6" />
          </button>
        </div>
        
        <div className="mt-6 max-h-[60vh] overflow-y-auto pr-2">
          <div className={`grid ${gridColsClass} gap-4`}>
            {options.map((option) => (
              <button
                key={option}
                onClick={() => onSelect(option)}
                className="w-full text-left p-3 text-gray-700 rounded-lg hover:bg-teal-50 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-all"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Hero Section Component
const HeroSection = () => {
  const navigate = useNavigate();
  // State for the active tab (Buy, Rent, Commercial)
  const [activeTab, setActiveTab] = useState('buy');
  const [searchQuery, setSearchQuery] = useState('');
  
  // <-- 2. REPLACE LOCAL STATE WITH GLOBAL CONTEXT STATE -->
  // const [selectedCity, setSelectedCity] = useState('Bengaluru'); // <-- DELETE THIS LINE
  const { selectedCity, setSelectedCity } = useCity(); // <-- ADD THIS LINE
  
  // State for controlling the city modal
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);

  // State for Property Type
  const [selectedPropertyType, setSelectedPropertyType] = useState('Property Type');
  const [isPropertyTypeModalOpen, setIsPropertyTypeModalOpen] = useState(false);

  // State for Budget
  const [selectedBudget, setSelectedBudget] = useState('Budget');
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);

  // Handler to change the selected city
  const handleCitySelect = (city) => {
    // <-- 3. THIS FUNCTION NOW UPDATES THE *GLOBAL* STATE! -->
    setSelectedCity(city); 
    setIsCityModalOpen(false);
  };

  // Handler to change the selected property type
  const handlePropertyTypeSelect = (type) => {
    setSelectedPropertyType(type);
    setIsPropertyTypeModalOpen(false);
  };

  // Handler to change the selected budget
  const handleBudgetSelect = (budget) => {
    setSelectedBudget(budget);
    setIsBudgetModalOpen(false);
  };

  // Handler to change the main tab (Buy/Rent/Commercial)
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    // Reset dependent filters
    setSelectedPropertyType('Property Type');
    setSelectedBudget('Budget');
  };

  // Handler for search
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.append('search', searchQuery);
    if (selectedCity) params.append('location', selectedCity);
    
    // Navigate to different pages based on active tab
    const routes = {
      buy: '/buy',
      rent: '/rent', 
      commercial: '/commercial'
    };
    
    navigate(`${routes[activeTab]}?${params.toString()}`);
  };

  // Common class for tab buttons
  const tabButtonClass = "flex-1 py-4 px-2 text-center font-semibold border-b-4 transition-all duration-300 ease-in-out";
  
  // Common class for filter buttons
  const filterButtonClass = "flex items-center justify-between w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50";

  return (
    <>
      <div className="relative h-[550px] md:h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
            alt="Modern living room"
            className="w-full h-full object-cover opacity-50"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1920x1080/333/fff?text=Living+Room'; }}
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 w-full max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {/* This {selectedCity} now comes from the global context! */}
            We've got properties in <span className="text-teal-400">{selectedCity}</span> for everyone
          </h1>
          
          {/* Main Search Box */}
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-2xl max-w-4xl mx-auto mt-8 text-gray-900">
            
            {/* Tabs: Buy, Rent, Commercial */}
            <div className="flex border-b border-gray-200 -mt-4 -mx-4 md:-mt-6 md:-mx-6 mb-4 md:mb-6">
              {/* ... (No changes in the tabs) ... */}
              <button
                onClick={() => handleTabClick('buy')}
                className={`${tabButtonClass} ${activeTab === 'buy' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
              >
                Buy
              </button>
              <button
                onClick={() => handleTabClick('rent')}
                className={`${tabButtonClass} ${activeTab === 'rent' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
              >
                Rent
              </button>
              <button
                onClick={() => handleTabClick('commercial')}
                className={`${tabButtonClass} ${activeTab === 'commercial' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
              >
                Commercial
              </button>
            </div>

            {/* Search Input and Button */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* ... (No changes in the search input) ... */}
              <div className="relative flex-grow w-full">
                <input
                  type="text"
                  placeholder={`Search for locality, project, or builder in ${selectedCity}`}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Icon path="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" className="w-5 h-5" />
                </div>
              </div>
              <button 
                onClick={handleSearch}
                className="w-full md:w-auto bg-teal-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-600 transition-all flex items-center justify-center gap-2"
              >
                <Icon path="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" className="w-5 h-5" />
                <span>Search</span>
              </button>
            </div>

            {/* Filter Buttons (now 3) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"> 
              <button 
                onClick={() => setIsCityModalOpen(true)}
                className={filterButtonClass}
              >
                {/* This {selectedCity} also comes from the global context! */}
                <span>{selectedCity}</span>
                <Icon path="M19 9l-7 7-7-7" className="w-4 h-4 text-gray-500" />
              </button>
              <button 
                onClick={() => setIsPropertyTypeModalOpen(true)}
                className={filterButtonClass}
              >
                <span>{selectedPropertyType}</span>
                <Icon path="M19 9l-7 7-7-7" className="w-4 h-4 text-gray-500" />
              </button>
              <button 
                onClick={() => setIsBudgetModalOpen(true)}
                className={filterButtonClass}
              >
                <span>{selectedBudget}</span>
                <Icon path="M19 9l-7 7-7-7" className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            
          </div>
        </div>
      </div>

      {/* Render the Modals */}
      {isCityModalOpen && (
        <SelectionModal 
          title="Select a City"
          options={famousCities}
          onClose={() => setIsCityModalOpen(false)} 
          // This onSelect now calls the handler that updates GLOBAL state!
          onSelect={handleCitySelect} 
        />
      )}

      {isPropertyTypeModalOpen && (
        <SelectionModal 
          title="Select Property Type"
          options={propertyTypeOptions[activeTab]}
          onClose={() => setIsPropertyTypeModalOpen(false)} 
          onSelect={handlePropertyTypeSelect}
          gridColsClass="grid-cols-2 sm:grid-cols-3"
        />
      )}

      {isBudgetModalOpen && (
        <SelectionModal 
          title="Select Budget"
          options={budgetOptions[activeTab]}
          onClose={() => setIsBudgetModalOpen(false)} 
          onSelect={handleBudgetSelect}
          gridColsClass="grid-cols-2 sm:grid-cols-3"
        />
      )}
    </>
  );
};

// Use default export for the main component
export default HeroSection;