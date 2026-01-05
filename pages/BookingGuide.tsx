
import React from 'react';

const BookingGuide: React.FC = () => {
  const steps = [
    { title: 'Choose Your Adventure', desc: 'Browse our curated tours in Volcanoes, Nyungwe, or Akagera.' },
    { title: 'Check Availability', desc: 'Select your preferred dates. Note that gorilla permits are limited and book up fast!' },
    { title: 'Secure Payment', desc: 'Use our secure portal to pay via credit card or bank transfer.' },
    { title: 'Receive Confirmation', desc: 'Get your digital vouchers and detailed packing list via email.' },
    { title: 'Meet Your Guide', desc: 'Join your local expert at the designated meeting point in Rwanda.' },
  ];

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-12 text-center">How to Book Your Experience</h1>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-emerald-100 hidden md:block"></div>
            
            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-8 relative z-10">
                  <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-2xl shadow-xl">
                    {i + 1}
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex-grow hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold mb-2 text-slate-900">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 p-10 bg-slate-900 rounded-[3rem] text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to start?</h2>
            <p className="text-slate-400 mb-8">Plan your journey to the heart of Africa today.</p>
            <button className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-700 transition-all">Explore Tours</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingGuide;
