import React, { useEffect } from 'react';

// Images
import laptop from '../../images/intro/laptop-mockup.png';
import headshot from '../../images/vs-code/linkedin/1-backyard_headshot.jpeg';
import leftWire from '../../images/intro/leftWire.png';
import rightWire from '../../images/intro/rightWire.png';
import bothWire from '../../images/intro/bothWire.png';
import laptopWire from '../../images/intro/laptopWire.png';
import cellWire from '../../images/intro/cellWire.png';

// Logos
// Design
import logoFigma from '../../images/intro/logo_figma.png';
import logoSketch from '../../images/intro/logo_sketch.png';
import logoIllistrator from '../../images/intro/logo_illistrator.png';
import logoPhotoShop from '../../images/intro/logo_photoshop.png';

// uxui
import logoBootstrap from '../../images/intro/logo_bootstrap.png';
import logoCss from '../../images/intro/logo_css.png';
import logoHtml from '../../images/intro/logo_html.png';
import logoJavaScript from '../../images/intro/logo_javascript.png';

// backend
// Node.js Python SQL NoSQL
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
        <div className='introImgContainer'>
          <img src={rightWire} className='introRightWire'></img>
          <img src={bothWire} className='introBothWire'></img>
        </div>
        <div className='heroContent'>
          <img src={headshot} className='headshotImg slideDown'></img>
          <h1 className='name slideUp'>My name is David Alsabrook</h1>
          <p className='elevatorPitch slideUp'>Welcome to my portfolio! As a developer, I thrive on coding and collaboration. I put my all into every project, delivering quality and creativity with every line of code. Dive into my work and experience my journey in tech.</p>
          <p className='slideUp'>My goal with this page is to showcase my front-end and back-end skills, as well as my ability to accurately follow and implement a design.</p>
        </div>
      </div>

      {/* VSCode */}
      <div className='introVscode introSection slideUp' style={{ color: 'white' }}>
        <h2>Design Implementation</h2>
        {BinaryLine('white', 'var(--color-background-dark)')}
        <p>It is critical to take someone else's design and make a pixel perfect version</p>
        <div className='techDiv'>
          <img src={logoFigma} className='techLogo'></img>
          <img src={logoIllistrator} className='techLogo'></img>
          <img src={logoSketch} className='techLogo'></img>
          <img src={logoPhotoShop} className='techLogo'></img>
        </div>

      </div>

      {/* UXUI */}
      <div className='introUxui introSection slideUp'>
        <img src={rightWire} className='uxuiRightWire'></img>
        <div className='uxuiContent'>
          <h2>UX-UI / Accessibility</h2>
          {BinaryLine('black', 'white')}
          <p>Giving users a modern site with intuitive design is a must</p>
        </div>
        <div className='techDiv'>
          <img src={logoHtml} className='techLogo invert'></img>
          <img src={logoCss} className='techLogo invert'></img>
          <img src={logoJavaScript} className='techLogo invert'></img>
          <img src={logoBootstrap} className='techLogo'></img>
        </div>
      </div>

      {/* Back-end */}
      <div className='introBackend introSection slideUp'>
        <img src={leftWire} className='backendLeftWire'></img>
        <div className='backEndContent' style={{ color: 'white' }}>
          <h2>Back end</h2>
          {BinaryLine('white', 'var(--color-background-dark)')}
          <p>Seamlessly integrating a database makes site much more usefull</p>
        </div>
      </div>
    </div>
  );
}

export default IntroTab;
