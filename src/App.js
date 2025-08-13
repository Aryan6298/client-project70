import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import './App.css';
import { FaWhatsapp } from 'react-icons/fa';
import Loading from './components/Loading';
import NavigationBarBootstrap from './components/NavigationBarBootstrap.jsx';
import Copyrights from './pages/Copyright.jsx';

// Import components directly for testing
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Programs from './pages/Programs.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';
import OurTeam from './pages/OurTeam.jsx';
import DonateNow from './pages/DonateNow.jsx';
import JoinUs from './pages/JoinUs.jsx';
import NotFound from './pages/NotFound.jsx';
import ProgramHighlightCapacity from './pages/ProgramHighlightCapacity.jsx';
import ProgramHighlightCarbon from './pages/ProgramHighlightCarbon.jsx';
import ProgramHighlightLivelihood from './pages/ProgramHighlightLivelihood.jsx';
import FuturePlans from './pages/FuturePlans.jsx';
import EventBanner from './components/Eventbanner.jsx';

function ScrollToTop() {
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname !== '/programs') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [location.pathname]);
  return null;
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/+918889583332"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const handleLoad = () => setLoading(false);
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <Router>
      {loading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(255,255,255,0.95)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Loading style={{ width: 180, height: 180 }} />
        </div>
      )}
      <EventBanner />
      <Topbar />
      <NavigationBarBootstrap />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/capacity" element={<ProgramHighlightCapacity />} />
        <Route path="/programs/carbon" element={<ProgramHighlightCarbon />} />
        <Route path="/programs/livelihood" element={<ProgramHighlightLivelihood />} />
        <Route path="/future-plans" element={<FuturePlans />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/donatenow" element={<DonateNow />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/copyrights" element={<Copyrights />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </Router>
  );
}

export default App; 