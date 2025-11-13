import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ search: searchTerm, location });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search properties..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex-1">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Locations</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai, Maharashtra</option>
            <option value="Bangalore">Bangalore, Karnataka</option>
            <option value="Pune">Pune, Maharashtra</option>
            <option value="Gurgaon">Gurgaon, Haryana</option>
            <option value="Noida">Noida, Uttar Pradesh</option>
            <option value="Thane">Thane, Maharashtra</option>
            <option value="Jaipur">Jaipur, Rajasthan</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;