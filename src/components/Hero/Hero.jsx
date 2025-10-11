import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Hero.css';
import fatoora from '../../../public/assets/images/hero/fatoora.png';
import downScroll from '../../../public/assets/images/hero/down-scroll.png';
import chat from '../../../public/assets/images/hero/chat.png';
import crm from '../../../public/assets/images/hero/crm.png';
import figma from '../../../public/assets/images/hero/figma.png';
import flutter from '../../../public/assets/images/hero/flutter.png';
import laravel from '../../../public/assets/images/hero/laravel.png';
import marketing from '../../../public/assets/images/hero/marketing.png';
import mern from '../../../public/assets/images/hero/mern.png';
import phone from '../../../public/assets/images/hero/phone.png';
import pos from '../../../public/assets/images/hero/pos.png';
import threeDotTwo from '../../../public/assets/images/hero/three-dot-two.png';
import wordpress from '../../../public/assets/images/hero/wordpress.png';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animation variants for smooth entrance
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay, ease: 'easeOut' },
    },
  });

  const scaleIn = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay, ease: 'easeInOut' },
    },
  });

  return (
    <div className="hero-full">
      <div className="hero">
        <motion.div
          className="hero-container"
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Left Icons */}
          <motion.div
            className="icon-container-left"
            variants={fadeUp(0.2)}
            transition={{ duration: 1 }}
          >
            <div className="icon-box floating">
              <motion.img src={mern} alt="MERN" className="icon icon-top" />
              <motion.img
                src={flutter}
                alt="Flutter"
                className="icon icon-right"
              />
              <motion.img src={pos} alt="POS" className="icon icon-bottom" />
              <motion.img
                src={laravel}
                alt="Laravel"
                className="icon icon-left"
              />
            </div>
          </motion.div>

          {/* Right Icons */}
          <motion.div className="icon-container-right" variants={fadeUp(0.4)}>
            <div className="icon-box floating">
              <motion.img src={crm} alt="CRM" className="icon icon-top" />
              <motion.img
                src={wordpress}
                alt="WordPress"
                className="icon icon-right"
              />
              <motion.img
                src={marketing}
                alt="Marketing"
                className="icon icon-bottom"
              />
              <motion.img src={figma} alt="Figma" className="icon icon-left" />
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div className="hero__subtitle" variants={fadeUp(0.3)}>
            <h2>Looking for Your One Stop Solution?</h2>
          </motion.div>

          {/* Title */}
          <motion.div className="hero__title" variants={fadeUp(0.5)}>
            <h1>Complete Digital Solutions for Your Business</h1>
          </motion.div>

          {/* Buttons */}
          <motion.div className="hero__buttons" variants={fadeUp(0.7)}>
            <motion.button
              className="hero__btn hero__btn--primary"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 15px rgba(0, 123, 255, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={phone} alt="" /> Book an Intro Call
            </motion.button>
            <motion.button
              className="hero__btn hero__btn--secondary"
              whileHover={{
                scale: 1.05,
                backgroundColor: '#007bff',
                color: '#fff',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Work
            </motion.button>
          </motion.div>

          {/* Hero Image */}
          <motion.div className="hero__image" variants={scaleIn(0.8)}>
            <motion.img
              src={fatoora}
              alt="Hero Illustration"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          {/* Scroll Section */}
          <motion.div className="scroll-section" variants={fadeUp(1)}>
            <motion.div
              className="scroll-section-icon-top"
              animate={{ y: [0, 12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: 'easeInOut',
              }}
            >
              <img src={downScroll} alt="Scroll Down" />
            </motion.div>

            <div className="scroll-section__services">
              <ul className="services-list">
                {[
                  'Web Application',
                  'Mobile Application',
                  'Zacta E-Invoicing',
                  'Digital Marketing',
                  'UI/UX',
                  'Tech Consultancy',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="services-list__item"
                    whileHover={{
                      scale: 1.05,
                      color: '#007bff',
                      transition: { duration: 0.2 },
                    }}
                  >
                    <a href="#" className={index === 0 ? 'active' : ''}>
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              className="scroll-section__extras"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <motion.div
                className="scroll-section-icon-bottom"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                  ease: 'easeInOut',
                }}
              >
                <img src={downScroll} alt="Scroll Down" />
              </motion.div>
              <motion.img
                src={chat}
                alt="Chat"
                className="scroll-section-chat"
                whileHover={{ scale: 1.1 }}
              />
              <motion.img
                src={threeDotTwo}
                alt="More Options"
                className="scroll-section__dots"
                animate={{ rotate: [0, 500, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
