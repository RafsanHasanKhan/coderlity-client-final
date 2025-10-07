import logo from '../../../public/assets/images/logo.png';
import './Navbar.css';
import jb from '../../../public/assets/images/jb.png';
import { IoIosArrowDown } from 'react-icons/io';
import { MdLogin } from 'react-icons/md';
import { PiDotsNineBold } from 'react-icons/pi';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Mobile main menu
  const [hoveredIndex, setHoveredIndex] = useState(null); // Desktop hover
  const [clickedIndex, setClickedIndex] = useState(null); // Mobile click submenu

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
        { name: 'App Development', path: '/services/app-development' },
      ],
    },
    { name: 'Products', path: '/products' },
  ];

  const handleClick = idx => {
    if (clickedIndex === idx) setClickedIndex(null);
    else setClickedIndex(idx);
  };

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
        <nav className="position-relative d-none d-lg-block">
          <ul className="menu d-flex align-items-center gap-3 p-0 m-0 list-unstyled">
            {megaMenu.map((item, idx) => (
              <li
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {item.name}
                {item.submenu && (
                  <IoIosArrowDown
                    style={{ width: '12px', height: '12px', marginLeft: '4px' }}
                  />
                )}

                {/* Desktop submenu */}
                {item.submenu && hoveredIndex === idx && (
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
            <div
              onClick={() => handleClick(idx)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
            >
              <span>{item.name}</span>
              {item.submenu && (
                <IoIosArrowDown
                  style={{ width: '12px', height: '12px', marginLeft: '4px' }}
                />
              )}
            </div>

            {/* Mobile submenu toggle */}
            {item.submenu && clickedIndex === idx && (
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

        {/* Mobile Account Button */}
        <button
          className="d-flex align-items-center gap-2 fw-medium rounded-3 px-3 py-2"
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: '16px',
            background: '#000',
            color: '#fff',
            border: 0,
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          <MdLogin /> My Account
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
