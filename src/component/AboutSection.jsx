import React from 'react';
import './AboutSection.css';
import PictureAbout from './Pictures/About2Image.png'
const AboutSection = () => {
  return (
    <section className="about-us-detail">
      <div className="about-us-detail__content">
        <div className="about-us-detail__text">
          <h2 className="about-us-detail__title">PS General Construction Corp</h2>
          <p className="about-us-detail__description">
            We founded PS General Construction Corp with a single goal: to create a company that rivals large construction firms while maintaining the agility and customer-centric approach of a small, family-owned business. We describe this as small business values paired with a big business mindset.
          </p>
          <ul className="about-us-detail__features">
            <li><span>✔</span> Reliable support</li>
            <li><span>✔</span> Guaranteed Satisfaction</li>
            <li><span>✔</span> Superior Quality</li>
          </ul>
        </div>
        <div className="about-us-detail__image">
          <img src={PictureAbout} alt="PS General Construction Corp" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
