import React, { useRef } from 'react';
import './Gallery.css';
import { motion, useAnimation, useInView } from 'framer-motion';

// Importing all gallery images
import gallery01 from '../assets/images/gallery01.jpg';
import gallery02 from '../assets/images/gallery02.jpg';
import gallery03 from '../assets/images/gallery03.jpg';
import gallery04 from '../assets/images/gallery04.jpg';
import gallery05 from '../assets/images/gallery05.jpg';
import gallery06 from '../assets/images/gallery06.jpg';
import gallery07 from '../assets/images/gallery07.jpg';
import gallery10 from '../assets/images/gallery10.jpg';
import gallery11 from '../assets/images/gallery11.jpg';
import gallery12 from '../assets/images/gallery12.jpg';
import gallery13 from '../assets/images/gallery13.jpg';
import gallery14 from '../assets/images/gallery14.jpg';
import gallery15 from '../assets/images/gallery15.jpg';
import gallery16 from '../assets/images/gallery16.jpg';

const galleryImages = [
  { src: gallery01, caption: 'Collaborative efforts to restore and protect our local ecosystems.' },
  { src: gallery02, caption: 'Teamwork makes the dream work in our mission for a greener planet.' },
  { src: gallery03, caption: 'Dedicated volunteers working together to conserve natural habitats.' },
  { src: gallery04, caption: "United for change: our team's commitment to environmental sustainability." },
  { src: gallery05, caption: 'Every hand helps in our community-driven conservation projects.' },
  { src: gallery06, caption: 'Planting seeds of hope for a more sustainable and vibrant future.' },
  { src: gallery07, caption: 'Our team in action, dedicated to preserving the beauty of our environment.' },
  { src: gallery10, caption: 'Working hand-in-hand to build a cleaner, healthier world for all.' },
  { src: gallery11, caption: 'Empowering communities through shared environmental stewardship.' },
  { src: gallery12, caption: 'The power of teamwork in creating lasting environmental impact.' },
  { src: gallery13, caption: 'From local clean-ups to large-scale projects, our team does it all.' },
  { src: gallery14, caption: 'Together, we are a force for nature and a voice for the environment.' },
  { src: gallery15, caption: 'Fostering a culture of conservation through teamwork and dedication.' },
  { src: gallery16, caption: 'Our shared passion for the environment fuels our collaborative success.' },
];

const Gallery = () => {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  // Responsive check for mobile
  const isMobile = window.innerWidth <= 700;

  React.useEffect(() => {
    if (isInView) {
      controls.start({ y: 0, opacity: 1, transition: { duration: 0.4 } });
    }
  }, [isInView, controls]);

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1 className="gallery-title">Our Environmental Journey</h1>
        <p className="gallery-intro">
          Explore moments from our journey, showcasing our team's collective effort and unwavering dedication to protecting and nurturing our environment.
        </p>
      </div>
      <div className="gallery-grid-container" ref={gridRef}>
        {galleryImages.map((image, index) => {
          if (index < 8) {
            return (
              <div className="gallery-card" key={index}>
                <motion.img
                  src={image.src}
                  alt={`Gallery Scene ${index + 1}`}
                  className="gallery-card-image"
                  loading="lazy"
                  initial={{ y: 60, opacity: 0 }}
                  animate={isMobile ? { y: 0, opacity: 1, transition: { duration: 0.4 } } : controls}
                  whileHover={{ scale: 1.02, boxShadow: '0 8px 18px rgba(255,102,0,0.13)' }}
                  style={{ touchAction: 'manipulation' }}
                />
                <div className="gallery-card-overlay">
                  <p className="gallery-card-caption">{image.caption}</p>
                </div>
              </div>
            );
          } else {
            return (
              <div className="gallery-card" key={index}>
                <img
                  src={image.src}
                  alt={`Gallery Scene ${index + 1}`}
                  className="gallery-card-image"
                  loading="lazy"
                  style={{ touchAction: 'manipulation' }}
                />
                <div className="gallery-card-overlay">
                  <p className="gallery-card-caption">{image.caption}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Gallery; 