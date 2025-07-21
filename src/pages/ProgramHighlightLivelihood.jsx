import React from 'react';
import { motion } from 'framer-motion';
import studyMallImg from '../assets/images/livelyhood01.jpg';

const ProgramHighlightLivelihood = () => (
  <motion.div
    className="program-highlight-detail-page"
    style={{marginTop: '80px', padding: '2rem', maxWidth: 900, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <h1 style={{fontSize: '2.6rem', marginBottom: '0.7rem'}}>🌾 Livelihood</h1>
    <h2 style={{fontWeight: 500, color: '#ea321d', marginBottom: '2rem', fontSize: '2rem'}}>Empowering Communities, One Skill at a Time</h2>
    <img src={studyMallImg} alt="Livelihood" style={{maxWidth: 440, width: '100%', borderRadius: 12, margin: '2.5rem 0'}} />
    <p style={{fontSize: '1.25rem', marginBottom: '2rem', textAlign: 'left', lineHeight: 1.7}}>
      At <b>Amay Foundation</b>, we believe that sustainable development begins with self-reliance. Our Livelihood Program focuses on equipping individuals—especially women, youth, and marginalized communities—with the skills, resources, and confidence they need to secure meaningful and dignified employment or start their own businesses.
    </p>
    <h3 style={{marginTop: '2.2rem', color: '#ff6600', textAlign: 'left', fontSize: '1.35rem'}}>🔧 What We Do:</h3>
    <ul style={{textAlign: 'left', fontSize: '1.18rem', margin: '1.2rem 0 2.2rem 2.2rem', lineHeight: 1.7}}>
      <li><b>Skill Development Training</b> in tailoring, handicrafts, agriculture, carpentry, digital literacy, and more.</li>
      <li><b>Entrepreneurship Support</b> through microfinance access, business mentoring, and startup toolkits.</li>
      <li><b>Market Linkages</b> to connect artisans and producers to local and global markets.</li>
      <li><b>Women-Led Initiatives</b> that promote economic independence and community leadership.</li>
    </ul>
    <h3 style={{color: '#ff6600', textAlign: 'left', fontSize: '1.35rem'}}>🎯 Our Impact:</h3>
    <ul style={{textAlign: 'left', fontSize: '1.18rem', margin: '1.2rem 0 2.2rem 2.2rem', lineHeight: 1.7}}>
      <li>Over <b>[insert number]</b> individuals trained across rural and urban regions.</li>
      <li><b>[Insert number]</b>% increase in household income for participants after 6 months.</li>
      <li>Self-help groups formed to ensure long-term support and collective growth.</li>
    </ul>
    <h3 style={{color: '#ff6600', textAlign: 'left', fontSize: '1.35rem'}}>🌍 Why It Matters:</h3>
    <p style={{fontSize: '1.25rem', marginBottom: '2rem', textAlign: 'left', lineHeight: 1.7}}>
      Livelihood is not just about income—it's about dignity, empowerment, and hope. When people are given the tools to succeed, they uplift not just themselves, but their entire communities.
    </p>
    <blockquote style={{fontStyle: 'italic', color: '#555', borderLeft: '4px solid #ea321d', paddingLeft: '1.2rem', margin: '2.5rem 0', textAlign: 'left', fontSize: '1.18rem', lineHeight: 1.7}}>
      “Give a person a skill, and you empower them for life.”
    </blockquote>
  </motion.div>
);

export default ProgramHighlightLivelihood; 