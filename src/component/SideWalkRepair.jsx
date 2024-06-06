import React, { useEffect, useState } from 'react';
import AlertIcon from './Pictures/Alert-image.png';
import './SideWalkRepair.css';
import './Home.css';
import BrickFAQ from './BrickFAQ.jsx';
import { Link } from 'react-router-dom';
import GetInTouch from './GetInTouch.jsx'
import SidewalkRepairNewImage from './Pictures/Side-walk-section2-Image.png'
const SideWalkRepair = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Disable right-click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Disable text selection
    document.addEventListener('selectstart', event => event.preventDefault());

    // Disable copy
    document.addEventListener('copy', event => event.preventDefault());

    // Disable certain keyboard shortcuts
    const handleKeyDown = (event) => {
      if (event.ctrlKey && (event.key === 'c' || event.key === 'u' || event.key === 's' || event.key === 'a')) {
        event.preventDefault();
      }
    };

    const handleDoubleClick = () => {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000); // Hide alert after 3 seconds
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dblclick', handleDoubleClick);

    // Show/Hide "Back to Top" button
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('contextmenu', event => event.preventDefault());
      document.removeEventListener('selectstart', event => event.preventDefault());
      document.removeEventListener('copy', event => event.preventDefault());
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dblclick', handleDoubleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {showAlert && (
        <div className="alert">
          <img src={AlertIcon} alt="Alert Icon" />
          <span>ALERT: Content is protected !!</span>
        </div>
      )}
      <section className="side-walk-repair-services">
        <div className="side-walk-repair-services__overlay">
          <h1 className="side-walk-repair-services__title">Side Walk Repair</h1>
          <p className="side-walk-repair-services__subtitle">Constructing with Integrity and Imagination</p>
        </div>
      </section>
      <section className="sidewalk-repair-new-section">
      <div className="sidewalk-repair-new-container">
        <div className="sidewalk-repair-new-image-container">
          <img src={SidewalkRepairNewImage} alt="Sidewalk Repair" className="sidewalk-repair-new-image" />
        </div>
        <div className="sidewalk-repair-new-text-container">
          <h1>Your Go-To Experts for Sidewalk Repair in New York City</h1>
          <p>
           PS General Construction Corp stands as a leading provider of sidewalk repair services in New York City. With over 30 years of experience in the construction field, we have perfected our skills and expertise, enabling us to manage a diverse array of sidewalk repair projects with accuracy and proficiency. When you choose us, you can be confident that your sidewalks will be safe, functional, and visually appealing.
          </p>
          <div className="sidewalk-repair-new-quote">
            <p>
              Addressing the need for NYC Sidewalk Repairs must be handled in a prompt and professional manner, 
              and in strict accordance with industry codes and guidelines.
            </p>
          </div>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
          <button className="sidewalk-repair-new-button">Get Free Quote</button>
          </Link>
        </div>
      </div>
    </section>
    <div>
        <BrickFAQ />
    </div>
    <div>
        <GetInTouch/>
    </div>


       {/* WhatsApp and Back to Top */}
      <div className="home__whatsapp">
        <a href="https://wa.me/+13475748225">
          <div className="whatsapp-icon-container">
            <i className="fab fa-whatsapp whatsapp-icon"></i>
          </div>
          <span>Need Help? <strong>Chat with us</strong></span>
        </a>
      </div>

      {/* Back to Top Button */}
      <div
        className={`home__back-to-top ${showBackToTop ? '' : 'hidden'}`}
        onClick={scrollToTop}
      >
        <i className="fa fa-arrow-up"></i>
      </div>
    </div>
  );
};

export default SideWalkRepair;