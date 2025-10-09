import {
  FaGlobe,
  FaServer,
  FaCode,
  FaMobileAlt,
  FaNetworkWired,
  FaBullhorn,
  FaPencilRuler,
  FaLightbulb,
} from 'react-icons/fa';
import './Service.css';
import { useState } from 'react';

const Service = () => {
  const services = [
    { id: 1, title: 'Domain', icon: FaGlobe },
    { id: 2, title: 'Hosting', icon: FaServer },
    { id: 3, title: 'Web Application', icon: FaCode },
    { id: 4, title: 'Mobile Application', icon: FaMobileAlt },
    { id: 5, title: 'ERP Solutions', icon: FaNetworkWired },
    { id: 6, title: 'Digital Marketing', icon: FaBullhorn },
    { id: 7, title: 'UI/UX', icon: FaPencilRuler },
    { id: 8, title: 'Tech Consultancy', icon: FaLightbulb },
  ];

  const [domain, setDomain] = useState('');

  const domainExtensions = [
    {
      ext: '.com',
      originalPrice: '$17.99/yr',
      discountedPrice: '$2.99/yr',
    },
    {
      ext: '.online',
      originalPrice: '$17.99/yr',
      discountedPrice: '$2.99/yr',
    },
    {
      ext: '.shop',
      originalPrice: '$17.99/yr',
      discountedPrice: '$2.99/yr',
    },
    {
      ext: '.pro',
      originalPrice: '$17.99/yr',
      discountedPrice: '$2.99/yr',
    },
    {
      ext: '.net',
      originalPrice: '$17.99/yr',
      discountedPrice: '$2.99/yr',
    },
    {
      ext: '.org',
      originalPrice: '$17.99/yr',
      discountedPrice: '$2.99/yr',
    },
  ];


  const handleSearch = () => {
    console.log('Searching for domain:', domain);
  };

  const handleGenerateAI = () => {
    console.log('Generating domain using AI...');
  };

  return (
    <section className="service-section">
      <h1 className="service-heading">Our Services</h1>
      <div className="service-box background-gradient">
        <div className="service-items-container ">
          <ul className="service-items-list">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <li key={idx} className="service-item-card">
                  <div className="service-icon-box">
                    <Icon className="service-icon" />
                  </div>
                  <span className="service-title-text">{item.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="service-domain-search-section">
            <div className="service-domain-search-container">
              <h2 className="service-domain-heading">
                Find Your Perfect Domain?
              </h2>
              <p className="service-domain-text">
                Discover, buy, and register your unique web address using our
                powerful search or get creative with our AI Generator.
              </p>

              <div className="service-domain-input-group">
                <input
                  type="text"
                  className="service-domain-input"
                  placeholder="Type the domain name or a descriptive phrase..."
                  value={domain}
                  onChange={e => setDomain(e.target.value)}
                />
                <button
                  className="service-domain-btn search-btn"
                  onClick={handleSearch}
                >
                  Search Domain
                </button>
                <button
                  className="service-domain-btn ai-btn"
                  onClick={handleGenerateAI}
                >
                  Generate with AI
                </button>
              </div>

              <div className="service-domain-extensions">
                {domainExtensions.map((item, idx) => (
                  <div key={idx} className="service-domain-extension-card">
                    <span className="extension">{item.ext}</span>
                    <span className="service-original-price">
                      USD <span>{item.originalPrice}</span>
                    </span>
                    <span className="service-discounted-price">
                      USD <span className="test">{item.discountedPrice}</span>
                    </span>
                  </div>
                ))}
              </div>

              <p className="service-domain-whois-note">
                Free WHOIS Privacy Protection is included with every eligible
                domain registration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
