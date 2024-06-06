import React, { useEffect, useState } from 'react';
import AlertIcon from './Pictures/Alert-image.png';
import './Home.css';
import './BrickRepair.css';
import GetInTouch from './GetInTouch';
import pic1 from './Pictures/Picture42.jpg'; // Adjust the path as needed
import pic2 from './Pictures//brick-repair1.jpg';
import BrickFAQ from './BrickFAQ';

function BrickRepair() {
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
    <div className="brick-repair">
      <div className="brick-repair__background">
        <img src={pic1} alt="brick-repair" className="brick-repair__image" />
        <div className="brick-repair__overlay">
          <div className="brick-repair__content">
            <h1>Brick Repairs & Replacement in NYC</h1>
          <p>PS General Construction Corp provides top-quality brick repair services in NYC for both residential and commercial properties.e</p>
          </div>
        </div>
      </div>
    </div>
    <div className="brick-repair-container">
      <div className="brick-repair-image-container">
        <img src={pic2} alt="brick-repair Work" className="brick-repair-image" />
      </div>
      <div className="brick-repair-text-container">
          <h1>Professional Brick Repair & Replacement Services in NYC</h1>
          <p>PS General Construction Corp is a premier construction company in New York City with over 30 years of industry experience. We provide comprehensive brick repair and replacement services for both residential and commercial properties throughout NYC. At PS General Construction Corp, we recognize the significance of maintaining a strong, durable brick exterior for your property. Our team of seasoned professionals is dedicated to addressing all your brick repair needs in NYC, from minor repairs to full brick replacements.</p>
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

export default BrickRepair;
