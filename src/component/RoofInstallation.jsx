import React, { useEffect, useState } from 'react';
import './RoofInstallation.css';
import AlertIcon from './Pictures/Alert-image.png';
import roofImage from './Pictures/RoofingImage1.jpg'; // Update the path to the actual image location
import RoofingService from './RoofingService';
import MetalRoofing from './MetalRoofing';
import './Home.css';
import AsphaltRoofing from './AsphaltRoofing';
import WhyChooseUsRoof from './WhyChooseUsRoof';
import GetInTouch from './GetInTouch';

const RoofInstallation = () => {
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
    <div className="roof-installation">
      <div className="roof-installation__background">
        <img src={roofImage} alt="Roof Installation" className="roof-installation__image" />
        <div className="roof-installation__overlay">
          <div className="roof-installation__content">
            <h1>Roof Installation In NYC</h1>
            <p>Upgrade Your Home with the Best Roof Installation Services in NYC!</p>
          </div>
        </div>
      </div>
    </div>
    <div>
        <RoofingService />
    </div>
    <div>
        <MetalRoofing/>
    </div>
    <div>
        <AsphaltRoofing />
    </div>
    <div>
        <WhyChooseUsRoof />
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

export default RoofInstallation;
