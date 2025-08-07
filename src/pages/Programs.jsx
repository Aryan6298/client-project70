import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import studyMallImg from '../assets/images/crousal-img02-gallery06.webp';
import studyFinImg from '../assets/images/sapling.jpg';
import digiLibraryImg from '../assets/images/gallery12.webp';
import homeStudyMallImg from '../assets/images/livelyhood01.jpg';
import homeStudyFinImg from '../assets/images/sapling.jpg';
import homeDigiLibraryImg from '../assets/images/capacity-building01.webp';
import gallery01 from '../assets/images/crousal-img03-gallery01.webp';
import gallery02 from '../assets/images/gallery02.webp';
import newspaper01 from '../assets/images/newspaper01.jpg';
import gallery04 from '../assets/images/gallery04.webp';
import gallery05 from '../assets/images/gallery05.webp';
import gallery07 from '../assets/images/gallery07.webp';
import gallery09 from '../assets/images/gallery09 (1).webp';
import gallery10 from '../assets/images/gallery10.webp';
import gallery11 from '../assets/images/crousal-img04-gallery11.webp';
import gallery13 from '../assets/images/gallery13.webp';
import gallery14 from '../assets/images/gallery14.webp';
import gallery15 from '../assets/images/gallery15.webp';
import gallery16 from '../assets/images/gallery16.webp';
import './Programs.css';
import { Helmet } from 'react-helmet';

const programs = [
  {
    title: 'Clean-Up Drives',
    image: studyMallImg,
    gallery: [gallery01, gallery02, newspaper01, gallery04],
    text: [
      'Organizing community clean-up events to remove waste and beautify our surroundings.',
      'Our volunteers work together to clean streets, parks, and public spaces, fostering a sense of community pride.',
      'We believe that a clean environment is the foundation for a healthy and vibrant society. Join us in making a visible difference!'
    ]
  },
  {
    title: 'Tree Plantation',
    image: studyFinImg,
    gallery: [gallery05, gallery07, gallery09, gallery10],
    text: [
      'Planting trees to restore green cover and combat climate change.',
      'Each sapling we plant is a step toward a greener, more sustainable future for generations to come.',
      'Our plantation drives engage local communities, schools, and organizations to maximize impact and awareness.'
    ]
  },
  {
    title: 'Waste Management',
    image: digiLibraryImg,
    gallery: [gallery11, gallery13, gallery14, gallery15, gallery16],
    text: [
      'Promoting recycling, waste segregation, and responsible disposal practices.',
      'We conduct workshops and awareness campaigns to educate people about reducing, reusing, and recycling waste.',
      'Together, we can minimize landfill use and protect our planet from pollution.'
    ]
  }
];

const homeHighlights = [
  {
    image: homeDigiLibraryImg,
    title: 'Capacity Building',
    description: 'Our Capacity Building Program focuses on enhancing the skills, knowledge, and organizational strength of community members, local leaders, and partner organizations.',
    link: '/programs/capacity',
    buttonText: 'Read more'
  },
  {
    image: homeStudyFinImg,
    title: 'Carbon Footprint',
    description: 'Our work focuses on reducing carbon emissions and promoting sustainable living practices at the grassroots level. We educate communities on environmental responsibility while implementing low-carbon solutions in our programs.',
    link: '/programs/carbon',
    buttonText: 'Read more'
  },
  {
    image: homeStudyMallImg,
    title: 'Livelihood',
    description: 'Our Livelihood Program focuses on equipping individuals—especially women, youth, and marginalized communities—with the skills, resources, and confidence.',
    link: '/programs/livelihood',
    buttonText: 'Read more'
  }
];

const Programs = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); // slight delay for route transition
      }
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Programs | Amay Foundation</title>
        <meta name="description" content="Explore Amay Foundation's programs: Clean-Up Drives, Tree Plantation, Waste Management, Capacity Building, Carbon Footprint, and Livelihood initiatives." />
        <meta name="keywords" content="Amay Foundation Programs, Clean-Up Drives, Tree Plantation, Waste Management, Capacity Building, Carbon Footprint, Livelihood" />
        <meta property="og:title" content="Programs | Amay Foundation" />
        <meta property="og:description" content="Explore Amay Foundation's programs: Clean-Up Drives, Tree Plantation, Waste Management, Capacity Building, Carbon Footprint, and Livelihood initiatives." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amayfoundation.org/programs" />
        <meta property="og:image" content="/logo512.png" />
      </Helmet>
      <motion.div className="whatwedo-main"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 className="whatwedo-title"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >What We Do</motion.h1>
        <motion.p className="whatwedo-intro"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          At Amay Foundation, we are dedicated to making a positive impact on the environment and our communities. Our core initiatives are designed to create lasting change and inspire others to join our mission.
        </motion.p>
        <div className="whatwedo-list">
          {/* Render homeHighlights first */}
          {homeHighlights.map((highlight, idx) => {
            // Assign ids: capacity, carbon, livelihood
            const ids = ['capacity', 'carbon', 'livelihood'];
            return (
              <motion.div
                className={`whatwedo-section${idx % 2 === 1 ? ' reverse' : ''}`}
                key={`highlight-${idx}`}
                id={ids[idx]}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div className="whatwedo-img-wrap"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <img src={highlight.image} alt={highlight.title} className="whatwedo-img" loading="lazy" />
                </motion.div>
                <motion.div className="whatwedo-content"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <h2 className="whatwedo-program-title">{highlight.title}</h2>
                  <p className="whatwedo-program-desc">{highlight.description}</p>
                  <Link to={highlight.link} className="whatwedo-readmore-btn">{highlight.buttonText}</Link>
                </motion.div>
              </motion.div>
            );
          })}
          {/* Then render the original programs */}
          {programs.map((prog, idx) => {
            // Assign ids: cleanup, treeplantation, wastemanagement
            const ids = ['cleanup', 'treeplantation', 'wastemanagement'];
            return (
              <motion.div
                className={`whatwedo-section${idx % 2 === 1 ? ' reverse' : ''}`}
                key={idx}
                id={ids[idx]}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div className="whatwedo-img-wrap"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <img src={prog.image} alt={prog.title} className="whatwedo-img" loading="lazy" />
                  <div className="whatwedo-gallery">
                    {prog.gallery.map((img, i) => (
                      <Link to="/gallery" key={i}>
                        <motion.img
                          src={img}
                          alt={prog.title + ' gallery ' + (i+1)}
                          className="whatwedo-gallery-img"
                          loading="lazy"
                          initial={{ y: 30, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true, amount: 0.7 }}
                          transition={{ duration: 0.4, delay: 0.05 * i }}
                          whileHover={{ scale: 1.07, boxShadow: '0 4px 16px rgba(29,44,170,0.13)' }}
                        />
                      </Link>
                    ))}
                  </div>
                </motion.div>
                <motion.div className="whatwedo-content"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <h2 className="whatwedo-program-title">{prog.title}</h2>
                  {prog.text.map((line, i) => (
                    <p className="whatwedo-program-desc" key={i}>{line}</p>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Programs; 