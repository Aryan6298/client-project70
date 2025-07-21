import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProgramHighlight.css';

import studyMallImg from '../assets/images/livelyhood01.jpg';
import studyFinImg from '../assets/images/sapling.jpg';
import digiLibraryImg from '../assets/images/capacity-building01.jpg';

const programs = [
  {
    image: digiLibraryImg,
    title: 'Capacity Building',
    description: ' Our Capacity Building Program focuses on enhancing the skills, knowledge, and organizational strength of community members, local leaders, and partner organizations.',
    buttonText: 'Read more',
    link: '/programs/capacity'
  },
 
  {
    image: studyFinImg,
    title: ' Carbon Footprint',
    description: 'Our work focuses on reducing carbon emissions and promoting sustainable living practices at the grassroots level. We educate communities on environmental responsibility while implementing low-carbon solutions in our programs.',
    buttonText: 'Read More',
    link: '/programs/carbon'
  },
  {
    image: studyMallImg,
    title: 'Livelihood',
    description: 'Our Livelihood Program focuses on equipping individuals—especially women, youth, and marginalized communities—with the skills, resources, and confidence.',
    buttonText: 'Read more',
    link: '/programs/livelihood'
  }
];

const ProgramHighlight = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const revealed = useRef(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          revealed.current = true;
        }
      },
      { threshold: 0.6, rootMargin: '-100px 0px' }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY === 0) {
        setVisible(false);
        revealed.current = false;
      } else if (revealed.current) {
        setVisible(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="program-highlight-section" ref={sectionRef}>
      <div className={`program-highlight-container${visible ? ' visible' : ''}`}>
        {programs.map((program, index) => (
          <div className="program-card" key={index}>
            <img src={program.image} alt={program.title} className="program-card-image-rect" />
            <div className="program-card-content-rect">
              <h3 className="program-card-title">{program.title}</h3>
              <p className="program-card-description">{program.description}</p>
              <Link to={program.link} className="program-card-button">{program.buttonText}</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramHighlight; 