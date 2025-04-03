
import React from 'react';
import Header from '@/components/Header';
import TurnoverCalculator from '@/components/turnover/TurnoverCalculator';
import SEOContent from '@/components/SEOContent';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Employee Turnover Cost Calculator
            </h1>
            <p className="text-xl text-charcoal">
              Quantify the true cost of employee turnover and build a business case for retention initiatives
            </p>
          </div>
          
          <TurnoverCalculator />
          <SEOContent />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
