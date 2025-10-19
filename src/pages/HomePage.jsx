import React from 'react';

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

// Data for the page
const properties = [
  { image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop', price: '₹ 2.15 Cr', name: '3 BHK Apartment', beds: 3, baths: 2, sqft: 1800, type: 'For Sale' },
  { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', price: '₹ 1.80 Cr', name: '4 BHK Villa', beds: 4, baths: 4, sqft: 3200, type: 'For Sale' },
  { image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop', price: '₹ 45,000/mo', name: '2 BHK Apartment', beds: 2, baths: 2, sqft: 1250, type: 'For Rent' },
  { image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop', price: '₹ 3.50 Cr', name: 'Modern Flat', beds: 3, baths: 3, sqft: 2100, type: 'For Sale' },
];

const freshProperties = [
  { image: 'https://images.unsplash.com/photo-1605276374104-de67d476900?q=80&w=2070&auto=format&fit=crop', price: '₹ 65,000/mo', name: 'Luxury Apartment', beds: 3, baths: 3, sqft: 2200, type: 'For Rent' },
  { image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop', price: '₹ 4.20 Cr', name: 'Independent House', beds: 5, baths: 4, sqft: 4000, type: 'For Sale' },
  { image: 'https://images.unsplash.com/photo-1597047084993-bf3322a3b8a3?q=80&w=1974&auto=format&fit=crop', price: '₹ 1.25 Cr', name: 'Penthouse', beds: 2, baths: 2, sqft: 1600, type: 'For Sale' },
  { image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop', price: '₹ 30,000/mo', name: 'Studio Apartment', beds: 1, baths: 1, sqft: 800, type: 'For Rent' },
];

const agents = [{ name: 'Rohan Sharma' }, { name: 'Priya Mehta' }, { name: 'Ankit Desai' }, { name: 'Sneha Patil' }, { name: 'Vikram Singh' }];

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

function HomePage() {
  return (
    <div className="bg-white font-sans">
      <Header />
      <main>
        <HeroSection />
        <Section title="Popular Owner Properties">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {properties.map((prop, index) => <PropertyCard key={index} {...prop} />)}
          </div>
        </Section>
        <Section title="AP Preferred Agents in Bengaluru" bgColor="bg-white">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {agents.map((agent, index) => <AgentCard key={index} {...agent} />)}
          </div>
        </Section>
        <Section title="Property Service">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {services.map((service, index) => <ServiceCard key={index} {...service} />)}
          </div>
        </Section>
        <Section title="Your Real Estate Guide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {guides.map((guide, index) => <GuideCard key={index} {...guide} />)}
          </div>
        </Section>
        <Section title="Fresh Properties in Bengaluru" bgColor="bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {freshProperties.map((prop, index) => <PropertyCard key={index} {...prop} />)}
          </div>
        </Section>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;