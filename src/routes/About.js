import React from 'react'
import Navbar from '../components/Navbar.js';
import HeroImg2 from '../components/HeroImg2.js';
import Footer from '../components/Footer.js';
import AboutContent from '../components/AboutContent.js';
const About = () => {
  return (
    <div>
       <Navbar/>
       <HeroImg2 heading="About Me!" text="Hi,I'am Rajesh Singh."/>
       <AboutContent/>
       <Footer/>
    </div>
  )
}

export default About;