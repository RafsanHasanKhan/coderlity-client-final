import './Footer.css'
import whiteLogo from '../../../public/assets/images/logo-white.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Sections */}
        <div className="footer-sections">
          {/* About / Description */}
          <div className="footer-about">
            <img src={whiteLogo} alt="" />
            <p className='' style={{margin: '38px 0px'}}>
              Coderlity.com is a leading provider of complete digital solutions,
              offering a wide range of services including web development, app
              development, ERP solutions, UI/UX design, digital marketing, IT
              consultation, and domain hosting. We also offer premium digital
              products such as PHP Laravel, HTML React JS front-end templates,
              and MERN projects. Our mission is to empower businesses by
              providing innovative, high-quality, and scalable digital solutions
              that meet your unique needs.
            </p>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li>Web Development</li>
              <li>App Development</li>
              <li>Customisation Service</li>
              <li>Installation Service</li>
              <li>Sass Development</li>
              <li>WordPress Development</li>
              <li>Shopify Development</li>
              <li>ERP Solutions</li>
              <li>UI/UX Designing</li>
              <li>Domain</li>
              <li>Digital Marketing Tech</li>
              <li>IT Consultation</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Products</h3>
            <ul>
              <li>PHP Laravel</li>
              <li>HTML / CSS</li>
              <li>React JS</li>
              <li>Node JS</li>
              <li>MERN Stack Projects</li>
              <li>Mobile App Templates</li>
              <li>Custom Templates</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Digital Marketing</h3>
            <ul>
              <li>SEO</li>
              <li>Google My Business Service</li>
              <li>Social Media Advertising</li>
              <li>Lead generation</li>
              <li>Backlinking</li>
              <li>Email Marketing</li>
              <li>Content Marketing</li>
              <li>Google Ads</li>
              <li>Facebook Ads</li>
              <li>PPC Advertising</li>
              <li>SEO Tools & Resources</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Hosting</h3>
            <ul>
              <li>Shared Hosting</li>
              <li>VPS Hosting</li>
              <li>Dedicated Hosting</li>
              <li>Cloud Hosting</li>
              <li>Dedicated Server</li>
              <li>WordPress Hosting</li>
              <li>E-commerce Hosting</li>
              <li>Reseller Hosting</li>
              <li>SSL Solutions</li>
              <li>SMTP</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Contact Us</li>
              <li>Account Login</li>
              <li>Account Registration</li>
              <li>FAQ</li>
              <li>Support Centre</li>
              <li>Support Policy</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© 2022-2025 All Rights Reserved By Coderlity</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
