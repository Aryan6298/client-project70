import React from 'react';
import './DonateNow.css';
import qrImg from '../assets/images/registration-amay.png';
import { motion } from 'framer-motion';

const DonateNow = () => (
  <motion.div className="donate-now-page"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.h1 className="donate-now-heading"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >Support Amay Foundation</motion.h1>
    <motion.p className="donate-now-desc"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      Your contribution helps us create a cleaner, greener, and healthier environment. Amay Foundation is a verified, registered non-profit. All donations go directly to our environmental initiatives.
    </motion.p>
    <motion.div className="donate-now-details"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div className="donate-now-qr"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img src={qrImg} alt="Scan to Donate QR" loading="lazy" />
        <div className="donate-now-qr-caption">Scan this QR with PhonePe, Google Pay, or any UPI app</div>
      </motion.div>
      <motion.div className="donate-now-info"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="donate-now-upi-label">UPI ID:</div>
        <div className="donate-now-upi-value">amayfoundation@upi</div>
        <a href="https://wa.me/+918889583332" target="_blank" rel="noopener noreferrer" className="donate-now-btn">Need Help?</a>
      </motion.div>
    </motion.div>
  </motion.div>
);

export default DonateNow; 