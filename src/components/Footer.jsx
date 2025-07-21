import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const handleScrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 0);
  };

  return (
    <motion.footer className="footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 0, pointerEvents: 'none'}}></div>
      <div className="footer__bg-map"></div>
      <div className="footer__container">
        <motion.div className="footer__col footer__brand"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <div className="footer__logo">Amay Foundation</div>
          <p>We are dedicated to saving and cleaning the environment.<br />Join us in creating a cleaner, greener, and healthier planet for all.</p>
        </motion.div>
        <motion.div className="footer__col"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/" onClick={handleScrollToTop}>Home</Link></li>
            <li><Link to="/about" onClick={handleScrollToTop}>About Us</Link></li>
            <li>
              <Link 
                to="/programs" 
                onClick={handleScrollToTop}
              >
                What We Do
              </Link>
            </li>
            <li><Link to="/our-team" onClick={handleScrollToTop}>Our Team</Link></li>
            <li><Link to="/become-volunteer" onClick={handleScrollToTop}>Volunteer</Link></li>
            <li><Link to="/gallery" onClick={handleScrollToTop}>Media Features</Link></li>
            <li><Link to="/future-plans" onClick={handleScrollToTop}>Future Plans</Link></li>
            <li><Link to="/contact" onClick={handleScrollToTop}>Contact Us</Link></li>
          </ul>
        </motion.div>
        <motion.div className="footer__col footer__contact" 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4>Contact Us</h4>
          <p><span className="footer__icon">📞</span> <a href="tel:+918889583332" style={{textDecoration: 'none', color: 'inherit'}}>+91 88895-83332</a></p>
          <p><span className="footer__icon">📞</span> <a href="tel:+918982949153" style={{textDecoration: 'none', color: 'inherit'}}>+91 8982949153</a></p>
          <p><span className="footer__icon">✉️</span> <a href="mailto:amayfoundation2023@gmail.com">amayfoundation2023@gmail.com</a></p>
          
          <div className="footer-social-links">
            <a href="https://www.facebook.com" aria-label="Facebook" className="footer-social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://www.twitter.com" aria-label="Twitter" className="footer-social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com" aria-label="Instagram" className="footer-social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn" className="footer-social-icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://www.youtube.com" aria-label="YouTube" className="footer-social-icon"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </motion.div>
        <motion.div className="footer__col footer__address"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h4>Our Address</h4>
          <p><span className="footer__icon">📍</span>  E-2/21, G-1, Kamdhenu Tower,Oppo. Habibganj Railway Station, Arera Colony, Bhopal, Madhya Pradesh -462016</p>
          <div style={{position: 'relative', width: '100%', height: '150px', marginTop: '1rem'}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58664.932933577475!2d77.39571149788432!3d23.22276211123775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c424523995631%3A0xdab9d7f626c82b0a!2sKamdhenu%20tower%2C%20E%202%2F21%2C%20Station%2C%20opposite%20Rani%20Kamplapati%2C%20Opposite%20Habibganj%20Railway%20Station%2C%20E-2%2C%20Arera%20Colony%2C%20Bhopal%2C%20Madhya%20Pradesh%20462016!5e0!3m2!1sen!2sin!4v1752991473320!5m2!1sen!2sin"
              className="footer__contact-map"
              style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
              allowFullScreen=""
              loading="lazy"
              title="Amay Foundation Location"
            ></iframe>
            <a 
              href="https://maps.google.com/?q=Kamdhenu+tower+E+2/21+Station+opposite+Rani+Kamplapati+Opposite+Habibganj+Railway+Station+E-2+Arera+Colony+Bhopal+Madhya+Pradesh+462016"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__map-cover"
              style={{
                pointerEvents: 'auto',
                cursor: 'pointer'
              }}
              title="Click to open in Google Maps"
            ></a>
          </div>
        </motion.div>
      </div>
      <motion.div className="footer__bottom"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <span>Copyright ©2021. All Rights Reserved | Amay Foundation</span>
      </motion.div>
    </motion.footer>
  );
};

export default Footer; 