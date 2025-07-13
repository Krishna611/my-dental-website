import '../styles/FAQ.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer teeth whitening, dental implants, orthodontics, root canals, pediatric dentistry, and more."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept most major insurance providers. Please contact us to confirm if we accept your specific plan."
    },
    {
      question: "How can I book an appointment?",
      answer: "You can easily book an appointment on our website or by calling our clinic directly."
    },
    {
      question: "Are your treatments painful?",
      answer: "Our treatments use modern, minimally invasive techniques to ensure your comfort throughout."
    },
    {
      question: "Do you treat children?",
      answer: "Yes! We have specialized pediatric dentistry services designed for children and teenagers."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item mb-3 border rounded">
            <button
              className="faq-question d-flex justify-content-between align-items-center w-100 p-3 bg-light border-0"
              onClick={() => toggleFAQ(index)}
            >
              <span className="fw-medium">{faq.question}</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`chevron ${activeIndex === index ? 'rotate' : ''}`}
              />
            </button>
            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
              <p className="mb-0 p-3">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
