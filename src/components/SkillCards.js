import "./SkillCardStyle.css";
import React from 'react'
import Html from "../assets/html-img.png";
import Css from "../assets/css-img.png";
import Js from "../assets/js-img.png";
import reacti from "../assets/react-img.png";
import giti from "../assets/git-img.png";

const SkillCards = () => {
  return (
    <div className="skill">
        <h1>Skills</h1>
        <div className="skillCards">
        <img src={Html} alt="html"/>
        <img src={Css} alt="css"/>
        <img src={Js} alt="js"/>
        <img src={reacti} alt="react"/>
        <img src={giti} alt="git"/>
        </div>
       
    </div>
  )
}

export default SkillCards;