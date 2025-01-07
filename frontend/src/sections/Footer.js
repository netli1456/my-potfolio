import React from 'react';
import styles from '../cssPage/potfolio.module.css';
import 'aos/dist/aos.css'; // Import AOS CSS


function Footer() {
  return (
    <div >
      {/* Footer */}
      <footer  className={`${styles.footer} text-center text-light py-3`}>
        <p >&copy; 2024 weexi dev | Designed with React & Bootstrap</p>
      </footer>
    </div>
  );
}

export default Footer;
