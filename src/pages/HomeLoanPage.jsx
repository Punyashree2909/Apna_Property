import React from 'react';

// Import your shared components if they are not handled by a layout component
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import your new home loan components
import HomeLoanHero from '../components/homeloan/HomeLoanHero';
import LoanOffers from '../components/homeloan/LoanOffers';
import HowItWorks from '../components/homeloan/HowItWorks';
import LoanCalculator from '../components/homeloan/LoanCalculator';
import PersonalizedDeals from '../components/homeloan/PersonalizedDeals';
import PreApprovedLoan from '../components/homeloan/PreApprovedLoan.jsx';
import FaqSection from '../components/homeloan/FaqSection.jsx'; 

const HomeLoanPage = () => {
  return (
    <>
      {/* The Header and Footer components will wrap your page content */}
<<<<<<< HEAD
      <Header />
=======
      {/* <Header /> */}
>>>>>>> Punyashree
      <main>
        <HomeLoanHero />
        <LoanOffers />
        <HowItWorks />
        <LoanCalculator />
        <PersonalizedDeals />
        <PreApprovedLoan />
        <FaqSection />
      </main>
<<<<<<< HEAD
      <Footer />
=======
      {/* <Footer /> */}
>>>>>>> Punyashree
    </>
  );
};

export default HomeLoanPage;