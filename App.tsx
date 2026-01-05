
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
import Admin from './pages/Admin';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('admin');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('home');
  };

  const handleNavigate = (page: string) => {
    if (page === 'admin' && !isAuthenticated) {
      setCurrentPage('login');
    } else {
      setCurrentPage(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isAdminView = currentPage === 'admin' && isAuthenticated;

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} onViewTour={handleViewTour} onViewDestination={handleViewDestination} />;
      case 'destinations':
        return <Destinations onNavigate={handleNavigate} onViewDestination={handleViewDestination} />;
      case 'destination-detail':
        return <DestinationDetail destinationId={selectedDestinationId} onBack={() => handleNavigate('destinations')} onViewTour={handleViewTour} />;
      case 'tours':
        return <Tours onViewTour={handleViewTour} />;
      case 'tour-detail':
        return <TourDetail tourId={selectedTourId} onBack={() => handleNavigate('tours')} />;
      case 'guides':
        return <Guides onNavigate={handleNavigate} onViewGuide={handleViewGuide} />;
      case 'guide-detail':
        return <GuideDetail guideId={selectedGuideId} onBack={() => handleNavigate('guides')} />;
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
      case 'admin':
        return isAuthenticated ? <Admin onLogout={handleLogout} /> : <Login onBack={() => handleNavigate('home')} onLoginSuccess={handleLogin} />;
      case 'privacy':
        return <LegalPage title="Privacy Policy" content="Our commitment to your data privacy is paramount in Rwanda's growing digital landscape..." />;
      case 'terms':
        return <LegalPage title="Terms of Service" content="By using Sage Tour Rwanda, you agree to our terms regarding eco-tourism guidelines and permit regulations..." />;
      case 'login':
        return <Login onBack={() => handleNavigate('home')} onLoginSuccess={handleLogin} />;
      default:
        return <Home onNavigate={handleNavigate} onViewTour={handleViewTour} onViewDestination={handleViewDestination} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {!isAdminView && <Navbar onNavigate={handleNavigate} currentPage={currentPage} isAuthenticated={isAuthenticated} onLogout={handleLogout} />}
      <main className="flex-grow">
        {renderPage()}
      </main>
      {!isAdminView && <Footer onNavigate={handleNavigate} />}
    </div>
  );
};

export default App;
