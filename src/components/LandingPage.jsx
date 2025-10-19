import React from 'react';
import { Link } from "react-router-dom";


// Helper component for SVG icons
const Icon = ({ path, className = "w-6 h-6" }) => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
</svg>
);

// Individual components to make the code cleaner

const Header = () => (
<header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-2">
        <svg className="w-8 h-8 text-teal-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/></svg>
        <span className="text-2xl font-bold text-gray-800">ApnaProperty</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-600 hover:text-teal-600 transition-colors">Home</Link>
        <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Buy</a>
       <Link to="/PropertyDetails" className="text-gray-600 hover:text-teal-600 transition-colors">Rent</Link>
        <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Sell</a>
        <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Home Loans</a>
        <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Help</a>
        <Link to="/about" className="hover:text-green-700">About Us</Link>
        <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Contact Us</a>
        </div>
        <button className="hidden md:block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
        Log In
        </button>
        <button className="md:hidden">
            <Icon path="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" className="w-6 h-6 text-gray-600" />
        </button>
    </div>
    </div>
</header>
);

const HeroSection = () => (
<div className="relative bg-gray-800 h-[500px] flex items-center justify-center">
    <div className="absolute inset-0">
        <img 
        src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop" 
        alt="Modern living room" 
        className="w-full h-full object-cover opacity-50"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1920x1080/333/fff?text=Living+Room'; }}
        />
    </div>
    <div className="relative z-10 text-center text-white px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">We've got properties in <span className="text-teal-400">Bengaluru</span> for everyone</h1>
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-2xl max-w-4xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <div className="relative md:col-span-3">
                <Icon path="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" className="w-5 h-5 absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Search for locality, landmark, project or builder" 
                    className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                />
            </div>
        <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 flex items-center justify-center space-x-2 h-12">
            <Icon path="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" className="w-5 h-5" />
            <span>Search</span>
        </button>
        </div>
    </div>
    </div>
</div>
);


const PropertyCard = ({ image, price, name, beds, baths, sqft, type }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
        <div className="relative h-48">
            <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/eee/ccc?text=Property'; }}
            />
            <div className="absolute top-2 left-2 bg-white/90 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">{type}</div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
            <p className="text-xl font-bold text-gray-800">{price}</p>
            <h3 className="text-lg font-semibold text-gray-700 truncate mt-1">{name}</h3>
            <div className="flex items-center text-gray-500 mt-auto pt-4 space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                    <Icon path="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4" className="w-4 h-4"/>
                    <span>{beds} Beds</span>
                </div>
                <div className="flex items-center space-x-1">
                    <Icon path="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.25a14.98 14.98 0 00-5.96 12.12c0 3.297 1.029 6.36 2.845 8.865a14.98 14.98 0 005.96 2.844z" className="w-4 h-4"/>
                    <span>{baths} Baths</span>
                </div>
                <div className="flex items-center space-x-1">
                    <Icon path="M21.75 12a9.75 9.75 0 11-19.5 0 9.75 9.75 0 0119.5 0z" className="w-4 h-4"/>
                    <span>{sqft} sqft</span>
                </div>
            </div>
        </div>
    </div>
);

