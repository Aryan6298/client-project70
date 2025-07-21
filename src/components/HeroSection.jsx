import React, { useEffect, useState, useCallback, useRef } from 'react';
import './HeroSection.css';
import heroBg1 from '../assets/images/crousal-img01.jpg';
import heroBg2 from '../assets/images/crousal-img02.jpg';
import heroBg3 from '../assets/images/crousal-img03.jpg';
import heroBg4 from '../assets/images/crousal-img04.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: heroBg1,
    headline: "Let's Clean Our Planet",
    tagline: 'Together we can create a greener, cleaner, and healthier world.',
  },
  {
    image: heroBg2,
    headline: 'Empowering Environmental Action',
    tagline: 'Community cleanups, tree plantations, and awareness for a better tomorrow.',
  },
  {
    image: heroBg3,
    headline: 'Support a Greener Future',
    tagline: 'Your contribution helps restore and protect our environment.',
  },
  {
    image: heroBg4,
    headline: 'Join Our Mission',
    tagline: 'Volunteer, donate, or spread the word to make a real impact.',
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [animateOverlay, setAnimateOverlay] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [initialWhite, setInitialWhite] = useState(true);
  const [initialOverlay, setInitialOverlay] = useState(true);
  const [animateInitialOverlay, setAnimateInitialOverlay] = useState(false);
  const [textAnimated, setTextAnimated] = useState(true);
  const [lightCover, setLightCover] = useState(false);
  const textTimeoutRef = useRef(null);
  const intervalRef = useRef(null);
  const overlayTimeoutRef = useRef(null);
  const slideTimeoutRef = useRef(null);
  const initialTimeoutRef = useRef(null);
  const initialOverlayTimeoutRef = useRef(null);
  const lightCoverTimeoutRef = useRef(null);

  // Initial overlay slides from right to left over white bg
  useEffect(() => {
    setInitialWhite(true);
    setInitialOverlay(true);
    setAnimateInitialOverlay(false);
    initialTimeoutRef.current = setTimeout(() => {
      setAnimateInitialOverlay(true); // Start sliding overlay
      initialOverlayTimeoutRef.current = setTimeout(() => {
        setInitialWhite(false);
        setInitialOverlay(false);
        triggerOverlayAnimation(); // Start normal cycle
      }, 1000); // Duration of sliding overlay
    }, 200); // Short delay before sliding starts
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (overlayTimeoutRef.current) clearTimeout(overlayTimeoutRef.current);
      if (slideTimeoutRef.current) clearTimeout(slideTimeoutRef.current);
      if (initialTimeoutRef.current) clearTimeout(initialTimeoutRef.current);
      if (initialOverlayTimeoutRef.current) clearTimeout(initialOverlayTimeoutRef.current);
      if (textTimeoutRef.current) clearTimeout(textTimeoutRef.current);
    };
    // eslint-disable-next-line
  }, []);

  // Retrigger text animation on every slide change or when lightCover is shown
  useEffect(() => {
    setTextAnimated(false);
    const timeout = setTimeout(() => setTextAnimated(true), 10);
    return () => clearTimeout(timeout);
  }, [current, lightCover]);

  const triggerOverlayAnimation = useCallback(() => {
    setShowOverlay(true); // Show the dark overlay
    setAnimateOverlay(false); // Reset animation
    setLightCover(true); // Show light cover
    if (overlayTimeoutRef.current) clearTimeout(overlayTimeoutRef.current);
    if (slideTimeoutRef.current) clearTimeout(slideTimeoutRef.current);
    if (textTimeoutRef.current) clearTimeout(textTimeoutRef.current);
    if (lightCoverTimeoutRef.current) clearTimeout(lightCoverTimeoutRef.current);
    overlayTimeoutRef.current = setTimeout(() => {
      setAnimateOverlay(true); // Start sliding animation after 1s
      // After animation (1s), wait 3s before next slide
      lightCoverTimeoutRef.current = setTimeout(() => {
        setLightCover(false); // Hide light cover after fade
      }, 900); // Light cover fades out
      slideTimeoutRef.current = setTimeout(() => {
        setShowOverlay(false); // Hide overlay for next slide
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 3000);
    }, 1000);
  }, []);

  const nextSlide = useCallback(() => {
    triggerOverlayAnimation();
  }, [triggerOverlayAnimation]);

  const prevSlide = () => {
    setCurrent((prev) => {
      const next = prev === 0 ? slides.length - 1 : prev - 1;
      return next;
    });
    triggerOverlayAnimation();
  };

  useEffect(() => {
    if (!initialWhite && !initialOverlay) {
      triggerOverlayAnimation();
    }
    // eslint-disable-next-line
  }, [current]);

  return (
    <section className="hero">
      {initialWhite && initialOverlay ? (
        <div style={{ width: '100%', height: '100vh', background: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div className={`hero-initial-overlay${animateInitialOverlay ? ' animate' : ''}`}></div>
        </div>
      ) : initialWhite ? (
        <div style={{ width: '100%', height: '100vh', background: '#fff' }}></div>
      ) : (
        <div className="hero-slider-wrapper" style={{ transform: `translateX(-${current * 25}%)` }}>
          {slides.map((slide, idx) => (
            <div
              key={slide.headline}
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {showOverlay && current === idx && (
                <div className={`hero-animated-overlay${animateOverlay ? ' animate' : ''}`}></div>
              )}
              <div className="hero__overlay">
                <div className="hero__content">
                  <h1 className={`hero__headline${textAnimated ? ' hero__text-animate' : ''}`} key={current + '-headline'}>{slide.headline}</h1>
                  <p className={`hero__tagline${textAnimated ? ' hero__text-animate' : ''}`} key={current + '-tagline'}>{slide.tagline}</p>
                  <div className="hero__actions">
                    <Link to="/about" className="hero__cta hero__cta--primary">Know More</Link>
                    <Link to="/join-us" className="hero__cta hero__cta--secondary">Join Us</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <button onClick={prevSlide} className="hero__arrow hero__arrow--left" aria-label="Previous Slide">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button onClick={nextSlide} className="hero__arrow hero__arrow--right" aria-label="Next Slide">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <div className="hero__dots">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              triggerOverlayAnimation();
            }}
            className={`hero__dot${current === index ? ' hero__dot--active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection; 