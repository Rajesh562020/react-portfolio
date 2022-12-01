import React from 'react';
import Navbar from '../components/Navbar.js';

import HeroImg from '../components/HeroImg.js';
import Footer from '../components/Footer.js';
import Work from '../components/Work.js';
import AboutContent from '../components/AboutContent.js';
import Form from "../components/Form.js";
import SkillCards from '../components/SkillCards.js';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <SkillCards/>
      <Work/>
      <Form/>
      <AboutContent/>
      <Footer/>
      </div>
  )
}

export default Home;