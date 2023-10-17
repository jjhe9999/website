
import React from 'react';
import './pagestyles.css';
import poop from '../images/orange.jpg';
import git from '../images/orange.jpg';
import link from '../images/orange.jpg';

function Contact() {
  return (
    <div id="contact">{}
    <div className='contact-text'> contact me at...</div>
    <div className='contact-form'>jjhe9999@berkeley.edu</div>
    <img src={poop} alt="help"></img>
    <a href="https://www.example.com/page1">
  <img src="../images/purp.jpeg" alt="Image 1" style={{ display: 'inline-block' }} />
</a>

<a href="https://www.example.com/page2">
  <img src="image2.jpg" alt="Image 2" style={{ display: 'inline-block' }} />
</a>


    </div>     
  );
}

export default Contact;