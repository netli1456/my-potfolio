import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './navBar/NavBar.js';
import Portfolio from './sections/Portfolio.js';
import FoodAppShowcase from './sections/FoodAppShowcase.js';
import Footer from './sections/Footer.js';
import AboutMe from './aboout-me/AboutMe.js';
import ProjectShowcase from './projects/ProjectShowcase.js';
import ContactPopup from './contact/ContactPopup.js';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handleShow = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    window.addEventListener('scroll', () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener('scroll', () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <BrowserRouter>
      <div style={{ position: showPopup === true ? 'relative' : '' }}>
        <NavBar
          
          handleShow={handleShow}
        />

        {showPopup && <ContactPopup handleClose={handleClose} />}

        <div data-aos="fade-up">
          <Routes>
            <Route path="/" element={<Portfolio handleShow={handleShow} />} />
            <Route path="/food/:id" element={<FoodAppShowcase />} />
            <Route
              path="/about"
              element={<AboutMe handleShow={handleShow} />}
            />
            <Route path="/project/list" element={<ProjectShowcase />} />
          </Routes>
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
