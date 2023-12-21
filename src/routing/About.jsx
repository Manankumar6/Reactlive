import React from 'react';
import Common from './Common';
import web from "../images/management.png"

function About(props) {
    return (
     <>
      <Common 
      name="Welcome To The About Page" 
      imgsrc={web} 
      visit="/contact" 
      btnName="Contact Us" />
     </>
    );
  }
  
  export default About;