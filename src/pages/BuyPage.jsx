import React from 'react';

const BuyPageNoCSS = () => {
  
  const propertyData = {
   title: "Luxury 4 BHK Villa for Sale in Whitefield", 
    location: "Whitefield, Bangalore", 
    price: "3.5 Cr", 
    pricePerSqFt: "15,000/sq.ft.", 
   area: "2500 Sq.Ft.",
    plotArea: "3000 Sq.Ft.",  
    configuration: "4 BHK",  
    age: "New (0-1 Year)", 
   furnishing: "SemiFurnished", 
    facing: "East", 
    floor: "Ground + 1" ,
    transaction: "Resale",
    ownership: "Freehold", 
    description: "Experience unparalleled luxury in this exquisite 4 BHK villa located in the heart of Whitefield, Bangalore. Designed with contemporary aesthetics and functionality in mind, this property offers a spacious living environment perfect for modern families. Enjoy high-end finishes, ample natural light, and a serene ambiance. The villa features expansive living areas, well-appointed bedrooms with attached bathrooms, and a private garden area. Located in a prime residential locality, it offers excellent connectivity to major IT hubs, educational institutions, and healthcare facilities, ensuring a convenient lifestyle.", 
    totalPayable: "₹4,13,00,000", 
  };

  const propertyDetails = [
    { label: "Property Type", value: "Villa" },  
    { label: "Area", value: propertyData.area }, 
    { label: "Plot Area", value: propertyData.plotArea }, 
    { label: "Configuration", value: propertyData.configuration },  
    { label: "Age of Construction", value: propertyData.age }, 
    { label: "Furnishing", value: propertyData.furnishing }, 
    { label: "Floor", value: propertyData.floor }, 
    { label: "Transaction Type", value: propertyData.transaction },  
    { label: "Ownership", value: propertyData.ownership }, 
  ];

  
  const priceBreakupDetails = [
    { label: "Property Price", value: "3,50,00,000" },
    { label: "Registration Charges", value: "35,00,000" },
    { label: "Stamp Duty", value: "21,00,000" },
    { label: "Brokerage", value: "7,00,000" },
  ];

  return (
    <div>
     
      
      <header>
        <h1>ApnaProperty</h1>
        <nav>
          <a href="#">Buy</a> 
          <a href="#">Sell</a> 
          <a href="#">Rent</a> 
          <a href="#">Agents</a> 
          <a href="#">Blog</a> 
          <a href="#">Login</a> 
          <a href="#">Sign Up</a> 
      </header>

      <hr />

      
      <main>
       
        <section>
         
          <img src="/path/to/villa-image.jpg" alt={propertyData.title} style={{ maxWidth: '100%', height: 'auto' }} />
          <button>View All Photos</button> 
        </section>

        <hr />

       
        <div>
          
          <div>
            <h2>{propertyData.title}</h2> 
            <p>{propertyData.location}</p> 
            
            
            <h3>Overview</h3> 
            <p>{propertyData.description}</p> 

            
            <h3>Property Details</h3> 
            
            <div>
              {propertyDetails.map((item) => (
                <div key={item.label}>
                  <p><strong>{item.label}:</strong> {item.value}</p>
                </div>
              ))}
            </div>

            
           <h3>Price Breakup</h3>
            <div>
              {priceBreakupDetails.map((item) => (
                <div key={item.label}>
                  <p><strong>{item.label}:</strong> ₹{item.value}</p>
                </div>
              ))}
              <p><strong>Total Payable:</strong> {propertyData.totalPayable}</p> 
            </div>

            
            <h3>EMI Calculator</h3>
            <p>Loan Amount (P50,00,000)</p> 
            <p>Down Payment (10,00,000)</p> 
            <p>Loan Tenure (20 Years)</p>

            
            <h3>Floor Plan</h3> 
            <h3>Location & Nearby</h3> 

          
          <aside>
            
            <div>
              <h2>{propertyData.price}</h2> 
              <p>{propertyData.pricePerSqFt}</p> 
            </div>

            
            <div>
              <button>Contact kalyani</button> 
              <button>Get Phone Number</button> 
              <button>Share</button> 
            </div>

            
            <div>
              <h4>Estimated Monthly EMI</h4> 
              <p>{propertyData.emi}</p>
            </div>

            
            <div>
              <h4>Prestige Lakeside Habitat</h4> 
              <p>Developed by Prestige Group</p> 
              <p>80 Acres, 3697 Units</p> 
            </div>
          </aside>
        </div>
      </main>

      <hr />

      
      <footer>
        <p>© 2024 Apna Property. All rights reserved.</p> 
        
        <div>
          <h4>Company</h4> 
          <p>Contact Us</p> 
        </div>
        <div>
          <h4>Resources</h4> 
          <p>Property Guide</p> 
        </div>
        <div>
          <h4>Legal</h4> 
          <p>Privacy Policy</p> 
        </div>
      </footer>
    </div>
  );
};

export default BuyPage;