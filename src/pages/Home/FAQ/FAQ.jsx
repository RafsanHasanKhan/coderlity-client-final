import { useState } from 'react';
import './Faq.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

    const faqs = [
      {
        question: 'What services does Coderlity provide?',
        answer:
          'Coderlity.com provides complete digital solutions including web development, app development, ERP systems, UI/UX design, SEO, and digital marketing services.',
      },
      {
        question: 'How long does it take to complete a project?',
        answer:
          'It depends on the project scope. Small projects take 1–3 weeks, while larger or custom ones may take 1–3 months.',
      },
      {
        question: 'What is your pricing model—fixed cost or hourly?',
        answer:
          'We offer both. Fixed-cost for defined projects and hourly rates for ongoing or flexible work.',
      },
      {
        question: 'How do I get started with Coderlity?',
        answer:
          'Simply contact us via our website, share your project details, and our team will schedule a free consultation.',
      },
    ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Left Side */}
        <div className="faq-left">
          <h2>Freequently asked Questions</h2>
          <p>
            Have questions about our services, process, or pricing? Our FAQ
            section is here to provide clear answers and help you better
            understand how Coderlity can support your digital journey.
          </p>
          <button className="faq-btn">Let’s Talk</button>
        </div>

        {/* Right Side */}
        <div className="faq-right">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h4>{faq.question}</h4>
                <button className="faq-toggle">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
              <div
                className={`faq-answer ${openIndex === index ? 'open' : ''}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
