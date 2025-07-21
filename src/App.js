import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import './App.css';
import { FaWhatsapp } from 'react-icons/fa';
import Loading from './components/Loading';
import NavigationBarBootstrap from './components/NavigationBarBootstrap.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Programs = lazy(() => import('./pages/Programs.jsx'));
const Gallery = lazy(() => import('./pages/Gallery.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const OurTeam = lazy(() => import('./pages/OurTeam.jsx'));
const DonateNow = lazy(() => import('./pages/DonateNow'));
const BecomeVolunteer = lazy(() => import('./pages/BecomeVolunteer.jsx'));
const NotFound = lazy(() => import('./pages/NotFound'));
// Add lazy imports for new program highlight pages
const ProgramHighlightCapacity = lazy(() => import('./pages/ProgramHighlightCapacity.jsx'));
const ProgramHighlightCarbon = lazy(() => import('./pages/ProgramHighlightCarbon.jsx'));
const ProgramHighlightLivelihood = lazy(() => import('./pages/ProgramHighlightLivelihood.jsx'));

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
      href="https://wa.me/8889583332"
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
    <>
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
      <Topbar />
      <NavigationBarBootstrap />
      <ScrollToTop />
      <Suspense fallback={<Loading style={{ width: 120, height: 120 }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/capacity" element={<ProgramHighlightCapacity />} />
          <Route path="/programs/carbon" element={<ProgramHighlightCarbon />} />
          <Route path="/programs/livelihood" element={<ProgramHighlightLivelihood />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/donatenow" element={<DonateNow />} />
          <Route path="/become-volunteer" element={<BecomeVolunteer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App; 