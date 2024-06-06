import React from 'react';
import './CommercialMasonryServices.css';
import image1 from './Pictures/Picture17.jpg'; // Update with actual path
import image2 from './Pictures/Picture7.jpg'; // Update with actual path
import { Link } from 'react-router-dom';
const CommercialMasonryServices = () => {
  return (
    <div className="commercial-masonry">
      <div className="commercial-masonry__content">
        <h2>Commercial Masonry Services In NYC</h2>
        <p>Create a lasting impression and maintain the structural integrity of your commercial property with our extensive range of commercial masonry services in New York City. Our skilled team is well-versed in the specific requirements of commercial buildings and is dedicated to providing top-notch workmanship that enhances both functionality and visual appeal.</p>
        <div className="commercial-masonry__services">
          <div className="commercial-masonry__services-text">
            <h3>Storefronts & Facades:</h3> 
            <p>Enhance the curb appeal and functionality of your business with our expertly installed storefronts, architectural facades, and decorative masonry work.</p>
            <h3>Retaining Walls & Decorative Walls:</h3>
            <p>Our skilled masons can design and construct both functional and attractive retaining walls and decorative walls, improving your property's landscape and usability.</p>
            <h3>Concrete & Masonry Flatwork:</h3>
            <p>Create durable and long-lasting concrete surfaces for various commercial uses, including sidewalks, parking lots, and loading areas.</p>
             <h3>Sidewalk Repair & Violation Removal:</h3>
             <p>Keep your commercial property compliant with city regulations by promptly and professionally addressing sidewalk issues.</p>
             <h3>Stucco Repair & Restoration:</h3>
             <p>Restore the beauty and weather resistance of your building's stucco exterior with our professional repair and maintenance services.</p>
             <h3>Veneers & Pillars:</h3>
             <p>Enhance the architectural details and aesthetics of your commercial property with our expertly installed veneers and pillars.</p>
             <h3>Window Sill & Lintel Repair:</h3>
            <p>Repair cracks and deterioration in window sills and lintels to maintain the structural integrity and appearance of your building.</p>
            </div>
          <div className="commercial-masonry__services-images">
            <img src={image1} alt="Commercial Masonry  1" />
            <img src={image2} alt="Commercial Masonry  2" />
          </div>
        </div>
       <Link to="/contact" style={{ textDecoration: 'none' }}>
  <button className="contact-us-button">Contact Us</button>
</Link>
      </div>
    </div>
  );
};

export default CommercialMasonryServices;
