
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
             <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className={`text-2xl font-bold ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
            Sage Tour
          </span>
        </div>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center space-x-8 font-medium ${isScrolled ? 'text-slate-600' : 'text-white'}`}>
          <a href="#home" className="hover:text-emerald-500 transition-colors">Home</a>
          <a href="#destinations" className="hover:text-emerald-500 transition-colors">Destinations</a>
          <a href="#tours" className="hover:text-emerald-500 transition-colors">Tours</a>
          <a href="#guides" className="hover:text-emerald-500 transition-colors">Guides</a>
          <a href="#about" className="hover:text-emerald-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-emerald-500 transition-colors">Contact</a>
          <button className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-all transform hover:scale-105">
            Login
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={isScrolled ? 'text-slate-800' : 'text-white'}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-6 px-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4 text-slate-700 font-medium text-center">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#destinations" onClick={() => setIsMobileMenuOpen(false)}>Destinations</a>
            <a href="#tours" onClick={() => setIsMobileMenuOpen(false)}>Tours</a>
            <a href="#guides" onClick={() => setIsMobileMenuOpen(false)}>Guides</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-full mt-4">Login</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
