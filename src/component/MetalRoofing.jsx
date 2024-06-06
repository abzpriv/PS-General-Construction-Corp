import React from 'react';
import MetalRoofingImage from './Pictures/MetalRoffingImage1.png'
import './MetalRoofing.css';

function MetalRoofing() {
  return (
    <div className="metal-container">
      <div className="metal-text-container">
        <h1>Metal Roof Installation in NYC</h1>
        <p>Metal roofing is an excellent option for homeowners seeking a durable, long-lasting roof that is both attractive and low-maintenance. Our team specializes in metal roof installations, utilizing top-quality materials and advanced techniques to ensure your new roof will endure for years to come.</p>
      </div>
      <div className="metal-image-container">
        <img src={MetalRoofingImage} alt="Roofing Work" className="metal-roof-image" />
      </div>
    </div>
  );
}

export default MetalRoofing;
