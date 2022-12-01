import React from 'react'
import Navbar from '../components/Navbar.js';
import HeroImg2 from '../components/HeroImg2.js';
import Footer from '../components/Footer.js';
const Resume = () => {
  return (
    <div><Navbar/>
    <HeroImg2 heading="My Resume." text="This is my latest resume for reference."/>
    <Footer/></div>
  )
}

export default Resume