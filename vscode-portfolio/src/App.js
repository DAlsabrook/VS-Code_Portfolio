import { BrowserRouter as Router, Outlet, Route, Routes, NavLink } from 'react-router-dom';

// compenents
import VsCode from "./components/vs-code/1-main.js"
import Home from "./components/vs-code/home.js"
import Projects from "./components/vs-code/projects.js"
import About from "./components/vs-code/about.js"
import GitHub from "./components/vs-code/github.js"
import LinkedIn from "./components/vs-code/linkedin.js"
import Resume from "./components/vs-code/resume.js"

// VS Code page styling
import vscodeProjectStyles from './styles/vs-code/projects.css';
import vscodeAboutStyles from './styles/vs-code/about.css';
import vscodeGithubStyles from './styles/vs-code/github.css';
import vscodeLinkedinStyles from './styles/vs-code/linkedin.css';
import vscodeResumeStyles from './styles/vs-code/resume.css';
import vscodeMainStyles from './styles/vs-code/main.css';
import vscodeHomeStyles from './styles/vs-code/home.css';

// UX-UI page styling
// import uxuiProjectStyles from './styles/UX-UI/projects.css';
// import uxuiAboutStyles from './styles/UX-UI/about.css';
// import uxuiGithubStyles from './styles/UX-UI/github.css';
// import uxuiLinkedinStyles from './styles/UX-UI/linkedin.css';
// import uxuiResumetyles from './styles/UX-UI/resume.css';
// import uxuiMainStyles from './styles/UX-UI/main.css';
// import uxuiHomeStyles from './styles/UX-UI/home.css';

function App() {

  return (
    <Router>
      <NavLink to="/vscode" style={{ color: "white", backgroundColor: "red" }}>VS Code</NavLink>
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
      </Routes>
      <Outlet />
    </Router>
  );
}

export default App;
