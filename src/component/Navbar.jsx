import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './Pictures/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMobileAlt, faChevronDown, faChevronRight, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    


    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
        document.body.classList.remove('menu-open');
      }
    };


    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleSelectStart = (e) => {
      e.preventDefault();
    };

    const handleDragStart = (e) => {
      e.preventDefault();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('selectstart', handleSelectStart);
    window.addEventListener('dragstart', handleDragStart);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('selectstart', handleSelectStart);
      window.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSubDropdown = (e) => {
    e.preventDefault();
    setSubDropdownOpen(!subDropdownOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__top">
        <div className="navbar__contact">
          <span>
          <a href="tel:3475748225" style={{ textDecoration: 'none', color: 'inherit' }}>
           <FontAwesomeIcon icon={faPhone} /> Office: (347)-574-8225
           </a>
           </span>
           <span>
            <a href="tel:3475748225" style={{ textDecoration: 'none', color: 'inherit' }}>
           <FontAwesomeIcon icon={faMobileAlt} /> Cell: (347)-574-8225
           </a>
            </span>

          <span>30+ Years Experience | Fully Licensed | Fully Insured | MBE Certified Contractor</span>
        </div>
        <Link to="/contact">
        <button className="navbar__estimate">Free Estimate</button>
        </Link>
      </div>
      <div className={`navbar__main ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/">
        <div className="navbar__brand">
          <img src={logo} alt="Company Logo" className="navbar__logo navbar__logo--desktop" />
        </div>
        </Link>
        <nav className={`navbar__menu ${isOpen ? 'navbar__menu--open' : ''}`}>
          <Link to="/" className="navbar__link">Home</Link>
          <Link to="/about" className="navbar__link">About Us</Link>
         <div className="navbar__dropdown">
         <div className="navbar__link">
              Services <FontAwesomeIcon icon={faChevronDown} className="navbar__dropdown-icon" />
              </div>
            <div className="navbar__dropdown-menu">
              <div className="navbar__dropdown-item">
                <Link to="/masonry-services" className="navbar__dropdown-link-main">Masonry Services</Link>
                <FontAwesomeIcon icon={faChevronRight} />
                <div className="navbar__sub-dropdown-menu">
                  <Link to="/brick-pointing" className="navbar__sub-dropdown-link">Brick Pointing</Link>
                  <Link to="/brick-repair" className="navbar__sub-dropdown-link">Brick Repair & Replacement</Link>
                  <Link to="/chimney" className="navbar__sub-dropdown-link">Chimney</Link>
                  <Link to="/sidewalk-repair" className="navbar__sub-dropdown-link">Sidewalk Repair</Link>
                  <Link to="/stoops-porches" className="navbar__sub-dropdown-link">Stoops & Porches</Link>
                </div>
              </div>
              <Link to="/roofing" className="navbar__dropdown-link">Roofing</Link>
              <Link to="/waterproofing" className="navbar__dropdown-link">Waterproofing Services</Link>
              <Link to="/local-law" className="navbar__dropdown-link">Local LAW 11 & 10</Link>
            </div>
          </div>
          <Link to="/portfolio" className="navbar__link">Our Portfolio</Link>
          <Link to="/contact" className="navbar__link">Contact Us</Link>
        </nav>
        <button className={`navbar__toggle ${isOpen ? 'navbar__toggle--open' : ''}`} onClick={toggleMenu}>
          <div className={`navbar__toggle-icon ${isOpen ? 'navbar__toggle-icon--open' : ''}`}></div>
        </button>
      </div>
      {isOpen && (
        <div className="navbar__mobile-menu">
          <button className="navbar__close" onClick={toggleMenu}>×</button>
          <Link to="/" className="navbar__mobile-link" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="navbar__mobile-link" onClick={toggleMenu}>About Us</Link>
          <div className="navbar__mobile-dropdown">
            <div className="navbar__mobile-dropdown-link" onClick={toggleDropdown}>
              <span>Services</span>
              <FontAwesomeIcon icon={dropdownOpen ? faMinus : faPlus} className="navbar__mobile-dropdown-icon" />
            </div>
            <div className={`navbar__mobile-dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
              <div className="navbar__mobile-sub-dropdown-link">
              <Link to="/masonry-services" className="navbar__mobile-link-main" onClick={toggleMenu}>Masonry Services</Link>
                    <FontAwesomeIcon 
                   icon={subDropdownOpen ? faMinus : faPlus} 
                   className="navbar__mobile-dropdown-icon" 
                   onClick={toggleSubDropdown} 
               /> </div>
              <div className={`navbar__mobile-sub-dropdown-menu ${subDropdownOpen ? 'open' : ''}`}>
                <Link to="/brick-pointing" className="navbar__mobile-sub-dropdown-link" onClick={toggleMenu}>Brick Pointing</Link>
                <Link to="/brick-repair" className="navbar__mobile-sub-dropdown-link" onClick={toggleMenu}>Brick Repair & Replacement</Link>
                <Link to="/chimney" className="navbar__mobile-sub-dropdown-link" onClick={toggleMenu}>Chimney</Link>
                <Link to="/sidewalk-repair" className="navbar__mobile-sub-dropdown-link" onClick={toggleMenu}>Sidewalk Repair</Link>
                <Link to="/stoops-porches" className="navbar__mobile-sub-dropdown-link" onClick={toggleMenu}>Stoops & Porches</Link>
              </div>
              <Link to="/roofing" className="navbar__mobile-dropdown-link" onClick={toggleMenu}>Roofing</Link>
              <Link to="/waterproofing" className="navbar__mobile-dropdown-link" onClick={toggleMenu}>Waterproofing Services</Link>
              <Link to="/local-law" className="navbar__mobile-dropdown-link" onClick={toggleMenu}>Local LAW 11 & 10</Link>
            </div>
          </div>
          <Link to="/portfolio" className="navbar__mobile-link" onClick={toggleMenu}>Our Portfolio</Link>
          <Link to="/contact" className="navbar__mobile-link" onClick={toggleMenu}>Contact Us</Link>
          <div className="navbar__contact-mobile">
           <span>
            <a href="tel:3475748225" style={{ textDecoration: 'none', color: 'inherit' }}>
           <FontAwesomeIcon icon={faPhone} /> (347)-574-8225
                  </a>
             </span>
              <span>
              <a href="tel:3475748225" style={{ textDecoration: 'none', color: 'inherit' }}>
                <FontAwesomeIcon icon={faMobileAlt} /> Cell: (347)-574-8225
                 </a>
                  </span>

            <span>30+ Years Experience | Fully Licensed | Fully Insured | MBE Certified Contractor</span>
          </div>
         <Link to="/contact">
            <button className="navbar__estimate-mobile" onClick={toggleMenu}>Free Estimate</button>
           </Link>
          
        </div>
      )}
    </header>
  );
};

export default Navbar;
