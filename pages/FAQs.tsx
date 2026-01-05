
import React, { useState } from 'react';

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-emerald-600' : 'text-slate-800'}`}>{q}</span>
        <span className={`text-2xl transition-transform ${isOpen ? 'rotate-45 text-emerald-600' : 'text-slate-300'}`}>+</span>
      </button>
      {isOpen && <div className="pb-8 text-slate-600 leading-relaxed animate-in slide-in-from-top-2 duration-300">{a}</div>}
    </div>
  );
};

const FAQs: React.FC = () => {
  const rwandaFaqs = [
    { q: "How much does a Gorilla permit cost?", a: "The official price for a mountain gorilla trekking permit in Volcanoes National Park is $1,500 USD per person. A portion of this goes directly to conservation and local community development." },
    { q: "What is the best time to visit Rwanda?", a: "The best time to visit is during the dry seasons from June to September and December to February. This is especially true for gorilla trekking as the forest trails are less muddy." },
    { q: "Do I need a visa to enter Rwanda?", a: "Citizens of all countries are granted a 30-day visa on arrival. Citizens of many African and Commonwealth countries get this for free, while others pay a small fee. Always check the official migration portal before travel." },
    { q: "Is Rwanda safe for tourists?", a: "Rwanda is consistently ranked as one of the safest countries in the world. Its capital, Kigali, is known for its cleanliness, safety, and friendly atmosphere." },
    { q: "What should I pack for trekking?", a: "Lightweight hiking boots with good grip, long trousers and long-sleeved shirts to protect from stinging nettles, a waterproof jacket, and gardening gloves for gripping forest vegetation." },
  ];

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-slate-500 text-center mb-16">Everything you need to know about your Rwandan adventure.</p>
        
        <div className="bg-white rounded-[3rem] shadow-xl p-8 md:p-12 border border-slate-50">
          {rwandaFaqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
