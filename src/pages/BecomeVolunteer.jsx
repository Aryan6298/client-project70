import React from 'react';
import volunteerImg from '../assets/images/volunteer.jpg';
import './BecomeVolunteer.css';
import { motion } from 'framer-motion';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/yourFormId"; // Replace with your Formspree form ID

const BecomeVolunteer = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    });
  };

  return (
    <motion.div className="volunteer-main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div className="volunteer-hero"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.img
          src={volunteerImg}
          alt="Become a Volunteer"
          className="volunteer-img"
          loading="lazy"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(255,102,0,0.13)' }}
        />
        <motion.div className="volunteer-hero-content"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1>Become a Volunteer</h1>
          <p>
            Join Amay Foundation as a volunteer and help us make a real difference! Whether you're passionate about the environment, community service, or just want to give back, your time and energy can create lasting change.
          </p>
        </motion.div>
      </motion.div>
      <div className="volunteer-form-section">
        <motion.h2
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >Sign Up to Volunteer</motion.h2>
        {!submitted ? (
          <form
            className="volunteer-form"
            action={FORMSPREE_ENDPOINT}
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Why do you want to volunteer?" rows={4} required />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <motion.div className="volunteer-success"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Thank you for volunteering! We've received your submission and will be in touch soon.
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default BecomeVolunteer; 