import { BrowserRouter as Router, Outlet, Route, Routes, NavLink } from 'react-router-dom';

// compenents
import VsCode from "./components/vs-code/main.js"
import UXUI from "./components/UX-UI/main.js"
import Home from "./components/shared/home.js"
import Projects from "./components/shared/projects.js"
import About from "./components/shared/about.js"
import GitHub from "./components/shared/github.js"
import LinkedIn from "./components/shared/linkedin.js"
import Resume from "./components/shared/resume.js"

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
import uxuiGithubStyles from './styles/UX-UI/uxui-github.css';
import uxuiLinkedinStyles from './styles/UX-UI/uxui-linkedin.css';
import uxuiResumeStyles from './styles/UX-UI/uxui-resume.css';
import uxuiMainStyles from './styles/UX-UI/uxui-main.css';
import uxuiHomeStyles from './styles/UX-UI/uxui-home.css';

function App() {

  return (
    <Router>
      <NavLink to="/vscode" style={{ color: "white", backgroundColor: "red", zIndex: "1000" }}>VS Code</NavLink>
      <NavLink to="/uxui" style={{ color: "white", backgroundColor: "red", zIndex: "1000" }}>UXUI</NavLink>
      {/* Defines all routes for app.js and all children routes */}
      {/* All children routes must start with path of parent */}
      <Routes>
        {/* VS Code version of the site */}
        <Route path="/vscode" element={<VsCode customStyle={vscodeMainStyles} />}>
          <Route index path="/vscode" element={<Home customStyle={vscodeHomeStyles} />} />
          <Route path="/vscode/about" element={<About customStyle={vscodeAboutStyles} />} />
          <Route path="/vscode/projects" element={<Projects customStyle={vscodeProjectStyles}/>} />
          <Route path="/vscode/resume" element={<Resume customStyle={vscodeResumeStyles} />} />
          <Route path="/vscode/linkedin" element={<LinkedIn customStyle={vscodeLinkedinStyles} />} />
          <Route path="/vscode/github" element={<GitHub customStyle={vscodeGithubStyles} />} />
        </Route>
        {/* UX UI version of the site */}
        <Route path="/uxui" element={<UXUI customStyle={uxuiMainStyles} />}>
          <Route index path="/uxui" element={<Home customStyle={uxuiHomeStyles} />} />
          <Route path="/uxui/about" element={<About customStyle={uxuiAboutStyles} />} />
          <Route path="/uxui/projects" element={<Projects customStyle={uxuiProjectStyles} />} />
          <Route path="/uxui/resume" element={<Resume customStyle={uxuiResumeStyles} />} />
          <Route path="/uxui/linkedin" element={<LinkedIn customStyle={uxuiLinkedinStyles} />} />
          <Route path="/uxui/github" element={<GitHub customStyle={uxuiGithubStyles} />} />
        </Route>
      </Routes>
      <Outlet />
    </Router>
  );
}

export default App;
