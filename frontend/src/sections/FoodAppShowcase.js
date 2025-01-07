import React, { useEffect, useState } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import styles from '../cssPage/potfolio.module.css';
import { useParams } from 'react-router-dom';
import { ProjectImg } from '../dataFolder/projetData';
import 'aos/dist/aos.css'; // Import AOS CSS


const FoodAppShowcase = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true)

  const project = ProjectImg.find((item) => item.id.toString() === params.id);
  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    }, 100); 
  }, []);

  return (
    <Container fluid className={styles.showcaseContainer}>
      {loading ? <div style={{height:"75vh"}}className='d-flex justify-content-center align-items-center '>
      Loading...</div> : <>

      <h2 className="text-center py-3">{project.name} Project</h2>

      <Row data-aos="fade-up">
        <Col>
          <Carousel className={styles.carousel} interval={3000}>
            {project.video ? (
              <Carousel.Item>
                <video className="d-block w-100" controls>
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Carousel.Item>
            ) : (
              project?.img.map((items, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={items}
                    alt="Screenshot 1"
                  />
                   
                </Carousel.Item>
                
              ))
            )}
          </Carousel>
        </Col>
      </Row>

      <Row data-aos="fade-up" className={` mt-4 p-4 ${styles.pageWrapper}`}>
        <Col className="text-center">{project?.aboutApp}</Col>
      </Row>
      </>}
    </Container>
  );
};

export default FoodAppShowcase;
