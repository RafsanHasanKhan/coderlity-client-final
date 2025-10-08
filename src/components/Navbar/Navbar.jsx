import logo from '../../../public/assets/images/logo.png';
import './Navbar.css';
import { IoIosArrowDown } from 'react-icons/io';
import { MdLogin } from 'react-icons/md';
import { PiDotsNineBold } from 'react-icons/pi';
import { useState } from 'react';
import { megaMenu } from '../../../public/megaMenu';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // desktop hover
  const [clickedIndex, setClickedIndex] = useState(null); // mobile click
  const [menuOpen, setMenuOpen] = useState(false); // mobile toggle

  const handleClick = idx => {
    setClickedIndex(clickedIndex === idx ? null : idx);
  };

  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Desktop Menu */}
        <nav className="desktop-menu d-none d-lg-block">
          <ul className="menu">
            {megaMenu.map((item, idx) => (
              <li
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className="menu-title">
                  {item.name}
                  {item.submenu && <IoIosArrowDown className="arrow-icon" />}
                </span>

                <AnimatePresence>
                  {item.submenu && hoveredIndex === idx && (
                    <motion.ul
                      className="submenu"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: -450 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      {item.submenu.map((sub, subIdx) => (
                        <li key={subIdx} className="submenu-item">
                          {sub.icon && (
                            <img
                              src={sub.icon}
                              alt=""
                              className="submenu-icon"
                            />
                          )}
                          <div
                            className="submenu-description"
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            {sub.name}
                            <span style={{ fontSize: '10px' }}>
                              {sub.description}
                            </span>
                          </div>

                          <AnimatePresence>
                            {sub.submenu && (
                              <motion.ul
                                className="nested-submenu"
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -15 }}
                                transition={{ duration: 0.25 }}
                              >
                                {sub.submenu.map((nested, nestedIdx) => (
                                  <li key={nestedIdx}>{nested.name}</li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Buttons */}
        <div className="navbar-buttons d-none d-lg-flex align-content-center">
          <button className="account-button">
            <MdLogin /> My Account
          </button>
          <PiDotsNineBold className="dots-icon" style={{width:'36px',height:'36px'}} />
        </div>

        {/* Mobile Toggle */}
        <PiDotsNineBold
          className="menu-toggle-icon d-lg-none"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Mobile Menu */}
      <ul className={`menu mobile-menu d-lg-none ${menuOpen ? 'active' : ''}`}>
        {megaMenu.map((item, idx) => (
          <li key={idx}>
            <div className="mobile-title" onClick={() => handleClick(idx)}>
              <span>{item.name}</span>
              {item.submenu && <IoIosArrowDown />}
            </div>

            <AnimatePresence>
              {item.submenu && clickedIndex === idx && (
                <motion.ul
                  className="submenu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.submenu.map((sub, subIdx) => (
                    <li key={subIdx}>
                      {sub.icon && (
                        <img
                          src={sub.icon}
                          alt=""
                          style={{ width: '30px', height: '30px' }}
                        />
                      )}
                      {sub.name}
                      {sub.submenu && (
                        <motion.ul
                          className="nested-submenu"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.25 }}
                        >
                          {sub.submenu.map((nested, nestedIdx) => (
                            <li key={nestedIdx}>{nested.name}</li>
                          ))}
                        </motion.ul>
                      )}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        ))}

        <button className="account-button mobile-account-button">
          <MdLogin /> My Account
        </button>
      </ul>
    </header>
  );
};

export default Navbar;
