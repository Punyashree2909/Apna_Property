import React, { useState } from "react";

const FilterSidebar = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <aside className="w-full md:w-1/4 bg-white border rounded-lg p-4 h-fit shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-700">Filters</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-sm text-emerald-600"
        >
          {isOpen ? "Hide" : "Show"}
        </button>
      </div>

      {isOpen && (
        <div className="space-y-6">
          {/* Price Filter */}
          <div>
            <label className="block font-medium text-gray-600 mb-1">
              Price (in Cr)
            </label>
            <input
              type="range"
              min="0.5"
              max="5"
              step="0.1"
              value={filters.price}
              onChange={(e) => handleChange("price", e.target.value)}
              className="w-full accent-emerald-600"
            />
            <div className="text-sm text-gray-500">Up to ₹ {filters.price} Cr</div>
          </div>

          {/* Bedroom Filter */}
          <div>
            <label className="block font-medium text-gray-600 mb-1">
              Bedrooms
            </label>
            <select
              value={filters.beds}
              onChange={(e) => handleChange("beds", e.target.value)}
              className="w-full border rounded-md p-2 text-sm focus:ring-emerald-100 focus:border-emerald-400"
            >
              <option value="">Any</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>

          {/* Area Filter */}
          <div>
            <label className="block font-medium text-gray-600 mb-1">
              Minimum Area (sq.ft)
            </label>
            <input
              type="number"
              min="500"
              max="5000"
              step="100"
              value={filters.area}
              onChange={(e) => handleChange("area", e.target.value)}
              className="w-full border rounded-md p-2 text-sm focus:ring-emerald-100 focus:border-emerald-400"
            />
          </div>
        </div>
      )}
    </aside>
  );
};

export default FilterSidebar;
