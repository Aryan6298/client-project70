import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProgramHighlight.css';

import studyMallImg from '../assets/images/gallery06.jpg';
import studyFinImg from '../assets/images/sapling.jpg';
import digiLibraryImg from '../assets/images/gallery12.jpg';

const programs = [
  {
    image: studyMallImg,
    title: 'Clean-Up Drives',
    description: 'Organizing community clean-up events to remove waste and beautify our surroundings.',
    buttonText: 'Read more',
    link: '/programs#cleanup'
  },
  {
    image: studyFinImg,
    title: 'Tree Plantation',
    description: 'Planting trees to restore green cover and combat climate change.',
    buttonText: 'Read More',
    link: '/programs#treeplantation'
  },
  {
    image: digiLibraryImg,
    title: 'Waste Management',
    description: 'Promoting recycling, waste segregation, and responsible disposal practices.',
    buttonText: 'Read more',
    link: '/programs#wastemanagement'
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