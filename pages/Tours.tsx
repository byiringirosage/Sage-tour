
import React, { useState } from 'react';
import { FEATURED_TOURS } from '../constants';

interface ToursProps {
  onViewTour: (id: string) => void;
}

const Tours: React.FC<ToursProps> = ({ onViewTour }) => {
  const [activeTab, setActiveTab] = useState('All');
  
  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Tour Packages</h1>
          <p className="text-slate-600">Discover hand-picked tours curated by local experts in Rwanda.</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          {['All', 'Wildlife', 'Adventure', 'Cultural', 'Nature'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === tab ? 'bg-emerald-600 text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {FEATURED_TOURS.map((tour) => (
            <div key={tour.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] group flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img src={tour.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={tour.title} />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl font-bold text-slate-900 shadow-sm">
                  ${tour.price}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-2">
                  <span>📍 {tour.location}</span>
                  <span>•</span>
                  <span>⏱️ {tour.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">{tour.title}</h3>
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-amber-500">★</span>
                    <span className="font-bold text-slate-800">{tour.rating}</span>
                    <span className="text-slate-400 text-sm">({tour.reviews})</span>
                  </div>
                  <button 
                    onClick={() => onViewTour(tour.id)}
                    className="bg-slate-900 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-emerald-600 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;
