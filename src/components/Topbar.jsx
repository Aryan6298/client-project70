import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Topbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Topbar = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false); // Hide when scrolling down
      } else if (window.scrollY < lastScrollY) {
        setVisible(true); // Show when scrolling up
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={`topbar d-flex align-items-center justify-content-between px-4 py-1${visible ? '' : ' topbar--hidden'}`}
      style={{ minHeight: 36, zIndex: 1100 }}>
      <div className="d-flex align-items-center gap-3 topbar__social">
        <a href="https://www.facebook.com/profile.php?id=61578311296586" aria-label="Facebook" className="topbar__icon"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="https://www.instagram.com/amayfoundation?utm_source=qr&igsh=MXZvbjY0ZnF5cGNiMQ==" aria-label="Instagram" className="topbar__icon"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      <div className="d-flex align-items-center gap-2 topbar__contact">
        <span className="topbar__email-icon"><FontAwesomeIcon icon={faEnvelope} /></span>
        <a href="mailto:amayfoundation2023@gmail.com" className="topbar__email" style={{textDecoration: 'none', color: 'inherit'}}>amayfoundation2023@gmail.com</a>
      </div>
    </div>
  );
};

export default Topbar; 