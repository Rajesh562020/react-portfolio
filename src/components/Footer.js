import "./FooterStyle.css";
import React from 'react'
import {FaHome,FaPhone,FaMailBulk, FaLinkedin, FaGithub} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
               <h4> <FaHome size={20} style={{color:"white",marginRight:"2rem"}}/> </h4> 
                
                    {/* <p>Lane-6,</p>
                    <p>Mahipalpur.</p> */}
                    <p>New Delhi.</p>
                
                    
            </div>

            <div className="phone">


             <h6><FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>
               
                
               9634770965</h6>
            


            </div>

            <div className="mail">


             
            <h6>    <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>
            rajesh.mehra56@gmail.com </h6>
            


            </div>
          </div>


          <div className="right">
            <h4>About me!</h4>
            <h6>Hi, I'm Rajesh Singh.Aspiring Frontend Web Developer.</h6>
            <h6>Copyright &copy; Pixel Head,Inc.{(new Date().getFullYear())}.</h6>
            <h4>
            <a href="https://www.linkedin.com/in/rajesh-singh-mehra-57282a225"><FaLinkedin size={20} style={{color:"white",marginRight:"2rem"}}/></a>
                
              <a href="https://github.com/Rajesh562020">  <FaGithub size={20} style={{color:"white",marginRight:"2rem"}}/></a>
                
            </h4>
          </div>
        </div>
    </div>
  )
}

export default Footer