import React, { useRef, useEffect } from 'react'; // Added useEffect to the import
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

// Images
import laptop from '../../images/intro/laptop-mockup.png';
import headshot from '../../images/vs-code/linkedin/1-backyard_headshot.jpeg';

function IntroTab() {
  const parallax = useRef(null);

  useEffect(() => {
    function checkAndStartAnimations() {
      const elementsToAnimate = document.querySelectorAll('.slideUp:not(.start), .slideDown:not(.start), .fadeIn:not(.start), .slideInFromLeft:not(.start), .slideInFromRight:not(.start)');
      for (let i = 0; i < elementsToAnimate.length; i++) {
        let el = elementsToAnimate[i];
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < (window.innerHeight + 50) ) {
          el.classList.add('start');
        }
      }
    }

    function handleScroll() {
      requestAnimationFrame(checkAndStartAnimations);
    }
    const parallaxMain = document.getElementsByClassName('parallaxMain');
    parallaxMain[0].addEventListener('scroll', handleScroll);
    setTimeout(checkAndStartAnimations, 0);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="introTab">
      <Parallax ref={parallax} className='parallaxMain' pages={4} style={{width: 'calc(100% - 50px)'}}>
        {/* Backgrounds for each section */}
        <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: 'var(--color-accent-yellow)' }} factor={2} onClick={() => parallax.current.scrollTo(1)} />
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: 'var(--color-background-dark)' }} factor={2} onClick={() => parallax.current.scrollTo(2)} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: 'white' }} factor={2} onClick={() => parallax.current.scrollTo(3)} />
        <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: 'black' }} factor={2} onClick={() => parallax.current.scrollTo(0)} />

        {/* Tab indicator line */}
        <ParallaxLayer
          offset={0.04}
          speed={-1.24}
          factor={4}
          style={{
            display: 'flex',
            pointerEvents: 'none',
            alignItems: 'start'
          }}>
          <div className='' style={{
            height: '100px',
            width: '2px',
            backgroundColor: 'grey',
          }}></div>
        </ParallaxLayer>

        {/* Intro page */}
        <ParallaxLayer
          offset={0}
          speed={0}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20%',
          }}>
          <div className='headshotDiv darkGrey '>
            <img src={headshot} className='headshotImg slideDown'></img>
            <h1 className='name slideUp'>My name is David Alsabrook</h1>
            <p className='elevatorPitch slideUp'>Welcome to my portfolio! As a developer, I thrive on coding and collaboration. I put my all into every project, delivering quality and creativity with every line of code. Dive into my work and experience my journey in tech.</p>
            <p className='slideUp'>My goal with this page is to showcase my front-end and back-end skills, as well as my ability to accurately follow and implement a design.</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.8}
          speed={0}
          factor={4}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
          }}>
          <div className='blankDiv'>
            <div className='fillTheBlankLine black slideInFromLeft'></div>
            <p className='blankIs slideInFromRight'>&nbsp;&nbsp;is</p>
          </div>
        </ParallaxLayer>

        {/* FULL-STACK */}
        <ParallaxLayer
          offset={0.8}
          speed={-.75}
          factor={4}
          style={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
            zIndex: '100',
          }}>
          <p className='fullStack' style={{margin: '0',fontSize: '5vw', color: "var(--color-accent-yellow)", backgroundColor: 'var(--color-background-dark)' }}>Full stack development</p>
        </ParallaxLayer>

        {/* VSCODE */}
        <ParallaxLayer
          offset={1.25}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <div className='vscodeContent'>
            <div className='blankDiv'>
              <div className='fillTheBlankLine  slideInFromLeft'></div>
              <p className='blankIs white slideInFromRight'>&nbsp;&nbsp;is</p>
            </div>
            <p style={{ color: 'white' }}>It is critical to take someone else's design and make a pixel perfect version</p>
          </div>
        </ParallaxLayer>

        {/* UXUI */}
        <ParallaxLayer
          offset={2.01}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <div className='uxuiContent darkGrey'>
            <div className='blankDiv'>
              <div className='fillTheBlankLine black slideInFromLeft'></div>
              <p className='blankIs slideInFromRight'>&nbsp;&nbsp;is</p>
            </div>
            <p>Giving users a modern site with intuitive design is a must</p>
          </div>
        </ParallaxLayer>

        {/* BACKEND */}
        <ParallaxLayer
          offset={2.62}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <div className='uxuiContent'>
            <div className='blankDiv'>
              <div className='fillTheBlankLine'></div>
              <p className='blankIs white'>&nbsp;&nbsp;is</p>
            </div>
            <p style={{ color: 'white' }}>Seamlessly integrating a database makes site much more usefull</p>
          </div>
        </ParallaxLayer>

        {/* Laptop */}
        <ParallaxLayer
          offset={3.2}
          speed={.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src={laptop} style={{ width: '100vw', opacity: "100%" }} />
        </ParallaxLayer>

        {/* Moving bottom line */}
        <ParallaxLayer
          offset={3.5}
          speed={0.5}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <div className="dataLine"></div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default IntroTab;
