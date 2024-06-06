import React, { useEffect, useState } from 'react';
import AlertIcon from './Pictures/Alert-image.png';
import './About.css';
import './Home.css';
import Image1 from './Pictures/Picture40.jpg'
import Image2 from './Pictures/Picture13.jpg'
import Image3 from './Pictures/Picture20.jpg'
import AboutSection from './AboutSection';
import Time from './Pictures/OnTime.png'
import Licensed from './Pictures/Licensed.png'
import Quality from './Pictures/Achievement.png'
import GetInTouch from './GetInTouch';
const About = () => {
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
      <section className="about-us">
        <div className="about-us__overlay">
          <h1 className="about-us__title">About Us</h1>
          <p className="about-us__subtitle">Delivering Excellence through Integrity and Innovation</p>
        </div>
      </section>
      <section className="about-second-section">
        <div className="container">
          <div className="about-second-section__content">
            <div className="about-second-section__images">
              <img src={Image1} alt="Service 1" className="about-second-section__image" />
              <img src={Image2} alt="Service 2" className="about-second-section__image" />
              <img src={Image3} alt="Service 3" className="about-second-section__image" />
            </div>
            <div className="about-second-section__text">
              <h2 className="about-second-section__title">About PS Construction</h2>
              <p className="about-second-section__description">
                PS General Construction Corp is a family-owned business with over 30 years of experience serving New York City. Our expertise includes brickwork, masonry, roofing, custom building, siding, stucco, and waterproofing. We strive to deliver prompt and efficient services that fit within your budget. From initial planning to final completion, PS General Construction Corp is dedicated to making your renovation process as seamless as possible. We take pride in achieving high customer satisfaction and delivering quality workmanship.
                <br /><br />
                Our team boasts extensive experience and has managed a wide range of building projects, guaranteeing excellent results every time you reach out to us. We cater to residential, commercial, and industrial sectors. Understanding the value of your investment, we offer our services at competitive rates. You can count on our certified team for top-notch custom building and other exterior services. Feel free to contact us at your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <AboutSection />
      </section>

      <section className="features">
        <div className="features__content">
          <div className="feature">
            <div className="feature__icon">
              <img src={Licensed} alt="Licensed & Insured Bonded" />
            </div>
            <h3 className="feature__title">Licensed & Insured</h3>
          </div>
          <div className="feature">
            <div className="feature__icon">
              <img src={Quality} alt="Professional Quality Work" />
            </div>
            <h3 className="feature__title">Professional Quality Work</h3>
          </div>
          <div className="feature">
            <div className="feature__icon">
              <img src={Time} alt="On Time Assurance" />
            </div>
            <h3 className="feature__title">On Time Assurance</h3>
          </div>
        </div>
      </section>
      <section>
        <GetInTouch />
      </section>

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

export default About;
