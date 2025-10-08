import logo from '../../../public/assets/images/logo.png';
import './Navbar.css';
import { IoIosArrowDown } from 'react-icons/io';
import { MdLogin } from 'react-icons/md';
import { PiDotsNineBold } from 'react-icons/pi';
import { useState, useRef } from 'react';
import { megaMenu } from '../../../public/megaMenu';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../../../public/service';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Desktop main hover
  const [activeSubmenu, setActiveSubmenu] = useState(null); // Nested submenu hover
  const [clickedIndex, setClickedIndex] = useState(null); // Mobile click
  const [menuOpen, setMenuOpen] = useState(false); // Mobile toggle
  const [isOpen, setIsOpen] = useState(false);

  const mainTimeoutRef = useRef(null);
  const subTimeoutRef = useRef(null);

  // --- MAIN MENU HOVER HANDLERS ---
  const handleMainMouseEnter = idx => {
    clearTimeout(mainTimeoutRef.current);
    setHoveredIndex(idx);
  };

  const handleMainMouseLeave = () => {
    mainTimeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
    }, 500); // main submenu close delay
  };

  // --- SUBMENU (NESTED) HOVER HANDLERS ---
  const handleSubMouseEnter = subIdx => {
    clearTimeout(subTimeoutRef.current);
    setActiveSubmenu(subIdx);
  };

  const handleSubMouseLeave = () => {
    subTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 300); // nested submenu close delay
  };

  // --- MOBILE CLICK HANDLER ---
  const handleClick = idx => {
    setClickedIndex(clickedIndex === idx ? null : idx);
  };

  // --- MOBILE MENU TOGGLE ---
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
                onMouseEnter={() => handleMainMouseEnter(idx)}
                onMouseLeave={handleMainMouseLeave}
              >
                <span className="menu-title">
                  {item.name}
                  {item.submenu && <IoIosArrowDown className="arrow-icon" />}
                </span>

                {/* --- Main Submenu --- */}
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
                        <li
                          key={subIdx}
                          className="submenu-item"
                          onMouseEnter={() => handleSubMouseEnter(subIdx)}
                          onMouseLeave={handleSubMouseLeave}
                        >
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

                          {/* --- Nested Submenu --- */}
                          <AnimatePresence>
                            {sub.submenu && activeSubmenu === subIdx && (
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
          <PiDotsNineBold
            onClick={() => setIsOpen(!isOpen)}
            className="dots-icon"
            style={{ width: '36px', height: '36px' }}
          />

          <AnimatePresence>
            {isOpen ? (
              <motion.div
                className="dot-menu"
                initial={{ opacity: 0, y: -50, x:-20 }}
                animate={{ opacity: 1, y: 35, x:-20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="dot-grid">
                  {servicesData.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                      <li key={idx} className="dot-item">
                        <Icon className="dot-icon" />
                       
                        <span className="dot-text">{service.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        {/* Mobile Toggle */}
        <PiDotsNineBold
          className="menu-toggle-icon d-lg-none"
          onClick={toggleMenu}
        />
      </div>

      {/* --- Mobile Menu --- */}
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
