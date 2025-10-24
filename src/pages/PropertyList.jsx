import React, { useEffect, useState } from "react";
import FilterSidebar from "../components/FilterSidebar";
import PropertyCard from "../components/PropertyCard";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({
    price: 5,
    beds: "",
    area: 0
  });

  useEffect(() => {
    fetch("/data/propertiesList.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  const filtered = properties.filter((p) => {
    const inPrice = p.price / 10000000 <= filters.price;
    const inBeds = filters.beds ? p.beds >= filters.beds : true;
    const inArea = filters.area ? p.area >= filters.area : true;
    return inPrice && inBeds && inArea;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
      <FilterSidebar filters={filters} setFilters={setFilters} />
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((p) => <PropertyCard key={p.id} property={p} />)
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No properties match your filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default PropertyList;
