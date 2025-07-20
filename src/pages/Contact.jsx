import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';
import backgroundImage from '../assets/images/crousal-img01.jpg'; // Using an existing image
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div className="contact-page-container" style={{ backgroundImage: `url(${backgroundImage})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="contact-header-overlay"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 className="contact-main-title"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >Get In Touch</motion.h1>
        <motion.p className="contact-subtitle"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >We are here to assist you. Feel free to reach out anytime!</motion.p>
      </motion.div>

      <motion.div className="contact-card-container"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div className="contact-card-header"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="contact-info-title">Contact Information</h2>
          <p className="contact-availability">We are available 7 days a week!</p>
        </motion.div>
        <motion.div className="contact-details-section"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="contact-detail-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <div>
              <h3 className="contact-detail-title">Mail ID</h3>
              <a href="mailto:amayfoundation2023@gmail.com" className="contact-detail-link">
                amayfoundation2023@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-detail-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <div>
              <h3 className="contact-detail-title">Phone</h3>
              <a href="tel:+918889583332" className="contact-detail-link">+91 88895-83332</a>
              <br />
              <a href="tel:+918982949153" className="contact-detail-link">+91 8982949153</a>
            </div>
          </div>
        </motion.div>
        <motion.div className="contact-social-links"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="https://www.facebook.com" aria-label="Facebook" className="contact-social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="https://www.twitter.com" aria-label="Twitter" className="contact-social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.instagram.com" aria-label="Instagram" className="contact-social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn" className="contact-social-icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href="https://www.youtube.com" aria-label="YouTube" className="contact-social-icon"><FontAwesomeIcon icon={faYoutube} /></a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact; 