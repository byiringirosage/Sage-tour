
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center">
               <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-white text-xl font-bold">Sage Tour</span>
          </div>
          <p className="text-sm leading-relaxed">
            Leading the way in personalized travel experiences. Discover authentic culture, breathtaking nature, and local secrets with our expert guides.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-emerald-500 transition-colors">FB</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">IG</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">TW</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">YT</a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-emerald-500">Home</a></li>
            <li><a href="#" className="hover:text-emerald-500">Destinations</a></li>
            <li><a href="#" className="hover:text-emerald-500">Featured Tours</a></li>
            <li><a href="#" className="hover:text-emerald-500">Our Guides</a></li>
            <li><a href="#" className="hover:text-emerald-500">Become a Guide</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-6">Support</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-emerald-500">Help Center</a></li>
            <li><a href="#" className="hover:text-emerald-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-emerald-500">Terms of Service</a></li>
            <li><a href="#" className="hover:text-emerald-500">FAQs</a></li>
            <li><a href="#" className="hover:text-emerald-500">Booking Guide</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <span>📍</span>
              <span>123 Traveler's Blvd, Venture City, TC 90210</span>
            </li>
            <li className="flex items-center space-x-3">
              <span>📞</span>
              <span>+1 (234) 567-890</span>
            </li>
            <li className="flex items-center space-x-3">
              <span>📧</span>
              <span>contact@sagetour.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} Sage Tour. All rights reserved. Designed with ❤️ for travelers.</p>
      </div>
    </footer>
  );
};

export default Footer;
