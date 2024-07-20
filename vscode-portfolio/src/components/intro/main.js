import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

// Images
import laptop from '../../images/intro/laptop-mockup.png';
import headshot from '../../images/vs-code/linkedin/1-backyard_headshot.jpeg'

// I want as you scroll the background color matched each tab (yellow, white, grey, black)
// Each specifically colored section talks about tech and goal for coresponding section


function IntroTab() {
  const parallax = useRef(null);

  return (
    <div className="introTab">
      <Parallax ref={parallax} pages={4} style={{width: 'calc(100% - 50px)'}}>
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
          <div className='headshotDiv darkGrey'>
            <img src={headshot} className='headshotImg'></img>
            <h1 className='name'>My name is David Alsabrook</h1>
            <p className='elevatorPitch'>Welcome to my portfolio! As a developer, I thrive on coding and collaboration. I put my all into every project, delivering quality and creativity with every line of code. Dive into my work and experience my journey in tech.</p>
            <p>My goal with this page is to showcase my front-end and back-end skills, as well as my ability to accurately follow and implement a design.</p>
          </div>
          <div className='blankDiv'>
            <p>I specialize in</p>
            <div className='fillTheBlankLine'></div>
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
          <p className='fullStack' style={{fontSize: '5vw', color: "var(--color-accent-yellow)", backgroundColor: 'var(--color-background-dark)' }}>Full stack development</p>
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
              <p style={{color: 'white'}}>In</p>
              <div className='fillTheBlankLine'></div>
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
            <div className='blankDiv darkGrey'>
              <p>In</p>
              <div className='fillTheBlankLine black'></div>
            </div>
            <p>Giving users a modern site with intuitive design is a must</p>
          </div>
        </ParallaxLayer>

        {/* BACKEND */}
        <ParallaxLayer
          offset={2.6}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <div className='uxuiContent'>
            <div className='blankDiv'>
              <p style={{ color: 'white' }}>In</p>
              <div className='fillTheBlankLine'></div>
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
