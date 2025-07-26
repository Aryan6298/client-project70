import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './JoinUs.css';
import joinUsBg from '../assets/images/volunteer.jpg';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkgzrqyg"; // Replace with your Formspree form ID

const JoinUs = () => {
  const [role, setRole] = useState('Volunteer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    role: 'Volunteer',
    countryCode: '+91'
  });
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [countryCodeError, setCountryCodeError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      setEmailError(gmailRegex.test(value) ? '' : 'Email must be a valid @gmail.com address');
    }

    if (name === 'countryCode') {
      const countryRegex = /^\+\d{1,4}$/;
      setCountryCodeError(countryRegex.test(value) ? '' : 'Country code must start with + followed by digits');
    }

    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, phone: digitsOnly }));
      setPhoneError(digitsOnly.length === 10 ? '' : 'Phone number must be exactly 10 digits');
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    setFormData(prev => ({ ...prev, role: newRole }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const countryRegex = /^\+\d{1,4}$/;
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (
      !gmailRegex.test(formData.email) ||
      formData.phone.length !== 10 ||
      !countryRegex.test(formData.countryCode)
    ) {
      alert("Please correct the errors in the form.");
      return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          message: '',
          role: 'Volunteer',
          countryCode: '+91'
        });
        setRole('Volunteer');
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please check your connection and try again.");
    }
  };

  return (
    <div className="join-us-page" style={{ backgroundImage: `url(${joinUsBg})` }}>
      <motion.div
        className="form-container"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="join-us-title">Join Our Mission</h1>
        <p className="join-us-subtitle">Whether you want to volunteer for events or become a core team member, we have a place for you.</p>

        {submitted ? (
          <motion.div
            className="success-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3>Thank You!</h3>
            <p>Your application has been received. We will get back to you soon.</p>
          </motion.div>
        ) : (
          <>
            <div className="role-selector">
              <button
                className={`role-btn ${role === 'Volunteer' ? 'active' : ''}`}
                onClick={() => handleRoleChange('Volunteer')}
              >
                Join as a Volunteer
              </button>
              <button
                className={`role-btn ${role === 'Team Member' ? 'active' : ''}`}
                onClick={() => handleRoleChange('Team Member')}
              >
                Join as a Team Member
              </button>
            </div>

            <form onSubmit={handleSubmit} className="join-us-form">
              <input type="hidden" name="role" value={role} />

              <div className="form-group">
                <label htmlFor="name">Full Name (Required)</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address (Required - must be @gmail.com)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                {emailError && <p style={{ color: 'red', fontSize: '0.9rem' }}>{emailError}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number (Required - 10 digits)</label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <input
                    type="text"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    style={{ width: '80px' }}
                    required
                  />
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    maxLength="10"
                    required
                  />
                </div>
                {countryCodeError && <p style={{ color: 'red', fontSize: '0.9rem' }}>{countryCodeError}</p>}
                {phoneError && <p style={{ color: 'red', fontSize: '0.9rem' }}>{phoneError}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="address">Address (Required)</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Why do you want to join us?</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Apply Now</button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default JoinUs;
