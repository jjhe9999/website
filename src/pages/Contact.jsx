
import React from 'react';
import './pagestyles.css';
import poop from '../images/orange.jpg';
import git from '../images/git.png';
import link from '../images/linky.png';

function Contact() {
  return (
    <div id="contact">{}
    <div className='contact-text'> contact me!</div>
    
    
    <a href="https://github.com/jjhe9999">
  <img src={git} alt="Image 1" style={{ display: 'inline-block' , width:'3%', height: '3%',marginLeft:'150px'}} />
</a>

<a href="https://linkedin.com/in/jjhe9999">
  <img src={link} alt="Image 2" style={{ display: 'inline-block' , width:'3%', height: '3%', marginLeft: '20px'}} />
</a>

<div className='contact-form'>jjhe9999@berkeley.edu</div>

    </div>     
  );
}

export default Contact;