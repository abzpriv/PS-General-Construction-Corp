import React, { useEffect, useState } from 'react';
import AlertIcon from './Pictures/Alert-image.png';
import './Home.css';
import './BrickPointing.css';
import GetInTouch from './GetInTouch';
import pic1 from './Pictures/BrickPointingBackground.jpg'; // Adjust the path as needed
import BrickFAQ from './BrickFAQ';

function BrickPointing() {
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
    <div className="BrickPointing">
      <div className="BrickPointing__background">
        <img src={pic1} alt="BrickPointing" className="BrickPointing__image" />
        <div className="BrickPointing__overlay">
          <div className="BrickPointing__content">
            <h1>Brick Pointing In NYC</h1>
          <p>Brick Repointing Services in New York City: Restore Your Building's Structural Integrity</p>
          </div>
        </div>
      </div>
    </div>
    <div className="BrickPointing-container">
      <div className="BrickPointing-image-container">
        <img src={pic1} alt="BrickPointing Work" className="BrickPointing-image" />
      </div>
      <div className="BrickPointing-text-container">
          <h1>PS General Construction Corp: Your Solution for Brick Pointing in New York City</h1>
          <p>Welcome to PS General Construction Corp, your comprehensive construction service provider for all brick pointing needs in New York City. We specialize in delivering top-notch, cost-effective brick pointing services for both residential and commercial properties. Our team of skilled masons brings years of industry experience, dedicated to achieving exceptional results for every project we handle.</p>
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

export default BrickPointing;
