import '../styles/projects.css';
import Swal from 'sweetalert2';
import React, { useState, useEffect } from 'react';
import { Octokit } from "@octokit/core";

// Images
import laptopWindow from "../images/laptop-window.png"
import reactLogo from '../images/react_icon.svg';
import cssLogo from '../images/css_icon.svg';
import htmlLogo from '../images/html_icon.svg';
import jsLogo from '../images/js_icon.svg';
import pythonLogo from '../images/python-logo-only.png'
import flaskLogo from '../images/Flask.png'
import githubLogo from '../images/GitHub_Logo.png'

// Used to set individual words colors in the return
const ColoredText = ({ text, color }) => <span className={`${color} large`}>{text}</span>;

const GetLangs = ({ repo }) => {
  const [langs, setLangs] = useState(null);

  useEffect(() => {
    async function fetchRepoLangs() {
      const octokit = new Octokit();

      // Check if the data is in localStorage
      let storedData = localStorage.getItem(repo);
      if (storedData) {
        storedData = JSON.parse(storedData);
      }

      const currentTime = new Date().getTime();
      const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

      // If the data is not in localStorage, or it's older than 24 hours, fetch it again
      if (!storedData || currentTime - storedData.timestamp > oneDay) {
        const response = await octokit.request(`GET /repos/DAlsabrook/${repo}/languages`);
        const langsData = response.data;

        // Store the data along with the current timestamp
        localStorage.setItem(repo, JSON.stringify({
          timestamp: currentTime,
          data: langsData
        }));

        setLangs(langsData);
      } else {
        // If the data is in localStorage and it's not older than 24 hours, use it
        setLangs(storedData.data);
      }
    }

    fetchRepoLangs();
  }, [repo]);

  let totalBytes = 0;
  if (langs) {
    totalBytes = Object.values(langs).reduce((a, b) => a + b, 0);
  }

  return (
    <div>
      {langs && Object.entries(langs).map(([lang, bytes]) => {
        const percentage = ((bytes / totalBytes) * 100).toFixed(2);
        return <div key={`${repo}-${lang}`}>
          <p className='langs-name' style={{ width: `${percentage}%` }}>
              {lang}: {Math.round(percentage)}%
            </p>
            <div className="langs-bar" style={{
              color: "black",
              backgroundColor: "var(--color-code-orange)",
              height: "20px",
              width: `${percentage}%`
            }}>
            </div>
          </div>
      })}
    </div>
  );
}

function Projects() {
  // modal("title", "<p>Flask</p> <p>HTML</p> <p>CSS</p>", "<p>Description of project</p>", "github URL")
  const modal = (title, technologies, description, githubLink) => {
    Swal.fire({
      title: `<strong>${title}</strong>`,
      imageUrl: "https://unsplash.it/1000/350",
      imageWidth: "90%",
      imageHeight: "auto",
      imageAlt: "Custom image",
      html: `
                <div class="modal-tech-list">
                  ${technologies}
                </div>
                <div>
                  <p></p>
                  <p>${description}</p>
                </div>
            `,
      showConfirmButton: false,
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonText: `Close`,
      cancelButtonAriaLabel: "Close",
      footer: `<a href="${githubLink}" target="_blank"><img src="${githubLogo}" alt="github logo"</a>`
    });
  }

  return (
    <main className="projects-main">
      <div className="portfolio-content">
        <h1>
          <pre>
            <code>
              <ColoredText text="const" color="dark-blue" />{' '}
              <ColoredText text="projects" color="light-yellow" />{' = '}
              <ColoredText text="()" color="yellow" />{' '}
              <ColoredText text="=>" color="dark-blue" />{' '}
              <ColoredText text="{" color="yellow" />
            </code>
          </pre>
        </h1>
        <div className="project-group">
          <div className="project">
            <img src={laptopWindow} className="project-img" alt="project1"></img>
            <h1 className='project-title'>Instructor Index</h1>
            <div className='langs'><GetLangs repo="Instructor_Index" /></div>
            <p className='project-text'>
              This site is a full back and front end using flask and RESTapi.
              I used this as a project to challenge myself in using python for a
              backend with SQLAlchemy.
            </p>
            <button className="project-button" onClick={() => modal("Instructor Index",
              `<p><img src=${flaskLogo} alt='flask logo'></img>Flask</p>
              <p><img src=${pythonLogo} alt='python logo'></img>Python</p>
              <p><img src=${htmlLogo} alt='html logo'></img>HTML</p>
              <p><img src=${cssLogo} alt='css logo'></img>CSS</p>`,
              "<p class='modal-text'>Description of project that I used this great tech in. I learned a lot\
                              from it and will never forget how to use this technology for sure. I dont\
                              know how anyone could forget any of this crazy code</p>",
              "https://github.com/DAlsabrook/Instructor_Index")}>Details
            </button>
          </div>
          <div className="project">
            <img src={laptopWindow} className="project-img" alt="project1"></img>
            <h1 className='project-title'>Portfolio Page</h1>
            <div className='langs'><GetLangs repo="vs-code_portfolio" /></div>
            <p className='project-text'>
              I LOVED making this site and learning so much about the REACT
              framework. Learning how to build and import components to use was
              super interesting. I made this site with accessability and having
              a responsive design in mind.
            </p>
            <button className="project-button" onClick={() => modal("Instructor Index",
              "<p>REACT</p> <p>HTML</p> <p>CSS</p>",
              "<p>Description of project that I used this great tech in. I learned a lot\
                              from it and will never forget how to use this technology for sure. I dont\
                              know how anyone could forget any of this crazy code</p>",
              "https://github.com/DAlsabrook/Portfolio_Web_page")}>Details
            </button>
          </div>
        </div>
        <div className="project-group">
          <div className="project">
            <img src={laptopWindow} className="project-img" alt="project1"></img>
            <h1 className='project-title'>The Shallot</h1>
            <div className='langs'><GetLangs repo="Hack_Sprint" /></div>
            <p className='project-text'>
              This site is a fully front end sequential discovery puzzle.
              I only used html, javascript, and CSS to make this site.
            </p>
            <button className="project-button" onClick={() => modal("Instructor Index",
              "<p>JavaScript</p> <p>HTML</p> <p>CSS</p>",
              "<p>Description of project that I used this great tech in. I learned a lot\
                              from it and will never forget how to use this technology for sure. I dont\
                              know how anyone could forget any of this crazy code</p>",
              "https://github.com/DAlsabrook/Instructor_Index")}>Details
            </button>
          </div>
          <div className="project">
            <img src={laptopWindow} className="project-img" alt="project1"></img>
            <h1 className='project-title'>TuBrosWindows</h1>
            <div className='langs'><GetLangs repo="vs-code_portfolio" /></div>
            <p className='project-text'>
              This site is a full back and front end using flask and RESTapi.
              I used this as a project to challenge myself in using python for a
              backend with SQLAlchemy.
            </p>
            <button className="project-button" onClick={() => modal("Instructor Index",
              "<p>Flask</p> <p>HTML</p> <p>CSS</p>",
              "<p>Description of project that I used this great tech in. I learned a lot\
                              from it and will never forget how to use this technology for sure. I dont\
                              know how anyone could forget any of this crazy code</p>",
              "https://github.com/DAlsabrook/Instructor_Index")}>Details
            </button>
          </div>
        </div>
        <pre>
          <code>
            <ColoredText text="}" color="yellow" />
          </code>
        </pre>
      </div>
    </main>
  )
}

export default Projects;
