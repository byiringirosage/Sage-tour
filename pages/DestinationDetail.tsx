
import React, { useState } from 'react';
import { POPULAR_DESTINATIONS, FEATURED_TOURS } from '../constants';

interface DestinationDetailProps {
  destinationId: string | null;
  onBack: () => void;
  onViewTour: (id: string) => void;
}

const DestinationDetail: React.FC<DestinationDetailProps> = ({ destinationId, onBack, onViewTour }) => {
  const [showGuideSuccess, setShowGuideSuccess] = useState(false);
  const destination = POPULAR_DESTINATIONS.find(d => d.id === destinationId);

  if (!destination) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Destination not found</h2>
        <button onClick={onBack} className="mt-4 text-emerald-600 hover:underline">Go back to destinations</button>
      </div>
    );
  }

  const handleGetGuide = () => {
    // Simulate a download or email trigger
    setShowGuideSuccess(true);
    setTimeout(() => setShowGuideSuccess(false), 5000);
  };

  // Find tours that roughly match this destination (by keyword matching the name or location)
  const relatedTours = FEATURED_TOURS.filter(t => 
    t.location.toLowerCase().includes(destination.name.split(' ')[0].toLowerCase()) ||
    t.title.toLowerCase().includes(destination.name.split(' ')[0].toLowerCase())
  );

  return (
    <div className="pt-20 pb-20 animate-in fade-in duration-500 relative">
      {/* Success Notification */}
      {showGuideSuccess && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[100] bg-emerald-600 text-white px-8 py-4 rounded-2xl shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex items-center gap-3">
            <span className="text-xl">📚</span>
            <div>
              <p className="font-bold">Guide Download Started!</p>
              <p className="text-xs opacity-90">The comprehensive guide for {destination.name} is being sent to your email.</p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Header */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div className="container mx-auto px-4">
            <button onClick={onBack} className="mb-6 inline-flex items-center gap-2 hover:text-emerald-400 transition-colors bg-black/20 backdrop-blur-md px-4 py-2 rounded-full">
              <span>←</span> Back to Destinations
            </button>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">{destination.name}</h1>
            <p className="text-xl md:text-2xl text-slate-100 max-w-2xl mx-auto font-medium">
              Discover the beauty of Rwanda's natural treasures.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Information Section */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b-2 border-emerald-500 pb-2 inline-block">About {destination.name}</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {destination.description}
              </p>
              <p className="text-slate-600 leading-relaxed text-lg mt-4">
                Visitors to {destination.name} are treated to some of the most spectacular landscapes in Africa. 
                Whether you're looking for high-altitude adventure, peaceful lakeside retreats, or immersive 
                cultural encounters, this destination offers a profound connection to the heart of Rwanda.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Available Tours in this Region</h2>
              {relatedTours.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedTours.map((tour) => (
                    <div 
                      key={tour.id} 
                      className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 hover:shadow-2xl transition-all duration-300 flex flex-col group"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img src={tour.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={tour.title} />
                        <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                          ${tour.price}
                        </div>
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">{tour.title}</h3>
                        <p className="text-slate-500 text-sm mb-4">📍 {tour.location} • ⏱️ {tour.duration}</p>
                        <button 
                          onClick={() => onViewTour(tour.id)}
                          className="mt-auto w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-emerald-600 transition-colors shadow-sm"
                        >
                          Book & Read More
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 bg-slate-50 rounded-3xl text-center">
                  <p className="text-slate-500">We currently have no scheduled group tours for this specific destination, but we can arrange a custom private tour for you!</p>
                  <button className="mt-4 text-emerald-600 font-bold hover:underline">Inquire for Private Tour</button>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar / Quick Facts */}
          <div className="lg:col-span-1">
            <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 shadow-2xl sticky top-24">
              <h3 className="text-2xl font-bold mb-8 text-emerald-400">Region Facts</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <h4 className="font-bold text-slate-300 uppercase text-xs tracking-widest mb-1">Province</h4>
                    <p className="font-medium">Northern & Western Districts</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl">🌡️</span>
                  <div>
                    <h4 className="font-bold text-slate-300 uppercase text-xs tracking-widest mb-1">Climate</h4>
                    <p className="font-medium">Mild Tropical (15°C - 27°C)</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl">🚗</span>
                  <div>
                    <h4 className="font-bold text-slate-300 uppercase text-xs tracking-widest mb-1">Access</h4>
                    <p className="font-medium">2.5 hours drive from Kigali</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl">🗓️</span>
                  <div>
                    <h4 className="font-bold text-slate-300 uppercase text-xs tracking-widest mb-1">Best Visit</h4>
                    <p className="font-medium">June - September (Dry Season)</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-12 pt-12 border-t border-slate-800">
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Plan your visit with Sage Tour to ensure you get the necessary permits and professional guidance.
                </p>
                <button 
                  onClick={handleGetGuide}
                  className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg active:scale-95 transform duration-150"
                >
                  Get Travel Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
