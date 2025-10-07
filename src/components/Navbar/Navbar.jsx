import logo from '../../../public/assets/images/logo.png';
import './Navbar.css';
import jb from '../../../public/assets/images/jb.png';
import { IoIosArrowDown } from 'react-icons/io';
import { MdLogin } from 'react-icons/md';
import { PiDotsNineBold } from 'react-icons/pi';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const megaMenu = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      path: '/services',
      submenu: [
        {
          name: 'Web Development',
          path: '/services/web-development',
          icon: jb,
          submenu: [
            { name: 'Frontend', path: '/services/web-development/frontend' },
            { name: 'Backend', path: '/services/web-development/backend' },
            { name: 'Fullstack', path: '/services/web-development/fullstack' },
          ],
        },
        {
          name: 'App Development',
          path: '/services/app-development',
          submenu: [
            { name: 'iOS', path: '/services/app-development/ios' },
            { name: 'Android', path: '/services/app-development/android' },
            {
              name: 'Cross-Platform',
              path: '/services/app-development/cross-platform',
            },
          ],
        },
        { name: 'UI/UX Design', path: '/services/ui-ux-design' },
        { name: 'SEO Services', path: '/services/seo' },
      ],
    },
    {
      name: 'Products',
      path: '/products',
      submenu: [
        {
          name: 'Software',
          path: '/products/software',
          submenu: [
            { name: 'Productivity', path: '/products/software/productivity' },
            { name: 'Security', path: '/products/software/security' },
          ],
        },
        { name: 'Templates', path: '/products/templates' },
        { name: 'Plugins', path: '/products/plugins' },
        { name: 'Themes', path: '/products/themes' },
      ],
    },
    {
      name: 'Digital Marketing',
      path: '/digital-marketing',
      submenu: [
        {
          name: 'Social Media Marketing',
          path: '/digital-marketing/social-media',
          submenu: [
            {
              name: 'Facebook',
              path: '/digital-marketing/social-media/facebook',
            },
            {
              name: 'Instagram',
              path: '/digital-marketing/social-media/instagram',
            },
          ],
        },
        { name: 'Email Marketing', path: '/digital-marketing/email' },
        { name: 'Content Marketing', path: '/digital-marketing/content' },
        { name: 'PPC Advertising', path: '/digital-marketing/ppc' },
      ],
    },
    {
      name: 'Web Hosting',
      path: '/web-hosting',
      submenu: [
        { name: 'Shared Hosting', path: '/web-hosting/shared' },
        { name: 'VPS Hosting', path: '/web-hosting/vps' },
        { name: 'Dedicated Hosting', path: '/web-hosting/dedicated' },
        { name: 'Cloud Hosting', path: '/web-hosting/cloud' },
      ],
    },
    {
      name: 'About',
      path: '/about',
      submenu: [
        { name: 'Our Team', path: '/about/team' },
        { name: 'Our Story', path: '/about/story' },
        { name: 'Careers', path: '/about/careers' },
        { name: 'Contact', path: '/about/contact' },
      ],
    },
  ];

  return (
    <div
      style={{
        maxWidth: '1380px',
        margin: '0 auto',
        zIndex: 10,
        padding: '20px 0',
      }}
    >
      <div className="d-flex align-items-center justify-content-between">
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" />
        </div>

        {/* Desktop Menu */}
        <nav className="position-relative d-flex align-items-center d-none d-lg-block">
          <ul className="menu d-flex align-items-center gap-3 p-0 m-0 list-unstyled">
            {megaMenu.map((item, idx) => (
              <li key={idx}>
                {item.name}
                {item.submenu && (
                  <IoIosArrowDown
                    style={{ width: '12px', height: '12px', marginLeft: '4px' }}
                  />
                )}
                {item.submenu && (
                  <ul className="submenu">
                    {item.submenu.map((sub, subIdx) => (
                      <li key={subIdx}>
                        {sub.icon && <img src={sub.icon} alt="" />}
                        {sub.name}
                        {sub.submenu && (
                          <ul className="nested-submenu">
                            {sub.submenu.map((nested, nestedIdx) => (
                              <li key={nestedIdx}>{nested.name}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Buttons */}
        <div className="d-none d-lg-flex align-items-center gap-3 right-side">
          <button
            className="d-flex align-items-center gap-2 fw-medium rounded-3 px-3 py-2"
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '16px',
              background: '#000',
              color: '#fff',
              border: 0,
            }}
          >
            <MdLogin /> My Account
          </button>
          <PiDotsNineBold style={{ height: '35px', width: '35px' }} />
        </div>
        {/* Mobile Toggle Button */}
        <PiDotsNineBold
          className="menu-toggle-icon d-lg-none"
          style={{ height: '35px', width: '35px', cursor: 'pointer' }}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Mobile Menu */}
      <ul className={`menu ${menuOpen ? 'active' : ''} d-lg-none`}>
        {megaMenu.map((item, idx) => (
          <li key={idx}>
            {item.name}
            {item.submenu && (
              <IoIosArrowDown
                style={{ width: '12px', height: '12px', marginLeft: '4px' }}
              />
            )}
            {item.submenu && (
              <ul className="submenu">
                {item.submenu.map((sub, subIdx) => (
                  <li key={subIdx}>
                    {sub.icon && <img src={sub.icon} alt="" />}
                    {sub.name}
                    {sub.submenu && (
                      <ul className="nested-submenu">
                        {sub.submenu.map((nested, nestedIdx) => (
                          <li key={nestedIdx}>{nested.name}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <button
          className="d-flex align-items-center gap-2 fw-medium rounded-3 px-3 py-2"
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: '16px',
            background: '#000',
            color: '#fff',
            border: 0,
            textAlign: 'center',
            justifyContent: 'center'
          }}
        >
          <MdLogin /> My Account
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
