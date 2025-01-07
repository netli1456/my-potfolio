import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from '../cssPage/potfolio.module.css';
import { Link } from 'react-router-dom';
import Projects from '../projects/Projects';

import 'aos/dist/aos.css'; // Import AOS CSS
import Footer from './Footer';

function Portfolio({ handleShow }) {
 
  return (
    <div data-aos="fade-up" className={styles.pageWrapper}>
      <div className={`${styles.heroSection} text-center text-light`}>
        <h1 className="text-info">Full Stack Developer</h1>
        <p className={`${styles.subtitle} ${styles.outlinedText}`}>
          Welcome to my world! My name is{' '}
          <span className="fw-bold">BALOGUN O. WISDOM</span> <br />
          I'm a passionate JavaScript Developer with expertise <br /> in{' '}
          <span className={styles.highlight}>React</span>,{' '}
          <span className={styles.highlight}>Node.js</span>,{' '}
          <span className={styles.highlight}>Express</span>,{' '}
          <span className={styles.highlight}>MongoDB</span>,{' '}
          <span className={styles.highlight}>HTML</span>,{' '}
          <span className={styles.highlight}>Bootstrap</span>, and{' '}
          <span className={styles.highlight}>JavaScript</span>. <br />
          With experience ranging from small tasks to larger <br />
          projects like e-commerce platforms, I'm always eager to take on new{' '}
          <br />
          challenges. Feel free to take a tour of my portfolio, <br />
          and let’s connect—I'm open to collaboration and <br />
          new opportunities!
        </p>

        <div className={styles.buttonGroup}>
          <Button variant="primary" size="lg" className={styles.primaryButton}>
            Explore
          </Button>
          <Button
            variant="outline-light"
            size="lg"
            className={styles.secondaryButton}
            onClick={handleShow}
          >
            Contact Me
          </Button>
        </div>
      </div>

      <Container  id="about" className="py-5">
        <h2 className="text-center mb-5">See More About Me</h2>
        <Row data-aos="fade-up">
          <Col sm={6} md={3} className="text-center">
            <Link to="/about">
              <img
                src="image/about.jpg"
                alt="About Icon"
                className={styles.icon}
              />
            </Link>
            <h4>About</h4>
            <p>Learn about my journey and skills.</p>
          </Col>
          <Col sm={6} md={3} className="text-center">
            <Link to="/project/list">
              <img
                src="/image/project.jpg"
                alt="Projects Icon"
                className={styles.icon}
              />
            </Link>

            <h4>Projects</h4>
            <p>Explore my past and ongoing projects.</p>
          </Col>
          <Col style={{ opacity: '0.3' }} sm={6} md={3} className="text-center">
            <img src="image/bio.bmp" alt="Bio Icon" className={styles.icon} />
            <h4>Bio</h4>
            <p>Coming soon.</p>
          </Col>
          <Col
            style={{ cursor: 'pointer' }}
            onClick={handleShow}
            sm={6}
            md={3}
            className="text-center"
          >
            <img
              src="image/bio.bmp"
              alt="Contact Icon"
              className={styles.icon}
            />
            <h4>Contact</h4>
            <p>Feel free to reach out for collaborations!</p>
          </Col>
        </Row>
      </Container>

      <div data-aos="fade-up">
        <h3 className="text-center">Projects</h3>
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
