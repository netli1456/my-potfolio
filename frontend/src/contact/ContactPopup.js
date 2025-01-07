import React from 'react';
import styles from '../cssPage/potfolio.module.css';
import { Modal, Button } from 'react-bootstrap';
import { Email, LinkedIn, Twitter, GitHub } from '@mui/icons-material'; // Material-UI Icons
import 'aos/dist/aos.css'; // Import AOS CSS


const ContactPopup = ({ handleClose }) => {
  return (
    <Modal data-aos="fade-up" show={true} onHide={handleClose} centered>
      <div  className={styles.overlay}>
        <div className={styles.contactCard}>
          <h3>Contacts</h3>
          <div className={styles.contactDetails}>
            <div>
              <Email className={styles.icon} />
              <span>weezybalo35@gmail.com</span>
            </div>
            <div>
              <LinkedIn className={styles.icon} />
              <a href="https://www.linkedin.com/in/weez-bali-811aa32a4/" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </div>
            <div>
              <Twitter className={styles.icon} />
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                Twitter Profile
              </a>
            </div>
            <div>
              <GitHub className={styles.icon} />
              <a href="https://github.com/netli1456" target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            </div>
          </div>
          <Button variant="secondary" onClick={handleClose }>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ContactPopup;
