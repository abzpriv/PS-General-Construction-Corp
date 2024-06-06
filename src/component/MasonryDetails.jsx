import React from 'react';
import './MasonryDetails.css';
import masonryImage1 from './Pictures/Picture20.jpg'; // Update with your image paths
import masonryImage2 from './Pictures/Picture16.jpg'; // Update with your image paths
import { Link } from 'react-router-dom';
const MasonryDetails = () => {
  return (
    <section className="masonry-details">
      <div className="masonry-details__content">
        <h2>A Comprehensive Range of Masonry Services Tailored to Your Needs</h2>
        <h3>Residential Masonry Services in New York City</h3>
        <p>
          Transform your living space with the timeless elegance and enduring strength of masonry. Our skilled craftsmen specialize in a wide range of residential masonry services in New York City, catering to both your aesthetic and functional needs.
        </p>
        <div className="masonry-details__services">
          <div className="masonry-details__services-text">
          <p><strong>Brick & Stonework:</strong> We offer installation, repair, and restoration services for all types of brick, stone veneer, and decorative stonework, providing your property with either a classic charm or a modern aesthetic.</p>
           <p><strong>Fireplaces & Chimneys:</strong> Our team designs and builds custom fireplaces that add warmth and ambiance to your home. We also provide chimney cleaning, inspections, and repairs to ensure safety and optimal performance.</p>
           <p><strong>Patios & Walkways:</strong> Enhance your outdoor living spaces with beautiful and durable patios, walkways, and retaining walls. Our skilled masons can create unique designs that integrate seamlessly with your home's architecture and landscaping.</p>
           <p><strong>Driveway & Sidewalk Repair:</strong> Improve the functionality and safety of your driveway and sidewalks with our expert repair services, addressing issues such as cracks, uneven surfaces, and settling. We ensure your property looks well-maintained and attractive.</p>
           <p><strong>Pointing & Tuckpointing:</strong> Refresh the appearance of your brickwork by replacing worn mortar joints with new, high-quality materials. This not only enhances the look of your masonry but also strengthens its structural integrity.</p>
           <p><strong>Stucco Repair & Restoration:</strong> Our professional repair and maintenance services will restore the beauty and weather resistance of your home's exterior stucco.</p>
           <p><strong>Window Sill & Lintel Repair:</strong> Address cracks and deterioration in window sills and lintels to preserve the structural integrity and appearance of your home.</p>
           <p><strong>Thorocoat & Thoroseal Applications:</strong> Protect your property from water damage with specialized masonry coatings that enhance the water resistance and durability of your brick and concrete surfaces.</p>
           </div>

          <div className="masonry-details__services-images">
            <img src={masonryImage1} alt="Masonry Service 1" />
            <img src={masonryImage2} alt="Masonry Service 2" />
          </div>
        </div>
        <Link to="/contact" >
        <button className="masonry-details__contact-button">Contact Us</button>
        </Link>
      </div>
    </section>
  );
};

export default MasonryDetails;
