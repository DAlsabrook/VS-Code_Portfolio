import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';


// Images
import laptop from '../../images/intro/laptop-mockup.png';
import headshot from '../../images/vs-code/linkedin/1-backyard_headshot.jpeg';
import leftWire from '../../images/intro/leftWire.png';
import rightWire from '../../images/intro/rightWire.png';
import bothWire from '../../images/intro/bothWire.png';
import laptopWire from '../../images/intro/laptopWire.png';
import cellWire from '../../images/intro/cellWire.png';

// Carousel
import vscodeCarousel from '../../images/intro/vscode_SS.png'
import uxuiCarousel from '../../images/intro/uxui_SS.png'
import backendCarousel from '../../images/intro/backend_SS.png'

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
      const elementsToAnimate = document.querySelectorAll('.pageInfoContainer, .slideUp:not(.start), .slideDown:not(.start), .fadeIn:not(.start), .slideInFromLeft:not(.start), .slideInFromRight:not(.start)');
      for (let i = 0; i < elementsToAnimate.length; i++) {
        let el = elementsToAnimate[i];
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;

        // Check if the element's top is within the viewport
        if (elementTop < window.innerHeight) {
          el.classList.add('start');

          // Check if the element's bottom is within the viewport

          if (el.classList.contains('pageInfoContainer') && elementBottom < window.innerHeight) {
            console.log(elementBottom);
            const leftDiv = document.getElementById('leftSideDiv');
            if (leftDiv) {
              leftDiv.classList.add('slideInFromLeft');
              leftDiv.classList.add('start');
            }
          } else if (el.classList.contains('pageInfoContainer') && elementBottom > window.innerHeight) {
            const leftDiv = document.getElementById('leftSideDiv');
            if (leftDiv) {
              leftDiv.classList.remove('slideInFromLeft');
              leftDiv.classList.remove('start');
            }
          }
        }
      }
    }

    function handleScroll() {
      requestAnimationFrame(checkAndStartAnimations);
    }

    function init() {
      const introTabs = document.getElementsByClassName('introTab');
      if (introTabs[0]) {
        introTabs[0].addEventListener('scroll', handleScroll);
      }
      setTimeout(checkAndStartAnimations, 0);
    }

    window.addEventListener('load', init);

    return () => {
      window.removeEventListener('load', init);
      const introTabs = document.getElementsByClassName('introTab');
      if (introTabs[0]) {
        introTabs[0].removeEventListener('scroll', handleScroll);
      }
    };
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
        </div>

      {/* VSCode */}
        <div className='introVscode introSection slideInFromLeft' style={{ color: 'white' }}>
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
        <div className='introUxui introSection slideInFromRight'>
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
        <div className='introBackend introSection slideInFromLeft'>
        <img src={leftWire} className='backendLeftWire'></img>
        <div className='backEndContent' style={{ color: 'white' }}>
          <h2>Back end</h2>
          {BinaryLine('white', 'var(--color-background-dark)')}
          <p>Seamlessly integrating a database makes site much more useful. Database design and management</p>
        </div>
      </div>
        <div className='pageInfoContainer slideUp'>
          <h2 className='carouselTitle'>Portfolio site "versions"</h2>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <div className="carousel-item-container">
                <img
                  src={vscodeCarousel}
                  alt="First slide"
                />
                <Carousel.Caption className="custom-caption">
                  <h3>Design Implementation</h3>
                  <p>In this version I used VSCode as my "Design file"</p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-item-container">
                <img
                  src={uxuiCarousel}
                  alt="Second slide"
                />
                <Carousel.Caption className="custom-caption">
                  <h3>UX-UI Accessibility</h3>
                  <p>This version I used UX-UI principles and a11y guidelines</p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-item-container">
                <img
                  src={backendCarousel}
                  alt="Third slide"
                />
                <Carousel.Caption className="custom-caption">
                  <h3>Back End</h3>
                  <p>My back end is connected using firebase for data storage</p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div id="leftSideDiv"></div>
      </div>
    </div>
  );
}

export default IntroTab;
