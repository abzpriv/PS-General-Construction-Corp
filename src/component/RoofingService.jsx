import React from 'react';
import './RoofingService.css';
import pic1 from './Pictures/RoofingServiceImage1.png'
function RoofingService() {
  return (
    <div className="container">
      <div className="image-container">
        <img src={pic1} alt="Roofing Work" className="roof-image" />
      </div>
      <div className="text-container">
        <h1>High-Quality Roofing Installation Services from PS General Construction Corp</h1>
        <p>Welcome to PS General Construction Corp, the trusted construction company with over 30 years of experience serving New York City. We are proud to offer high-quality roof installation services in NYC to both residential and commercial clients.</p>
        <h2>Experienced Roofing Professionals Dedicated to Exceptional Workmanship</h2>
        <p>Our team of skilled and experienced roofing professionals is dedicated to delivering exceptional workmanship and top-quality materials. We understand the importance of a durable and reliable roof, which is why we only use the best products and methods to ensure your roof will last for years to come.</p>
      </div>
    </div>
  );
}

export default RoofingService;
