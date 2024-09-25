import React from 'react';
import heroGif from '../assets/images/hero-image.gif'; // Adjust the path based on your project structure

export default function HeroSection() {
  return (
    <div className='hero-section'>
      <img src={heroGif} alt='Hero-image' className='hero-gif' />
      <div className='hero-content'>
        <h1 className='intro-tags'>Who is Ali</h1>
        <p className='hero-text'>
        Craft Unforgettable Games!<br/>
        Expert in creating immersive and profitable<br/>
        games across Mobile, PC, VR, AR, Console and Web.<br/>
        We blend cutting-edge tech with captivating<br/>
        narratives, turning gameplay into adventures.<br/>
        Our passion lies in pushing boundaries and crafting unique experiences that leave<br/>
        a lasting impact.<br/>
        ...<br/>
        Let's collaborate and bring your vision to life.<br/>
       </p>
      </div>
    </div>
  );
}
