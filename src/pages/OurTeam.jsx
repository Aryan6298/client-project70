import React from 'react';
import './OurTeam.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Team Member Images
import rachnaShukla from '../assets/images/team-img01-rachna-shukla.png';
import raheeshPatel from '../assets/images/team-img02-raheesh-prasad-patel.webp';
import drAshok from '../assets/images/team-img03-drashok-vishwakarma.png';
import dineshYadav from '../assets/images/team-img04-dinesh-singh-yadav.webp';
import kamaleshBirla from '../assets/images/team-img05-kamalesh-birla.png';

// Placeholder images for CTA sections
import donorImage from '../assets/images/doner-img.webp';
import joinImage from '../assets/images/volunteer.jpg';

const teamMembers = [
  {
    name: 'Mrs. Rachna Shukla',
    designation: 'Founder & Director',
    bio: 'Mrs. Rachna is the visionary behind our foundation, leading with passion and a deep commitment to environmental sustainability.',
    image: rachnaShukla,
  },
  {
    name: 'Mr. Raheesh Prasad Patel',
    designation: 'Operations Head',
    bio: 'Mr. Raheesh oversees all our environmental projects, ensuring that our programs run smoothly and effectively on the ground.',
    image: raheeshPatel,
  },
  {
    name: 'Dr. Ashok Vishwakarma',
    designation: 'Environmental Advisor',
    bio: 'Dr. Ashok brings years of experience in environmental policy and conservation to guide our initiatives.',
    image: drAshok,
  },
  {
    name: 'Mr. Dinesh Singh Yadav',
    designation: 'Community Outreach Coordinator',
    bio: 'Mr. Dinesh is the bridge between our foundation and the communities we serve, fostering trust and collaboration for a cleaner environment.',
    image: dineshYadav,
  },
  {
    name: 'Mr. Kamalesh Birla',
    designation: 'Finance & Compliance Officer',
    bio: 'Mr. Kamalesh ensures our financial health and adherence to all regulations, maintaining our integrity and transparency.',
    image: kamaleshBirla,
  },
];

const OurTeam = () => {
  return (
    <motion.div className="our-team-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div className="team-header"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.4 }}
      >
        <motion.h1 className="team-title"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.4 }}
        >Our Team</motion.h1>
        <motion.p className="team-intro"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.4 }}
        >
          Meet the dedicated individuals who are the driving force behind our mission. Their passion, expertise, and unwavering commitment to empowering rural education are what make our work possible. Together, we are creating a brighter future, one child at a time.
        </motion.p>
      </motion.div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
            <motion.div
              className="team-card"
              key={index}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(255,102,0,0.13)' }}
            >
            <div className="team-card__image-container">
              <img src={member.image} alt={member.name} className="team-card__image" loading="lazy" />
            </div>
            <div className="team-card__content">
              <h3 className="team-card__name">{member.name}</h3>
              <p className="team-card__designation">{member.designation}</p>
              <p className="team-card__bio">{member.bio}</p>
            </div>
            </motion.div>
        ))}
      </div>
      {/* CTA Sections */}
      <motion.div className="cta-section-container"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div className="cta-section"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.4 }}
        >
          <img src={donorImage} alt="Support environmental action" className="cta-image" loading="lazy" />
          <div className="cta-content">
            <h2 className="cta-title">Become a Donor</h2>
            <p className="cta-text">
              Your contribution can help us organize clean-up drives, plant trees, and run awareness campaigns. Every donation, big or small, makes a lasting impact on our environment.
            </p>
            <Link to="/donatenow" className="cta-button">Donate Now</Link>
          </div>
        </motion.div>
        <motion.div className="cta-section"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.4 }}
        >
          <img src={joinImage} alt="A group of volunteers working together" className="cta-image" loading="lazy" />
          <div className="cta-content">
            <h2 className="cta-title">Become a Volunteer</h2>
            <p className="cta-text">
              Join our team and lend your skills to a cause that matters. Whether it's participating in clean-ups, planting trees, or spreading awareness, your time can help create a cleaner, greener world.
            </p>
            <Link to="/become-volunteer" className="cta-button">Join Us</Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default OurTeam; 