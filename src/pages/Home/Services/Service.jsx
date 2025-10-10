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
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './Service.css';

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
    { ext: '.com', originalPrice: '$17.99/yr', discountedPrice: '$2.99/yr' },
    { ext: '.online', originalPrice: '$17.99/yr', discountedPrice: '$2.99/yr' },
    { ext: '.shop', originalPrice: '$17.99/yr', discountedPrice: '$2.99/yr' },
    { ext: '.pro', originalPrice: '$17.99/yr', discountedPrice: '$2.99/yr' },
    { ext: '.net', originalPrice: '$17.99/yr', discountedPrice: '$2.99/yr' },
    { ext: '.org', originalPrice: '$17.99/yr', discountedPrice: '$2.99/yr' },
  ];

  const handleSearch = () => {
    console.log('Searching for domain:', domain);
  };

  const handleGenerateAI = () => {
    console.log('Generating domain using AI...');
  };

  // Framer Motion Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, type: 'spring', stiffness: 100 },
    }),
    hover: { y: -6, scale: 1.05, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0px 4px 12px rgba(0,0,0,0.3)' },
  };

  // Scroll animation for services section
  const serviceRef = useRef(null);
  const serviceInView = useInView(serviceRef, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (serviceInView) {
      controls.start('visible');
    }
  }, [serviceInView, controls]);

  return (
    <section className="service-section">
      <h1 className="service-heading">Our Services</h1>
      <div className="service-box background-gradient">
        <div className="service-items-container" ref={serviceRef}>
          <ul className="service-items-list">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={idx}
                  className="service-item-card"
                  custom={idx}
                  variants={cardVariants}
                  initial="hidden"
                  animate={controls}
                  // whileHover="hover"
                >
                  <div className="service-icon-box">
                    <Icon className="service-icon" />
                  </div>
                  <span className="service-title-text">{item.title}</span>
                </motion.li>
              );
            })}
          </ul>
        </div>

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
              <div className="service-domain-wrapper">
                <input
                  type="text"
                  className="service-domain-input"
                  placeholder="Type the domain name or a descriptive phrase..."
                  value={domain}
                  onChange={e => setDomain(e.target.value)}
                />
                <motion.button
                  className="service-domain-btn"
                  onClick={handleSearch}
                  whileHover={buttonVariants.hover}
                >
                  Search
                </motion.button>
              </div>

              <motion.button
                className="service-domain-btn ai-btn"
                onClick={handleGenerateAI}
                whileHover={buttonVariants.hover}
              >
                <svg
                  width="47"
                  height="48"
                  viewBox="0 0 47 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_352_157)">
                    <circle
                      cx="22.5"
                      cy="24"
                      r="12"
                      fill="url(#paint0_linear_352_157)"
                    />
                    <path
                      d="M19.3138 18.3544C19.4064 18.1042 19.7603 18.1042 19.8529 18.3544L20.2679 19.4759C20.3261 19.6333 20.4501 19.7573 20.6075 19.8155L21.729 20.2305C21.9792 20.3231 21.9792 20.677 21.729 20.7696L20.6075 21.1846C20.4501 21.2428 20.3261 21.3669 20.2679 21.5242L19.8529 22.6457C19.7603 22.8959 19.4064 22.8959 19.3138 22.6457L18.8988 21.5242C18.8406 21.3669 18.7165 21.2428 18.5592 21.1846L17.4377 20.7696C17.1874 20.677 17.1874 20.3231 17.4377 20.2305L18.5592 19.8155C18.7165 19.7573 18.8406 19.6333 18.8988 19.4759L19.3138 18.3544Z"
                      stroke="white"
                      stroke-width="0.8"
                    />
                    <path
                      d="M23.9023 22.624L24.7674 23.4892M19 29.8333H19.8736C20.5808 29.8333 20.9344 29.8333 21.2524 29.7015C21.5703 29.5698 21.8204 29.3198 22.3205 28.8197L27.0743 24.0659C27.3888 23.7514 27.546 23.5942 27.6301 23.4246C27.79 23.1019 27.79 22.723 27.6301 22.4003C27.546 22.2306 27.3888 22.0734 27.0743 21.7589C26.7598 21.4445 26.6026 21.2872 26.433 21.2032C26.1103 21.0433 25.7314 21.0433 25.4087 21.2032C25.239 21.2872 25.0818 21.4445 24.7674 21.7589L20.0135 26.5127C19.5135 27.0128 19.2634 27.2629 19.1317 27.5809C19 27.8988 19 28.2524 19 28.9597V29.8333Z"
                      stroke="white"
                      stroke-width="0.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_352_157"
                      x="0.1"
                      y="0.6"
                      width="46.8"
                      height="46.8"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="1" />
                      <feGaussianBlur stdDeviation="5.7" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.641795 0 0 0 0 0.0230769 0 0 0 0 1 0 0 0 0.45 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_352_157"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_352_157"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_352_157"
                      x1="16.5"
                      y1="13.5"
                      x2="27.5"
                      y2="35.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#C100EC" />
                      <stop offset="0.50242" stop-color="#6600F4" />
                      <stop offset="1" stop-color="#3100F4" />
                    </linearGradient>
                  </defs>
                </svg>
                Generate with AI
              </motion.button>
            </div>

            <div className="service-domain-extensions">
              {domainExtensions.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="service-domain-extension-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                >
                  <span className="extension">{item.ext}</span>
                  <span className="service-original-price">
                    USD <span>{item.originalPrice}</span>
                  </span>
                  <span className="service-discounted-price">
                    USD <span>{item.discountedPrice}</span>
                  </span>
                </motion.div>
              ))}
            </div>

            <p className="service-domain-whois-note">
              Free WHOIS Privacy Protection is included with every eligible
              domain registration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
