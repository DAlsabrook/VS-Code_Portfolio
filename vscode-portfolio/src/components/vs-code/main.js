import { Outlet, NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// Images
import vscodeLogo from '../../images/vs-code/vscode_icon.svg';
import cssLogo from '../../images/vs-code/css_icon.svg';
import htmlLogo from '../../images/vs-code/html_icon.svg';
import jsLogo from '../../images/vs-code/js_icon.svg';
import jsonLogo from '../../images/vs-code/json_icon.svg';
import markdownLogo from '../../images/vs-code/markdown_icon.svg';
import reactLogo from '../../images/vs-code/react_icon.svg';
import windowsXP from '../../images/vs-code/windowsXP1440x768.png';


// Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


function VsCode() {
  // Used to toggle the folder file dropdowns and their icons
  const [isPortfolioOpen, setPortfolioOpen] = useState(true);
  const [isContactSheetsOpen, setContactSheetsOpen] = useState(true);
  const [portfolioIcon, setPortfolioIcon] = useState(faAngleDown);
  const [contactIcon, setContactIcon] = useState(faAngleDown);
  // When called check the state and flip it
  const togglePortfolio = () => {
    setPortfolioOpen(!isPortfolioOpen);
    setPortfolioIcon(!isPortfolioOpen ? faAngleDown : faAngleRight)
  };
  const toggleContactSheets = () => {
    setContactSheetsOpen(!isContactSheetsOpen);
    setContactIcon(!isContactSheetsOpen ? faAngleDown : faAngleRight)
  };

  // Checking for screen size to auto close file explorer
  const [isExplorerVisible, setIsExplorerVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 890) {
        setIsExplorerVisible(false);
      } else {
        setIsExplorerVisible(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleExplorerVisibility = () => {
    setIsExplorerVisible(!isExplorerVisible);
  };

  // Logic for "X" to show the desktop
  const [isDesktopVisible, setIsDesktopVisible] = useState(false);

  useEffect(() => {
    if (isDesktopVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isDesktopVisible]);

  const showDesktop = () => {
    setIsDesktopVisible(isDesktopVisible ? false : true);
  };

  return (
    <div className="vs-code">
      <div className='desktop' style={{ display: isDesktopVisible ? "block" : "none" }}>
        <img src={windowsXP} alt='Windows xp desktop' className='windowsXP'></img>
        <button
          className='desktop-button'
          style={{ display: isDesktopVisible ? "block" : "none" }}
          onClick={showDesktop}>
          <img src={vscodeLogo} alt="desktop button icon" className='desktop-button-icon'></img>
          <p className='desktop-button-text'>Visual Studio Code</p>
        </button>
      </div>
      {/* Title Bar */}
      <div className='titlebar'>
        <div className='titlebar-left'>
          <img src={vscodeLogo} alt="vs code icon" className="titlebar-vscode-logo"></img>
          <div className="titlebar-options-container">
            <ul className="titlebar-options">
              <li>File</li>
              <li>Edit</li>
              <li>View</li>
              <li>Go</li>
              <li>Run</li>
              <li>Terminal</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <p>David Alsabrook - VS Code</p>
        <div className="browser-buttons">
          <i className='browser-line'>
            <FontAwesomeIcon icon={faWindowMinimize} />
          </i>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#697681" viewBox="0 0 448 512"><path d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" /></svg>
          <i className='browser-x' onClick={showDesktop}>
            <FontAwesomeIcon icon={faXmark} />
          </i>
        </div>
      </div>
      {/* Main content */}
        <div className='page-content'>
          <div className="side-bar">
            <div className='side-bar-top'>
              {/* Sidebar flie explorer icon */}
              <svg onClick={toggleExplorerVisibility} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#697681" className="Sidebar_icon__czDJe pointer">
                <path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z">
                </path>
              </svg>
              {/* Code icon */}
              <svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="rgb(106, 115, 125)" className="Sidebar_icon__czDJe pointer">
                <path d="M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z">
                </path>
              </svg>
              {/* Github icon */}
              <a href="https://github.com/DAlsabrook" target='_blank' rel="noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="rgb(106, 115, 125)" className="Sidebar_icon__czDJe">
                  <path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 01-.728-.728v-3.73a2.497 2.497 0 00-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 00.09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 00-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 01-.728.728.718.718 0 01-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 016.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z">
                  </path>
                </svg>
              </a>
            </div>
            <div className='side-bar-bottom'>
              {/* User icon */}
              <svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="rgb(106, 115, 125)" className="Sidebar_icon__czDJe">
                <path d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09.016.016.032.016.032.032.144.112.288.224.448.336.08.048.144.111.224.175A7.98 7.98 0 008.016 16a7.98 7.98 0 004.48-1.375c.08-.048.144-.111.224-.16.144-.111.304-.223.448-.335.016-.016.032-.016.032-.032 1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279.016-.128.048-.255.08-.383a4.17 4.17 0 01.416-.991c.176-.304.384-.576.64-.816.24-.24.528-.463.816-.639.304-.176.624-.304.976-.4A4.15 4.15 0 018 10.342a4.185 4.185 0 012.928 1.166c.368.368.656.8.864 1.295.112.288.192.592.24.911A7.03 7.03 0 018 14.993zm-2.448-7.4a2.49 2.49 0 01-.208-1.024c0-.351.064-.703.208-1.023.144-.32.336-.607.576-.847.24-.24.528-.431.848-.575.32-.144.672-.208 1.024-.208.368 0 .704.064 1.024.208.32.144.608.336.848.575.24.24.432.528.576.847.144.32.208.672.208 1.023 0 .368-.064.704-.208 1.023a2.84 2.84 0 01-.576.848 2.84 2.84 0 01-.848.575 2.715 2.715 0 01-2.064 0 2.84 2.84 0 01-.848-.575 2.526 2.526 0 01-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 00-.688-1.406 4.883 4.883 0 00-1.088-1.135 5.207 5.207 0 00-1.04-.608 2.82 2.82 0 00.464-.383 4.2 4.2 0 00.624-.784 3.624 3.624 0 00.528-1.934 3.71 3.71 0 00-.288-1.47 3.799 3.799 0 00-.816-1.199 3.845 3.845 0 00-1.2-.8 3.72 3.72 0 00-1.472-.287 3.72 3.72 0 00-1.472.288 3.631 3.631 0 00-1.2.815 3.84 3.84 0 00-.8 1.199 3.71 3.71 0 00-.288 1.47c0 .352.048.688.144 1.007.096.336.224.64.4.927.16.288.384.544.624.784.144.144.304.271.48.383a5.12 5.12 0 00-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 00-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 01-2.032 4.907z">
                </path>
              </svg>
              {/* Settings icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="rgb(106, 115, 125)" className="Sidebar_icon__czDJe">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.85 8.75l4.15.83v4.84l-4.15.83 2.35 3.52-3.43 3.43-3.52-2.35-.83 4.15H9.58l-.83-4.15-3.52 2.35-3.43-3.43 2.35-3.52L0 14.42V9.58l4.15-.83L1.8 5.23 5.23 1.8l3.52 2.35L9.58 0h4.84l.83 4.15 3.52-2.35 3.43 3.43-2.35 3.52zm-1.57 5.07l4-.81v-2l-4-.81-.54-1.3 2.29-3.43-1.43-1.43-3.43 2.29-1.3-.54-.81-4h-2l-.81 4-1.3.54-3.43-2.29-1.43 1.43L6.38 8.9l-.54 1.3-4 .81v2l4 .81.54 1.3-2.29 3.43 1.43 1.43 3.43-2.29 1.3.54.81 4h2l.81-4 1.3-.54 3.43 2.29 1.43-1.43-2.29-3.43.54-1.3zm-8.186-4.672A3.43 3.43 0 0112 8.57 3.44 3.44 0 0115.43 12a3.43 3.43 0 11-5.336-2.852zm.956 4.274c.281.188.612.288.95.288A1.7 1.7 0 0013.71 12a1.71 1.71 0 10-2.66 1.422z">
                </path>
              </svg>
            </div>
          </div>
          {isExplorerVisible && <div className="explorer" id='explorer'>
            <p>FOLDERS</p>
            <div className='file-list-container'>
              <div className='accordian' onClick={togglePortfolio}><FontAwesomeIcon icon={portfolioIcon} /> Portfolio</div>
              {isPortfolioOpen && (
                <ul className='explorer-files file-list'>
                <li><NavLink to="/vscode" className="file"><img className='lang-logo' src={jsonLogo} alt="json logo"></img>Home.json</NavLink></li>
                <li><NavLink to="/vscode/about" className="file"><img className='lang-logo' src={htmlLogo} alt="html logo"></img>About.html</NavLink></li>
                <li><NavLink to="/vscode/projects" className="file"><img className='lang-logo' src={jsLogo} alt="javascript logo"></img>Projects.js</NavLink></li>
                  <li className='accordian' onClick={toggleContactSheets}><FontAwesomeIcon icon={contactIcon} /> Contact Sheets
                    {isContactSheetsOpen && (
                      <ul className='file-list'>
                      <li><NavLink to="/vscode/linkedin" className="file" onClick={(event) => event.stopPropagation()}><img className='lang-logo' src={reactLogo} alt="react logo"></img>LinkedIn.jsx</NavLink></li>
                      <li><NavLink to="/vscode/github" className="file" onClick={(event) => event.stopPropagation()}><img className='lang-logo' src={cssLogo} alt="css logo"></img>GitHub.css</NavLink></li>
                      </ul>
                    )}
                  </li>
                <li><NavLink to="/vscode/resume" className="file"><img className='lang-logo' src={markdownLogo} alt="markdown logo"></img>RESUME.md</NavLink></li>
                </ul>
              )}
            </div>
          </div>}
          <div className={`main-container ${isExplorerVisible ? 'explorer-visible' : 'explorer-hidden'}`}>
          <ul className='files-tabs'>
            <li><NavLink to="/vscode" activeclassname="active-tab" className="file-tab"><img className='lang-logo' src={jsonLogo} alt="json logo"></img> Home.json</NavLink></li>
            <li><NavLink to="/vscode/about" activeclassname="active-tab" className="file-tab"><img className='lang-logo' src={htmlLogo} alt="html logo"></img> About.html</NavLink></li>
            <li><NavLink to="/vscode/projects" activeclassname="active-tab" className="file-tab"><img className='lang-logo' src={jsLogo} alt="javascript logo"></img> Projects.js</NavLink></li>
            <li><NavLink to="/vscode/github" activeclassname="active-tab" className="file-tab"><img className='lang-logo' src={cssLogo} alt="css logo"></img> GitHub.css</NavLink></li>
            <li><NavLink to="/vscode/linkedin" activeclassname="active-tab" className="file-tab"><img className='lang-logo' src={reactLogo} alt="react logo"></img> LinkedIn.jsx</NavLink></li>
            <li><NavLink to="/vscode/resume" activeclassname="active-tab" className="file-tab"><img className='lang-logo' src={markdownLogo} alt="markdown logo"></img> RESUME.md</NavLink></li>
          </ul>
          {/* Outlet tells the Router from parent where to load content form routes in app.js */}
          <Outlet />
          </div>
        </div>
      <footer>
        <div className='branch-container'>
          <div className='branch-content'>
            <span className='branch-main'>
              {/* Branch icon */}
              <svg width="14" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="Bottombar_icon__zdqmH">
                <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z">
                </path>
              </svg>
              <p>main*</p>
            </span>
            <div className='branch-update'>
              {/* Circle X icon */}
              <svg width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="Bottombar_icon__zdqmH">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.6 1c1.6.1 3.1.9 4.2 2 1.3 1.4 2 3.1 2 5.1 0 1.6-.6 3.1-1.6 4.4-1 1.2-2.4 2.1-4 2.4-1.6.3-3.2.1-4.6-.7-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1.8-1.1 1.3-2.4 1.2-3.8 0-1.6-.6-3.2-1.7-4.3-1-1-2.2-1.6-3.6-1.7-1.3-.1-2.7.2-3.8 1-1.1.8-1.9 1.9-2.3 3.3-.4 1.3-.4 2.7.2 4 .6 1.3 1.5 2.3 2.7 3 1.2.7 2.6.9 3.9.6zM7.9 7.5L10.3 5l.7.7-2.4 2.5 2.4 2.5-.7.7-2.4-2.5-2.4 2.5-.7-.7 2.4-2.5-2.4-2.5.7-.7 2.4 2.5z">
                </path>
              </svg>
              <p>0</p>
              {/* Warning ! triangle icon */}
              <svg width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="Bottombar_icon__zdqmH">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.56 1h.88l6.54 12.26-.44.74H1.44L1 13.26 7.56 1zM8 2.28L2.28 13H13.7L8 2.28zM8.625 12v-1h-1.25v1h1.25zm-1.25-2V6h1.25v4h-1.25z">
                </path>
              </svg>
              <p>0</p>
            </div>
          </div>
          <div className='notifications-container'>
            {/* Notification icon */}
            <svg width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="M13.377 10.573a7.63 7.63 0 01-.383-2.38V6.195a5.115 5.115 0 00-1.268-3.446 5.138 5.138 0 00-3.242-1.722c-.694-.072-1.4 0-2.07.227-.67.215-1.28.574-1.794 1.053a4.923 4.923 0 00-1.208 1.675 5.067 5.067 0 00-.431 2.022v2.2a7.61 7.61 0 01-.383 2.37L2 12.343l.479.658h3.505c0 .526.215 1.04.586 1.412.37.37.885.586 1.412.586.526 0 1.04-.215 1.411-.586s.587-.886.587-1.412h3.505l.478-.658-.586-1.77zm-4.69 3.147a.997.997 0 01-.705.299.997.997 0 01-.706-.3.997.997 0 01-.3-.705h1.999a.939.939 0 01-.287.706zm-5.515-1.71l.371-1.114a8.633 8.633 0 00.443-2.691V6.004c0-.563.12-1.113.347-1.616.227-.514.55-.969.969-1.34.419-.382.91-.67 1.436-.837.538-.18 1.1-.24 1.65-.18a4.147 4.147 0 012.597 1.4 4.133 4.133 0 011.004 2.776v2.01c0 .909.144 1.818.443 2.691l.371 1.113h-9.63v-.012z">
              </path>
            </svg>
          </div>
        </div>
        <div></div>
      </footer>
    </div>
  );
}

export default VsCode;
