import "./WorkCardStyles.css";
import React from 'react'


const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="work1" />
    <h2 className="project-title">
      {props.title}
    </h2>
    <div className="pro-details">
        <p>{props.detailText}</p>
        <div className="pro-btns">
            <a href={props.viewLink}><button className="btn">View</button></a>
            <a href={props.codeLink}><button className="btn">View</button></a>
            
            
        </div>
    </div>
</div>
  )
}

export default WorkCard;