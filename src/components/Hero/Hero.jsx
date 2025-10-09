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
  return (
    <div className="hero-full">
      <div className="hero">
        <div className="hero-container">
          {/* Left Icons */}
          <div className="icon-container-left">
            <div className="icon-box">
              <img src={mern} alt="MERN" className="icon icon-top" />
              <img src={flutter} alt="Flutter" className="icon icon-right" />
              <img src={pos} alt="POS" className="icon icon-bottom" />
              <img src={laravel} alt="Laravel" className="icon icon-left" />
            </div>
          </div>

          {/* Right Icons */}
          <div className="icon-container-right">
            <div className="icon-box">
              <img src={crm} alt="CRM" className="icon icon-top" />
              <img
                src={wordpress}
                alt="Wordpress"
                className="icon icon-right"
              />
              <img
                src={marketing}
                alt="Marketing"
                className="icon icon-bottom"
              />
              <img src={figma} alt="Figma" className="icon icon-left" />
            </div>
          </div>

          {/* Subtitle */}
          <div className="hero__subtitle">
            <h2>Looking for Your One Stop Solution?</h2>
          </div>

          {/* Title */}
          <div className="hero__title">
            <h1>Complete Digital Solutions for Your Business</h1>
          </div>

          {/* Buttons */}
          <div className="hero__buttons">
            <button className="hero__btn hero__btn--primary">
              <img src={phone} alt="" /> Book an Intro Call
            </button>
            <button className="hero__btn hero__btn--secondary">
              Explore Our Work
            </button>
          </div>

          {/* Hero Image */}
          <div className="hero__image">
            <img src={fatoora} alt="Hero Illustration" />
          </div>

          {/* Scroll Section */}
          <div className="scroll-section">
            <div className="scroll-section__icon">
              <img src={downScroll} alt="Scroll Down" />
            </div>

            <div className="scroll-section__services">
              <ul className="services-list">
                <li className="services-list__item">
                  <a href="#" className="active">
                    Web Application
                  </a>
                </li>
                <li className="services-list__item">
                  <a href="#">Mobile Application</a>
                </li>
                <li className="services-list__item">
                  <a href="#">Zacta E-Invoicing</a>
                </li>
                <li className="services-list__item">
                  <a href="#">Digital Marketing</a>
                </li>
                <li className="services-list__item">
                  <a href="#">UI/UX</a>
                </li>
                <li className="services-list__item">
                  <a href="#">Tech Consultancy</a>
                </li>
              </ul>
            </div>

            <div className="scroll-section__extras">
              <img src={chat} alt="Chat" className="scroll-section__chat" />
              <img
                src={threeDotTwo}
                alt="More Options"
                className="scroll-section__dots"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
