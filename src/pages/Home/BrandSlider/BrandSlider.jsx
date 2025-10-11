import './BrandSlider.css';
import beefinder from '../../../../public/assets/images/company/beefinder.png';
import bextr from '../../../../public/assets/images/company/bextr.png';
import ditopic from '../../../../public/assets/images/company/ditopic.png';
import fund from '../../../../public/assets/images/company/fund.png';
import giveme from '../../../../public/assets/images/company/giveme.png';
import givepy from '../../../../public/assets/images/company/givepy.png';
import vaiplaato from '../../../../public/assets/images/company/vaiplaato.png';
import workpeople from '../../../../public/assets/images/company/workpeople.png';

const BrandSlider = () => {
  const logos = [
    beefinder,
    bextr,
    ditopic,
    fund,
    giveme,
    givepy,
    vaiplaato,
    workpeople,
  ];

  return (
    <section className="brand-slider-section">
      <div className="brand-slider-container">
        <div className="brand-track">
          {[...logos, ...logos].map((logo, index) => (
            <div className="brand-logo" key={index}>
              <img src={logo} alt={`Brand ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;
