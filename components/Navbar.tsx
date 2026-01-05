
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  isAuthenticated?: boolean;
  onLogout?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, isAuthenticated, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Destinations', id: 'destinations' },
    { name: 'Tours', id: 'tours' },
    { name: 'Guides', id: 'guides' },
    { name: 'Admin', id: 'admin' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  const isTransparent = !isScrolled && currentPage === 'home';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isTransparent ? 'bg-transparent py-5' : 'bg-white shadow-md py-3'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => handleLinkClick('home')} className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
             <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className={`text-2xl font-bold ${isTransparent ? 'text-white' : 'text-slate-800'}`}>
            Sage Tour Rwanda
          </span>
        </button>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center space-x-8 font-medium ${isTransparent ? 'text-white' : 'text-slate-600'}`}>
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`hover:text-emerald-500 transition-colors ${currentPage === link.id ? 'text-emerald-500 font-bold' : ''}`}
            >
              {link.name}
            </button>
          ))}
          
          {isAuthenticated ? (
            <button 
              onClick={onLogout}
              className="bg-slate-800 text-white px-6 py-2 rounded-full hover:bg-slate-900 transition-all transform hover:scale-105 shadow-md flex items-center gap-2"
            >
              <span className="text-xs">👋</span> Logout
            </button>
          ) : (
            <button 
              onClick={() => handleLinkClick('login')}
              className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-md"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={isTransparent ? 'text-white' : 'text-slate-800'}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-6 px-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4 text-slate-700 font-medium text-center">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`py-2 ${currentPage === link.id ? 'text-emerald-600 font-bold' : ''}`}
              >
                {link.name}
              </button>
            ))}
            {isAuthenticated ? (
              <button 
                onClick={onLogout}
                className="bg-slate-800 text-white px-6 py-2 rounded-full mt-4"
              >
                Logout
              </button>
            ) : (
              <button 
                onClick={() => handleLinkClick('login')}
                className="bg-emerald-600 text-white px-6 py-2 rounded-full mt-4"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
