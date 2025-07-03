import React from 'react';
import { Link } from 'react-router-dom';
import './GalleryCarousel.css';
import gallery01 from '../assets/images/gallery01.jpg';
import gallery02 from '../assets/images/gallery02.jpg';
import gallery03 from '../assets/images/gallery03.jpg';
import gallery04 from '../assets/images/gallery04.jpg';
import gallery05 from '../assets/images/gallery05.jpg';
import gallery06 from '../assets/images/gallery06.jpg';
import gallery07 from '../assets/images/gallery07.jpg';
import gallery09 from '../assets/images/gallery09.jpg';
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

const images = galleryImages.concat(galleryImages); // for infinite loop

const GalleryCarousel = () => (
  <section className="gallery-carousel-section">
    <h2 className="gallery-carousel-heading">
      <Link to="/gallery" style={{ color: 'inherit', textDecoration: 'none' }}>Gallery</Link>
    </h2>
    <div className="gallery-carousel-wrapper">
      <div className="gallery-carousel-track">
        {images.map((img, idx) => (
          <div className="gallery-carousel-image-container" key={idx}>
            <img src={img.src} alt={`Gallery ${idx+1}`} className="gallery-carousel-image" loading="lazy" />
            <div className="gallery-carousel-overlay">
              <p className="gallery-carousel-caption">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GalleryCarousel; 