import './Hero.css'
import fatoora from '../../../public/assets/images/hero/fatoora.png'
import downScroll from '../../../public/assets/images/hero/down-scroll.png'
import chat from '../../../public/assets/images/hero/chat.png'
import crm from '../../../public/assets/images/hero/crm.png'
import figma from '../../../public/assets/images/hero/figma.png'
import flutter from '../../../public/assets/images/hero/flutter.png'
import laravel from '../../../public/assets/images/hero/laravel.png'
import marketing from '../../../public/assets/images/hero/marketing.png'
import mern from '../../../public/assets/images/hero/mern.png'
import phone from '../../../public/assets/images/hero/phone.png'
import pos from '../../../public/assets/images/hero/pos.png';
import threeDot from '../../../public/assets/images/hero/three-dot.png';
import wordpress from '../../../public/assets/images/hero/wordpress.png';



const Hero = () => {
  return (
    <div className="hero">
      {/* Row 1: Subtitle */}
      <div className="hero__subtitle">
        <h2>Looking for Your One Stop Solution?</h2>
      </div>

      {/* Row 2: Title */}
      <div className="hero__title">
        <h1>Complete Digital Solutions for Your Business</h1>
      </div>

      {/* Row 3: Buttons */}
      <div className="hero__buttons">
        <button className="hero__btn hero__btn--primary">
          Book an Intro Call
        </button>
        <button className="hero__btn hero__btn--secondary">
          Explore Our Work
        </button>
      </div>

      {/* Row 4: Hero Image */}
      <div className="hero__image">
        <img src={fatoora} alt="Hero Illustration" />
      </div>

      {/* Row 5: Scroll Indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-icon">
          <img src={downScroll} alt="Scroll Down" />
        </div>

        <div className="hero__scroll-line"></div>

        <div className="hero__scroll-dots">
          <div className="hero__dot"></div>
          <div className="hero__dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;