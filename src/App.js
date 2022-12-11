import React from "react";
import Home from "./routes/Home.js";
import Projects from "./routes/Projects.js";
import Contact from "./routes/Contact.js";
import Resume from "./routes/Resume.js";
import PictureLog from "./routes/PictureLog.js";
import About from "./routes/About.js";

import {Routes,Route} from "react-router-dom";
function App(){
  return (
    <>
    //routes
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/picturelog" element={<PictureLog/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/about" element={<About/>}/>
        
      </Routes>
    </>
  );
}

export default App;
