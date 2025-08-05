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
import ajayMehra from '../assets/images/team-Atul-shriram.jpg';

import drharshlatavishwakarma from '../assets/images/team-tech-Dr-Harshlata-Vishwakarma.jpg';
import shailendrasonekar from '../assets/images/team-tech-Shailendra-Sonekar.jpg';
import rashminavdev from '../assets/images/tem-tech-Rashmi-Navdev.jpg';
import udayRaman from '../assets/images/team-tech-dr-uday-raman.jpg'; // chief advisor
import raviSinha from '../assets/images/team-tech-MR-RAVI-KUMAR-SINHA.webp'; // mining environment advisor
import souravPahari from '../assets/images/team-sourav-pahari.jpg'; // environment advisor

// CTA Images
import donorImage from '../assets/images/doner-img.webp';
import joinImage from '../assets/images/volunteer.jpg';

// ✅ Core Team Members
const teamMembers = [
  {
    name: 'Mrs. Rachna Shukla',
    designation: 'Founder & Director',
    bio: 'Mrs. Rachna is the visionary behind our foundation, leading with passion and a deep commitment to environmental sustainability.',
    image: rachnaShukla,
  },
  {
    name: 'Dr. Ashok Vishwakarma',
    designation: 'Founder & Environmental Advisor',
    bio: 'Dr. Ashok brings years of experience in environmental policy and conservation to guide our initiatives.',
    image: drAshok,
  },
  {
    name: 'Mr. Raheesh Prasad Patel',
    designation: 'Co-Founder and Operations Head',
    bio: 'Mr. Raheesh oversees all our environmental projects, ensuring that our programs run smoothly and effectively on the ground.',
    image: raheeshPatel,
  },
  {
    name: 'Mr. Dinesh Singh Yadav',
    designation: 'Member and Community Outreach Coordinator',
    bio: 'Mr. Dinesh is the bridge between our foundation and the communities we serve, fostering trust and collaboration for a cleaner environment.',
    image: dineshYadav,
  },
  {
    name: 'Mr. Kamalesh Birla',
    designation: 'Treasurer and Finance manager',
    bio: 'Mr. Kamalesh ensures our financial health and adherence to all regulations, maintaining our integrity and transparency.',
    image: kamaleshBirla,
  },
  {
    name: 'Mr. Atul Shriram',
    designation: 'Joint Secretary',
    bio: 'Mr. Atul facilitates impactful collaborations with like-minded organizations, helping us expand our reach and deepen our impact.',
    image: ajayMehra,
  }
];

// ✅ Technical Team Members
const technicalTeamMembers = [
  {
    name: 'Dr. Harshlata Vishwakarma',
    bio: 'Dr. Harshlata supports the team with scientific research and data-driven insights to guide our environmental projects.',
    image: drharshlatavishwakarma,
  },
  {
    name: 'Mr. Shailendra Sonekar',
    bio: 'Mr. Shailendra brings expertise in software systems and assists with deploying digital tools to support outreach.',
    image: shailendrasonekar,
  },
  {
    name: 'Ms. Rashmi Navdev',
    bio: 'Ms. Rashmi ensures our digital platforms are user-friendly, accessible, and visually compelling for maximum impact.',
    image: rashminavdev,
  }
];

// ✅ Advisor Members
const advisorMembers = [
  {
    name: 'Dr. Uday Raman',
    designation: 'Chief Advisor',
    bio: 'Dr. Uday Raman serves as our Chief Advisor, lending his extensive expertise in water resources and infrastructure to strengthen our initiatives.',
    image: udayRaman,
  },
  {
    name: 'Mr. Ravi Kumar Sinha',
    designation: 'Mining & Environment Advisor',
    bio: 'Mr. Ravi Sinha, retired Chief Research Officer at CWPRS and Water Resources Expert, supports our technical planning and impact evaluation.',
    image: raviSinha,
  },
  {
    name: 'Mr. Sourav Pahari',
    designation: 'Environmental Advisor',
    bio: 'Mr. Sourav Pahari brings on-ground environmental experience, advising on sustainability practices and awareness programs.',
    image: souravPahari,
  }
];

const OurTeam = () => {
  return (
    <motion.div className="our-team-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <motion.div className="team-header"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.4 }}
      >
        <motion.h1 className="team-title">Our Team</motion.h1>
        <motion.p className="team-intro">
          Meet the dedicated individuals who are the driving force behind our mission. Their passion, expertise, and unwavering commitment to empowering rural education are what make our work possible. Together, we are creating a brighter future, one child at a time.
        </motion.p>
      </motion.div>

      {/* Core Team */}
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


{/* Advisors */}
<motion.div className="advisors-section"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
      >
        <div className="team-header" style={{ marginTop: '4rem' }}>
          <h2 className="team-title">Advisors</h2>
        </div>
        <div className="team-grid">
          {advisorMembers.map((member, index) => (
            <motion.div
              className="team-card"
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(0,153,51,0.12)' }}
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
      </motion.div>



      {/* Technical Team */}
      <motion.div className="technical-team-section"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
      >
        <div className="team-header">
          <h2 className="team-title">Technical Team</h2>
        </div>
        <div className="team-grid">
          {technicalTeamMembers.map((member, index) => (
            <motion.div
              className="team-card"
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(0,102,255,0.12)' }}
            >
              <div className="team-card__image-container">
                <img src={member.image} alt={member.name} className="team-card__image" loading="lazy" />
              </div>
              <div className="team-card__content">
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__bio">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      
      {/* CTA Sections */}
      <motion.div className="cta-section-container"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
      >
        {/* Donor */}
        <motion.div className="cta-section">
          <img src={donorImage} alt="Support environmental action" className="cta-image" loading="lazy" />
          <div className="cta-content">
            <h2 className="cta-title">Become a Donor</h2>
            <p className="cta-text">
              Your contribution can help us organize clean-up drives, plant trees, and run awareness campaigns. Every donation, big or small, makes a lasting impact on our environment.
            </p>
            <Link to="/donatenow" className="cta-button">Donate Now</Link>
          </div>
        </motion.div>

        {/* Volunteer */}
        <motion.div className="cta-section">
          <img src={joinImage} alt="A group of volunteers working together" className="cta-image" loading="lazy" />
          <div className="cta-content">
            <h2 className="cta-title">Become a Volunteer</h2>
            <p className="cta-text">
              Join our team and lend your skills to a cause that matters. Whether it's participating in clean-ups, planting trees, or spreading awareness, your time can help create a cleaner, greener world.
            </p>
            <Link to="/join-us" className="cta-button">Join Us</Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default OurTeam;
