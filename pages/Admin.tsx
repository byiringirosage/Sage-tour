
import React, { useState, useRef } from 'react';
import { POPULAR_DESTINATIONS, FEATURED_TOURS, INITIAL_BOOKINGS, INITIAL_GUIDE_APPLICATIONS, GUIDES } from '../constants';
import { Tour, Destination, Booking, GuideApplication, BookingStatus, DayPlan } from '../types';

interface AdminProps {
  onLogout: () => void;
}

type ModalTab = 'basic' | 'logistics' | 'itinerary' | 'assets' | 'narrative' | 'strategic';

const Admin: React.FC<AdminProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'bookings' | 'tours' | 'destinations' | 'guides'>('overview');
  const [bookings, setBookings] = useState<Booking[]>(INITIAL_BOOKINGS);
  const [applications, setApplications] = useState<GuideApplication[]>(INITIAL_GUIDE_APPLICATIONS);
  
  // Inventory States
  const [tours, setTours] = useState<Tour[]>(FEATURED_TOURS);
  const [destinations, setDestinations] = useState<Destination[]>(POPULAR_DESTINATIONS.map(d => ({
    ...d,
    shortDescription: d.description.substring(0, 100) + '...',
    highlights: ['Breathtaking Views', 'Cultural Heritage', 'Wildlife Enclave'],
    price: 450,
    relatedTourIds: FEATURED_TOURS.slice(0, 2).map(t => t.id),
    climate: 'Tropical Savanna',
    bestTimeToVisit: 'June to September'
  })));

  // Modal Control
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [isDestModalOpen, setIsDestModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<ModalTab>('basic');
  
  // Editing States
  const [editingTour, setEditingTour] = useState<Tour | null>(null);
  const [editingDest, setEditingDest] = useState<Destination | null>(null);

  const mainImageInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);

  // Form States
  const [formTour, setFormTour] = useState<Partial<Tour>>({});
  const [formDest, setFormDest] = useState<Partial<Destination>>({});

  const totalRevenue = bookings.filter(b => b.status === 'Confirmed').reduce((acc, curr) => acc + curr.totalPrice, 0);
  const pendingBookingsCount = bookings.filter(b => b.status === 'Pending').length;

  const monthlyRevenue = [5400, 6200, 5800, 7900, 9200, 8100, 10500];
  const maxRev = Math.max(...monthlyRevenue);

  const updateBooking = (id: string, status: BookingStatus) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b));
  };

  const approveGuide = (id: string) => {
    setApplications(prev => prev.map(a => a.id === id ? { ...a, status: 'Approved' } : a));
  };

  // --- TOUR OPERATIONS ---
  const handleOpenTourModal = (tour?: Tour) => {
    if (tour) {
      setEditingTour(tour);
      setFormTour({ ...tour });
    } else {
      setEditingTour(null);
      setFormTour({
        title: '',
        location: '',
        price: 0,
        image: '',
        duration: '3 Days',
        included: ['Professional Guide', 'Park Entry', 'Ground Transport'],
        excluded: ['Personal Insurance', 'Tips', 'Flights'],
        destinationIds: [],
        itinerary: [{ day: 1, title: '', description: '', activities: [], meals: [], accommodation: '' }],
        gallery: []
      });
    }
    setModalTab('basic');
    setIsTourModalOpen(true);
  };

  const handleSaveTour = (e: React.FormEvent) => {
    e.preventDefault();
    const finalTour: Tour = {
      ...(formTour as Tour),
      id: editingTour ? editingTour.id : `T-${Date.now()}`,
      rating: editingTour ? editingTour.rating : 5.0,
      reviews: editingTour ? editingTour.reviews : 0,
    };
    setTours(prev => editingTour ? prev.map(t => t.id === editingTour.id ? finalTour : t) : [finalTour, ...prev]);
    setIsTourModalOpen(false);
  };

  // --- DESTINATION (REGION) OPERATIONS ---
  const handleOpenDestModal = (dest?: Destination) => {
    if (dest) {
      setEditingDest(dest);
      setFormDest({ ...dest });
    } else {
      setEditingDest(null);
      setFormDest({
        name: '',
        shortDescription: '',
        description: '',
        price: 0,
        lat: -1.9441,
        lng: 30.0619,
        highlights: [],
        relatedTourIds: [],
        gallery: [],
        climate: 'Tropical',
        bestTimeToVisit: 'Year-round'
      });
    }
    setModalTab('basic');
    setIsDestModalOpen(true);
  };

  const handleSaveDest = (e: React.FormEvent) => {
    e.preventDefault();
    const finalDest: Destination = {
      ...(formDest as Destination),
      id: editingDest ? editingDest.id : `D-${Date.now()}`,
      tourCount: editingDest ? editingDest.tourCount : 0
    };
    setDestinations(prev => editingDest ? prev.map(d => d.id === editingDest.id ? finalDest : d) : [finalDest, ...prev]);
    setIsDestModalOpen(false);
  };

  const handleDeleteItem = (id: string, type: 'tour' | 'dest') => {
    if (confirm(`Are you sure you want to delete this ${type === 'tour' ? 'package' : 'region'}?`)) {
      if (type === 'tour') setTours(prev => prev.filter(t => t.id !== id));
      else setDestinations(prev => prev.filter(d => d.id !== id));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, target: 'image' | 'gallery', type: 'tour' | 'dest') => {
    const files = e.target.files;
    if (!files) return;
    const fileArray = Array.from(files) as File[];
    const promises = fileArray.map(file => new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(file);
    }));

    Promise.all(promises).then(base64Strings => {
      if (type === 'tour') {
        if (target === 'image') setFormTour(prev => ({ ...prev, image: base64Strings[0] }));
        else setFormTour(prev => ({ ...prev, gallery: [...(prev.gallery || []), ...base64Strings] }));
      } else {
        if (target === 'image') setFormDest(prev => ({ ...prev, image: base64Strings[0] }));
        else setFormDest(prev => ({ ...prev, gallery: [...(prev.gallery || []), ...base64Strings] }));
      }
    });
  };

  const updateItineraryDay = (index: number, field: keyof DayPlan, value: any) => {
    const newItinerary = [...(formTour.itinerary || [])];
    newItinerary[index] = { ...newItinerary[index], [field]: value };
    setFormTour({ ...formTour, itinerary: newItinerary });
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-300 overflow-hidden font-sans selection:bg-emerald-500/30">
      {/* COMMAND CENTER SIDEBAR */}
      <aside className="w-72 bg-slate-900/50 border-r border-slate-800/50 flex flex-col z-20">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-slate-950 font-black text-2xl shadow-lg shadow-emerald-500/20">S</div>
            <div>
              <h1 className="text-white font-black tracking-tighter text-lg leading-tight">Sage Tour</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-500/80">Command Center</p>
            </div>
          </div>
          <nav className="space-y-2">
            {[
              { id: 'overview', label: 'Dashboard', icon: '📊' },
              { id: 'bookings', label: 'Bookings', icon: '📅', count: pendingBookingsCount },
              { id: 'tours', label: 'Tour Packages', icon: '🎒' },
              { id: 'destinations', label: 'Regions', icon: '📍' },
              { id: 'guides', label: 'Guides', icon: '🧑‍💼', count: applications.filter(a => a.status === 'Pending').length },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-300 group ${activeTab === item.id ? 'bg-emerald-500 text-slate-950 shadow-xl shadow-emerald-500/10' : 'hover:bg-slate-800 text-slate-400 hover:text-white'}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-bold text-sm tracking-tight">{item.label}</span>
                </div>
                {item.count ? <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${activeTab === item.id ? 'bg-slate-950 text-emerald-500' : 'bg-slate-800 text-slate-500'}`}>{item.count}</span> : null}
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-8 border-t border-slate-800/50 bg-slate-900/20">
          <button onClick={onLogout} className="w-full flex items-center justify-center gap-2 py-3.5 bg-slate-800 hover:bg-red-500/10 hover:text-red-500 text-slate-400 rounded-2xl transition-all font-black text-xs border border-slate-700/50 uppercase tracking-widest">
            <span>🚪</span> Terminate Session
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow overflow-y-auto relative scroll-smooth bg-slate-950">
        <header className="sticky top-0 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 px-12 py-8 flex justify-between items-center z-10">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">
              <span>Sage Tour</span> / <span className="text-emerald-500">{activeTab}</span>
            </div>
            <h2 className="text-3xl font-black text-white capitalize tracking-tighter">System {activeTab}</h2>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => activeTab === 'tours' ? handleOpenTourModal() : activeTab === 'destinations' ? handleOpenDestModal() : null}
              className="bg-emerald-500 text-slate-950 px-6 py-3 rounded-2xl font-black text-xs shadow-xl shadow-emerald-500/20 hover:bg-emerald-400 transition-all uppercase tracking-widest"
            >
              + New {activeTab === 'tours' ? 'Package' : activeTab === 'destinations' ? 'Region' : 'Record'}
            </button>
          </div>
        </header>

        <div className="p-12 max-w-[1600px] mx-auto space-y-12">
          {activeTab === 'overview' && (
            <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { label: 'Confirmed Yield', value: `$${totalRevenue.toLocaleString()}`, trend: '+14.2%', color: 'emerald', icon: '💰' },
                  { label: 'Pending Queue', value: pendingBookingsCount, trend: 'Critical', color: 'blue', icon: '🎟️' },
                  { label: 'Conversion Lift', value: '12.8%', trend: '+1.4%', color: 'amber', icon: '📈' },
                  { label: 'Active Guides', value: GUIDES.length, trend: 'Stable', color: 'purple', icon: '🧑‍💼' },
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-900/40 p-8 rounded-[2.5rem] border border-slate-800/50 shadow-2xl group hover:border-emerald-500/30 transition-all duration-500">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">{stat.icon}</div>
                      <span className="text-[10px] font-black px-2 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">{stat.trend}</span>
                    </div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">{stat.label}</p>
                    <h3 className="text-4xl font-black text-white tracking-tighter">{stat.value}</h3>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 bg-slate-900/40 p-10 rounded-[3rem] border border-slate-800/50 shadow-2xl">
                   <h3 className="text-xl font-black text-white tracking-tight mb-8">Financial Analytics</h3>
                   <div className="h-64 w-full relative">
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path 
                        d={`M 0,100 ${monthlyRevenue.map((v, i) => `L ${(i/6)*100},${100 - (v/maxRev)*80}`).join(' ')} L 100,100 Z`} 
                        fill="rgba(16,185,129,0.05)"
                      />
                      <path 
                        d={`M 0,${100 - (monthlyRevenue[0]/maxRev)*80} ${monthlyRevenue.map((v, i) => `L ${(i/6)*100},${100 - (v/maxRev)*80}`).join(' ')}`} 
                        fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                      />
                    </svg>
                  </div>
                  <div className="flex justify-between mt-8 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] pt-6 border-t border-slate-800/50">
                    <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span>
                  </div>
                </div>
                <div className="bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col shadow-2xl relative overflow-hidden group">
                  <h3 className="text-xl font-black mb-8 tracking-tight">System Status</h3>
                  <div className="flex-grow flex flex-col justify-center gap-6">
                    {['Network: Global', 'API: v2.5.4', 'Latency: 24ms'].map((s, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'bookings' && (
             <div className="animate-in fade-in duration-700">
                <div className="bg-slate-900/40 rounded-[3rem] border border-slate-800/50 shadow-2xl overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-slate-900/50 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                      <tr>
                        <th className="px-10 py-6">ID</th>
                        <th className="px-10 py-6">Client</th>
                        <th className="px-10 py-6">Package</th>
                        <th className="px-10 py-6">Yield</th>
                        <th className="px-10 py-6">Status</th>
                        <th className="px-10 py-6 text-right">Authorize</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/50">
                      {bookings.map((b) => (
                        <tr key={b.id} className="text-sm group hover:bg-slate-800/30 transition-colors">
                          <td className="px-10 py-7 font-mono text-[10px] text-slate-600">#{b.id}</td>
                          <td className="px-10 py-7 font-black text-white">{b.customerName}</td>
                          <td className="px-10 py-7 text-slate-400 font-bold uppercase text-xs">{b.tourTitle}</td>
                          <td className="px-10 py-7 font-black text-emerald-500">${b.totalPrice}</td>
                          <td className="px-10 py-7">
                             <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${b.status === 'Confirmed' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-800 text-slate-500'}`}>
                               {b.status}
                             </div>
                          </td>
                          <td className="px-10 py-7 text-right">
                             {b.status === 'Pending' && (
                               <div className="flex justify-end gap-3">
                                <button onClick={() => updateBooking(b.id, 'Confirmed')} className="px-4 py-2 bg-emerald-500 text-slate-950 rounded-xl font-black text-[10px] uppercase shadow-lg hover:bg-emerald-400 transition-all">Grant</button>
                                <button onClick={() => updateBooking(b.id, 'Rejected')} className="px-4 py-2 bg-slate-800 text-slate-400 rounded-xl font-black text-[10px] uppercase border border-slate-700 hover:text-red-500 hover:border-red-500/30">Deny</button>
                               </div>
                             )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
             </div>
          )}

          {activeTab === 'tours' && (
             <div className="animate-in fade-in duration-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {tours.map(tour => (
                  <div key={tour.id} className="bg-slate-900/40 rounded-[3rem] overflow-hidden border border-slate-800/50 shadow-2xl group hover:border-emerald-500/50 transition-all duration-500">
                    <div className="h-56 relative overflow-hidden">
                      <img src={tour.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100" />
                      <div className="absolute top-6 left-6 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-black text-white border border-slate-800">${tour.price}</div>
                    </div>
                    <div className="p-10">
                      <h4 className="text-2xl font-black text-white mb-4 tracking-tighter leading-tight">{tour.title}</h4>
                      <div className="flex gap-4">
                        <button onClick={() => handleOpenTourModal(tour)} className="flex-grow py-4 bg-slate-800 text-slate-300 rounded-2xl font-black text-[10px] uppercase tracking-widest border border-slate-700 hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 transition-all">Configure</button>
                        <button onClick={() => handleDeleteItem(tour.id, 'tour')} className="px-6 bg-slate-900 text-red-500 rounded-2xl border border-slate-800 hover:bg-red-500/10 transition-all">🗑️</button>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          )}

          {activeTab === 'destinations' && (
             <div className="animate-in fade-in duration-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {destinations.map(dest => (
                  <div key={dest.id} className="bg-slate-900/40 rounded-[3rem] overflow-hidden border border-slate-800/50 shadow-2xl group hover:border-emerald-500/50 transition-all duration-500">
                    <div className="h-56 relative overflow-hidden">
                      <img src={dest.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100" />
                      <div className="absolute top-6 left-6 bg-emerald-500 text-slate-950 px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest">Base: ${dest.price}</div>
                    </div>
                    <div className="p-10">
                      <h4 className="text-2xl font-black text-white mb-2 tracking-tighter leading-tight">{dest.name}</h4>
                      <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8">{dest.tourCount} Active Tours Linked</p>
                      <div className="flex gap-4">
                        <button onClick={() => handleOpenDestModal(dest)} className="flex-grow py-4 bg-slate-800 text-slate-300 rounded-2xl font-black text-[10px] uppercase tracking-widest border border-slate-700 hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 transition-all">Configure</button>
                        <button onClick={() => handleDeleteItem(dest.id, 'dest')} className="px-6 bg-slate-900 text-red-500 rounded-2xl border border-slate-800 hover:bg-red-500/10 transition-all">🗑️</button>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          )}

          {activeTab === 'guides' && (
            <div className="animate-in fade-in duration-700 space-y-8">
               {applications.map(app => (
                 <div key={app.id} className="bg-slate-900/40 p-12 rounded-[3.5rem] border border-slate-800/50 shadow-2xl flex items-center gap-12">
                    <div className="w-24 h-24 bg-slate-800 rounded-3xl flex items-center justify-center text-4xl shadow-inner border border-slate-700">👤</div>
                    <div className="flex-grow">
                       <h4 className="text-2xl font-black text-white tracking-tight mb-2">{app.firstName} {app.lastName}</h4>
                       <p className="text-emerald-500 font-black text-xs uppercase tracking-widest">{app.specialty}</p>
                    </div>
                    {app.status === 'Pending' && (
                      <button onClick={() => approveGuide(app.id)} className="bg-emerald-500 text-slate-950 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-emerald-400 transition-all">Grant Authorization</button>
                    )}
                 </div>
               ))}
            </div>
          )}
        </div>
      </main>

      {/* TOUR PACKAGE MODAL */}
      {isTourModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => setIsTourModalOpen(false)}></div>
          <div className="relative bg-slate-900 border border-slate-800 w-full max-w-5xl rounded-[3.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300 h-[85vh] flex flex-col">
            <div className="bg-emerald-500 p-8 flex justify-between items-center shrink-0">
              <div>
                <h2 className="text-3xl font-black tracking-tighter text-slate-950">{editingTour ? 'Configure Package' : 'Register Package'}</h2>
                <p className="text-[10px] uppercase tracking-widest font-black text-slate-950/60 mt-1">Touring Resource Hub • {modalTab.toUpperCase()}</p>
              </div>
              <div className="flex bg-slate-950/20 p-1.5 rounded-2xl gap-1">
                {(['basic', 'logistics', 'itinerary', 'assets'] as ModalTab[]).map(tab => (
                  <button key={tab} onClick={() => setModalTab(tab)} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${modalTab === tab ? 'bg-slate-950 text-emerald-500 shadow-xl' : 'text-slate-950 hover:bg-white/10'}`}>{tab}</button>
                ))}
              </div>
            </div>
            <form className="flex-grow overflow-y-auto p-12 space-y-12" onSubmit={handleSaveTour}>
              {modalTab === 'basic' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Asset Name</label>
                      <input required type="text" value={formTour.title} onChange={(e) => setFormTour({...formTour, title: e.target.value})} className="w-full p-5 bg-slate-950 rounded-2xl border border-slate-800 outline-none text-white font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Primary Hub</label>
                      <input required type="text" value={formTour.location} onChange={(e) => setFormTour({...formTour, location: e.target.value})} className="w-full p-5 bg-slate-950 rounded-2xl border border-slate-800 outline-none text-white font-bold" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Pricing Yield ($)</label>
                      <input required type="number" value={formTour.price} onChange={(e) => setFormTour({...formTour, price: parseFloat(e.target.value)})} className="w-full p-5 bg-slate-950 rounded-2xl border border-slate-800 outline-none text-white font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Duration Profile</label>
                      <input required type="text" value={formTour.duration} onChange={(e) => setFormTour({...formTour, duration: e.target.value})} className="w-full p-5 bg-slate-950 rounded-2xl border border-slate-800 outline-none text-white font-bold" />
                    </div>
                  </div>
                </div>
              )}
              {modalTab === 'logistics' && (
                <div className="space-y-10 animate-in fade-in duration-300">
                  <div className="grid grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Inclusions (Managed Resource)</label>
                      <textarea className="w-full h-40 p-5 bg-slate-950 rounded-2xl border border-slate-800 outline-none text-white font-bold resize-none" value={formTour.included?.join('\n')} onChange={(e) => setFormTour({...formTour, included: e.target.value.split('\n')})} />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Exclusions (External Liability)</label>
                      <textarea className="w-full h-40 p-5 bg-slate-950 rounded-2xl border border-slate-800 outline-none text-white font-bold resize-none" value={formTour.excluded?.join('\n')} onChange={(e) => setFormTour({...formTour, excluded: e.target.value.split('\n')})} />
                    </div>
                  </div>
                </div>
              )}
              {modalTab === 'itinerary' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  {(formTour.itinerary || []).map((day, idx) => (
                    <div key={idx} className="bg-slate-950 p-8 rounded-[2.5rem] border border-slate-800 relative group">
                      <div className="absolute -top-4 -left-4 w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-slate-950 font-black text-xs shadow-xl">{day.day}</div>
                      <div className="grid grid-cols-2 gap-8 mb-6">
                        <input placeholder="Strategic Focus (Title)" className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-white font-bold text-sm outline-none" value={day.title} onChange={(e) => updateItineraryDay(idx, 'title', e.target.value)} />
                        <input placeholder="Accommodation Site" className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-white font-bold text-sm outline-none" value={day.accommodation} onChange={(e) => updateItineraryDay(idx, 'accommodation', e.target.value)} />
                      </div>
                      <textarea placeholder="Operational Narrative (Description)" className="w-full h-24 bg-slate-900 p-4 rounded-xl border border-slate-800 text-slate-300 font-medium text-xs outline-none mb-6 resize-none" value={day.description} onChange={(e) => updateItineraryDay(idx, 'description', e.target.value)} />
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase text-slate-700 block">Activities (Line Separated)</label>
                        <textarea className="w-full h-24 bg-slate-900 p-4 rounded-xl border border-slate-800 text-slate-300 text-[11px] outline-none" value={day.activities.join('\n')} onChange={(e) => updateItineraryDay(idx, 'activities', e.target.value.split('\n'))} />
                      </div>
                    </div>
                  ))}
                  <button type="button" onClick={() => setFormTour({...formTour, itinerary: [...(formTour.itinerary || []), { day: (formTour.itinerary?.length || 0) + 1, title: '', description: '', activities: [] }]})} className="w-full py-4 border-2 border-dashed border-slate-800 rounded-2xl text-[10px] font-black uppercase text-slate-600 hover:border-emerald-500/50 hover:text-emerald-500 transition-all">+ Add Operational Day</button>
                </div>
              )}
              {modalTab === 'assets' && (
                <div className="space-y-10 animate-in fade-in duration-300">
                  <div className="grid grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Master Cover Asset</label>
                      <div onClick={() => mainImageInputRef.current?.click()} className="group relative w-full h-64 rounded-3xl border-2 border-dashed border-slate-800 flex flex-col items-center justify-center cursor-pointer hover:border-emerald-500/50 transition-all overflow-hidden bg-slate-950/50">
                        {formTour.image ? <img src={formTour.image} className="w-full h-full object-cover" /> : <><span className="text-4xl mb-4">🖼️</span><span className="text-[10px] font-black uppercase text-slate-600">Select Local File</span></>}
                        <input type="file" ref={mainImageInputRef} className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'image', 'tour')} />
                      </div>
                    </div>
                    <div className="space-y-6">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Supplemental Assets</label>
                      <div className="grid grid-cols-3 gap-4 h-64 overflow-y-auto pr-2 custom-scrollbar">
                        {formTour.gallery?.map((img, idx) => (
                          <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden border border-slate-800 group">
                            <img src={img} className="w-full h-full object-cover" />
                            <button type="button" onClick={() => setFormTour({...formTour, gallery: formTour.gallery?.filter((_, i) => i !== idx)})} className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-lg flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">✕</button>
                          </div>
                        ))}
                        <button type="button" onClick={() => galleryInputRef.current?.click()} className="aspect-square rounded-2xl border-2 border-dashed border-slate-800 flex items-center justify-center text-2xl text-slate-800 hover:border-emerald-500/50 hover:text-emerald-500 transition-all bg-slate-950/20">+</button>
                        <input type="file" ref={galleryInputRef} className="hidden" multiple accept="image/*" onChange={(e) => handleFileUpload(e, 'gallery', 'tour')} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </form>
            <div className="bg-slate-900 p-8 border-t border-slate-800 flex gap-6 shrink-0">
              <button onClick={() => setIsTourModalOpen(false)} className="flex-1 py-5 font-black text-[10px] uppercase tracking-[0.3em] text-slate-600 hover:text-white">Discard Changes</button>
              <button onClick={handleSaveTour} className="flex-[2] bg-emerald-500 text-slate-950 py-5 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl hover:bg-emerald-400">Finalize Resource</button>
            </div>
          </div>
        </div>
      )}

      {/* REGION (DESTINATION) MODAL */}
      {isDestModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => setIsDestModalOpen(false)}></div>
          <div className="relative bg-slate-900 border border-slate-800 w-full max-w-5xl rounded-[3.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300 h-[85vh] flex flex-col">
            <div className="bg-emerald-500 p-8 flex justify-between items-center shrink-0">
              <div>
                <h2 className="text-3xl font-black tracking-tighter text-slate-950">{editingDest ? 'Modify Region' : 'Register Region'}</h2>
                <p className="text-[10px] uppercase tracking-widest font-black text-slate-950/60 mt-1">Regional Strategic Data • {modalTab.toUpperCase()}</p>
              </div>
              <div className="flex bg-slate-950/20 p-1.5 rounded-2xl gap-1">
                {(['basic', 'narrative', 'assets', 'strategic'] as ModalTab[]).map(tab => (
                  <button key={tab} onClick={() => setModalTab(tab)} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${modalTab === tab ? 'bg-slate-950 text-emerald-500 shadow-xl' : 'text-slate-950 hover:bg-white/10'}`}>{tab}</button>
                ))}
              </div>
            </div>
            <form className="flex-grow overflow-y-auto p-12 space-y-12" onSubmit={handleSaveDest}>
              {modalTab === 'basic' && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Region Name</label>
                      <input required type="text" value={formDest.name} onChange={(e) => setFormDest({...formDest, name: e.target.value})} className="w-full p-5 bg-slate-950 rounded-2xl border border-slate-800 outline-none text-white font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Base Starting Price ($)</label>
                      <input required type="number" value={formDest.price} onChange={(e) => setFormDest({...formDest, price: parseFloat(e.target.value)})} className="w-full p-5 bg-slate-950 rounded-2xl border border-slate-800 outline-none text-white font-bold" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Region Climate Profile</label>
                      <input required type="text" value={formDest.climate} onChange={(e) => setFormDest({...formDest, climate: e.target.value})} className="w-full p-5 bg-slate-950 rounded-2xl border border-slate-800 outline-none text-white font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Optimal Season Window</label>
                      <input required type="text" value={formDest.bestTimeToVisit} onChange={(e) => setFormDest({...formDest, bestTimeToVisit: e.target.value})} className="w-full p-5 bg-slate-950 rounded-2xl border border-slate-800 outline-none text-white font-bold" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Marketing Catchphrase (Short Desc)</label>
                    <input required type="text" value={formDest.shortDescription} onChange={(e) => setFormDest({...formDest, shortDescription: e.target.value})} className="w-full p-5 bg-slate-950 rounded-2xl border border-slate-800 outline-none text-white font-bold" />
                  </div>
                </div>
              )}
              {modalTab === 'narrative' && (
                <div className="space-y-10 animate-in fade-in duration-300">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Full Operational Narrative</label>
                    <textarea className="w-full h-64 p-5 bg-slate-950 rounded-2xl border border-slate-800 outline-none text-white font-bold resize-none" value={formDest.description} onChange={(e) => setFormDest({...formDest, description: e.target.value})} />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Strategic Highlights (Line Separated)</label>
                    <textarea className="w-full h-32 p-5 bg-slate-950 rounded-2xl border border-slate-800 outline-none text-white font-bold resize-none" value={formDest.highlights?.join('\n')} onChange={(e) => setFormDest({...formDest, highlights: e.target.value.split('\n')})} />
                  </div>
                </div>
              )}
              {modalTab === 'assets' && (
                <div className="space-y-10 animate-in fade-in duration-300">
                  <div className="grid grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Regional Master Image</label>
                      <div onClick={() => mainImageInputRef.current?.click()} className="group relative w-full h-64 rounded-3xl border-2 border-dashed border-slate-800 flex flex-col items-center justify-center cursor-pointer hover:border-emerald-500/50 transition-all overflow-hidden bg-slate-950/50">
                        {formDest.image ? <img src={formDest.image} className="w-full h-full object-cover" /> : <><span className="text-4xl mb-4">📍</span><span className="text-[10px] font-black uppercase text-slate-600">Upload Region Asset</span></>}
                        <input type="file" ref={mainImageInputRef} className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'image', 'dest')} />
                      </div>
                    </div>
                    <div className="space-y-6">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Regional Gallery</label>
                      <div className="grid grid-cols-3 gap-4 h-64 overflow-y-auto pr-2 custom-scrollbar">
                        {formDest.gallery?.map((img, idx) => (
                          <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden border border-slate-800 group">
                            <img src={img} className="w-full h-full object-cover" />
                            <button type="button" onClick={() => setFormDest({...formDest, gallery: formDest.gallery?.filter((_, i) => i !== idx)})} className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-lg flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">✕</button>
                          </div>
                        ))}
                        <button type="button" onClick={() => galleryInputRef.current?.click()} className="aspect-square rounded-2xl border-2 border-dashed border-slate-800 flex items-center justify-center text-2xl text-slate-800 hover:border-emerald-500/50 hover:text-emerald-500 transition-all bg-slate-950/20">+</button>
                        <input type="file" ref={galleryInputRef} className="hidden" multiple accept="image/*" onChange={(e) => handleFileUpload(e, 'gallery', 'dest')} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {modalTab === 'strategic' && (
                <div className="space-y-10 animate-in fade-in duration-300">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Latitude GEO-Coord</label>
                      <input required type="number" step="any" value={formDest.lat} onChange={(e) => setFormDest({...formDest, lat: parseFloat(e.target.value)})} className="w-full p-5 bg-slate-950 rounded-2xl border border-slate-800 outline-none text-white font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Longitude GEO-Coord</label>
                      <input required type="number" step="any" value={formDest.lng} onChange={(e) => setFormDest({...formDest, lng: parseFloat(e.target.value)})} className="w-full p-5 bg-slate-950 rounded-2xl border border-slate-800 outline-none text-white font-bold" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Associated Tour Packages</label>
                    <div className="flex flex-wrap gap-3">
                      {tours.map(t => (
                        <button key={t.id} type="button" onClick={() => {
                          const current = formDest.relatedTourIds || [];
                          const updated = current.includes(t.id) ? current.filter(id => id !== t.id) : [...current, t.id];
                          setFormDest({...formDest, relatedTourIds: updated});
                        }} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase border transition-all ${formDest.relatedTourIds?.includes(t.id) ? 'bg-emerald-500 text-slate-950 border-emerald-500' : 'bg-slate-950 text-slate-500 border-slate-800'}`}>
                          {t.title}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </form>
            <div className="bg-slate-900 p-8 border-t border-slate-800 flex gap-6 shrink-0">
              <button onClick={() => setIsDestModalOpen(false)} className="flex-1 py-5 font-black text-[10px] uppercase tracking-[0.3em] text-slate-600 hover:text-white">Discard Changes</button>
              <button onClick={handleSaveDest} className="flex-[2] bg-emerald-500 text-slate-950 py-5 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl hover:bg-emerald-400">Update Regional Data</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
