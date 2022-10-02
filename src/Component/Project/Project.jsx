import React from "react";
import './Project.css';
import Projectimg from '../../img/Project.jpg';
const Project=()=>{
    return(
        <div className="project" id="Project">
            <div className="p-left">
                <span>Project</span>
                <span>Offline</span>
                <p><u>Rental House Mangaement System(College Project)</u>
                <br/>Technical Usge :- Html, Css , JavaScript
                <br/><span><u>Explain</u></span>
                <br/>
                <i>The Online Rental Houes Management System is Searching in based on the appartment House for rent in metroplitan cites</i>
                </p>
            </div>
            <div className="p-right">
            <img src={Projectimg} alt="" />
            </div>
        </div>
    )
}

export default Project;