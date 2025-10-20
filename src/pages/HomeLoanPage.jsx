import React from 'react';

// Import shared components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import home loan components
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
      {/* Header and Footer wrapping page content */}
      <Header />

      <main>
        <HomeLoanHero />
        <LoanOffers />
        <HowItWorks />
        <LoanCalculator />
        <PersonalizedDeals />
        <PreApprovedLoan />
        <FaqSection />
      </main>

      <Footer />
    </>
  );
};

export default HomeLoanPage;
