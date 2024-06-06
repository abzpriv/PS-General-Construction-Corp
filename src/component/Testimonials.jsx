import React, { useState } from 'react';
import './Testimonials.css';
import googlelogo from './Pictures/Googleimage.png';

const testimonials = [
  {
    name: "Ethan Walker",
    date: "2023-09-21",
    rating: 5,
    text: "PS General Construction Corp provided exceptional service on our patio renovation. The attention to detail and craftsmanship were outstanding, resulting in a beautiful outdoor space.",
    avatar: "E",
    color: "#4CAF50"
  },
  {
    name: "Sophia Martinez",
    date: "2023-09-19",
    rating: 5,
    text: "The team at PS General Construction Corp was professional and efficient. They replaced our old roof with a new one in just two days, and the quality of their work was excellent.",
    avatar: "S",
    color: "#FF9800"
  },
  {
    name: "Lucas Brown",
    date: "2023-09-17",
    rating: 5,
    text: "I had a great experience with PS General Construction Corp for my driveway installation. The team was punctual, friendly, and left the site clean and tidy. Highly recommended!",
    avatar: "L",
    color: "#3F51B5"
  },
  {
    name: "Ava Wilson",
    date: "2023-09-15",
    rating: 5,
    text: "PS General Construction Corp did a fantastic job on our basement waterproofing. They were thorough and knowledgeable, and the results have been outstanding. No more leaks!",
    avatar: "A",
    color: "#F44336"
  },
  {
    name: "Mason Davis",
    date: "2023-09-13",
    rating: 5,
    text: "The PS General Construction Corp team exceeded our expectations with their masonry work on our garden wall. Their expertise and dedication to quality really shone through.",
    avatar: "M",
    color: "#009688"
  },
  {
    name: "Isabella Harris",
    date: "2023-09-11",
    rating: 5,
    text: "We hired PS General Construction Corp for a complete exterior renovation of our home. The results were amazing, and the team was professional and courteous throughout the project.",
    avatar: "I",
    color: "#9C27B0"
  },
  {
    name: "Liam Thomas",
    date: "2023-09-09",
    rating: 5,
    text: "PS General Construction Corp's power washing service made our house look brand new. The crew was efficient and the price was very reasonable. Will definitely use them again.",
    avatar: "L",
    color: "#FF5722"
  },
  {
    name: "Emily White",
    date: "2023-09-07",
    rating: 5,
    text: "Excellent service from start to finish. The PS General Construction Corp team was knowledgeable and took great care in restoring our brick facade. Highly recommend them!",
    avatar: "E",
    color: "#8BC34A"
  },
  {
    name: "Jack Hall",
    date: "2023-09-05",
    rating: 5,
    text: "PS General Construction Corp replaced our old fence with a new brick wall. The craftsmanship was top-notch, and the project was completed on time and within budget.",
    avatar: "J",
    color: "#CDDC39"
  },
  {
    name: "Grace King",
    date: "2023-09-03",
    rating: 5,
    text: "The team of PS General Construction Corp was fantastic. They installed new pavers in our backyard and the transformation is stunning. Very happy with their work.",
    avatar: "G",
    color: "#03A9F4"
  }
];


const Testimonials = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  const loadMoreTestimonials = () => {
    setVisibleTestimonials((prevVisible) => prevVisible + 3);
  };

  return (
    <section className="testimonials-section">
      <h2>Testimonials</h2>
      <h3>United With Our Customers</h3>
      <div className="ratings">
        EXCELLENT <span className="stars">★★★★★</span> 141 reviews on
        <span className="google">
          <span className="g">G</span>
          <span className="o1">o</span>
          <span className="o2">o</span>
          <span className="g">g</span>
          <span className="l">l</span>
          <span className="e">e</span>
        </span>
      </div>
      <div className="testimonials-container">
        {testimonials.slice(0, visibleTestimonials).map((testimonial, index) => (
          <div key={index} className="testimonial-card" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="avatar" style={{ backgroundColor: testimonial.color }}>{testimonial.avatar}</div>
            <img src={googlelogo} alt="Google logo" className="google-logo" />
            <div className="testimonial-content">
              <h4>{testimonial.name}</h4>
              <p className="date">{testimonial.date}</p>
              <div className="rating">
                {"★".repeat(testimonial.rating)}
              </div>
              <p>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleTestimonials < testimonials.length && (
        <button className="load-more-btn" onClick={loadMoreTestimonials}>Load More</button>
      )}
    </section>
  );
};

export default Testimonials;
