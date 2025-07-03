import React from 'react';
import testimonialImg from '../assets/images/service01.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const testimonials = [
  {
    quote: 'Amay Foundation organized a clean-up drive that transformed our neighborhood park. We are so grateful!',
    name: 'Local Resident',
    image: testimonialImg
  },
  {
    quote: 'The tree plantation event was inspiring. Our community feels greener and more hopeful.',
    name: 'Community Volunteer',
    image: testimonialImg
  },
  {
    quote: 'Thanks to Amay Foundation, we learned how to manage waste better and keep our area clean.',
    name: 'Youth Group Leader',
    image: testimonialImg
  }
];

const BootstrapTestimonialSection = () => (
  <section className="container py-4 d-flex flex-column align-items-center justify-content-center">
    <style>{`
      .testimonial-img {
        width: 80px;
        height: 80px;
        object-fit: cover;
      }
      @media (max-width: 767.98px) {
        .testimonial-img {
          width: 60px;
          height: 60px;
        }
      }
    `}</style>
    <div className="bg-white rounded-4 shadow p-3 p-md-5 w-100" style={{maxWidth: '540px'}}>
      <h2 className="text-center mb-4">Testimonials</h2>
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {testimonials.map((t, i) => (
            <div className={`carousel-item${i === 0 ? ' active' : ''}`} key={i}>
              <div className="d-flex flex-column align-items-center">
                <img src={t.image} alt={t.name} className="rounded-circle mb-3 testimonial-img" />
                <blockquote className="blockquote mb-3 text-center">
                  <p className="mb-0">"{t.quote}"</p>
                </blockquote>
                <footer className="blockquote-footer">{t.name}</footer>
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
      <div className="text-center mt-4">
        <p className="mb-2">Loved our work? Share your experience and help others discover us!</p>
        <a
          href="https://www.google.com/search?q=amay+foundation+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-warning fw-bold px-4 py-2"
          style={{ borderRadius: '2rem', color: '#fff', background: '#ff6600', border: 'none' }}
        >
          Leave a Google Review
        </a>
      </div>
    </div>
  </section>
);

export default BootstrapTestimonialSection; 