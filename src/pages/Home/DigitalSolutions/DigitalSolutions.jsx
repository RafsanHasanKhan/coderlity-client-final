import React, { useState } from 'react';
import './DigitalSolutions.css';
import digitalSolutions from '../../../../public/assets/images/digital-solutions.png';

const services = [
  {
    number: '01',
    title: 'Web Application',
    description:
      'Our web application services focus on developing scalable, secure, and user-friendly platforms tailored to your business needs. From custom-built solutions to seamless integration, we ensure your web application enhances your online presence and meets your goals effectively.',
  },
  {
    number: '02',
    title: 'Mobile Application',
    description:
      'Our mobile application solutions help businesses reach users on Android and iOS with seamless, responsive, and secure apps.',
  },
  {
    number: '03',
    title: 'UI/UX',
    description:
      'UI/UX design services create engaging, intuitive, and user-friendly digital experiences.',
  },
  {
    number: '04',
    title: 'Domain Hosting',
    description:
      'We provide reliable, secure, and fast domain hosting to keep your website always accessible.',
  },
  {
    number: '05',
    title: 'Digital Marketing',
    description:
      'Digital marketing services help grow your brand online through SEO, social media, and campaigns.',
  },
  {
    number: '06',
    title: 'Tech Consultancy',
    description:
      'Our tech consultancy guides businesses with strategic IT solutions and digital transformation.',
  },
];

const DigitalSolutions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleService = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="digital-solutions-section">
      <div className="digital-solutions-container">
        {/* ===== Left Column ===== */}
        <div className="digital-solutions-column intro-column">
          <div className="digital-solutions-image">
            <img src={digitalSolutions} alt="Digital Solutions" />
          </div>
          <h2 className="digital-solutions-title">
            Our Complete Digital Solutions
          </h2>
          <p className="digital-solutions-description">
            We provide a complete suite of services that covers web development,
            app development, UI/UX design, API integration (including
            e-invoicing ZATCA integration), digital marketing, IT consultation,
            and domain hosting, ensuring all your digital needs are met under
            one roof.
          </p>
        </div>

        {/* ===== Right Column ===== */}
        <div className="digital-solutions-column services-column">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`accordion-card ${
                activeIndex === index ? 'active' : ''
              }`}
            >
              <div
                className="accordion-title"
                onClick={() => toggleService(index)}
              >
                <span className="accordion-number">{service.number}</span>
                <span className="accordion-service-title">{service.title}</span>
              </div>

              {activeIndex === index && (
                <div className="accordion-description">
                  {service.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalSolutions;
