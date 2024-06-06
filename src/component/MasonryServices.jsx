import React, { useEffect, useState } from 'react';
import './MasonryServices.css';

import backgroundImage from './Pictures/Masnoryimage.jpg'; // Update this path to the actual image location
import MasonryDetails from './MasonryDetails';
import CommercialMasonryServices from './CommercialMasonryServices';
import WhyChooseUs from './WhyChooseUs';

import './Home.css';
import AlertIcon from './Pictures/Alert-image.png'
import MasonryProject from './MasonryProject';
import GetInTouch from './GetInTouch'
const MasonryServices = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleCall = () => {
    window.location.href = 'tel:3475748225';
  };

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
      <div className="masonry-services">
        <div className="masonry-services__background">
          <img src={backgroundImage} alt="Masonry Services Background" className="masonry-services__background-image" />
          <div className="masonry-services__overlay">
            <div className="masonry-services__content">
              <h1>Masonry Services</h1>
              <p>Masonry Services in New York City. Restore Your Property's Structural Integrity</p>
              <button className="call-us-button" onClick={handleCall}>
        Call Us Now
      </button>
            </div>
          </div>
        </div>
       
      </div>
      
      <div className="expert-section">
        <div className="expert-section__content">
          <h2>Masonry Expert You Can Trust in New York City</h2>
          <p>
            Are you a home/property/business owner in NYC seeking exceptional masonry services? Look no further! 
            Our skilled masonry contractors in NYC are dedicated to bringing strength, durability, and beauty to 
            your space. Whether you’re in Manhattan, Brooklyn, Queens, the Bronx, or Staten Island, we’re your trusted 
            local solution for all things masonry.
          </p>
        </div>
      </div>
      <div>
        <MasonryDetails />
      </div>
      <div>
        <CommercialMasonryServices />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div>
        <MasonryProject />
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
};

export default MasonryServices;
