import React, { useEffect, useState } from 'react';
import AlertIcon from './Pictures/Alert-image.png';
import './ChimneyServices.css';
import './Home.css';
import ChimneyServiceImage1 from './Pictures/image2chimney.jpg';
import pic1 from './Pictures/Picture37.jpg';
import BrickFAQ from './BrickFAQ';
import GetInTouch from './GetInTouch';

const ChimneyServices = () => {
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
      <section className="Chimney-services">
        <div className="Chimney-services__overlay">
          <h1 className="Chimney-services__title">Chimney Services</h1>
          <p className="Chimney-services__subtitle">Building Quality with Trust and Ingenuity</p>
        </div>
      </section>

      <div className="Chimney-services-container">
        <div className="Chimney-services-image-container">
          <img src={pic1} alt="Chimney-services Work" className="Chimney-services-image" />
        </div>
        <div className="Chimney-services-text-container">
          <h1>Chimney Repair Services in New York City</h1>
          <p>As a homeowner in New York City, it’s crucial to ensure your chimney is functioning correctly and safely. At PS General Construction Corp, we recognize the importance of a well-maintained chimney and provide expert chimney repair services in NYC to keep your chimney in optimal condition.Whether you require a routine chimney inspection or significant repairs, the experienced team at PS General Construction Corp is here to assist you. </p>
        </div>
      </div>

      <div className="Chimney-services-container">
        <div className="Chimney-services-section">
          <div className="images-container-Chimney-services">
            <img src={ChimneyServiceImage1} alt="Chimney-services" className="Chimney-services-image" />
          </div>
          <div className="text-container-Chimney-services">
            <h1>Why Choose PS General Construction Corp for Chimney Repair in NYC?</h1>
            <p>At PS General Construction Corp, we are dedicated to delivering top-notch chimney repair services in NYC. When you choose us for your chimney repair needs, you can expect: Skilled Professionals: Our team of seasoned professionals possesses the expertise and knowledge to manage any chimney repair or restoration project efficiently. High-Quality Materials: We utilize only the finest quality materials to ensure the longevity and durability of your chimney repairs. Comprehensive Services: Our team is equipped to handle everything from routine inspections to extensive restoration projects.</p>
          </div>
        </div>
      </div>
      <div>
        <BrickFAQ />
      </div>
      <div>
        <GetInTouch />
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

export default ChimneyServices;
