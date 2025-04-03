
import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Turnover Insights Calculator Pro</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#calculator" className="hover:text-accent transition">Calculator</a>
            </li>
            <li>
              <a href="#about" className="hover:text-accent transition">About</a>
            </li>
            <li>
              <a href="#guide" className="hover:text-accent transition">Guide</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
