
import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTopAndNavigate = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center">
               <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-white text-xl font-bold">Sage Tour Rwanda</span>
          </div>
          <p className="text-sm leading-relaxed">
            Leading the way in personalized ecotourism. Discover authentic culture, breathtaking wildlife, and the 1000 hills with our expert local guides.
          </p>
          <div className="flex space-x-4">
            <button aria-label="Facebook" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all text-white p-2.5">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
            </button>
            <button aria-label="Instagram" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all text-white p-2.5">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </button>
            <button aria-label="Twitter X" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all text-white p-2.5">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.489h2.039L6.486 3.24H4.298l13.311 17.402z"/></svg>
            </button>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><button onClick={() => scrollToTopAndNavigate('home')} className="hover:text-emerald-500 transition-colors">Home</button></li>
            <li><button onClick={() => scrollToTopAndNavigate('destinations')} className="hover:text-emerald-500 transition-colors">Destinations</button></li>
            <li><button onClick={() => scrollToTopAndNavigate('tours')} className="hover:text-emerald-500 transition-colors">Featured Tours</button></li>
            <li><button onClick={() => scrollToTopAndNavigate('guides')} className="hover:text-emerald-500 transition-colors">Our Guides</button></li>
            <li><button onClick={() => scrollToTopAndNavigate('become-guide')} className="hover:text-emerald-500 transition-colors">Become a Guide</button></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Support</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><button onClick={() => scrollToTopAndNavigate('help-center')} className="hover:text-emerald-500 transition-colors">Help Center</button></li>
            <li><button onClick={() => scrollToTopAndNavigate('privacy')} className="hover:text-emerald-500 transition-colors">Privacy Policy</button></li>
            <li><button onClick={() => scrollToTopAndNavigate('terms')} className="hover:text-emerald-500 transition-colors">Terms of Service</button></li>
            <li><button onClick={() => scrollToTopAndNavigate('faqs')} className="hover:text-emerald-500 transition-colors">FAQs</button></li>
            <li><button onClick={() => scrollToTopAndNavigate('booking-guide')} className="hover:text-emerald-500 transition-colors">Booking Guide</button></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Visit Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <span className="text-emerald-500">📍</span>
              <span>KN 3 Rd, Kigali, Rwanda<br/>Centenary House</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-emerald-500">📞</span>
              <span>+250 788 000 000</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-emerald-500">📧</span>
              <span>visit@sagetour.rw</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} Sage Tour Rwanda. Supporting conservation through community-led tourism.</p>
      </div>
    </footer>
  );
};

export default Footer;
