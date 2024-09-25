import React from 'react';
import logo from '../assets/images/final-logo-14.png';

export default function Header() {
  return (
    <div className='navbar'>
      <div className='main-logo'>
        <img src={logo} alt='Logo' />
      </div>

      <div className='arrow-keys'>
        <a>Home</a>
        <a>About</a>
        <a>Services</a>
        <a>Workflow</a>
        <a>Portfolio</a>
        <a>Blogs</a>
        <a>FAQs</a>
        <a>Contact Us</a>
      </div>
    </div>
  );
}
