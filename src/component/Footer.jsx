import React from 'react';
import './Footer.css';
import FooterLogo from './Pictures/Logo.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__about">
          <NavLink to="/">
            <img src={FooterLogo} alt="PS General Logo" className="footer__logo" />
          </NavLink>
          <p>PS General Construction Corp is a construction company with over three decades of experience in New York City. Our construction company excels in both commercial and residential projects. We specialize in additions to existing structures, remodels, build-outs, and minor renovations, ensuring top-quality results for all your construction needs.</p>
        </div>
        <div className="footer__links">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to="/" activeClassName="active"><i className="fas fa-chevron-right"></i> Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="active"><i className="fas fa-chevron-right"></i> About Us</NavLink></li>
            <li><NavLink to="/masonry-services" activeClassName="active"><i className="fas fa-chevron-right"></i> Masonry Services</NavLink></li>
            <li><NavLink to="/portfolio" activeClassName="active"><i className="fas fa-chevron-right"></i> Our Portfolio</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active"><i className="fas fa-chevron-right"></i> Contact Us</NavLink></li>
          </ul>
        </div>
        <div className="footer__contact">
          <h3>Contact Info</h3>
          <p>
            <strong>Phone No</strong><br />
            <a href="tel:3475748225" className="contact-link">Office: 347-574-8225</a><br />
            <a href="tel:3475748225" className="contact-link">Cell: 347-574-8225</a>
          </p>
          <p><strong>Email</strong><br />
            Psgeneral@psgeneral.com
          </p>
          <div className="footer__social">
            <a href="https://www.facebook.com/YourFacebookPage" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f social-icon facebook"></i>
            </a>
            <a href="https://www.instagram.com/YourInstagramProfile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram social-icon instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer__hours">
          <h3>Business Hours</h3>
          <p>Our support team is available 24 hours a day, 7 days a week to assist you.</p>
          <p><strong>Monday to Saturday:</strong> 8:00AM to 6:00PM</p>
          <p><strong>Sunday:</strong> 9:00AM to 3:00PM</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>Copyright &copy; 2024 PS General Construction Corp</p>
      </div>
    </footer>
  );
};

export default Footer;
