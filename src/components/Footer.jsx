import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
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
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><Link to="/programs">What We Do</Link></li>
            <li><Link to="/our-team">Our Team</Link></li>
            <li><Link to="/become-volunteer">Volunteer</Link></li>
            <li><a href="/gallery">Gallery</a></li>
          </ul>
        </motion.div>
        <motion.div className="footer__col footer__contact" 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4>Contact Us</h4>
          <p><span className="footer__icon">📞</span> +91 xxxxxxxxx</p>
          <p><span className="footer__icon">✉️</span> <a href="mailto:xyz@gmail.com">xyz@gmail.com</a></p>
          <p><span className="footer__icon">🌐</span> <a href="https://amayfoundation.org">amayfoundation.org</a></p>
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
          <p><span className="footer__icon">📍</span>G-1, Kamdhenu Tower, E-2/21, Arera Colony, Near BJP Office, Bhopal, M.P.</p>
          <div style={{position: 'relative', width: '100%', height: '150px', marginTop: '1rem'}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.135392769641!2d72.9427923148528!3d19.14561098704804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b871403a7c63%3A0x103568c03178229!2sThinkSharp%20Foundation!5e0!3m2!1sen!2sin!4v1620027736939!5m2!1sen!2sin"
              className="footer__contact-map"
              style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}
              allowFullScreen=""
              loading="lazy"
              title="Amay Foundation Location"
            ></iframe>
            <div className="footer__map-cover"></div>
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