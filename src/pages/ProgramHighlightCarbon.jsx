import React from 'react';
import { motion } from 'framer-motion';
import studyFinImg from '../assets/images/sapling.jpg';

const ProgramHighlightCarbon = () => (
  <motion.div
    className="program-highlight-detail-page"
    style={{marginTop: '80px', padding: '2rem', maxWidth: 900, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <h1 style={{fontSize: '2.6rem', marginBottom: '0.7rem'}}>🌿 Carbon Footprint</h1>
    <h2 style={{fontWeight: 500, color: '#ea321d', marginBottom: '2rem', fontSize: '2rem'}}>Reducing Emissions, Inspiring Change</h2>
    <img src={studyFinImg} alt="Carbon Footprint" style={{maxWidth: 400, width: '100%', borderRadius: 12, margin: '2.5rem 0'}} />
    <p style={{fontSize: '1.25rem', marginBottom: '2rem', textAlign: 'left', lineHeight: 1.7}}>
      At <b>Amay Foundation</b>, we are committed to combating climate change by helping communities understand, reduce, and offset their carbon footprint. Our Carbon Footprint Program focuses on practical solutions and education to promote sustainable living at every level.
    </p>
    <h3 style={{marginTop: '2.2rem', color: '#ff6600', textAlign: 'left', fontSize: '1.35rem'}}>🔧 What We Do:</h3>
    <ul style={{textAlign: 'left', fontSize: '1.18rem', margin: '1.2rem 0 2.2rem 2.2rem', lineHeight: 1.7}}>
      <li><b>Awareness Campaigns:</b> Educating the public about the sources and impacts of carbon emissions.</li>
      <li><b>Green Practices:</b> Promoting energy efficiency, waste reduction, and eco-friendly habits in homes and businesses.</li>
      <li><b>Tree Plantation Drives:</b> Organizing large-scale tree planting events to absorb CO₂ and restore green cover.</li>
      <li><b>Carbon Audits:</b> Helping organizations and individuals measure and manage their carbon output.</li>
    </ul>
    <h3 style={{color: '#ff6600', textAlign: 'left', fontSize: '1.35rem'}}>🎯 Our Impact:</h3>
    <ul style={{textAlign: 'left', fontSize: '1.18rem', margin: '1.2rem 0 2.2rem 2.2rem', lineHeight: 1.7}}>
      <li>Over <b>[insert number]</b> trees planted, offsetting tons of CO₂.</li>
      <li><b>[Insert number]%</b> reduction in average household emissions among program participants.</li>
      <li>Community-wide adoption of green practices and renewable energy solutions.</li>
    </ul>
    <h3 style={{color: '#ff6600', textAlign: 'left', fontSize: '1.35rem'}}>🌍 Why It Matters:</h3>
    <p style={{fontSize: '1.25rem', marginBottom: '2rem', textAlign: 'left', lineHeight: 1.7}}>
      Reducing our carbon footprint is essential for a healthier planet and a safer future. Every small change—when multiplied across communities—can make a big difference in the fight against climate change.
    </p>
    <blockquote style={{fontStyle: 'italic', color: '#555', borderLeft: '4px solid #ea321d', paddingLeft: '1.2rem', margin: '2.5rem 0', textAlign: 'left', fontSize: '1.18rem', lineHeight: 1.7}}>
      “The journey to a greener world begins with a single step—let’s take it together.”
    </blockquote>
  </motion.div>
);

export default ProgramHighlightCarbon; 