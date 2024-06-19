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
          <strong>David Alsabrook</strong>
          <img src={shield} alt='Linkedin shield' className='shield'></img>
          <p>(He / Him)</p>
        </div>
      </section>
    </main>
  )
}

export default LinkedIn;
