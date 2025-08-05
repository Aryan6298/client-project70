import React from 'react';
import img1 from '../assets/images/sponser01.png';
import img2 from '../assets/images/sponser02.jpg';
import img3 from '../assets/images/sponser03.webp';
import img4 from '../assets/images/sponser04.jpeg';
import img5 from '../assets/images/partners.png';
import img6 from '../assets/images/partners01.jpg';
import './PartnersSection.css';
import { motion } from 'framer-motion';

const partners = [img1, img2, img3,img4,img5,img6];

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Our Partners & Supporters
      </motion.h2>
      <div className="partners-container">
      <div className="partners-logos">
        {partners.map((img, idx) => (
            <motion.div 
              className="partner-logo-wrapper"
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <motion.img 
                src={img} 
                alt={`Partner ${idx + 1}`} 
                loading="lazy"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 8px 20px rgba(29,43,170,0.2)'
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection; 