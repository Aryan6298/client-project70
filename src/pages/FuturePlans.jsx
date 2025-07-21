import React from 'react';
import { motion } from 'framer-motion';
import { FaRegLightbulb } from 'react-icons/fa';

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
    padding: 0,
    margin: 0
  }}>
    <motion.div
      style={{
        marginTop: '80px',
        maxWidth: 950,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '2.5rem 1.2rem 2.5rem 1.2rem',
        background: 'rgba(255,255,255,0.97)',
        borderRadius: 22,
        boxShadow: '0 8px 32px rgba(29,44,170,0.10)',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '2.5rem'
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.2rem' }}>
        <FaRegLightbulb size={48} color="#ffb300" style={{ marginBottom: '0.5rem', filter: 'drop-shadow(0 2px 8px #ffe082)' }} />
        <h1 style={{ fontSize: '2.3rem', color: '#1D2BAA', fontWeight: 900, marginBottom: '0.5rem', letterSpacing: '1px', textAlign: 'center', fontFamily: 'Montserrat, Segoe UI, Arial, sans-serif' }}>
          Future Plans
        </h1>
      </div>
      <p style={{ fontSize: '1.15rem', color: '#333', marginBottom: '2.2rem', textAlign: 'center', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
        Our vision for the future is guided by a comprehensive set of goals and objectives aimed at uplifting society, empowering individuals, and fostering sustainable development. Here are our key future plans:
      </p>
      <ol style={{ fontSize: '1.13rem', color: '#222', lineHeight: 1.8, paddingLeft: '1.2rem', maxWidth: 820, margin: '0 auto', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
        {futurePlans.map((plan, idx) => (
          <motion.li
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            style={{
              marginBottom: '1.1rem',
              paddingLeft: '0.2rem',
              background: idx % 2 === 0 ? 'rgba(29,44,170,0.04)' : 'rgba(255,179,0,0.06)',
              borderRadius: 8,
              padding: '0.7rem 1rem',
              boxShadow: idx % 2 === 0 ? '0 2px 8px rgba(29,44,170,0.04)' : '0 2px 8px rgba(255,179,0,0.06)',
              fontWeight: 500,
              color: '#1D2BAA',
              borderLeft: idx % 2 === 0 ? '4px solid #1D2BAA' : '4px solid #ffb300',
              fontSize: '1.08rem',
              letterSpacing: '0.01em',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.7rem'
            }}
          >
            <span style={{
              fontWeight: 800,
              color: idx % 2 === 0 ? '#1D2BAA' : '#ffb300',
              fontSize: '1.13rem',
              minWidth: 28,
              display: 'inline-block',
              textAlign: 'right',
              marginRight: 8
            }}>{idx + 1}.</span>
            <span style={{ color: '#222', fontWeight: 500 }}>{plan}</span>
          </motion.li>
        ))}
      </ol>
    </motion.div>
  </div>
);

export default FuturePlans; 