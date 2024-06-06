import React, { useEffect, useState } from 'react';
import AlertIcon from './Pictures/Alert-image.png';
import './Home.css';
import './StoopsService.css';
import StoopsImage1 from './Pictures/StoopsImage1.png'
import pic1 from './Pictures/Stoops-bg-Image1.jpg'; // Adjust the path as needed
import GetInTouch from './GetInTouch';

function StoopsService() {
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
          <img src={AlertIcon} alt="Alert Icon" /> {/* Alert icon */}
          <span>ALERT: Content is protected !!</span>
        </div>
         )}
    <div className="stoop-service">
      <div className="stoop-service__background">
        <img src={pic1} alt="stoop-service" className="stoop-service__image" />
        <div className="stoop-service__overlay">
          <div className="stoop-service__content">
            <h1>Stoops & Porch</h1>
          <p>Building Quality with Trust and Creativity</p>
          </div>
        </div>
      </div>
    </div>
    <section className="stoop-repair-section">
      <div className="stoop-repair-container">
        <div className="stoop-repair-image-container">
          <img src={StoopsImage1} alt="Stoop Repair Work" className="stoop-repair-image" />
        </div>
        <div className="stoop-repair-text-container">
          <h1>Expert Stoop and Porch Repair Services in NYC</h1>
          <p>PS General Construction Corp has been providing top-quality construction services for over 30 years in New York City. Our team of experts specializes in stoop and porch repair services. If you’re looking for porch repair in Brooklyn, Queens, and Manhattan, look no further than  PS General Construction Corp.</p>
          <h2>Stoop Repair Brooklyn, Queens, Manhattan, and Beyond</h2>
          <p>At PS General Construction Corp, we understand the importance of having a safe and sturdy stoop for your home or business. Our team of professionals is experienced in stoop repair for all types of properties, from residential to commercial. We provide stoop repair services in Brooklyn, Queens, Manhattan, and beyond.</p>
        </div>
      </div>
    </section>
    <div>
        <GetInTouch />
    </div>

    {/* WhatsApp and Back to Top */}
      <div className="home__whatsapp">
    <a href="https://wa.me/+13475748225">
        <div className="whatsapp-icon-container">
            <i className="fab fa-whatsapp whatsapp-icon"></i> {/* WhatsApp icon */}
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
}

export default StoopsService;