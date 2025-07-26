import React from 'react';
import { motion } from 'framer-motion';
import { FaRegLightbulb } from 'react-icons/fa';
import future01 from '../assets/images/future01.jpeg';
import future02 from '../assets/images/future02.jpeg';
import future03 from '../assets/images/future03.jpeg';
import future04 from '../assets/images/future04.jpeg';
import future05 from '../assets/images/future05.jpeg';
import future06 from '../assets/images/future06.jpeg';
import future07 from '../assets/images/future07.jpeg';
import future08 from '../assets/images/future08.jpeg';
import future09 from '../assets/images/future09.jpeg';
import future10 from '../assets/images/future10.jpeg';
import future11 from '../assets/images/future11.jpeg';
import future12 from '../assets/images/future12.jpeg';
import future13 from '../assets/images/future13.jpg';
import future14 from '../assets/images/future14.jpeg';
import future15 from '../assets/images/future15.jpeg';
import future16 from '../assets/images/future16.jpeg';
import future17 from '../assets/images/future17.jpeg';
import future18 from '../assets/images/future18.jpeg';
import future19 from '../assets/images/future19.jpeg';
import future20 from '../assets/images/future20.jpeg';
import future21 from '../assets/images/future21.jpeg';
import future22 from '../assets/images/future22.jpeg';


const planImages = [future01, future02, future03, future04, future05, future06, future07, future08, future09, future10, future11, future12, future13, future14, future15, future16, future17, future18, future19, future20, future21, future22];

const futurePlans = [
  'Promote unity and harmony in society and organize events to resolve social conflicts.',
  'Establish and manage schools, colleges, and other educational institutions in underserved areas.',
  'Provide technical education through engineering colleges, medical colleges, management institutes, ITIs, polytechnics, nursing colleges, computer centers, etc. including skill development like tailoring, embroidery, crafts, and digital education.',
  'Support and uplift Scheduled Castes, Scheduled Tribes, and Other Backward Classes.',
  'Conduct livelihood training programs like tailoring, embroidery, crafts, handloom, jute, jewellery, and computer training.',
  'Work on environmental conservation, tree plantation, renewable energy, water conservation, and biodiversity awareness.',
  'Promote scientific temperament and awareness of science and technology.',
  'Empower women by providing skill training and income generation support.',
  'Establish and manage facilities for senior citizens, women shelters, child care, and orphanages.',
  'Work for rural development and support poor families through government schemes and self-reliance programs.',
  'Promote health awareness, organize eye camps, blood donation, health checkups, and raise awareness about diseases like AIDS, TB, cancer, and malnutrition.',
  'Promote animal welfare and organic farming techniques. Educate farmers on crop safety and protection.',
  'Uplift differently-abled and mentally challenged individuals by providing education and health support.',
  'Raise awareness and act against social evils like untouchability, dowry, child marriage, and discrimination based on gender, caste, or religion.',
  'Encourage social values like inter-caste marriages and respect for women through awareness programs.',
  'Promote sports, yoga, physical fitness, and wellness practices.',
  'Operate all development programs for social upliftment and conduct charitable activities.',
  'Organize cultural, religious, and public events involving the community.',
  'Promote national unity, integrity, and patriotism through celebrations and public awareness.',
  'Provide aid to victims of natural disasters like earthquakes, floods, tsunamis, and cyclones.',
  'Educate and create awareness on water conservation and ground water management.',
  'Promote soil and water conservation, rainwater harvesting, and awareness programs for the same.'
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.04 } })
};

const FuturePlans = () => (
  <div style={{
    minHeight: '100vh',
    background: 'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)',
    fontFamily: `'Poppins', sans-serif`,
    paddingTop: '5rem',
    paddingBottom: '3rem'
  }}>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{
        maxWidth: 1000,
        margin: '0 auto',
        padding: '2.5rem 1.5rem',
        background: 'rgba(255, 255, 255, 0.96)',
        borderRadius: 22,
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <FaRegLightbulb size={48} color="#ffb300" style={{ marginBottom: '0.5rem', filter: 'drop-shadow(0 2px 8px #ffe082)' }} />
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 800,
          color: '#1D2BAA',
          marginBottom: '0.3rem'
        }}>
          Our Future Plans
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#444',
          maxWidth: 700,
          margin: '0 auto',
          lineHeight: 1.7
        }}>
          We're working on a wide range of impactful goals designed to bring long-term change to communities across India.
        </p>
      </div>

      <ol style={{
        paddingLeft: 0,
        listStyle: 'none',
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '1.4rem'
      }}>
        {futurePlans.map((plan, idx) => (
          <motion.li
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={fadeUp}
            style={{
              background: '#fff',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              borderLeft: `6px solid ${idx % 2 === 0 ? '#1D2BAA' : '#ffb300'}`,
              borderRadius: 16,
              padding: '1.1rem 1.4rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              transition: 'transform 0.2s ease',
              minHeight: 90
            }}
            whileHover={{ scale: 1.015 }}
          >
            <img
              src={planImages[idx]}
              alt={`Future Plan ${idx + 1}`}
              style={{
                width: 70,
                height: 70,
                objectFit: 'cover',
                borderRadius: 12,
                flexShrink: 0,
                boxShadow: '0 3px 8px rgba(0,0,0,0.1)'
              }}
            />
            <div>
              <span style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: idx % 2 === 0 ? '#1D2BAA' : '#ffb300'
              }}>
                {idx + 1}.
              </span>
              <p style={{
                marginTop: 4,
                color: '#222',
                fontSize: '1rem',
                fontWeight: 500,
                lineHeight: 1.6
              }}>
                {plan}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </motion.div>
  </div>
);

export default FuturePlans;
