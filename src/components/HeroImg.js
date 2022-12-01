import React from "react";
import IntroImg from "../assets/Intro-bg2.jpeg";
import "./HeroImgStyle.css";
import {Link} from "react-router-dom";
const HeroImg = () =>{
   
    return (<div className="hero">
        <div className="mask">
            <img className="introImgBg"src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="Dev-info">
            <p>Hi,Im a Frontend Web Developer.</p>
            <h1>Working with React.</h1>
            <p>From New-Delhi.</p>
            <div>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>

            </div>
        </div>

    </div>);
}
export default HeroImg;