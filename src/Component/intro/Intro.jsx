import React from "react";
import './Intro.css';
import Githup from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import {useContext} from  "react";
import { Link } from "react-scroll";

const Intro=()=>{
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return(
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{
                    background:darkMode?'black':'',
                        color:darkMode?'white':'',
                    }}>Hai! I am</span>
                    <span>Jagatheeswaran Marimuthu</span>
                    <span>I am a frontend developer with one year of experience, dedicated to producing quality work</span>
                </div>
                <Link spy={true} to ='Contact' smooth={true}>
                <button className=" button i-button">Hire me</button></Link>
                    <div className="i-icons">
                        <a href="https://github.com/jagatheeswaran09">
                        <img src={Githup} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/jagatheeswaran-m-a25448216/">
                        <img src={Linkedin} alt="" />
                        </a>
                        <a href="https://www.instagram.com/jagathees_marimuthu/">
                        <img src={Instagram} alt="" />
                        </a>
                    </div>
            </div>
            <div className="i-right">
                <div style={{top:'33%',left:'68%',}}>
                    <FloatingDiv image={Crown} txt1="web" txt2="developer"/>
                </div>
                <div style={{top:'-8%',left:'30%',}}>
                    <FloatingDiv image={Crown} txt1="Core Java" txt2="developer"/>
                </div>
                <div style={{top:'8rem',}}>
                    <FloatingDiv image={thumbup} txt1="UI & UX" txt2="developer"/>        
                </div>
                <div style={{top:'17rem',left:'30%',}}>
                    <FloatingDiv image={thumbup} txt1="Responsive" txt2="design"/>        
                </div>
                {/* blur */}
                <div className="blur" style={{background:"rgb(288 210 255)"}}>

                </div>
            </div>
        </div>
    )
}

export default Intro ;