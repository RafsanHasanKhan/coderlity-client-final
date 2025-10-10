import './Featured.css';
import featuredOne from '../../../../public/assets/images/feature/featured-1.png';
import featuredTwo from '../../../../public/assets/images/feature/featured-2.png';
import featuredThree from '../../../../public/assets/images/feature/featured-3.png';
import featuredFour from '../../../../public/assets/images/feature/featured-4.png';

const Featured = () => {
  const services = [
    {
      title: 'UI/UX Design',
      description:
        'UI/UX Design services craft engaging, user-friendly digital experiences that blend aesthetics with functionality.',
      image: featuredOne,
    },
    {
      title: 'Domain Hosting',
      description:
        'Our Domain Hosting service provides secure, reliable, and fast hosting solutions to keep your website always accessible.',
      image: featuredTwo,
    },
    {
      title: 'Web / App Developing',
      description:
        'Our Game Design service creates immersive, interactive, and engaging gaming experiences tailored to captivate players.',
      image: featuredThree,
    },
    {
      title: 'Digital Marketing',
      description:
        'Our Digital Marketing service helps grow your brand online through strategic campaigns, SEO, social media, and targeted advertising.',
      image: featuredFour,
    },
  ];

  return (
    <section className="featured-section">
      <div className="featured-container">
        {/* Title & Intro */}
        <div className="featured-intro">
          <h2 className="featured-title">Featured Items</h2>
          <p className="featured-description">
            Explore our top-selling digital products, including custom PHP
            Laravel frameworks, sleek HTML React JS front-end templates, and
            robust MERN projects. These featured items are designed to offer
            cutting-edge solutions for modern web development needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="featured-grid">
          {services.map((service, index) => (
            <div key={index} className="featured-card">
              <div className="featured-card-image">
                <img src={service.image} alt={service.title} />
              </div>
              <h3 className="featured-card-title">{service.title}</h3>
              <p className="featured-card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
