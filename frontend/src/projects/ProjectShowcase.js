import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Projects from './Projects';
import Footer from '../sections/Footer';

function ProjectShowcase() {
  const [section, setSection] = useState('completed');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);
  return (
    <div>
      {loading ? (
        <div
          style={{ height: '78vh' }}
          className="d-flex justify-content-center align-items-center "
        >
          Loading...
        </div>
      ) : (
        <div style={{ minHeight: '100vh' }}>
          <Container data-aos="fade-up" className='mb-4'>
            <h1 className="text-center ">Projects</h1>
            <div className="d-flex align-items-center gap-3 justify-content-center mt-4">
              <strong
                onClick={() => setSection('completed')}
                className={section === 'completed' ? 'opac' : ' opaci'}
              >
                Completed{' '}
              </strong>
              <strong
                onClick={() => setSection('incoming')}
                className={section === 'incoming' ? 'opac' : 'opaci'}
              >
                Incoming
              </strong>
            </div>
            {section === 'completed' && (
              <div>
                <Projects />
              </div>
            )}
            {section === 'incoming' && (
              <div
                data-aos="fade-up"
                style={{ height: '50vh', opacity: '0.3' }}
                className="d-flex border align-items-center justify-content-center"
              >
                <h1> No Incoming Projects Yet </h1>
              </div>
            )}
          </Container>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default ProjectShowcase;
