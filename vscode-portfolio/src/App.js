import { BrowserRouter as Router, Outlet, Route, Routes, NavLink } from 'react-router-dom';
import React, { useState } from 'react';

// compenents
import IntroTab from './components/intro/main.js';
import VsCode from "./components/vs-code/main.js"
import UXUI from "./components/UX-UI/main.js"
import Backend from './components/backend/main.js';
import Home from "./components/shared/home.js"
import Projects from "./components/shared/projects.js"
import About from "./components/shared/about.js"
import GitHub from "./components/shared/github.js"
import LinkedIn from "./components/shared/linkedin.js"
import Resume from "./components/shared/resume.js"

// Intro Tab styling
import introTabStyles from './styles/intro/intro-main.css'

// VS Code page styling
import vscodeProjectStyles from './styles/vs-code/vs-projects.css';
import vscodeAboutStyles from './styles/vs-code/vs-about.css';
import vscodeGithubStyles from './styles/vs-code/vs-github.css';
import vscodeLinkedinStyles from './styles/vs-code/vs-linkedin.css';
import vscodeResumeStyles from './styles/vs-code/vs-resume.css';
import vscodeMainStyles from './styles/vs-code/vs-main.css';
import vscodeHomeStyles from './styles/vs-code/vs-home.css';

// UX-UI page styling
import uxuiProjectStyles from './styles/UX-UI/uxui-projects.css';
import uxuiAboutStyles from './styles/UX-UI/uxui-about.css';
import uxuiContactStyles from './styles/UX-UI/uxui-contact.css';
import uxuiResumeStyles from './styles/UX-UI/uxui-resume.css';
import uxuiMainStyles from './styles/UX-UI/uxui-main.css';
import uxuiHomeStyles from './styles/UX-UI/uxui-home.css';

// Backend version styling
import backendStyling from './styles/backend/backend-main.css'

import './App.css';

function App() {
  // State to track the active link
  const [activeLink, setActiveLink] = useState('/');

  // Function to set active link
  const handleSetActive = (path) => {
    setActiveLink(path);
  };

  return (
    <div className='App'>
      <Router>
        <ul className='main-page-tab-ul'>
          <li className={`main-page-tab-li ${activeLink === '/' ? 'activeParent' : ''}`}>
            <NavLink to="/" className="tab-intro" onClick={() => handleSetActive('/')} end>Intro</NavLink>
          </li>
          <li className={`main-page-tab-li ${activeLink === '/vscode' ? 'activeParent' : ''}`}>
            <NavLink to="/vscode" className="tab-vs" onClick={() => handleSetActive('/vscode')}>VS Code</NavLink>
          </li>
          <li className={`main-page-tab-li ${activeLink === '/uxui' ? 'activeParent' : ''}`}>
            <NavLink to="/uxui" className="tab-uxui" onClick={() => handleSetActive('/uxui')}>UXUI</NavLink>
          </li>
          <li className={`main-page-tab-li ${activeLink === '/backend' ? 'activeParent' : ''}`}>
            <NavLink to="/backend" className="tab-backend" onClick={() => handleSetActive('/backend')}>Backend</NavLink>
          </li>
        </ul>
        {/* Defines all routes for app.js and all children routes */}
        {/* All children routes must start with path of parent */}
        <Routes>
          {/* Intro tab */}
          <Route path="/" element={<IntroTab customStyle={introTabStyles} />}>
          </Route>
          {/* VS Code version of the site */}
          <Route path="/vscode" element={<VsCode customStyle={vscodeMainStyles} />}>
            <Route index element={<Home customStyle={vscodeHomeStyles} />} />
            <Route path="/vscode/about" element={<About customStyle={vscodeAboutStyles} />} />
            <Route path="/vscode/projects" element={<Projects customStyle={vscodeProjectStyles}/>} />
            <Route path="/vscode/resume" element={<Resume customStyle={vscodeResumeStyles} />} />
            <Route path="/vscode/linkedin" element={<LinkedIn customStyle={vscodeLinkedinStyles} />} />
            <Route path="/vscode/github" element={<GitHub customStyle={vscodeGithubStyles} />} />
          </Route>
          {/* UX UI version of the site */}
          <Route path="/uxui" element={<UXUI customStyle={uxuiMainStyles} />}>
            <Route index element={<Home customStyle={uxuiHomeStyles} />} />
            <Route path="/uxui/about" element={<About customStyle={uxuiAboutStyles} />} />
            <Route path="/uxui/projects" element={<Projects customStyle={uxuiProjectStyles} />} />
            <Route path="/uxui/resume" element={<Resume customStyle={uxuiResumeStyles} />} />
            <Route path="/uxui/contact" element={
              <>
                <LinkedIn customStyle={uxuiContactStyles} />
                <GitHub customStyle={uxuiContactStyles} />
              </>}/>
          </Route>
          {/* Backend version of the site */}
          <Route path="/backend" element={<Backend customStyle={backendStyling} />}>
            {/* <Route index path="/backend/home" element={<Home customStyle={vscodeHomeStyles} />} /> */}
          </Route>
        </Routes>
        <Outlet />
      </Router>
    </div>
  );
}

export default App;
