import React from 'react'
import Navbar from '../components/Navbar.js';
import HeroImg2 from '../components/HeroImg2.js';
import Footer from '../components/Footer.js';
import Form from "../components/Form.js";

const Contact = () => {
  return (
    <div> <Navbar/>
    <HeroImg2 heading="Contact me here!" text="Let's have a fruitful chat."/>
    <Form/>
    <Footer/></div>
  )
}

export default Contact