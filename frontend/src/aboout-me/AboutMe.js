import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from '../cssPage/potfolio.module.css';
import 'aos/dist/aos.css'; // Import AOS CSS
import Footer from '../sections/Footer';


const AboutMe = () => {
    const [loading, setLoading] = useState(true)
  
  useEffect(() => {
      
      setTimeout(() => {
        setLoading(false);
      }, 100); 
    }, []);
  return (
    <div>
      {loading ? <div style={{height:"50vh", width:"100%"}}className='d-flex justify-content-center align-items-center '>
      Loading...</div> : <>
    <Container className={styles.aboutMe}>
      
      <h2 className={`${styles.title} text-center mb-4`}>About Me</h2>
      <Row data-aos="fade-up" className="align-items-start mb-4">
        <Col md={4} className={styles.imageContainer}>
          <Image
            src="/image/about.jpg"
            alt="about"
            rounded
            fluid
            className={styles.image}
          />
        </Col>
        <Col md={8} className={styles.textContainer}>
          <h3 className={styles.subheading}>Who I Am</h3>
          <p>
            Hi, I’m a JavaScript developer who is passionate about learning and
            exploring the world of web development. My journey began with a
            curiosity about how websites function, and as I started to dive
            deeper, I discovered a growing interest in coding and building web
            applications.
          </p>
          <p>
            Though I’m still early in my development journey, I’ve focused on
            building both front-end and back-end skills. I enjoy working with
            React to create interactive user interfaces and with Node.js to
            develop server-side functionality.
          </p>
        </Col>
      </Row>

      <Row data-aos="fade-up">
        <Col md={12} className={styles.continuation}>
          <h3 className={styles.subheading}>My Experience</h3>
          <p>
            I’ve worked on projects ranging from small-scale applications to
            full-featured e-commerce platforms. One of my most rewarding
            projects involved building a food delivery app, where I integrated
            payment systems, implemented user authentication, and ensured a
            seamless user experience. Another highlight was developing a
            clothing store app that helped users browse, order, and track their
            purchases.
          </p>
          <p>
            My expertise includes designing intuitive interfaces, developing
            responsive layouts, and writing clean, reusable code. I also have a
            good understanding of databases, having worked with MongoDB for
            managing data efficiently.
          </p>

          <h3 className={styles.subheading}>What Drives Me</h3>
          <p>
            I am deeply inspired by the impact technology has on everyday life.
            Whether it’s simplifying tasks, connecting people, or creating new
            opportunities, I believe technology has the power to transform the
            world. As a developer, my goal is to be part of this transformation
            by building solutions that make a difference.
          </p>

          <h3 className={styles.subheading}>Future Goals</h3>
          <p>
            Looking ahead, I aim to deepen my expertise in JavaScript frameworks
            and explore emerging technologies like AI and blockchain. I’m also
            committed to contributing to open-source projects and sharing my
            knowledge with the tech community. My ultimate goal is to grow as a
            developer and create meaningful, innovative solutions that leave a
            positive impact.
          </p>
        </Col>
      </Row>
      
    </Container>
    <Footer />
    </>}
    </div>
  );
};

export default AboutMe;
