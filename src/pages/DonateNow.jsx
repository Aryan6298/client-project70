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


    <motion.div className="donate-now-bank"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <h2 className="bank-transfer-heading">Online Transfer <span>Now!</span></h2>
      <p><strong>Name:</strong> AMAY FOUNDATION</p>
      <p><strong>Bank:</strong> HDFC Bank LTD</p>
      <p><strong>Account Number:</strong> 50100657718768 </p>
      <p><strong>Branch:</strong> KK PLATINUM, GULMOHAR, BHOPAL ,MADHYA PRADESH – 462 039.</p>
      <p><strong>IFSC Code:</strong> HDFC0002486</p>

      
      
    </motion.div>
    <p>Any donations made to Amay Foundation are exempt u/s 80G subject to limits prescribed under the Income Tax Act 1961.</p>
    <motion.div className="donate-now-info"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        
        <a href="https://wa.me/+918889583332" target="_blank" rel="noopener noreferrer" className="donate-now-btn" style={{marginLeft:'180px'}}>Need Help?</a>
      </motion.div>
  </motion.div>
);

export default DonateNow;
