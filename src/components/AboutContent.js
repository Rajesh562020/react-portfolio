import React from 'react'
import "./AboutContentStyles.css";
import {Link} from "react-router-dom";
//import Aboutpic from "../assets/about-img2.png";
const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>About Me!</h1>
            <p>
                I'm a React.JS developer.I like creating responsive websites.Being Mechanical Engineer I had keen 
                interest in design,pattern and symmetry that I would Like to enhance and apply my knowledge
                with the UI/UX.
            </p>
            <Link to="/contact"><button className='btn'>Contact</button></Link>
        </div>
        {/* <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={Aboutpic} alt="about img" className='img'/>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default AboutContent;