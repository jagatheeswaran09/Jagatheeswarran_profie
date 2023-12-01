import React from "react";
import './Project.css';
import Projectimg from '../../img/Project.jpg';
const Project = () => {
    return (
        <div className="project" id="Project">
            <div className="p-left">
                <span>Projects</span>
                {/* <span>Offline</span> */}
            </div>
            <div className="project-box">
                <div className="project-content">
                    <p><p className="project-title">Rental House Mangaement System(College Project)</p>
                        Technical Use :- Html, Css , JavaScript
                        <br /><span><u>Explain</u></span>
                        <br />
                        <i>The Online Rental House Management System is Searching in based on the apartment House for rent in metropolitan cites</i>
                    </p>
                </div>
                <div className="project-content">
                    <p><p className="project-title">Dynamic Content update(Admin web)</p>
                        Technical Use :- React js
                        <br /><span><u>Explain</u></span>
                        <br />
                        <i>Admin web pages can dynamically update content, enabling quick and easy changes through the interface.</i>
                    </p>
                </div>
                <div className="project-content">
                    <p><p className="project-title">Responsive Website</p>
                        Technical Use :- React js , Bootstrap
                        <br /><span><u>Explain</u></span>
                        <br />
                        <i>A responsive website adjusts its layout for different devices, ensuring a seamless user experience on desktops, tablets, and mobiles.</i>
                    </p>
                </div>
                <div className="project-content">
                    <p><p className="project-title">E-commerce website</p>
                        Technical Use :- React js
                        <br /><span><u>Explain</u></span>
                        <br />
                        <i>An e-commerce website lets businesses sell products or services online, facilitating browsing, selection, and secure transactions.</i>
                    </p>
                </div>
                <div className="project-content">
                    <p><p className="project-title">Service Management Portal</p>
                        Technical Use :- React js
                        <br /><span><u>Explain</u></span>
                        <br />
                        <i>A Service Management Portal is a streamlined digital platform for efficiently managing services, offering a unified interface for monitoring and handling requests.</i>
                    </p>
                </div>
                <div className="project-content">
                    <p>
                        <p className="project-title">Account Management Portal </p>
                        Technical Use :- React js
                        <br /><span><u>Explain</u></span>
                        <br />
                        <i>An Account Management Portal with payment integration combines account control and seamless payment processing in one digital platform.</i>
                    </p>
                </div>
            </div>
            {/* <div className="p-right">
            <img src={Projectimg} alt="" />
            </div> */}
        </div>
    )
}

export default Project;