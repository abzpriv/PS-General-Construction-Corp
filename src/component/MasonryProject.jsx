import React from 'react';
import './MasonryProject.css';
import masonryImage from './Pictures/Masonryproject1.png'; // Update the path to the actual image location
import { Link } from 'react-router-dom';
const MasonryProject = () => {
  return (
    <div className="masonry-project">
      <div className="masonry-project__intro">
        <div className="masonry-project__intro-text">
          <h2>Choose us, and experience the difference of working with a local NYC masonry company that prioritizes your vision, delivers exceptional craftsmanship, and ensures a smooth and successful project from start to finish.</h2>
        </div>
        <div className="masonry-project__image">
          <img src={masonryImage} alt="Masonry Project" />
        </div>
      </div>
      <div className="masonry-project__details">
        <h3>Ready to Start Your Masonry Project?</h3>
        <p>Your search for 'local masonry contractors' ends here. Take the first step towards enhancing your property and elevating its value. Request a consultation with our team today and witness your space’s transformation.</p>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
        <button className="masonry-project__button">Get A Free Estimate</button>
        </Link>
      </div>
    </div>
  );
};

export default MasonryProject;
