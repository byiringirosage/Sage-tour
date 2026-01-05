
import React from 'react';
import { POPULAR_DESTINATIONS, FEATURED_TOURS, TESTIMONIALS } from '../constants';

interface HomeProps {
  onNavigate: (page: string) => void;
  onViewTour: (id: string) => void;
  onViewDestination: (id: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onViewTour, onViewDestination }) => {
  return (
    <div id="home">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center hero-gradient" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&q=80&w=2000')` }}>
        <div className="container mx-auto px-4 text-center text-white space-y-8 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-in fade-in slide-in-from-bottom duration-1000">
            Visit Rwanda: The Land of a Thousand Hills
          </h1>
          <p className="text-lg md:text-xl text-slate-200 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            Experience world-class ecotourism, from the misty peaks of Volcanoes National Park to the serene shores of Lake Kivu. Your journey into the heart of Africa begins here.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            <button 
              onClick={() => onNavigate('tours')}
              className="w-full md:w-auto bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Book Your Gorilla Trek
            </button>
            <button 
              onClick={() => onNavigate('guides')}
              className="w-full md:w-auto bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Our Guides
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => {
          document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          <span className="text-white text-2xl">↓</span>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Discover Rwanda's Wonders</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
            <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
              Home to the endangered mountain gorillas and some of the richest biodiversity in the world. Explore our national treasures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {POPULAR_DESTINATIONS.slice(0, 6).map((dest) => (
              <div 
                key={dest.id} 
                onClick={() => onViewDestination(dest.id)} 
                className="group relative overflow-hidden rounded-2xl h-80 shadow-lg cursor-pointer"
              >
                <img 
                  src={dest.image} 
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{dest.name}</h3>
                  <p className="text-emerald-400 font-medium">{dest.tourCount} Eco-Tours</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">🌿</div>
              <h3 className="text-xl font-bold mb-3">Eco-Conscious</h3>
              <p className="text-slate-600 text-sm">We strictly follow conservation guidelines to protect our wildlife.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">🇷🇼</div>
              <h3 className="text-xl font-bold mb-3">Local Knowledge</h3>
              <p className="text-slate-600 text-sm">Every guide is a native Rwandan with passion for their homeland.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">🤝</div>
              <h3 className="text-xl font-bold mb-3">Community Impact</h3>
              <p className="text-slate-600 text-sm">10% of our revenue supports local conservation projects.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Secure Travel</h3>
              <p className="text-slate-600 text-sm">Safe, seamless, and fully managed travel logistics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section id="tours" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Rwandan Tours</h2>
              <div className="w-20 h-1 bg-emerald-600"></div>
              <p className="text-slate-600 mt-6 max-w-xl">
                The most authentic and breathtaking activities available in the Land of a Thousand Hills.
              </p>
            </div>
            <button 
              onClick={() => onNavigate('tours')}
              className="mt-8 md:mt-0 text-emerald-600 font-bold hover:underline flex items-center gap-2"
            >
              View All Tours <span>→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_TOURS.slice(0, 4).map((tour) => (
              <div 
                key={tour.id} 
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800">
                    {tour.duration}
                  </div>
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    ${tour.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs text-slate-500 mb-2">
                    <span>📍 {tour.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 min-h-[3.5rem]">{tour.title}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-1">
                      <span className="text-amber-500">★</span>
                      <span className="font-bold text-sm text-slate-800">{tour.rating}</span>
                      <span className="text-slate-400 text-xs">({tour.reviews})</span>
                    </div>
                    <button 
                      onClick={() => onViewTour(tour.id)}
                      className="text-emerald-600 text-sm font-bold border-b-2 border-emerald-600/0 hover:border-emerald-600 transition-all"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Traveler Stories</h2>
             <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-800 p-8 rounded-3xl relative">
                <div className="text-emerald-500 text-5xl absolute -top-4 -left-2 opacity-20 font-serif">"</div>
                <p className="text-slate-300 italic mb-8 relative z-10">{t.content}</p>
                <div className="flex items-center space-x-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-emerald-600" />
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-emerald-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-600 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => <div key={i} className="border-r border-white"></div>)}
          </div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Experience the Magic of Rwanda</h2>
          <p className="text-emerald-50 text-lg mb-10 max-w-2xl mx-auto">
            Ready to explore the Land of a Thousand Hills? Join us for an ethical, sustainable, and unforgettable adventure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => onNavigate('tours')}
              className="bg-white text-emerald-700 px-10 py-4 rounded-full font-bold shadow-xl hover:bg-slate-100 transition-all transform hover:scale-105"
            >
              See All Tours
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-emerald-800 text-white border border-emerald-400 px-10 py-4 rounded-full font-bold shadow-xl hover:bg-emerald-900 transition-all transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
