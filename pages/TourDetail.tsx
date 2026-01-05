
import React, { useState } from 'react';
import { FEATURED_TOURS } from '../constants';

interface TourDetailProps {
  tourId: string | null;
  onBack: () => void;
}

const TourDetail: React.FC<TourDetailProps> = ({ tourId, onBack }) => {
  const [activeDay, setActiveDay] = useState(1);
  const tour = FEATURED_TOURS.find((t) => t.id === tourId);

  if (!tour) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-2xl font-bold">Tour not found</h2>
        <button onClick={onBack} className="mt-4 text-emerald-600 hover:underline">Go back to tours</button>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-20 animate-in fade-in duration-500">
      {/* Hero Header */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white bg-gradient-to-t from-black/80 to-transparent">
          <div className="container mx-auto">
             <button onClick={onBack} className="mb-6 flex items-center gap-2 hover:text-emerald-400 transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full w-fit">
                <span>←</span> Back to Tours
             </button>
             <h1 className="text-4xl md:text-6xl font-bold mb-4">{tour.title}</h1>
             <div className="flex flex-wrap items-center gap-6 text-sm md:text-base">
                <span className="bg-emerald-600 px-4 py-1 rounded-full font-bold shadow-lg">${tour.price}</span>
                <span className="flex items-center gap-1"><span className="opacity-60 text-xs uppercase font-bold tracking-widest mr-1">Loc</span> {tour.location}</span>
                <span className="flex items-center gap-1"><span className="opacity-60 text-xs uppercase font-bold tracking-widest mr-1">Dur</span> {tour.duration}</span>
                <span className="flex items-center gap-1 text-amber-400 font-bold">★ {tour.rating} <span className="text-white/60 font-normal">({tour.reviews} reviews)</span></span>
             </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Experience Overview</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Immerse yourself in the breathtaking landscapes of Rwanda with the {tour.title}. 
                This comprehensive journey is designed for travelers who seek authenticity, sustainable adventure, and 
                unforgettable encounters with the flora and fauna of the Land of a Thousand Hills. Our multi-day itineraries 
                ensure you don't just visit, but truly experience the heart of each destination.
              </p>
            </section>

            <section>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900">Comprehensive Itinerary</h2>
                <div className="flex gap-2">
                  {tour.itinerary.map((plan) => (
                    <button
                      key={plan.day}
                      onClick={() => setActiveDay(plan.day)}
                      className={`w-10 h-10 rounded-full font-bold transition-all ${activeDay === plan.day ? 'bg-emerald-600 text-white shadow-lg' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
                    >
                      {plan.day}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                {tour.itinerary.map((plan) => (
                  <div 
                    key={plan.day} 
                    className={`transition-all duration-500 ${activeDay === plan.day ? 'opacity-100' : 'opacity-40 grayscale pointer-events-none hidden md:block'}`}
                  >
                    <div className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-lg">
                          0{plan.day}
                        </div>
                        <div className="w-0.5 h-full bg-slate-100 mt-4"></div>
                      </div>
                      <div className="pb-12 flex-grow">
                        <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">Day {plan.day}: {plan.title}</h3>
                        <p className="text-slate-500 mb-6 leading-relaxed italic border-l-2 border-emerald-500 pl-4 bg-emerald-50/30 py-2">
                          {plan.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {plan.activities.map((activity, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                              <span className="text-emerald-500 text-lg">✦</span>
                              <span className="text-slate-700 font-medium text-sm">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl">
              <h2 className="text-2xl font-bold mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Boutique Eco-Lodge Accommodation',
                  'Professional Multi-lingual Guide',
                  'Private 4x4 Ground Transport',
                  'All Park Entry & Conservation Fees',
                  'Organic Locally-Sourced Meals',
                  '24/7 Concierge Support'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-8 overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600"></div>
               <h3 className="text-2xl font-bold mb-6 text-slate-900">Secure Your Date</h3>
               <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-500 mb-2 block">Proposed Start Date</label>
                    <input 
                      type="date" 
                      className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 border border-slate-200 text-slate-900 font-medium" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-500 mb-2 block">Traveler Count</label>
                    <select className="w-full p-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 border border-slate-200 text-slate-900 font-medium appearance-none">
                      <option>1 Explorer</option>
                      <option>2 Explorers</option>
                      <option>3 Explorers</option>
                      <option>Group (4-8) - 10% Disc.</option>
                    </select>
                  </div>
                  <div className="pt-6 border-t border-slate-100">
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-slate-500">Package Base Price</span>
                       <span className="font-bold text-slate-900">${tour.price}</span>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                       <span className="text-slate-500">Conservation Contribution</span>
                       <span className="font-bold text-emerald-600">Included</span>
                    </div>
                    <div className="flex justify-between items-center text-xl font-bold text-slate-900 bg-slate-50 p-4 rounded-2xl">
                       <span>Total</span>
                       <span className="text-emerald-700">${tour.price}</span>
                    </div>
                  </div>
                  <button onClick={() => alert('Booking system integration coming soon!')} className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold shadow-xl hover:bg-emerald-700 transition-all transform hover:scale-[1.02] active:scale-95">
                    Request Booking
                  </button>
                  <div className="flex items-center justify-center gap-2 text-slate-400">
                     <span className="text-xs italic">Flexible Cancellation available</span>
                  </div>
               </div>
            </div>
            
            <div className="mt-8 bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
               <h4 className="font-bold text-emerald-900 mb-2">Need Customization?</h4>
               <p className="text-emerald-700 text-sm mb-4">Our experts can tailor this itinerary to your specific interests or pace.</p>
               <button className="text-emerald-600 font-bold text-sm hover:underline">Chat with an Expert →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
