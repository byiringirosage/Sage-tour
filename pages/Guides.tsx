
import React from 'react';
import { GUIDES } from '../constants';

interface GuidesProps {
  onNavigate: (page: string) => void;
  onViewGuide: (id: string) => void;
}

const Guides: React.FC<GuidesProps> = ({ onNavigate, onViewGuide }) => {
  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Professional Guides</h1>
          <p className="text-slate-600 text-lg">
            Travel with confidence alongside experts who call these destinations home. Each guide is certified and passionate about sharing local secrets.
          </p>
          <div className="w-20 h-1 bg-emerald-600 mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {GUIDES.map((guide) => (
            <div key={guide.id} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center group">
              <div className="relative mb-6">
                <img 
                  src={guide.image} 
                  className="w-32 h-32 rounded-full object-cover border-4 border-emerald-50 shadow-md group-hover:scale-105 transition-transform" 
                  alt={guide.name} 
                />
                <div className="absolute -bottom-2 -right-2 bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center border-4 border-white font-bold text-xs shadow-sm">
                  ★{guide.rating}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{guide.name}</h3>
              <p className="text-emerald-600 font-medium text-sm mb-4">{guide.specialty}</p>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">
                "{guide.bio}"
              </p>
              <button 
                onClick={() => onViewGuide(guide.id)}
                className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-emerald-600 transition-colors shadow-sm"
              >
                View Profile
              </button>
            </div>
          ))}
        </div>

        {/* Recruitment section */}
        <div className="mt-24 bg-slate-50 rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Are you a local expert?</h2>
            <p className="text-slate-600 text-lg">
              Join our global network of professional guides and share the beauty of your hometown with travelers from around the world.
            </p>
            <ul className="space-y-3 text-slate-700 font-medium">
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-emerald-500">✓</span> Flexible schedule
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-emerald-500">✓</span> Competitive earnings
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-emerald-500">✓</span> Global marketing reach
              </li>
            </ul>
            <button 
              onClick={() => onNavigate('become-guide')}
              className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-emerald-700 transition-all mt-4"
            >
              Apply to become a Guide
            </button>
          </div>
          <div className="flex-1 hidden lg:block">
             <img src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80&w=800" alt="Guide team" className="rounded-3xl shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;
