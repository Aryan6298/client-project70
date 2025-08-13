import React from 'react';
import aboutImg from '../assets/images/logo-amay.png';
import founderImg1 from '../assets/images/team-img01-rachna-shukla.png';
import founderImg2 from '../assets/images/team-img03-drashok-vishwakarma.png'; // Add the second image here
import registrationImg from '../assets/images/registration-amay.png';
import './About.css';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Amay Foundation</title>
        <meta name="description" content="Learn about Amay Foundation, our mission, vision, and the team dedicated to environmental conservation and community service." />
        <meta name="keywords" content="About Amay Foundation, Mission, Vision, Team, Non-profit, Environmental Conservation, Community Service" />
        <meta property="og:title" content="About Us | Amay Foundation" />
        <meta property="og:description" content="Learn about Amay Foundation, our mission, vision, and the team dedicated to environmental conservation and community service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amayfoundation.org/about" />
        <meta property="og:image" content="/logo512.png" />
      </Helmet>
      <motion.div className="about-main"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.section className="about-detailed"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="about-detailed__img"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img src={aboutImg} alt="About Amay Foundation" loading="lazy" />
          </motion.div>
          <motion.div className="about-detailed__content"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
          transition={{ duration: 0.6 }}
        >
          <motion.div className="vision-block"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h2>Our Vision</h2>
            <p>To inspire and lead communities towards a sustainable and environmentally conscious future.</p>
          </motion.div>
          <motion.div className="mission-block"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h2>Our Mission</h2>
            <p>To protect, restore, and preserve the environment through active community participation, awareness campaigns, and innovative solutions for a cleaner world.</p>
          </motion.div>
        </motion.section>

        <motion.section className="founder-message"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Founders' Message</h2>
          <div className="founders-container">
            <motion.div className="founder-block"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={founderImg1} alt="Mrs. Rachna Shukla" loading="lazy" />
              <div className="founder-content">
                <p>
                  "Amay Foundation began with a passion for making a real difference in our environment. We believe that every small action counts, and together, we can create a lasting impact. Thank you to everyone who supports our mission."
                </p>
                <p className="founder-name">Mrs. Rachna Shukla</p>
              </div>
            </motion.div>

            <motion.div className="founder-block"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={founderImg2} alt="Mrs. Amit Shukla" loading="lazy" />
              <div className="founder-content">
                <p>
                  "With growing environmental challenges, it’s essential we act now. At Amay Foundation, we are working toward scalable, community-led solutions to help preserve nature for future generations."
                </p>
                <p className="founder-name" style={{ marginTop: '36px' }}>Dr. Ashok Vishwakarma</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section className="about-registration"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="about-registration__img"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img src={registrationImg} alt="Registration" loading="lazy" />
          </motion.div>
          <motion.div className="about-registration__content"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Official Registration</h2>
            <p>
              Amay Foundation is a verified and officially registered non-profit organization, recognized for its commitment to transparency, accountability, and impactful work. Our registration ensures that we operate with the highest standards of trust and professionalism. You can view our official registration certificate here, and we welcome you to verify our credentials for your peace of mind.
            </p>
          </motion.div>
        </motion.section>
      </motion.div>
    </>
  );
};

export default About;
