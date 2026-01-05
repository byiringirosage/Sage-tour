
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24 animate-in fade-in duration-500">
      {/* Page Header */}
      <section className="bg-emerald-600 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Mission for Rwanda</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Promoting sustainable ecotourism in the heart of Africa, ensuring conservation and community growth go hand in hand.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Conservation Meets Adventure</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Sage Tour Rwanda was established to bridge the gap between global travelers and the untouched beauty of Rwanda. We believe that tourism should be a force for good. By focusing on low-impact, high-value travel, we contribute to the protection of Rwanda's unique wildlife and the prosperity of its people.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <h4 className="font-bold text-emerald-600 text-3xl mb-1">15k+</h4>
                  <p className="text-slate-500 text-sm">Gorilla Permits Managed</p>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-600 text-3xl mb-1">100%</h4>
                  <p className="text-slate-500 text-sm">Rwandan Guides</p>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-600 text-3xl mb-1">3</h4>
                  <p className="text-slate-500 text-sm">National Parks Served</p>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-600 text-3xl mb-1">5.0</h4>
                  <p className="text-slate-500 text-sm">Sustainability Rating</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&q=80&w=800" alt="Mountain Gorilla" className="rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block">
                 <p className="text-emerald-600 font-bold text-lg italic">"A leader in responsible tourism."</p>
                 <p className="text-slate-400 text-xs mt-1">- Rwanda Tourism Board</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-16">Our Rwandan Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="text-4xl mb-6 text-center">🦍</div>
              <h3 className="text-xl font-bold mb-4">Wildlife First</h3>
              <p className="text-slate-600">Our tours prioritize the safety and habitat of Rwanda’s endangered species above all else.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="text-4xl mb-6 text-center">🤝</div>
              <h3 className="text-xl font-bold mb-4">Umuganda Spirit</h3>
              <p className="text-slate-600">We embody the spirit of community service, working with locals to build a better future together.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="text-4xl mb-6 text-center">🌄</div>
              <h3 className="text-xl font-bold mb-4">Sustainability</h3>
              <p className="text-slate-600">Preserving the 1000 hills for future generations through carbon-neutral travel options.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
