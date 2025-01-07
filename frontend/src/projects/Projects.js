import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import styles from '../cssPage/potfolio.module.css';
import { ProjectImg } from '../dataFolder/projetData';
import { useNavigate } from 'react-router-dom';

function Projects() {
  const navigate = useNavigate();

  return (
    <div >
      <Container id="projects" className="py-5">
        <Row data-aos="fade-up">
          {ProjectImg.map((project, idx) => (
            <Col key={idx} md={6} className="mb-4">
              <Card className={styles.projectCard}>
                <Card.Img
                  variant="top"
                  src={project.img[0]}
                  alt="Project Thumbnail"
                  className={styles.projectThumbnail}
                />
                <Card.Body>
                  <Card.Title>{project?.name}</Card.Title>
                  <Card.Text>
                    This is a brief description of my {project?.name}.
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => navigate(`/food/${project.id}`)}
                    className={styles.viewButton}
                  >
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
     
    </div>
  );
}

export default Projects;
