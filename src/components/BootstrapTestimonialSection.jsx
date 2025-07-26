import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: 'Amay Foundation organized a clean-up drive that transformed our neighborhood park. Their dedication to environmental conservation is truly inspiring!',
    name: 'Ajay Kumar',
    role: 'Community Member',
    initials: 'AK'
  },
  {
    quote: 'The tree plantation event was inspiring. Our community feels greener and more hopeful. Their commitment to sustainability is making a real difference.',
    name: 'Kavita Mehta',
    role: 'Local Resident',
    initials: 'KM'
  },
  {
    quote: 'Thanks to Amay Foundation, we learned how to manage waste better and keep our area clean. Their workshops are informative and practical.',
    name: 'Rahul Sharma',
    role: 'Volunteer',
    initials: 'RS'
  }
];

const BootstrapTestimonialSection = () => {
  useEffect(() => {
    const initCarousel = async () => {
      try {
        if (typeof window !== 'undefined') {
          // Import Bootstrap JS and get the Carousel module
          const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
          
          const carousel = document.getElementById('testimonialCarousel');
          if (carousel && bootstrap.Carousel) {
            new bootstrap.Carousel(carousel, {
              interval: 4000,
              ride: 'carousel',
              wrap: true
            });
          }
        }
      } catch (error) {
        console.error('Error initializing carousel:', error);
      }
    };

    initCarousel();
  }, []);

  return (
    <motion.section 
      className="container py-5 d-flex flex-column align-items-center justify-content-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
    <style>{`
      .testimonial-section {
        background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.98));
        backdrop-filter: blur(10px);
        border-top: 4px solid #39b54a;
      }
      
      .testimonial-initials {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        font-weight: bold;
        color: white;
        background: linear-gradient(135deg, #39b54a, #39b54a);
        box-shadow: 0 8px 24px rgba(255, 102, 0, 0.2);
        position: relative;
        z-index: 1;
      }

      .testimonial-quote {
        font-size: 1.1rem;
        line-height: 1.7;
        color: #444;
        position: relative;
        z-index: 0;
      }

      .quote-icon {
        position: absolute;
        top: -15px;
        left: -10px;
        color: rgba(255, 102, 0, 0.1);
        font-size: 4rem;
        z-index: -1;
      }

      .testimonial-name {
        color: #1D2BAA;
        font-weight: 600;
        margin: 0;
      }

      .testimonial-role {
        color: #39b54a;
        font-size: 0.9rem;
        font-weight: 500;
      }

      .carousel-control-prev,
      .carousel-control-next {
        width: 40px;
        height: 40px;
        background: white;
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
        opacity: 1;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        margin: 0 -20px;
        border: 2px solid #39b54a;
      }

      .carousel-control-prev:hover,
      .carousel-control-next:hover {
        background: #fff7f2;
      }

      .carousel-control-prev-icon,
      .carousel-control-next-icon {
        filter: invert(48%) sepia(90%) saturate(2299%) hue-rotate(346deg) brightness(101%) contrast(101%);
      }

      .review-btn {
        background: linear-gradient(135deg, #39b54a, #39b54a);
        border: none;
        padding: 0.8rem 2rem;
        font-weight: 600;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border-radius: 50px;
      }

      .review-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(255, 102, 0, 0.2);
        background: linear-gradient(135deg, #39b54a, #39b54a);
      }

      .section-title {
        position: relative;
        display: inline-block;
        color: #1D2BAA;
        font-weight: 700;
        padding-bottom: 15px;
        margin: 0 auto;
        text-align: center;
      }

      .section-title::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 3px;
        background: #39b54a;
        border-radius: 2px;
      }

      .title-wrapper {
        width: 100%;
        text-align: center;
        margin-bottom: 2rem;
      }

      @media (max-width: 767.98px) {
        .testimonial-initials {
          width: 60px;
          height: 60px;
          font-size: 18px;
        }
        .testimonial-quote {
          font-size: 1rem;
          padding: 0 1rem;
        }
        .quote-icon {
          font-size: 3rem;
        }
      }
    `}</style>
      <motion.div 
        className="testimonial-section rounded-4 shadow-lg p-4 p-md-5 w-100"
        style={{maxWidth: '800px'}}
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="title-wrapper">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            What People Say About Us
          </motion.h2>
        </div>
        <div 
          id="testimonialCarousel" 
          className="carousel slide" 
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >
        <div className="carousel-inner">
          {testimonials.map((t, i) => (
            <div className={`carousel-item${i === 0 ? ' active' : ''}`} key={i}>
              <div className="d-flex flex-column align-items-center">
                  <motion.div 
                    className="testimonial-initials mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                  {t.initials}
                  </motion.div>
                  <div className="position-relative mb-4">
                    <FaQuoteLeft className="quote-icon" />
                    <blockquote className="testimonial-quote text-center px-md-4">
                      {t.quote}
                </blockquote>
                  </div>
                  <p className="testimonial-name mb-1">{t.name}</p>
                  <p className="testimonial-role mb-0">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        <motion.div 
          className="text-center mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="mb-3" style={{ color: '#666' }}>Loved our work? Share your experience and help others discover us!</p>
        <a
          href="https://www.google.com/search?sca_esv=bff55ff221f7a59a&biw=1396&bih=632&sxsrf=AE3TifPso3Mda9PHE14ZW9_ou2PcoaG3TQ:1753514702747&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E3nuWSPb10Hd8R-qRITjbkkvXFVHQu7onSQlvT7wpuvhDGBoUKWKOG-y61JJygfWEqOjdpeWJxqmeK6hxQeqJ9bL5Y9T&q=Amay+Foundation+Reviews&sa=X&ved=2ahUKEwjOxtyn_9mOAxWVUGwGHYOOPcQQ0bkNegQIHRAD"
          target="_blank"
          rel="noopener noreferrer"
            className="btn review-btn text-white"
        >
          Leave your Review
        </a>
        </motion.div>
      </motion.div>
    </motion.section>
);
};

export default BootstrapTestimonialSection; 