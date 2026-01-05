
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import Tours from './pages/Tours';
import Guides from './pages/Guides';
import GuideDetail from './pages/GuideDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import BecomeGuide from './pages/BecomeGuide';
import HelpCenter from './pages/HelpCenter';
import FAQs from './pages/FAQs';
import BookingGuide from './pages/BookingGuide';
import LegalPage from './pages/LegalPage';
import TourDetail from './pages/TourDetail';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedTourId, setSelectedTourId] = useState<string | null>(null);
  const [selectedDestinationId, setSelectedDestinationId] = useState<string | null>(null);
  const [selectedGuideId, setSelectedGuideId] = useState<string | null>(null);

  const handleViewTour = (id: string) => {
    setSelectedTourId(id);
    setCurrentPage('tour-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewDestination = (id: string) => {
    setSelectedDestinationId(id);
    setCurrentPage('destination-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewGuide = (id: string) => {
    setSelectedGuideId(id);
    setCurrentPage('guide-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} onViewTour={handleViewTour} onViewDestination={handleViewDestination} />;
      case 'destinations':
        return <Destinations onNavigate={setCurrentPage} onViewDestination={handleViewDestination} />;
      case 'destination-detail':
        return <DestinationDetail destinationId={selectedDestinationId} onBack={() => setCurrentPage('destinations')} onViewTour={handleViewTour} />;
      case 'tours':
        return <Tours onViewTour={handleViewTour} />;
      case 'tour-detail':
        return <TourDetail tourId={selectedTourId} onBack={() => setCurrentPage('tours')} />;
      case 'guides':
        return <Guides onNavigate={setCurrentPage} onViewGuide={handleViewGuide} />;
      case 'guide-detail':
        return <GuideDetail guideId={selectedGuideId} onBack={() => setCurrentPage('guides')} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'become-guide':
        return <BecomeGuide />;
      case 'help-center':
        return <HelpCenter />;
      case 'faqs':
        return <FAQs />;
      case 'booking-guide':
        return <BookingGuide />;
      case 'privacy':
        return <LegalPage title="Privacy Policy" content="Our commitment to your data privacy is paramount in Rwanda's growing digital landscape..." />;
      case 'terms':
        return <LegalPage title="Terms of Service" content="By using Sage Tour Rwanda, you agree to our terms regarding eco-tourism guidelines and permit regulations..." />;
      case 'login':
        return <Login onBack={() => setCurrentPage('home')} />;
      default:
        return <Home onNavigate={setCurrentPage} onViewTour={handleViewTour} onViewDestination={handleViewDestination} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
