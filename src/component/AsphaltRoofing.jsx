import React from 'react';
import './AsphaltRoofing.css';
import AsphaltRoofingImage1 from './Pictures/AsphaltRoofingImage1.png';
import ShakesRoofingImage1 from './Pictures/ShakesRoofingImage1.png'
function AsphaltRoofing() {
  return (
    <div className="roofing-container">
      <div className="asphalt-section">
        <div className="images-container-asphalt">
          <img src={AsphaltRoofingImage1} alt="Asphalt Shingle Roofing" className="roof-image-asphalt" />
        </div>
        <div className="text-container-asphalt">
          <h1>Asphalt Shingle Roofing Installation</h1>
          <p>Asphalt shingles are highly favored in NYC for their cost-effectiveness, versatility, and longevity. Our team has extensive experience installing numerous asphalt shingle roofs, utilizing cutting-edge techniques and high-quality materials to ensure your new roof not only enhances your home's appearance but also offers dependable protection.</p>
        </div>
      </div>

      <div className="shakes-section">
        <div className="text-container-shakes blue-bg">
          <h1>Shakes Roofing Installation In NYC</h1>
          <p>Shakes are a sought-after roofing material that offers a charming, natural appearance for your home. Our team possesses extensive experience in installing shake roofs in NYC and can assist you in selecting the ideal materials and design to complement your home.</p>
        </div>
        <div className="images-container-shakes">
          <img src={ShakesRoofingImage1} alt="Shakes Roofing" className="roof-image-shakes" />
        </div>
      </div>
    </div>
  );
}

export default AsphaltRoofing;
