import logo from '../../../public/assets/images/logo.png';
import './Navbar.css';
import { IoIosArrowDown } from 'react-icons/io';
import { MdLogin } from 'react-icons/md';
import { PiDotsNineBold } from 'react-icons/pi';
import { useState } from 'react';
import { megaMenu } from '../../../public/megaMenu';

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

                {item.submenu && hoveredIndex === idx && (
                  <ul className="submenu">
                    {item.submenu.map((sub, subIdx) => (
                      <li key={subIdx}>
                        {sub.icon && (
                          <img src={sub.icon} alt="" className="submenu-icon" />
                        )}
                        <div
                          className="submenu-description"
                          style={{ display: 'flex', flexDirection: 'column' }}
                        >
                          {sub.name}
                          <span style={{ fontSize: '10px' }}>
                            {sub.description}
                          </span>
                        </div>
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
        <div className="navbar-buttons d-none d-lg-flex">
          <button className="account-button">
            <MdLogin /> My Account
          </button>
          <PiDotsNineBold className="dots-icon"  />
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

            {item.submenu && clickedIndex === idx && (
              <ul className="submenu">
                {item.submenu.map((sub, subIdx) => (
                  <li key={subIdx}>
                    {sub.icon && <img src={sub.icon} alt="" style={{width: '30px', height: '30px'}}/>}
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

        <button className="account-button mobile-account-button">
          <MdLogin /> My Account
        </button>
      </ul>
    </header>
  );
};

export default Navbar;