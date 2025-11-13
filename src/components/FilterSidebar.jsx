import React, { useState } from "react";

const FilterSidebar = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      location: "",
      propertyType: "",
      minSqft: "",
      maxSqft: ""
    });
  };

  return (
    <aside className="w-full md:w-1/4 bg-white border rounded-lg p-4 h-fit shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-700">Filters</h3>
        <div className="flex gap-2">
          <button
            onClick={clearFilters}
            className="text-xs text-gray-500 hover:text-gray-700"
          >
            Clear
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-sm text-emerald-600"
          >
            {isOpen ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="space-y-6">
          {/* Search Filter */}
          <div>
            <label className="block font-medium text-gray-600 mb-1">
              Search
            </label>
            <input
              type="text"
              placeholder="Search properties..."
              value={filters.search || ""}
              onChange={(e) => handleChange("search", e.target.value)}
              className="w-full border rounded-md p-2 text-sm focus:ring-emerald-100 focus:border-emerald-400"
            />
          </div>

          {/* Location Filter */}
          <div>
            <label className="block font-medium text-gray-600 mb-1">
              Location
            </label>
            <select
              value={filters.location || ""}
              onChange={(e) => handleChange("location", e.target.value)}
              className="w-full border rounded-md p-2 text-sm focus:ring-emerald-100 focus:border-emerald-400"
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

          {/* Property Type Filter */}
          <div>
            <label className="block font-medium text-gray-600 mb-1">
              Property Type
            </label>
            <select
              value={filters.propertyType || ""}
              onChange={(e) => handleChange("propertyType", e.target.value)}
              className="w-full border rounded-md p-2 text-sm focus:ring-emerald-100 focus:border-emerald-400"
            >
              <option value="">All Types</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="House">House</option>
              <option value="Plot">Plot</option>
            </select>
          </div>

          {/* Area Filter */}
          <div>
            <label className="block font-medium text-gray-600 mb-1">
              Area (sq.ft)
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                value={filters.minSqft || ""}
                onChange={(e) => handleChange("minSqft", e.target.value)}
                className="w-1/2 border rounded-md p-2 text-sm focus:ring-emerald-100 focus:border-emerald-400"
              />
              <input
                type="number"
                placeholder="Max"
                value={filters.maxSqft || ""}
                onChange={(e) => handleChange("maxSqft", e.target.value)}
                className="w-1/2 border rounded-md p-2 text-sm focus:ring-emerald-100 focus:border-emerald-400"
              />
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default FilterSidebar;
