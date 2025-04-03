
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Turnover Insights Calculator Pro</h3>
            <p className="text-sm opacity-80">
              Helping organizations understand and reduce the costs associated with employee turnover through
              data-driven insights and actionable strategies.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#calculator" className="hover:text-accent transition">Calculator</a></li>
              <li><a href="#about" className="hover:text-accent transition">About Turnover Costs</a></li>
              <li><a href="#guide" className="hover:text-accent transition">Usage Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-3">Stay Updated</h3>
            <p className="text-sm opacity-80 mb-3">
              Subscribe to our newsletter for the latest tools and insights on employee retention.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-3 py-2 text-sm text-charcoal rounded-l-md w-full"
              />
              <button className="bg-accent text-charcoal px-3 py-2 text-sm rounded-r-md hover:bg-opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70">
            &copy; {new Date().getFullYear()} Turnover Insights Calculator Pro. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm opacity-70 hover:opacity-100 transition">Privacy Policy</a>
            <a href="#" className="text-sm opacity-70 hover:opacity-100 transition">Terms of Use</a>
            <a href="#" className="text-sm opacity-70 hover:opacity-100 transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