const Section = ({ title, children, bgColor = "bg-gray-50" }) => (
    <section className={`py-16 ${bgColor}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">{title}</h2>
            {children}
        </div>
    </section>
);

const AgentCard = ({ name }) => (
    <div className="text-center p-4">
        <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center">
            <Icon path="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" className="w-16 h-16 text-gray-500"/>
        </div>
        <p className="font-semibold text-gray-700">{name}</p>
        <p className="text-sm text-gray-500">Real Estate Agent</p>
    </div>
);

const ServiceCard = ({ iconPath, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm text-center flex flex-col h-full">
        <div className="bg-teal-100 text-teal-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Icon path={iconPath} className="w-8 h-8"/>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm flex-grow">{description}</p>
    </div>
);

const GuideCard = ({ image, title, description }) => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
        <img 
        src={image} 
        alt={title} 
        className="w-full h-40 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x200/eee/ccc?text=Guide'; }}
        />
        <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-bold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600 mt-1 flex-grow">{description}</p>
        </div>
    </div>
);

const CallToAction = () => (
    <div className="bg-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Post Your Property For Free</h2>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">List your property with us to connect with millions of potential buyers and tenants.</p>
            <button className="bg-white text-teal-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                Post Property
            </button>
        </div>
    </div>
);

const Footer = () => (
    <footer className="bg-gray-800 text-gray-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                <div className="col-span-2 lg:col-span-1">
                    <div className="flex items-center space-x-2">
                    <svg className="w-8 h-8 text-teal-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/></svg>
                    <span className="text-2xl font-bold text-white">ApnaProperty</span>
                    </div>
                    <p className="text-sm mt-4 text-gray-400">Your trusted partner in finding the perfect property.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-4">Company</h4>
                    <ul>
                        <li className="mt-2"><a href="#" className="hover:text-teal-400">About Us</a></li>
                        <li className="mt-2"><a href="#" className="hover:text-teal-400">Careers</a></li>
                        <li className="mt-2"><a href="#" className="hover:text-teal-400">Press</a></li>
                        <li className="mt-2"><a href="#" className="hover:text-teal-400">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-4">Resources</h4>
                    <ul>
                        <li className="mt-2"><a href="#" className="hover:text-teal-400">Blog</a></li>
                        <li className="mt-2"><a href="#" className="hover:text-teal-400">FAQs</a></li>
                        <li className="mt-2"><a href="#" className="hover:text-teal-400">Site Map</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-4">Legal</h4>
                    <ul>
                        <li className="mt-2"><a href="#" className="hover:text-teal-400">Terms of Use</a></li>
                        <li className="mt-2"><a href="#" className="hover:text-teal-400">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                &copy; 2025 ApnaProperty. All Rights Reserved.
            </div>
        </div>
    </footer>
);


// Main Landing Page Component
function LandingPage() {
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
    
    const agents = [ {name: 'Rohan Sharma'}, {name: 'Priya Mehta'}, {name: 'Ankit Desai'}, {name: 'Sneha Patil'}, {name: 'Vikram Singh'} ];
    
    const services = [
    {iconPath: "M2.25 21h19.5m-18-18v18m10.5-18v18m-6.75-13.5l6.75 7.5 6.75-7.5m-1.5-4.5h.008v.008h-.008v-.008z", title: "Rental Agreement", description: "Hassle-free online rental agreements delivered to your home."},
    {iconPath: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-1.5m-15-13.5H18M15 7.5h.008v.008H15V7.5z", title: "Property Valuation", description: "Get an accurate valuation of your property from certified experts."},
    {iconPath: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M21 10.5c0 7.142-7.5 11.25-9 11.25S3 17.642 3 10.5a9 9 0 1118 0z", title: "Locality Information", description: "Explore detailed information about neighborhoods and localities."},
    ];
    
    const guides = [
        { image: 'https://images.unsplash.com/photo-1549517045-bc9de075e53?q=80&w=2071&auto=format&fit=crop', title: 'Home Loan Guide', description: 'Everything you need to know about securing a home loan.' },
        { image: 'https://images.unsplash.com/photo-1516156008657-3a1b212453c9?q=80&w=2070&auto=format&fit=crop', title: 'Top Localities to Invest', description: 'Discover the best areas in Bengaluru for property investment.' },
        { image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop', title: 'Buying Your First Home', description: 'A step-by-step guide for first-time homebuyers.' },
        { image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070&auto=format&fit=crop', title: 'Home Selling Checklist', description: 'Ensure you cover all bases when selling your property.' },
    ];

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
        
        {/* We can re-use the property section for exclusive properties */}
        <Section title="Exclusive Owner Properties in Bengaluru" bgColor="bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                {properties.slice(0, 4).map((prop, index) => <PropertyCard key={index} {...prop} />)}
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

export default LandingPage;

