import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Copyrights = () => {
  const styles = {
    page: {
      backgroundColor: '#f8f9fa',
      minHeight: '80vh',
      padding: '2rem 0',
      color: '#333',
      fontFamily: "'Segoe UI', sans-serif",
    },
    box: {
      background: '#fff',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
    },
    title: {
      fontSize: '2rem',
      color: '#1d2baa',
      borderBottom: '2px solid #39b54a',
      display: 'inline-block',
      paddingBottom: '0.3rem',
      marginBottom: '1rem',
    },
    heading: {
      fontSize: '1.3rem',
      color: '#39b54a',
      marginTop: '1.5rem',
    },
    paragraph: {
      fontSize: '1rem',
      lineHeight: '1.6',
      marginTop: '0.7rem',
    },
    emailLink: {
      color: '#1d2baa',
      fontWeight: 'bold',
      textDecoration: 'none',
    },
    emailLinkHover: {
      textDecoration: 'underline',
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={styles.page}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div style={styles.box}>
              <h1 style={styles.title}>Copyright & Legal Information</h1>
              <p style={styles.paragraph}>
                © {new Date().getFullYear()} Amay Foundation. All Rights Reserved.
              </p>

              <p style={styles.paragraph}>
                All content, including but not limited to text, graphics, logos,
                images, videos, and design layouts are the property of Amay
                Foundation unless otherwise stated. Unauthorized use,
                reproduction, or distribution of any material from this site
                without express written permission is strictly prohibited.
              </p>

              <h3 style={styles.heading}>Non-Profit Usage</h3>
              <p style={styles.paragraph}>
                Amay Foundation is a registered youth-led non-profit
                organization. Materials shared on this site are intended for
                informational, educational, and charitable purposes only.
              </p>

              <h3 style={styles.heading}>Third-Party Links</h3>
              <p style={styles.paragraph}>
                This website may contain links to external websites that are not
                maintained by Amay Foundation. We are not responsible for the
                content or accuracy of any third-party sites.
              </p>

              <h3 style={styles.heading}>Contact Us</h3>
              <p style={styles.paragraph}>
                For any legal inquiries or content usage requests, please
                contact us at:
                <br />
                <a
                  href="mailto:amayfoundation2023@gmail.com"
                  style={styles.emailLink}
                >
                  amayfoundation2023@gmail.com
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Copyrights;
