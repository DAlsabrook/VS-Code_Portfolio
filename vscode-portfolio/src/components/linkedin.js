import '../styles/linkedin.css';

// Images
import bannerImg from '../images/linkedin/LinkedIn-Banner.png';
import headshot from '../images/linkedin/1-backyard_headshot.jpeg'
import shield from '../images/linkedin/LinkedIn-Shield.svg';

function LinkedIn() {
  return (
    <main className="LinkedIn">
      <section className="linkedin-card">
        <img src={bannerImg} alt='LinkedIn banner' className='banner'></img>
        <img src={headshot} alt='Headshot' className='headshot'></img>
        <div className='banner-info'>
          <div className='banner-name'>
            <strong>David Alsabrook</strong>
            <img src={shield} alt='Linkedin shield' className='shield'></img>
            <p>(He / Him)</p>
          </div>
          <p>Full Stack Web Developer</p>
        </div>
        <div className='activity-list'>
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7187156239913574400" height="544" width="80%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7187156239913574400" height="544" width="80%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
        </div>
      </section>
    </main>
  )
}

export default LinkedIn;
