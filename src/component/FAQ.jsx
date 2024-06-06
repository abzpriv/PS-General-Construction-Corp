import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions for PS General Construction Corp</h2>
      <h3>General Contractor Services in NYC and Surrounding Areas</h3>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faq-icon"></span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
              <div className="faq-answer-content">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const faqData = [
  {
    question: 'What services does PS General Construction Corp offer?',
    answer: 'PS General Construction Corp offers a variety of services including masonry, roofing, waterproofing, power washing, and more.'
  },
  {
    question: 'How can I get in touch with PS General Construction Corp?',
    answer: 'You can reach us by phone at (347)-574-8225 or email us at Psgenereal@psgeneral.com.'
  },
  {
    question: 'Which areas does PS General Construction Corp serve?',
    answer: 'We serve the entire New York City area, including Brooklyn, Queens, and Manhattan.'
  },
  {
    question: 'How do I select the right general contractor for my NYC construction project?',
    answer: 'When selecting a general contractor in NYC, consider their experience, qualifications, customer reviews, and the range of services they provide. Schedule consultations to discuss your project and evaluate their communication and project management skills.'
  },
  {
    question: 'Is PS General Construction Corp a licensed?',
    answer: 'Yes, PS General Construction Corp is fully licensed and insured in New York City.'
  },
  {
    question: 'Is  PS General Construction Corp insured?',
    answer: 'Yes, we are fully insured to protect your investment and give you peace of mind.'
  },
  {
    question: 'Can PS General Construction Corp manage both commercial and residential projects?',
    answer: 'Yes, we have extensive experience managing both commercial and residential projects of varying sizes and complexities.'
  }
];


export default FAQ;
