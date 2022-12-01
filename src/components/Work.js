import "./WorkCardStyles.css";
import WorkCard from "./WorkCard.js";
import WorkCardData from "./WorkCardData.js";

import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">
            Projects
        </h1>
        <div className="project-container">
           {
            WorkCardData.map((val,index) => {
                return (
                    <WorkCard
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    detailText={val.detailText}
                    viewLink={val.viewLink}
                    codeLink={val.codeLink}
                    />
                )
            })
           }
        </div>
    </div>
  )
}

export default Work;