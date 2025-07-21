import React from 'react';
import { motion } from 'framer-motion';
import digiLibraryImg from '../assets/images/capacity-building01.jpg';

const ProgramHighlightCapacity = () => (
  <motion.div
    className="program-highlight-detail-page"
    style={{marginTop: '80px', padding: '2rem', maxWidth: 900, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <h1 style={{fontSize: '2.6rem', marginBottom: '0.7rem'}}>🌱 Capacity Building</h1>
    <h2 style={{fontWeight: 500, color: '#ea321d', marginBottom: '2rem', fontSize: '2rem'}}>Strengthening Skills, Building Futures</h2>
    <img src={digiLibraryImg} alt="Capacity Building" style={{maxWidth: 400, width: '100%', borderRadius: 12, margin: '2.5rem 0'}} />
    <p style={{fontSize: '1.25rem', marginBottom: '2rem', textAlign: 'left', lineHeight: 1.7}}>
      At <b>Amay Foundation</b>, we believe that empowering individuals and organizations with the right skills and knowledge is the cornerstone of sustainable development. Our Capacity Building Program is dedicated to enhancing the abilities of community members, local leaders, and partner organizations so they can drive positive change from within.
    </p>
    <h3 style={{marginTop: '2.2rem', color: '#ff6600', textAlign: 'left', fontSize: '1.35rem'}}>🔧 What We Do:</h3>
    <ul style={{textAlign: 'left', fontSize: '1.18rem', margin: '1.2rem 0 2.2rem 2.2rem', lineHeight: 1.7}}>
      <li><b>Workshops & Training:</b> Interactive sessions on leadership, project management, financial literacy, digital skills, and more.</li>
      <li><b>Mentorship Programs:</b> Pairing emerging leaders with experienced mentors for guidance and support.</li>
      <li><b>Organizational Development:</b> Helping grassroots groups and NGOs improve their governance, planning, and impact measurement.</li>
      <li><b>Resource Access:</b> Providing toolkits, learning materials, and ongoing support for continuous growth.</li>
    </ul>
    <h3 style={{color: '#ff6600', textAlign: 'left', fontSize: '1.35rem'}}>🎯 Our Impact:</h3>
    <ul style={{textAlign: 'left', fontSize: '1.18rem', margin: '1.2rem 0 2.2rem 2.2rem', lineHeight: 1.7}}>
      <li>Over <b>[insert number]</b> individuals and organizations trained in key skills.</li>
      <li><b>[Insert number]%</b> increase in project success rates among trained groups.</li>
      <li>Stronger, more resilient community organizations able to sustain their own initiatives.</li>
    </ul>
    <h3 style={{color: '#ff6600', textAlign: 'left', fontSize: '1.35rem'}}>🌍 Why It Matters:</h3>
    <p style={{fontSize: '1.25rem', marginBottom: '2rem', textAlign: 'left', lineHeight: 1.7}}>
      Capacity building is about more than just skills—it's about confidence, leadership, and the ability to create lasting change. When communities are equipped to solve their own challenges, progress becomes sustainable and self-driven.
    </p>
    <blockquote style={{fontStyle: 'italic', color: '#555', borderLeft: '4px solid #ea321d', paddingLeft: '1.2rem', margin: '2.5rem 0', textAlign: 'left', fontSize: '1.18rem', lineHeight: 1.7}}>
      “Empower a community with knowledge, and you ignite a future of possibilities.”
    </blockquote>
  </motion.div>
);

export default ProgramHighlightCapacity; 