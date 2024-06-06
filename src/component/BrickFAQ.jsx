import React, { useState } from 'react';
import './BrickFAQ.css';

const BrickFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="brick-faq-section">
      <h2>Frequently Asked Questions for PS General Constraction Corp</h2>
      <h3>General Contractor Services in NYC and Surrounding Areas</h3>
      <div className="brick-faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className="brick-faq-item">
            <div
              className={`brick-faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="brick-faq-icon"></span>
            </div>
            <div className={`brick-faq-answer ${activeIndex === index ? 'active' : ''}`}>
              <div className="brick-faq-answer-content">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const faqData = [
  {
    question: 'What is brick pointing, and why is it essential for buildings in NYC?',
    answer: 'Brick pointing involves the repair and restoration of mortar joints in brickwork. In places like NYC, where buildings endure harsh weather conditions, proper brick pointing is crucial to maintain structural integrity and aesthetic appeal.'
  },
  {
    question: 'How do I know if my building needs brick repointing?',
    answer: 'Indicators that your building might need brick repointing include deteriorating or missing mortar, water infiltration, damp walls, and visible cracks in the mortar joints. Observing any of these signs means it\'s time to consider repointing.'
  },
  {
    question: 'What areas do you serve for brick pointing services?',
    answer: 'We provide brick pointing services throughout New York City and Nassau County, ensuring your building stays in excellent condition despite challenging weather conditions.'
  },
  {
    question: 'Is PS General Construction Corp licensed and insured?',
    answer: 'Yes, PS General Construction Corp is fully licensed and insured, ensuring our clients receive reliable and professional services.'
  },
  {
    question: 'How can I contact PS General Construction Corp for inquiries or appointments?',
    answer: 'You can reach PS General Construction Corp by phone at (347)-574-8225 or email us at Psgeneral@psgeneral.com. We are available to help with your brick pointing needs.'
  },
  {
    question: 'What sets PS General Construction Corp apart from other construction companies?',
    answer: 'Our dedication to quality, customer satisfaction, and extensive experience in brick pointing and other construction services sets us apart. We offer personalized services and ensure that every project meets the highest standards.'
  },
  {
    question: 'How does the brick pointing process work, and how long does it typically take?',
    answer: 'The brick pointing process involves removing damaged mortar, cleaning the joints, and applying new mortar to restore the brickwork. The duration of the project depends on the building\'s size and condition but usually takes from a few days to a couple of weeks.'
  },
  {
    question: 'Can PS General Construction Corp handle emergency brick pointing situations?',
    answer: 'Yes, we can manage emergency brick pointing situations. Our team is prepared to respond quickly to urgent needs, ensuring the safety and stability of your building.'
  },
  {
    question: 'Do you offer free estimates for brick pointing projects?',
    answer: 'Yes, we provide free estimates for brick pointing projects. Contact us to schedule an appointment, and we will give you a detailed quote based on your specific requirements.'
  },
  {
    question: 'Are your services limited to brick pointing, or do you offer other construction services as well?',
    answer: 'In addition to brick pointing, we offer various other construction services, including masonry, roofing, custom building, siding, stucco, and waterproofing. Our goal is to provide comprehensive solutions for all your construction needs.'
  }
];


export default BrickFAQ;
