
import React from 'react';

interface LegalPageProps {
  title: string;
  content: string;
}

const LegalPage: React.FC<LegalPageProps> = ({ title, content }) => {
  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-10">{title}</h1>
        <div className="bg-white rounded-[3rem] shadow-sm border border-slate-100 p-10 md:p-16 space-y-8 text-slate-600 leading-relaxed">
          <p className="font-bold text-slate-900 italic mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">1. Introduction</h2>
            <p>{content}</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">2. Respect for Wildlife</h2>
            <p>Our priority in Rwanda is the protection of the Mountain Gorillas and other wildlife. All guests must adhere to the 7-meter distance rule and follow guide instructions at all times.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">3. Cancellation Policy</h2>
            <p>Gorilla permits are non-refundable but can be rescheduled under specific circumstances defined by the Rwanda Development Board (RDB). Standard tour cancellations require a 30-day notice for a full refund.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">4. Community Support</h2>
            <p>By using this platform, you acknowledge that a portion of your fee directly supports Rwandan conservation and community projects through the Tourism Revenue Sharing Scheme.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
