
import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We will get back to you shortly.');
  };

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
            <p className="text-slate-600">Have questions about a tour? Need a custom itinerary? Our team is here to help.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-3xl">
                <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="text-emerald-600 text-xl">📞</span> Call Us
                </h3>
                <p className="text-slate-600 mb-2 font-medium">Customer Support</p>
                <p className="text-slate-900 font-bold">+1 (234) 567-890</p>
                <div className="mt-4 pt-4 border-t border-slate-200">
                   <p className="text-slate-500 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl">
                <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="text-emerald-600 text-xl">📧</span> Email Us
                </h3>
                <p className="text-slate-600 mb-2 font-medium">General Inquiries</p>
                <p className="text-slate-900 font-bold">hello@sagetour.com</p>
                <p className="text-slate-600 mt-4 mb-2 font-medium">Guide Partnerships</p>
                <p className="text-slate-900 font-bold">guides@sagetour.com</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" 
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" 
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all">
                    <option>Tour Information</option>
                    <option>Booking Issues</option>
                    <option>Partner Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea 
                    required 
                    rows={5} 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-emerald-700 transition-all transform hover:scale-[1.01]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
