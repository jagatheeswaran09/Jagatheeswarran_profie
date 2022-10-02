import React from 'react';
import './about.css';
import Profile from '../../img/jaga.jpg';

const About=()=>{
    return(
        <div className="about">
            <div className="a-left">
                    <img src={Profile} alt="" />
            </div>
            <div className="a-right">
                <div className="a-about-title">
                <span>About me</span><br/>
                <span>Frontend developer</span>
                </div>
                <p>HI..., I'am Jagatheeswaran, Completed
                        Bechelor Of Computer Science(B.sc(cs)) .
                            I Have Recently Completed for Java Course in
                                Besant Technologies...!!</p>
            </div>
        </div>
    )
}
export default About;