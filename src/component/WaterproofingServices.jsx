import React, { useEffect, useState } from 'react';
import AlertIcon from './Pictures/Alert-image.png';
import './WaterproofingServices.css';
import './Home.css';
import WaterImage1 from './Pictures/Picture11.jpg'
import WaterImage2 from './Pictures/WaterProofingserviceImage1.png'
import GetInTouch from './GetInTouch';
function WaterproofingServices() {
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
    <div className="waterproofing-container">
    {showAlert && (
        <div className="alert">
          <img src={AlertIcon} alt="Alert Icon" /> {/* Alert icon */}
          <span>ALERT: Content is protected !!</span>
        </div>
         )}
      <div className="waterproofing-background">
        <div className="waterproofing-content">
          <h1>Waterproofing Services In NYC</h1>
          <p>Protect your property with our exceptional waterproofing services in NYC, trusted by thousands for over 30 years.</p>
        </div>
      </div>
      <div className="waterproofing-info-section">
        <div className="waterproofing-info-text">
          <h2>Waterproofing Contractor NYC – Expert Solutions for a Safe and Dry Property</h2>
          <p>PS General Construction Corp stands as the top waterproofing contractor NYC relies on for a wide range of waterproofing services. Our 30 years of experience in the construction industry equip us with the necessary knowledge and skills to protect your property from water damage effectively. Our comprehensive services include basement, building, roof, and exterior waterproofing solutions, ensuring that your property remains dry and secure.</p>
        </div>
        <div className="waterproofing-info-image">
          <img src={WaterImage1} alt="Waterproofing Example" /> {/* Replace with your image path */}
        </div>
      </div>
      <div className="contact-us-section">
        <div className="contact-us-text">
          <h2>Contact Us Today To Protect Your Property</h2>
          <p>Put your trust in PS General Construction Corp for all your waterproofing NYC needs. <a href="/contact">Contact our team</a> of experienced professionals today to schedule a consultation and safeguard your property for the years to come.</p>
        </div>
        <div className="contact-us-image">
          <img src={WaterImage2} alt="Contact Us Example" /> {/* Replace with your image path */}
        </div>
      </div>
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

export default WaterproofingServices;
