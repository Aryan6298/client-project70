import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import newspaper01 from '../assets/images/newspaper01.jpg';
import newspaper02 from '../assets/images/newspaper02.jpg';
import newspaper03 from '../assets/images/newspaper03.jpg';
import newspaper04 from '../assets/images/newspaper04.jpg';
import newspaper05 from '../assets/images/newspaper05.jpg';
import newspaper06 from '../assets/images/newspaper06.jpg';
import newspaper07 from '../assets/images/newspaper07.jpg';
import teamImg from '../assets/images/full-team.webp';
import gallery01 from '../assets/images/crousal-img03-gallery01.webp';
import gallery02 from '../assets/images/gallery02.webp';
import gallery04 from '../assets/images/gallery04.webp';
import gallery05 from '../assets/images/gallery05.webp';
import gallery06 from '../assets/images/crousal-img02-gallery06.webp';
import gallery07 from '../assets/images/gallery07.webp';
import gallery09 from '../assets/images/gallery09 (1).webp';
import gallery10 from '../assets/images/gallery10.webp';
import gallery11 from '../assets/images/crousal-img04-gallery11.webp';
import gallery13 from '../assets/images/gallery13.webp';
import gallery14 from '../assets/images/gallery14.webp';
import gallery15 from '../assets/images/gallery15.webp';
import gallery16 from '../assets/images/livelyhood02.jpg';



const newspaperImages = [
  { src: newspaper01, caption: 'Amay Foundation featured in the local newspaper for community service and environmental initiatives.' },
  { src: newspaper02, caption: 'Coverage of our recent environmental awareness campaign.' },
  { src: newspaper03, caption: 'Highlighting our tree plantation drive in the press.' },
  { src: newspaper04, caption: 'Media recognition in events.' },
  { src: newspaper05, caption: 'Spotlight on our volunteers making a difference.' },
  { src: newspaper06, caption: 'Our efforts to promote sustainability featured in the news.' },
  { src: newspaper07, caption: 'Celebrating our achievements with the community in the media.' },
];

const galleryImages = [
  { src: teamImg, caption: 'Meet our dedicated team, the driving force behind every successful initiative.' },
  { src: gallery01, caption: 'Collaborative efforts to restore and protect our local ecosystems.' },
  { src: gallery02, caption: 'Teamwork makes the dream work in our mission for a greener planet.' },
  { src: gallery04, caption: "United for change: our team's commitment to environmental sustainability." },
  { src: gallery05, caption: 'Every hand helps in our community-driven conservation projects.' },
  { src: gallery06, caption: 'Celebrating milestones in our journey towards a cleaner environment.' },
  { src: gallery07, caption: 'Spreading awareness and inspiring action for a sustainable future.' },
  { src: gallery09, caption: 'Hands-on learning: engaging the next generation in environmental stewardship.' },
  { src: gallery10, caption: 'Community members coming together for a common cause.' },
  { src: gallery11, caption: 'Making a difference, one step at a time.' },
  { src: gallery13, caption: 'Our volunteers in action during a recent event.' },
  { src: gallery14, caption: 'A greener tomorrow starts with us today.' },
  { src: gallery15, caption: 'Celebrating our achievements with the community.' },
  { src: gallery16, caption: 'Empowering communities through sustainable livelihood programs.' },
];

const Gallery = () => (
  <div className="container py-5" style={{ marginTop: '80px' }}>
    <style>{`
      .media-section h2 {
        color: #1D2BAA;
        font-weight: 700;
        margin-bottom: 2rem;
        text-align: center;
        position: relative;
      }
      .media-section h2::after {
        content: '';
        display: block;
        margin: 0.5rem auto 0 auto;
        width: 60px;
        height: 3px;
        background: #ff6600;
        border-radius: 2px;
      }
      .media-img-card, .gallery-grid-item {
        transition: box-shadow 0.3s, transform 0.3s;
        border-radius: 1rem;
        overflow: hidden;
        background: #fff;
        box-shadow: 0 2px 16px rgba(29,44,170,0.07);
      }
      .media-img-card:hover, .gallery-grid-item:hover {
        box-shadow: 0 8px 32px rgba(255,102,0,0.13);
        transform: translateY(-4px) scale(1.02);
      }
      .media-img, .gallery-img {
        width: 100%;
        height: 260px;
        object-fit: cover;
        display: block;
      }
      .media-img-caption, .gallery-caption {
        padding: 1rem;
        font-size: 1rem;
        color: #444;
        text-align: center;
        background: #f8f9fa;
      }
      .gallery-section .gallery-grid, .team-section .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 2rem;
      }
      @media (max-width: 768px) {
        .media-img, .gallery-img {
          height: 180px;
        }
        .gallery-section .gallery-grid, .team-section .gallery-grid {
          gap: 1rem;
        }
      }
    `}</style>
    {/* Newspaper Section */}
    <section className="media-section mb-5">
      <h2>In the News</h2>
      <div className="row g-4 justify-content-center">
        {newspaperImages.map((img, idx) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
            <div className="media-img-card h-100 d-flex flex-column">
              <img src={img.src} alt={img.caption} className="media-img" />
              <div className="media-img-caption flex-grow-1">{img.caption}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Our Team Section (now includes all gallery images) */}
    <section className="media-section team-section">
      <h2>Our Team in Action</h2>
      <div className="gallery-grid">
        {galleryImages.map((img, idx) => (
          <div className="gallery-grid-item" key={idx}>
            <img src={img.src} alt={img.caption} className="gallery-img" loading="lazy" />
            <div className="gallery-caption">{img.caption}</div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );

export default Gallery; 