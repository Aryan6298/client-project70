import React from 'react';
import img1 from '../assets/images/service01.jpg';
import img2 from '../assets/images/service02.jpeg';
import img3 from '../assets/images/service03.jpg';
import img4 from '../assets/images/service04.webp';
import './PartnersSection.css';

const partners = [img1, img2, img3, img4];

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <h2>Our Partners & Supporters</h2>
      <div className="partners-logos">
        {partners.map((img, idx) => (
          <img src={img} alt={`Partner ${idx + 1}`} key={idx} loading="lazy" />
        ))}
      </div>
    </section>
  );
};

export default PartnersSection; 