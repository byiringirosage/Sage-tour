
import React from 'react';

const HelpCenter: React.FC = () => {
  const categories = [
    { title: 'Bookings & Payments', icon: '💳', desc: 'Manage your reservations and billing.' },
    { title: 'Tours & Activities', icon: '🛶', desc: 'Details on itineraries and park rules.' },
    { title: 'Visas & Travel Docs', icon: '🛂', desc: 'Entry requirements for Rwanda.' },
    { title: 'Safety & Insurance', icon: '🛡️', desc: 'Health guidelines and eco-safety.' },
    { title: 'Account Settings', icon: '⚙️', desc: 'Manage your profile and preferences.' },
    { title: 'Guide Inquiries', icon: '🤝', desc: 'Information for our professional partners.' },
  ];

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500">
      <div className="bg-slate-900 py-20 text-center text-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl font-bold mb-6">How can we help?</h1>
          <div className="relative">
            <input type="text" className="w-full py-4 px-8 rounded-full text-slate-900 shadow-2xl focus:ring-2 focus:ring-emerald-500" placeholder="Search for answers..." />
            <span className="absolute right-6 top-4 text-slate-400 text-xl">🔍</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group">
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{cat.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{cat.title}</h3>
              <p className="text-slate-500 leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-emerald-50 rounded-[3rem] text-center">
          <h2 className="text-2xl font-bold mb-4">Still need assistance?</h2>
          <p className="text-slate-600 mb-8">Our support team is available 24/7 for urgent tour inquiries.</p>
          <button className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-emerald-700 transition-all">Contact Support</button>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
