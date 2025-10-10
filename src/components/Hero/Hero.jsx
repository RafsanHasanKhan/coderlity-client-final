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
  // Intersection Observer
  const [ref, inView] = useInView({
    triggerOnce: true, // একবার দেখলেই trigger হবে
    threshold: 0.2, // 20% দেখা গেলে trigger হবে
  });

  return (
    <div className="hero-full">
      <div className="hero">
        <div className="hero-container" ref={ref}>
          {/* Left Icons */}
          <motion.div
            className="icon-container-left"
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="icon-box">
              <motion.img
                src={mern}
                alt="MERN"
                className="icon icon-top"
                whileHover={{ scale: 1.1 }}
              />
              <motion.img
                src={flutter}
                alt="Flutter"
                className="icon icon-right"
                whileHover={{ scale: 1.1 }}
              />
              <motion.img
                src={pos}
                alt="POS"
                className="icon icon-bottom"
                whileHover={{ scale: 1.1 }}
              />
              <motion.img
                src={laravel}
                alt="Laravel"
                className="icon icon-left"
                whileHover={{ scale: 1.1 }}
              />
            </div>
          </motion.div>

          {/* Right Icons */}
          <motion.div
            className="icon-container-right"
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="icon-box">
              <motion.img
                src={crm}
                alt="CRM"
                className="icon icon-top"
                whileHover={{ scale: 1.1 }}
              />
              <motion.img
                src={wordpress}
                alt="Wordpress"
                className="icon icon-right"
                whileHover={{ scale: 1.1 }}
              />
              <motion.img
                src={marketing}
                alt="Marketing"
                className="icon icon-bottom"
                whileHover={{ scale: 1.1 }}
              />
              <motion.img
                src={figma}
                alt="Figma"
                className="icon icon-left"
                whileHover={{ scale: 1.1 }}
              />
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            className="hero__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2>Looking for Your One Stop Solution?</h2>
          </motion.div>

          {/* Title */}
          <motion.div
            className="hero__title"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
          >
            <h1>Complete Digital Solutions for Your Business</h1>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="hero__buttons"
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4 }}
          >
            <motion.button
              className="hero__btn hero__btn--primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={phone} alt="" /> Book an Intro Call
            </motion.button>
            <motion.button
              className="hero__btn hero__btn--secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Work
            </motion.button>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="hero__image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.3 }}
          >
            <img src={fatoora} alt="Hero Illustration" />
          </motion.div>

          {/* Scroll Section */}
          <motion.div
            className="scroll-section"
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5 }}
          >
            <motion.div
              className="scroll-section-icon-top"
              animate={inView ? { y: [0, 10, 0] } : {}}
              transition={{ repeat: Infinity, duration: 1.8 }}
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
                    whileHover={{ scale: 1.05 }}
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
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.div
                className="scroll-section-icon-bottom"
                animate={inView ? { y: [0, -10, 0] } : {}}
                transition={{ repeat: Infinity, duration: 1.8 }}
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
                whileHover={{ rotate: 90 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
