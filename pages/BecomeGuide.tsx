
import React from 'react';

const BecomeGuide: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Become a Guide in the Land of a Thousand Hills</h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We are looking for passionate, knowledgeable, and local storytellers to join our elite team. If you have deep roots in Rwanda and a heart for conservation, we want to hear from you.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center shrink-0">
                  <span className="text-emerald-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Training & Certification</h3>
                  <p className="text-slate-500 text-sm">Receive world-class training in wildlife protection and guest relations.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center shrink-0">
                  <span className="text-emerald-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Flexible Scheduling</h3>
                  <p className="text-slate-500 text-sm">Pick the tours and times that work best for your lifestyle.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center shrink-0">
                  <span className="text-emerald-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Global Exposure</h3>
                  <p className="text-slate-500 text-sm">Connect with travelers from every corner of the globe.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100">
            <h2 className="text-2xl font-bold mb-8 text-slate-900">Apply Now</h2>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Application Received!'); }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-500">First Name</label>
                  <input type="text" className="w-full bg-slate-50 p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900" placeholder="Jean" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-500">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900" placeholder="Habimana" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-500">Specialty</label>
                <select className="w-full bg-slate-50 p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900">
                  <option>Gorilla Trekking</option>
                  <option>Bird Watching</option>
                  <option>Cultural Heritage</option>
                  <option>City Tours (Kigali)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-500">Why do you want to join us?</label>
                <textarea rows={4} className="w-full bg-slate-50 p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 resize-none" placeholder="Tell us about your passion..."></textarea>
              </div>
              <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg transform hover:scale-[1.01]">Submit Application</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeGuide;
