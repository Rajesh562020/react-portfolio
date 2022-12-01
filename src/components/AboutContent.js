import React from 'react'
import "./AboutContentStyles.css";
import {Link} from "react-router-dom";
import Aboutpic from "../assets/about-img2.png";
const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>About Me!</h1>
            <p>
                I'm a React.JS developer.I create responsive websites as per requirement.
            </p>
            <Link to="/contact"><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={Aboutpic} alt="about img" className='img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;