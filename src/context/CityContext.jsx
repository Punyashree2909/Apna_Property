import React, { createContext, useState, useContext } from 'react';

// 1. Create the context (the "box")
const CityContext = createContext();

// 2. Create a "Provider" component (the one that manages the box)
export const CityProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState('Nagpur'); // <-- Set a default city

  return (
    <CityContext.Provider value={{ selectedCity, setSelectedCity }}>
      {children}
    </CityContext.Provider>
  );
};

// 3. Create a custom hook to easily use the context (the "key" to the box)
export const useCity = () => {
  return useContext(CityContext);
};