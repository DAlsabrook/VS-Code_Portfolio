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
          <div style={{
            height: '100px',
            width: '2px',
            backgroundColor: 'grey',
          }}></div>
        </ParallaxLayer>

        {/* Intro page */}
        <ParallaxLayer
          offset={-.1}
          speed={0}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={headshot} style={{ width: '300px', borderRadius: '50%', border: '4px solid var(--color-background-dark' }}></img>
          <p className='intro-name'>David Alsabrook</p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.68}
          speed={0}
          factor={4}
          style={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
          }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '61vw', marginLeft: '9vw', fontSize: '5vw', color: "var(--color-accent-yellow)", backgroundColor: 'var(--color-background-dark)' }}>
            <p>I am a</p>
            <p> Developer</p>
          </div>
        </ParallaxLayer>

        {/* FULL-STACK */}
        <ParallaxLayer
          offset={0.68}
          speed={-.75}
          factor={4}
          style={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
          }}>
          <p className='intro-name' style={{ fontSize: '5vw', color: "var(--color-accent-yellow)", backgroundColor: 'var(--color-background-dark)' }}>Full stack</p>
        </ParallaxLayer>


          {/* BACKEND */}
        <ParallaxLayer
          offset={2.7}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <p style={{ color: 'white' }}>Explore the site and dont forget to sign it at the end!</p>
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
