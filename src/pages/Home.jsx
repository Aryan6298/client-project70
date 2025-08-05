import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProgramHighlight from '../components/ProgramHighlight';
import AboutSection from '../components/AboutSection';

import BootstrapTestimonialSection from '../components/BootstrapTestimonialSection';
import PartnersSection from '../components/PartnersSection';
import GalleryCarousel from '../components/GalleryCarousel';

import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaChild, FaUniversity, FaUserPlus, FaUsers, FaHandsHelping, FaHandshake, FaRegClock, } from 'react-icons/fa';
import { FaPhotoVideo } from "react-icons/fa";

const counters = [
  { label: 'Lives Touched', value: '500+', icon: <FaChild size={48} /> },
  { label: 'Community Drives', value: '3+', icon: <FaPhotoVideo size={48} /> },
  { label: 'Partner NGOs', value: '1+', icon: <FaUniversity size={48} /> },
  { label: 'Volunteer Hours', value: '100+', icon: <FaUserPlus size={48} /> },
];

const animateCount = (el, to) => {
  // Support numbers with + or other non-numeric chars
  const match = (typeof to === 'string') ? to.match(/(\d+)/) : null;
  const end = match ? parseInt(match[1], 10) : parseInt(to, 10);
  const suffix = (typeof to === 'string') ? to.replace(/\d+/g, '') : '';
  let start = 0;
  const duration = 1800;
  const startTime = performance.now();
  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    el.textContent = Math.floor(progress * (end - start) + start).toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = end.toLocaleString() + suffix;
  };
  requestAnimationFrame(step);
};

const Home = () => {
  const counterRefs = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: 'ease-out-cubic' });
    // Animated counters
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counterRefs.current.forEach((ref, i) => {
              if (ref && !ref.dataset.animated) {
                animateCount(ref, counters[i].value);
                ref.dataset.animated = 'true';
              }
            });
          }
        });
      },
      { threshold: 0.5 }
    );
    if (counterRefs.current[0]) {
      observer.observe(counterRefs.current[0].parentNode.parentNode);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page-bg">
      <HeroSection />
      <div className="home-content-overlay">
        <ProgramHighlight />
        <div style={{ }} data-aos="fade-up" data-aos-delay="200">
          <AboutSection />
        </div>
        {/* Volunteer CTA Section */}
        <section className="volunteer-cta-section" style={{marginTop:'30px'}} data-aos="fade-up" data-aos-delay="300">
          <h2 className="volunteer-cta-title">BECOME VOLUNTEER</h2>
          <p className="volunteer-cta-desc">With an approach of giving back to society, our volunteers are helping us from across the world.</p>
          <Link to="/join-us" className="volunteer-cta-button">Join Us</Link>
        </section>
        <section className="counters-section" data-aos="fade-up" data-aos-delay="200">
          <div className="counters-grid">
            {counters.map((c, i) => (
              <div className="counter-card" key={i} data-aos="zoom-in" data-aos-delay={200 + i * 100}>
                <span className="counter-icon">{c.icon}</span>
                <div className="counter-value" ref={el => (counterRefs.current[i] = el)}>{c.value}</div>
                <div className="counter-label">{c.label}</div>
              </div>
            ))}
          </div>
        </section>
        <div data-aos="fade-up" data-aos-delay="500">
          <GalleryCarousel />
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
          <BootstrapTestimonialSection />
        </div>
        <div className="partners-section" data-aos="fade-up" data-aos-delay="700">
          <PartnersSection />
        </div>
      </div>
    </div>
  );
};

export default Home; 