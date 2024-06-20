import '../styles/linkedin.css';

// Images
import bannerImg from '../images/linkedin/LinkedIn-Banner.png';
import headshot from '../images/linkedin/1-backyard_headshot.jpeg'
import shield from '../images/linkedin/LinkedIn-Shield.svg';
import linkedinLogo from '../images/linkedin/Logo.png';
import diamond from '../images/linkedin/diamond.svg';



function LinkedIn() {
  const navigateToLinkedIn = () => {
    window.open('https://www.linkedin.com/in/david-alsabrook/', '_blank');
  };

  return (
    <main className="LinkedIn">
      <div className="linkedin-card">
        <img src={bannerImg} alt='LinkedIn banner' className='banner'></img>
        <img src={headshot} alt='Headshot' className='headshot'></img>
        <div className="linkedin-container">
          <div className="banner-info-container">
            <div className='banner-info'>
              <div className='banner-name'>
                <strong>David Alsabrook</strong>
                <img src={shield} alt='Linkedin shield' className='shield'></img>
                <p>(He / Him)</p>
              </div>
              <p className="job">Full-Stack Web Developer</p>
              <p className="location">Tulsa, Oklahoma</p>
            </div>
            <div className="linkedin-connect" onClick={navigateToLinkedIn}>
              <p>Connect on</p>
              <img src={linkedinLogo} alt='Linkedin logo' className='linkedin-logo'></img>
            </div>
          </div>
          <div className="top-skills-container">
            <div className="skills-title">
              <img src={diamond} alt='diamond' className='diamond'></img>
              <p className="top-skills">Top Skills</p>
            </div>
            <p className="skills">JavaScript &bull; REACT.js &bull; CSS &bull; HTML &bull; C &bull; Python</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LinkedIn;
