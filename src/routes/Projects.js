import React from 'react'

import Navbar from '../components/Navbar.js';
import Work from '../components/Work.js';
import HeroImg2 from '../components/HeroImg2.js';
import Footer from '../components/Footer.js';
const Projects = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Projects." text="Some of my recent works."/>
      <Work/>
      <Footer />
    </div>
  )
}

export default Projects