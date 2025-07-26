import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';
import backgroundImage from '../assets/images/crousal-img01.webp';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div className="contact-page-container" style={{ backgroundImage: `url(${backgroundImage})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="contact-header-overlay"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 className="contact-main-title"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >Get In Touch</motion.h1>
        <motion.p className="contact-subtitle"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >We are here to assist you. Feel free to reach out anytime!</motion.p>
      </motion.div>

      <motion.div className="contact-card-container"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <motion.div className="contact-card-header"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="contact-info-title">Contact Information</h2>
          <p className="contact-availability">We are available 7 days a week!</p>
        </motion.div>

        <motion.div className="contact-details-section"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div className="contact-detail-item"
            whileHover={{ y: -5, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
            transition={{ duration: 0.3 }}
          >
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <div>
              <h3 className="contact-detail-title">Mail ID</h3>
              <a href="mailto:amayfoundation2023@gmail.com" className="contact-detail-link">
                amayfoundation2023@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div className="contact-detail-item"
            whileHover={{ y: -5, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
            transition={{ duration: 0.3 }}
          >
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <div>
              <h3 className="contact-detail-title">Phone</h3>
              <a href="tel:+918889583332" className="contact-detail-link">+91 88895-83332</a>
              <a href="tel:+918982949153" className="contact-detail-link">+91 8982949153</a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="contact-social-links"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.a 
            href="https://www.facebook.com/profile.php?id=61578311296586" 
            aria-label="Facebook" 
            className="contact-social-icon"
            whileHover={{ y: -3, boxShadow: '0 8px 20px rgba(29,43,170,0.3)' }}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </motion.a>
           <motion.a 
            href="https://www.instagram.com/amayfoundation?utm_source=qr&igsh=MXZvbjY0ZnF5cGNiMQ==" 
            aria-label="Instagram" 
            className="contact-social-icon"
            whileHover={{ y: -3, boxShadow: '0 8px 20px rgba(29,43,170,0.3)' }}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </motion.a>
          
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact; 