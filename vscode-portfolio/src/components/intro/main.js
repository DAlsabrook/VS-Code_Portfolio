import React, { useRef, useEffect } from 'react'; // Added useEffect to the import
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

// Images
import laptop from '../../images/intro/laptop-mockup.png';
import headshot from '../../images/vs-code/linkedin/1-backyard_headshot.jpeg';
import leftWire from '../../images/intro/leftWire.png';
import rightWire from '../../images/intro/rightWire.png';
import bothWire from '../../images/intro/bothWire.png';
import laptopWire from '../../images/intro/laptopWire.png';
import cellWire from '../../images/intro/cellWire.png';

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

  function BinaryLine(textColor, bgColor) {
    const binaryString = '0100010001100001';
    const doubledBinaryString = binaryString.repeat(10);

    return (
      <div className='binary' style={{ backgroundColor: `${bgColor}`, color: `${textColor}`}}>{doubledBinaryString}</div>
    );
  }


  return (
    <div className="introTab">
      <Parallax ref={parallax} className='parallaxMain' pages={2.5} style={{width: 'calc(100% - 50px)'}}>
        {/* Intro */}
        <ParallaxLayer className='parallaxBackground' offset={0} factor={1} speed={1} style={{ backgroundColor: 'var(--color-accent-yellow)' }} onClick={() => parallax.current.scrollTo(1)}>
          <div className='contentDiv'>
            <img src={leftWire} className='introLeftWire'></img>
            <img src={bothWire} className='introBothWire'></img>
            <div className='headshotDiv darkGrey '>
              <img src={headshot} className='headshotImg slideDown'></img>
              <h1 className='name slideUp'>My name is David Alsabrook</h1>
              <p className='elevatorPitch slideUp'>Welcome to my portfolio! As a developer, I thrive on coding and collaboration. I put my all into every project, delivering quality and creativity with every line of code. Dive into my work and experience my journey in tech.</p>
              <p className='slideUp'>My goal with this page is to showcase my front-end and back-end skills, as well as my ability to accurately follow and implement a design.</p>
            </div>
            {BinaryLine('var(--color-background-dark)', 'var(--color-accent-yellow)')}
          </div>
        </ParallaxLayer>

        {/* VSCode */}
        <ParallaxLayer className='parallaxBackground' offset={.999} factor={1} speed={1} style={{ backgroundColor: 'var(--color-background-dark)' }} onClick={() => parallax.current.scrollTo(2)}>
          <div className='vscodeContent contentDiv'>
            <p style={{ color: 'white' }}>It is critical to take someone else's design and make a pixel perfect version</p>
            {BinaryLine('white', 'var(--color-background-dark)')}
          </div>
        </ParallaxLayer>

        {/* UXUI */}
        <ParallaxLayer className='parallaxBackground uxuiSection' offset={1} factor={1} speed={1}  onClick={() => parallax.current.scrollTo(3)}>
          <div className='contentDiv'>
            <img src={rightWire} className='uxuiRightWire'></img>
            <div className='uxuiContent darkGrey'>
              <p>Giving users a modern site with intuitive design is a must</p>
            </div>
            {BinaryLine('black', 'white')}
          </div>
        </ParallaxLayer>

        {/* Back-end */}
        <ParallaxLayer className='parallaxBackground' offset={1.999} factor={1} speed={1} style={{ backgroundColor: 'black' }} onClick={() => parallax.current.scrollTo(0)}>
          <div className='contentDiv'>
            <img src={leftWire} className='backendLeftWire'></img>
            <div className='backEndContent'>
              <p style={{ color: 'white' }}>Seamlessly integrating a database makes site much more usefull</p>
            </div>
          </div>
        </ParallaxLayer>

        {/* Bottom Laptop */}
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

        {/* laptop wire */}
        {/* <ParallaxLayer
          offset={.7}
          speed={0.2}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={laptopWire} className='slideInFromLeft' style={{width: '90%', rotate: '20deg'}}></img>
        </ParallaxLayer> */}

        {/* cell wire */}
        {/* <ParallaxLayer
          offset={1.7}
          speed={0.2}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={cellWire} style={{ width: '75%' }}></img>
        </ParallaxLayer> */}

      </Parallax>
    </div>
  );
}

export default IntroTab;
