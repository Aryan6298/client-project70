import React from 'react';
import './AboutSection.css';
import { FaHandHoldingHeart, FaCut } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <>
      {/* WHO WE ARE Section */}
      <section className="about-section about-who" id="about">
        <div className="about-block">
          <h2 className="about-title-who">
            WHO <span className="about-title-red">WE ARE ?</span>
          </h2>
          <div className="about-divider">
            <span className="about-line" />
            <FaCut className="about-icon" />
            <span className="about-line" />
          </div>
          <p className="about-vision-black">
            Amay Foundation is a non-profit organization with a vision <b>"To inspire and lead communities towards a sustainable and environmentally conscious future"</b>.
          </p>
        </div>
      </section>

      {/* MISSION Section */}
      <section className="about-section about-mission-section">
        <div className="about-block">
          <h2 className="about-title">
            OUR <span className="about-title-red">MISSION</span>
          </h2>
          <div className="about-divider">
            <span className="about-line" />
            <FaHandHoldingHeart className="about-icon" />
            <span className="about-line" />
          </div>
          <p className="about-mission">
            Our mission at <b>Amay Foundation</b> is to protect, restore, and preserve the environment through active community participation, awareness campaigns, and innovative solutions for a cleaner world. We are committed to expanding our work to address many more causes for the betterment of society.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
