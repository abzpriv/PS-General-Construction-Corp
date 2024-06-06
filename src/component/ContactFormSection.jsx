import React, { useState } from 'react';
import './ContactFormSection.css';
import emailjs from 'emailjs-com';

const ContactFormSection = () => {
  const [buttonText, setButtonText] = useState('Send Us A Message');

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID_2,
      e.target,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setButtonText('Submitted');
        setTimeout(() => {
          setButtonText('Send Us A Message');
        }, 3000); // Change the text back after 3 seconds
      }, (error) => {
        console.error('Error sending email:', error.text);
      });
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-left">
        <h2>Feel Free To Message Us</h2>
        <div className="contact-form-info">
          <div className="contact-form-info-item">
            <i className="fa fa-phone"></i>
            <div>
              <p>Office</p>
              <p>(347)-574-8225</p>
            </div>
          </div>
          <div className="contact-form-info-item">
            <i className="fa fa-mobile-alt"></i>
            <div>
              <p>Cell</p>
              <p>(347)-574-8225</p>
            </div>
          </div>
        </div>
        <p className="contact-form-instruction">Or Please Fill Out Form Below!</p>
        <form onSubmit={handleSubmit}>
          <div className="contact-form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="contact-form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="contact-form-group">
            <textarea
              name="projectDetails"
              placeholder="Type Your Message Here..."
              required
            ></textarea>
          </div>
          <button type="submit">{buttonText}</button>
        </form>
      </div>
      <div className="contact-form-right">
        <h2>Our Locations</h2>
        <div className="contact-form-location">
          <i className="fa fa-map-marker-alt"></i>
          <div>
            <p>Brooklyn OFFICE:</p>
            <p>8814 Bay Park Wat Brooklyn NY 11214</p>
          </div>
        </div>
        <div className="contact-form-map">
            <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.940304439398!2d-74.00331128459409!3d40.60460537934571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2443d1510f4c1%3A0x80e274240a44b3f!2s8814%20Bay%20Park%20Way%2C%20Brooklyn%2C%20NY%2011214%2C%20USA!5e0!3m2!1sen!2sin!4v1639447365267!5m2!1sen!2sin"
         width="100%"
          height="300"
           style={{ border: '0' }}
         allowFullScreen=""
             loading="lazy"
           title="PS General Construction Corp Location"
           ></iframe>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
