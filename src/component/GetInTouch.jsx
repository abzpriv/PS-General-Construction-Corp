import React from 'react';
import './GetInTouch.css';
import { Link } from 'react-router-dom';
const GetInTouch = () => {
  return (
    <section className="get-in-touch">
      <div className="get-in-touch__content">
        <h2>Get In Touch With Us</h2>
        <p>
          If you have any issues or queries or need a quotation for your construction plans then contact us or leave us a message. We will get back to you as soon as possible.
        </p>
        <Link to="/contact" >
        <button>Contact Us</button>
        </Link>
      </div>
    </section>
  );
};

export default GetInTouch;
