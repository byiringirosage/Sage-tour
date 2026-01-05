
import React, { useState } from 'react';
import { GUIDES } from '../constants';

interface GuideDetailProps {
  guideId: string | null;
  onBack: () => void;
}

const GuideDetail: React.FC<GuideDetailProps> = ({ guideId, onBack }) => {
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [successState, setSuccessState] = useState<'request' | 'message' | null>(null);

  const guide = GUIDES.find(g => g.id === guideId);

  if (!guide) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Guide not found</h2>
        <button onClick={onBack} className="mt-4 text-emerald-600 hover:underline">Go back to guides</button>
      </div>
    );
  }

  const handleFormSubmit = (e: React.FormEvent, type: 'request' | 'message') => {
    e.preventDefault();
    setShowRequestModal(false);
    setShowMessageModal(false);
    setSuccessState(type);
    setTimeout(() => setSuccessState(null), 5000);
  };

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500 relative">
      <div className="container mx-auto px-4">
        <button onClick={onBack} className="mb-8 flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors font-medium">
          <span>←</span> Back to Guides
        </button>

        {/* Success Alert */}
        {successState && (
          <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[100] bg-emerald-600 text-white px-8 py-4 rounded-2xl shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="flex items-center gap-3">
              <span className="text-xl">✅</span>
              <p className="font-bold">
                {successState === 'request' 
                  ? 'Custom tour request sent to ' + guide.name + '!' 
                  : 'Message sent successfully!'}
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-8 text-center sticky top-24">
              <div className="relative mb-6 inline-block">
                <img 
                  src={guide.image} 
                  alt={guide.name} 
                  className="w-48 h-48 rounded-full object-cover border-8 border-emerald-50 shadow-lg mx-auto"
                />
                <div className="absolute bottom-2 right-2 bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center border-4 border-white font-bold shadow-md">
                  ★{guide.rating}
                </div>
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">{guide.name}</h1>
              <p className="text-emerald-600 font-bold mb-6">{guide.specialty}</p>
              
              <div className="flex justify-center gap-4 mb-8">
                <button aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-emerald-600 hover:text-white transition-all p-2.5">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
                </button>
                <button aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-emerald-600 hover:text-white transition-all p-2.5">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full"><path d="M12 12.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </button>
                <button aria-label="Twitter X" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-emerald-600 hover:text-white transition-all p-2.5">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.489h2.039L6.486 3.24H4.298l13.311 17.402z"/></svg>
                </button>
              </div>

              <button 
                onClick={() => setShowRequestModal(true)}
                className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-emerald-700 transition-all mb-4"
              >
                Request Custom Tour
              </button>
              <button 
                onClick={() => setShowMessageModal(true)}
                className="w-full bg-slate-100 text-slate-600 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Detailed Info */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Professional Biography</h2>
              <p className="text-slate-600 leading-relaxed text-lg italic bg-emerald-50/50 p-8 rounded-3xl border-l-4 border-emerald-500">
                "{guide.bio} My mission is to provide every traveler with a deep, respectful understanding of Rwanda's natural and cultural heritage."
              </p>
              <p className="text-slate-600 leading-relaxed text-lg mt-6">
                With years of practical experience in the field, I specialize in navigating Rwanda's diverse terrains—from the volcanic slopes of the north to the dense tropical canopies of the south. I am fully certified in first aid, wildlife behavior, and sustainable tourism practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Expertise & Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Bilingual (English, Kinyarwanda, French)',
                  'Expert Wildlife Tracking',
                  'First Aid & Wilderness Safety Certified',
                  'Local History & Cultural Narrative',
                  'Landscape Photography Assistance',
                  'Eco-Impact Management'
                ].map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <span className="text-emerald-600">✦</span>
                    <span className="text-slate-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What Travelers Say</h2>
              <div className="space-y-6">
                {[
                  { name: 'Sarah J.', comment: 'An absolute expert. We felt safe and learned so much more than we expected.', rating: 5 },
                  { name: 'Mark T.', comment: 'Incredible eye for spotting gorillas in the thick brush. Highly recommend!', rating: 5 }
                ].map((review, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold text-slate-900">{review.name}</span>
                      <div className="text-amber-500">{'★'.repeat(review.rating)}</div>
                    </div>
                    <p className="text-slate-600 italic">"{review.comment}"</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Request Custom Tour Modal */}
      {showRequestModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowRequestModal(false)}></div>
          <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300">
            <div className="bg-emerald-600 p-8 text-white">
              <h2 className="text-2xl font-bold">Request Custom Tour</h2>
              <p className="opacity-80">Tell {guide.name} what you're looking for.</p>
            </div>
            <form className="p-8 space-y-6" onSubmit={(e) => handleFormSubmit(e, 'request')}>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-500">Proposed Date</label>
                <input required type="date" className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-500">Group Size</label>
                <input required type="number" min="1" placeholder="Number of people" className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-500">Tour Details / Requirements</label>
                <textarea required rows={4} className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none resize-none" placeholder="E.g. I want to focus on bird photography in Nyungwe..."></textarea>
              </div>
              <div className="flex gap-4">
                <button type="button" onClick={() => setShowRequestModal(false)} className="flex-1 py-4 font-bold text-slate-400 hover:text-slate-600 transition-colors">Cancel</button>
                <button type="submit" className="flex-[2] bg-emerald-600 text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-emerald-700 transition-all">Submit Request</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Send Message Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowMessageModal(false)}></div>
          <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300">
            <div className="bg-slate-900 p-8 text-white">
              <h2 className="text-2xl font-bold">Message {guide.name}</h2>
              <p className="opacity-80">Ask a question or clarify details.</p>
            </div>
            <form className="p-8 space-y-6" onSubmit={(e) => handleFormSubmit(e, 'message')}>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-500">Subject</label>
                <input required type="text" placeholder="What is this about?" className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-500">Message Content</label>
                <textarea required rows={5} className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none resize-none" placeholder="Your message here..."></textarea>
              </div>
              <div className="flex gap-4">
                <button type="button" onClick={() => setShowMessageModal(false)} className="flex-1 py-4 font-bold text-slate-400 hover:text-slate-600 transition-colors">Cancel</button>
                <button type="submit" className="flex-[2] bg-slate-900 text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-emerald-600 transition-all">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuideDetail;
