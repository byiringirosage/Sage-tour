
import React, { useState, useEffect, useRef } from 'react';
import { POPULAR_DESTINATIONS } from '../constants';

interface DestinationsProps {
  onNavigate: (page: string) => void;
  onViewDestination: (id: string) => void;
}

const Destinations: React.FC<DestinationsProps> = ({ onNavigate, onViewDestination }) => {
  const [search, setSearch] = useState('');
  const mapRef = useRef<any>(null);
  
  const filtered = POPULAR_DESTINATIONS.filter(d => 
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    // Initialize map if not already initialized
    if (!mapRef.current && (window as any).L) {
      const L = (window as any).L;
      // Center of Rwanda approximately
      mapRef.current = L.map('destination-map').setView([-1.9403, 29.8739], 8);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      POPULAR_DESTINATIONS.forEach(dest => {
        L.marker([dest.lat, dest.lng])
          .addTo(mapRef.current)
          .bindPopup(`<b>${dest.name}</b><br>${dest.tourCount} Managed Tours`)
          .on('click', () => {
             onViewDestination(dest.id);
          });
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [onViewDestination]);

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500">
      <div className="bg-slate-900 py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Explore Destinations</h1>
          <div className="max-w-2xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search for a city or park in Rwanda..." 
              className="w-full px-6 py-4 rounded-full border-none focus:ring-2 focus:ring-emerald-500 shadow-xl text-slate-900"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="absolute right-6 top-4 text-2xl">🔍</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white p-4 rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
          <div id="destination-map"></div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((dest) => (
            <div 
              key={dest.id} 
              onClick={() => onViewDestination(dest.id)}
              className="group relative overflow-hidden rounded-3xl h-[400px] shadow-lg cursor-pointer transition-transform hover:-translate-y-2"
            >
              <img 
                src={dest.image} 
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                <div className="flex justify-between items-end gap-4">
                  <div className="flex-grow">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">{dest.name}</h3>
                    <p className="text-sm text-slate-200 mb-4 line-clamp-2 leading-relaxed opacity-90">
                      {dest.description}
                    </p>
                    <p className="text-emerald-400 font-medium bg-emerald-950/40 px-3 py-1 rounded-full inline-block text-sm">
                      {dest.tourCount} Managed Tours
                    </p>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewDestination(dest.id);
                    }}
                    className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-emerald-600 transition-colors shrink-0"
                    title="View More Information"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-xl">No destinations found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;
