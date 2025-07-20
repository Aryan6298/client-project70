import React from 'react';
import aboutImg from '../assets/images/logo-amay.png';
import founderImg from '../assets/images/team-img01-rachna-shukla.png';
import registrationImg from '../assets/images/registration-amay.png';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div className="about-main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.section className="about-detailed"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div className="about-detailed__img"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <img src={aboutImg} alt="About Amay Foundation" loading="lazy" />
        </motion.div>
        <motion.div className="about-detailed__content"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1>About Amay Foundation</h1>
          <p>
            Amay Foundation is a non-profit organization dedicated to saving and cleaning the environment. Our mission is to create a cleaner, greener, and healthier planet for all. We are committed to environmental conservation, waste management, and community-driven initiatives that protect nature and promote sustainability. In the future, we aim to expand our work to address many more causes for the betterment of society.
          </p>
        </motion.div>
      </motion.section>
      <motion.section className="vision-mission"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <motion.div className="vision-block"
          whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(255,102,0,0.15)' }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <h2>Our Vision</h2>
          <p>To inspire and lead communities towards a sustainable and environmentally conscious future.</p>
        </motion.div>
        <motion.div className="mission-block"
          whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(255,102,0,0.15)' }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <h2>Our Mission</h2>
          <p>To protect, restore, and preserve the environment through active community participation, awareness campaigns, and innovative solutions for a cleaner world.</p>
        </motion.div>
      </motion.section>
      <motion.section className="founder-message"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.div className="founder-img"
          whileHover={{ scale: 1.08, rotate: -2 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <img src={founderImg} alt="Founder's Message" loading="lazy" />
        </motion.div>
        <motion.div className="founder-content"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2>Founder's Message</h2>
          <p>
            "Amay Foundation began with a passion for making a real difference in our environment. We believe that every small action counts, and together, we can create a lasting impact. Thank you to everyone who supports our mission. We look forward to expanding our work to many more causes in the future."
          </p>
          <p className="founder-name">Rachna Shukla</p>
        </motion.div>
      </motion.section>
      <motion.section className="about-registration"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.div className="about-registration__img"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <img src={registrationImg} alt="Registration" loading="lazy" />
        </motion.div>
        <motion.div className="about-registration__content"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2>Official Registration</h2>
          <p>
            Amay Foundation is a verified and officially registered non-profit organization, recognized for its commitment to transparency, accountability, and impactful work. Our registration ensures that we operate with the highest standards of trust and professionalism. You can view our official registration certificate here, and we welcome you to verify our credentials for your peace of mind.
          </p>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default About; 