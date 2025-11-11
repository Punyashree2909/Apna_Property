// --- ADDED: useState, useEffect, and axios ---
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// ---------------------------------------------

// Import all your new components
import Header from '../components/Header.jsx';
import HeroSection from '../components/HeroSection.jsx';
import Section from '../components/Section.jsx';
import PropertyCard from '../components/PropertyCard.jsx';
import AgentCard from '../components/AgentCard.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import GuideCard from '../components/GuideCard.jsx';
import CallToAction from '../components/CallToAction.jsx';
import Footer from '../components/Footer.jsx';

// --- REMOVED STATIC DATA FOR PROPERTIES AND AGENTS ---
// const properties = [...];
// const freshProperties = [...];
// const agents = [...];

// --- STATIC DATA (Keep as-is) ---
// This data doesn't need to come from the backend unless you have a CMS
const services = [
  { iconPath: "M2.25 21h19.5m-18-18v18m10.5-18v18m-6.75-13.5l6.75 7.5 6.75-7.5m-1.5-4.5h.008v.008h-.008v-.008z", title: "Rental Agreement", description: "Hassle-free online rental agreements delivered to your home." },
  { iconPath: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-1.5m-15-13.5H18M15 7.5h.008v.008H15V7.5z", title: "Property Valuation", description: "Get an accurate valuation of your property from certified experts." },
  { iconPath: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M21 10.5c0 7.142-7.5 11.25-9 11.25S3 17.642 3 10.5a9 9 0 1118 0z", title: "Locality Information", description: "Explore detailed information about neighborhoods and localities." },
];

const guides = [
  { image: 'https://images.unsplash.com/photo-1549517045-bc9de075e53?q=80&w=2071&auto=format&fit=crop', title: 'Home Loan Guide', description: 'Everything you need to know about securing a home loan.' },
  { image: 'https://images.unsplash.com/photo-1516156008657-3a1b212453c9?q=80&w=2070&auto=format&fit=crop', title: 'Top Localities to Invest', description: 'Discover the best areas in Bengaluru for property investment.' },
  { image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop', title: 'Buying Your First Home', description: 'A step-by-step guide for first-time homebuyers.' },
  { image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070&auto=format&fit=crop', title: 'Home Selling Checklist', description: 'Ensure you cover all bases when selling your property.' },
];
// --- END OF STATIC DATA ---


function HomePage() {
  // --- NEW STATE VARIABLES ---
  const [popularProps, setPopularProps] = useState([]);
  const [freshProps, setFreshProps] = useState([]);
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // -------------------------

  // --- NEW useEffect to fetch all data at once ---
  useEffect(() => {
    const fetchHomepageData = async () => {
      setLoading(true);
      setError(null);

      try {
        // !!! Replace these with your actual backend endpoints
        const popularPropsEndpoint = axios.get('http://your-backend-api.com/api/properties?featured=true&limit=4');
        const freshPropsEndpoint = axios.get('http://your-backend-api.com/api/properties?sort=new&limit=4');
        const agentsEndpoint = axios.get('http://your-backend-api.com/api/agents?preferred=true&limit=5');

        // Use Promise.all to run all requests at the same time
        const [popularResponse, freshResponse, agentsResponse] = await Promise.all([
          popularPropsEndpoint,
          freshPropsEndpoint,
          agentsEndpoint
        ]);

        // Set all the data into state
        setPopularProps(popularResponse.data);
        setFreshProps(freshResponse.data);
        setAgents(agentsResponse.data);

      } catch (err) {
        console.error("Error fetching homepage data:", err);
        setError("Failed to load page data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchHomepageData();
  }, []); // Empty array [] means this runs only once when the page loads
  // --- END OF NEW useEffect ---


  return (
    <div className="bg-white font-sans">
     
      <main>
        <HeroSection />

        {/* --- MODIFIED: Popular Properties Section --- */}
        <Section title="Popular Owner Properties">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {/* Show loading, error, or data */}
            {loading && <p className="col-span-full text-center">Loading properties...</p>}
            {error && <p className="col-span-full text-center text-red-600">{error}</p>}
            {!loading && !error && popularProps.map((prop) => (
              <PropertyCard key={prop._id} {...prop} /> // <-- Use _id for key
            ))}
          </div>
        </Section>

        {/* --- MODIFIED: Agents Section --- */}
        <Section title="AP Preferred Agents in Bengaluru" bgColor="bg-white">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {/* Show loading, error, or data */}
            {loading && <p className="col-span-full text-center">Loading agents...</p>}
            {/* Note: We don't show the main 'error' here again, one is enough */}
            {!loading && !error && agents.map((agent) => (
              <AgentCard key={agent._id} {...agent} /> // <-- Use _id for key
            ))}
          </div>
        </Section>

        {/* --- STATIC: Services Section (No Change) --- */}
        <Section title="Property Service">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {services.map((service, index) => <ServiceCard key={index} {...service} />)}
          </div>
        </Section>

        {/* --- STATIC: Guides Section (No Change) --- */}
        <Section title="Your Real Estate Guide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {guides.map((guide, index) => <GuideCard key={index} {...guide} />)}
          </div>
        </Section>

        {/* --- MODIFIED: Fresh Properties Section --- */}
        <Section title="Fresh Properties in Bengaluru" bgColor="bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {/* Show loading, error, or data */}
            {loading && <p className="col-span-full text-center">Loading properties...</p>}
            {/* Note: We don't show the main 'error' here again */}
            {!loading && !error && freshProps.map((prop) => (
              <PropertyCard key={prop._id} {...prop} /> // <-- Use _id for key
            ))}
          </div>
        </Section>

        <CallToAction />
      </main>
    </div>
  );
}

export default HomePage;