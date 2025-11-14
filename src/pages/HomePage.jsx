import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HeroSection from '../components/HeroSection.jsx';
import Section from '../components/Section.jsx';
import PropertyCard from '../components/PropertyCard.jsx';
import AgentCard from '../components/AgentCard.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import GuideCard from '../components/GuideCard.jsx';
import CallToAction from '../components/CallToAction.jsx';

const services = [
  { iconPath: "M2.25 21h19.5m-18-18v18m10.5-18v18m-6.75-13.5l6.75 7.5 6.75-7.5m-1.5-4.5h.008v.008h-.008v-.008z", title: "Rental Agreement", description: "Hassle-free online rental agreements delivered to your home." },
  { iconPath: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-1.5m-15-13.5H18M15 7.5h.008v.008H15V7.5z", title: "Property Valuation", description: "Get an accurate valuation of your property from certified experts." },
  { iconPath: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M21 10.5c0 7.142-7.5 11.25-9 11.25S3 17.642 3 10.5a9 9 0 1118 0z", title: "Locality Information", description: "Explore detailed information about neighborhoods and localities." },
];

const guides = [
  { image: 'https://images.unsplash.com/photo-1549517045-bc9de075e53?q=80&w=2071&auto=format&fit=crop', title: 'Home Loan Guide', description: 'Everything you need to know about securing a home loan.' },
  { image: 'https://images.unsplash.com/photo-1516156008657-3a1b212453c9?q=80&w=2070&auto=format&fit=crop', title: 'Top Localities to Invest', description: 'Discover the best areas in India for property investment.' },
  { image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop', title: 'Buying Your First Home', description: 'A step-by-step guide for first-time homebuyers.' },
  { image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070&auto=format&fit=crop', title: 'Home Selling Checklist', description: 'Ensure you cover all bases when selling your property.' },
];

const agents = [
  { _id: 1, name: "Rajesh Kumar", experience: "5 years", rating: 4.8, deals: 120, avatar: "https://i.pravatar.cc/150?img=1" },
  { _id: 2, name: "Priya Sharma", experience: "3 years", rating: 4.9, deals: 85, avatar: "https://i.pravatar.cc/150?img=2" },
  { _id: 3, name: "Amit Singh", experience: "7 years", rating: 4.7, deals: 200, avatar: "https://i.pravatar.cc/150?img=3" },
  { _id: 4, name: "Neha Gupta", experience: "4 years", rating: 4.8, deals: 95, avatar: "https://i.pravatar.cc/150?img=4" },
  { _id: 5, name: "Vikram Patel", experience: "6 years", rating: 4.9, deals: 150, avatar: "https://i.pravatar.cc/150?img=5" }
];

function HomePage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/properties');
        setProperties(response.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);



  return (
    <div className="bg-white font-sans">
      <main>
        <HeroSection />

        <Section title="Popular Owner Properties">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {loading && <p className="col-span-full text-center">Loading properties...</p>}
            {error && <p className="col-span-full text-center text-red-600">{error}</p>}
            {!loading && !error && properties.slice(0, 4).map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </Section>

        <Section title="Preferred Agents" bgColor="bg-white">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {agents.map((agent) => (
              <AgentCard key={agent._id} {...agent} />
            ))}
          </div>
        </Section>

        <Section title="Property Services">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {services.map((service, index) => <ServiceCard key={index} {...service} />)}
          </div>
        </Section>

        <Section title="Your Real Estate Guide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {guides.map((guide, index) => <GuideCard key={index} {...guide} />)}
          </div>
        </Section>

        <Section title="Fresh Properties" bgColor="bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {loading && <p className="col-span-full text-center">Loading properties...</p>}
            {!loading && !error && properties.slice(4, 8).map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </Section>

        <CallToAction />
      </main>
    </div>
  );
}

export default HomePage;