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
    const introTabs = document.getElementsByClassName('introTab');
    introTabs[0].addEventListener('scroll', handleScroll);
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
      {/* Intro */}
      <div className='introHero'>
        <img src={leftWire} className='introLeftWire'></img>
        <img src={bothWire} className='introBothWire'></img>
        <div className='heroContent'>
          <img src={headshot} className='headshotImg slideDown'></img>
          <h1 className='name slideUp'>My name is David Alsabrook</h1>
          <p className='elevatorPitch slideUp'>Welcome to my portfolio! As a developer, I thrive on coding and collaboration. I put my all into every project, delivering quality and creativity with every line of code. Dive into my work and experience my journey in tech.</p>
          <p className='slideUp'>My goal with this page is to showcase my front-end and back-end skills, as well as my ability to accurately follow and implement a design.</p>
        </div>
      </div>

      {/* VSCode */}
      <div className='introVscode introSection slideUp'>
        <p style={{ color: 'white' }}>It is critical to take someone else's design and make a pixel perfect version</p>
        {BinaryLine('white', 'var(--color-background-dark)')}
      </div>

      {/* UXUI */}
      <img src={rightWire} className='uxuiRightWire slideUp'></img>
      <div className='introUxui introSection slideUp'>
        <img src={rightWire} className='uxuiRightWire'></img>
        <div className='uxuiContent darkGrey'>
          <p>Giving users a modern site with intuitive design is a must</p>
        </div>
        {BinaryLine('black', 'white')}
      </div>

      {/* Back-end */}
      <div className='introBackend introSection slideUp'>
        <img src={leftWire} className='backendLeftWire'></img>
        <div className='backEndContent'>
          <p style={{ color: 'white' }}>Seamlessly integrating a database makes site much more usefull</p>
        </div>
        <img src={laptop} style={{ width: '100vw', opacity: "100%" }} />
      </div>
    </div>
  );
}

export default IntroTab;
