import { Outlet, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import logo from '../../images/UX-UI/silhouette.png';


function UXUI() {

  // This var and useEffect are to detect if a device was rotated and remove hamburger
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      // If device has gone to landscape mode
      if (window.innerWidth > window.innerHeight && isNavOpen) {
        setIsNavOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isNavOpen]);

  // JSX to be injected
  return (
    <div className="ux-ui">
      {/* Navigation bar */}
      <nav>
        <div className='content-container'>
          <div className='nav-bar-content'>
            <div className="nav-logo">
              <Link to="/" className="nav-logo-button">
                <img src={logo} alt='logo'></img>
                <h1>David Alsabrook</h1>
              </Link>
              <div className='hamburger'>
                <Hamburger
                  toggled={isNavOpen}
                  onToggle={toggled => setIsNavOpen(toggled)}
                  duration={1}
                  label="Show navigation menu"
                />
              </div>
            </div>
            <div className={`nav-links-${isNavOpen ? 'open' : 'closed'} col-5`}>
              <ul className='nav-list col-9'>
                <li><Link to="/portfolio" className="nav-link-button" onClick={() => setIsNavOpen(false)}>Portfolio</Link></li>
                <li><Link to="/resume" className="nav-link-button" onClick={() => setIsNavOpen(false)}>Resume</Link></li>
                <li><Link to="/about" className="nav-link-button" onClick={() => setIsNavOpen(false)}>About</Link></li>
              </ul>
              <Link to="/contact" className='contact-btn' onClick={() => setIsNavOpen(false)}>Contact</Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Outlet tells the Router from parent where to load content form routes in app.js */}
      <Outlet />

      {/* Footer */}
      <footer>
        <div className='content-container'>
          <div className='footer-content'>
            <div className='footer-name'>
              <h1>David Alsabrook</h1>
            </div>
            <div className='footer-social'>
              <h1>Socials</h1>
              <ul className='footer-list'>
                <li><a href="https://www.linkedin.com/in/david-alsabrook/">LinkedIn</a></li>
                <li><a href="https://github.com/DAlsabrook">Github</a></li>
                <li><a href="https://www.hireatlasgrads.com/">HireAtlasGrads.com</a></li>
              </ul>
            </div>
            <div className='footer-legal'>
              <p>Copyright &copy; 2024 David Alsabrook</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default UXUI;
