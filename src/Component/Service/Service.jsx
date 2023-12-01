import React from "react";
import './Service.css';
import Html from '@iconscout/react-unicons/icons/uil-html5'
import Css from '@iconscout/react-unicons/icons/uil-css3-simple'
import Javascript from '@iconscout/react-unicons/icons/uil-java-script'
import React1 from '@iconscout/react-unicons/icons/uil-react'
import { FaJava } from '@react-icons/all-files/fa/FaJava'
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { useContext } from "react";
import Resume from '../../img/Jagatheeswaran resume.pdf'

const Service = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="service" id="Service">
            {/* left */}
            <div className="awesome">
                <span style={{
                    background: darkMode ? 'black' : '',
                    color: darkMode ? 'white' : '',
                }}>My Skill</span>
                <span>Service</span>
                <span>I know HTML, CSS, JavaScript, React, and Core Java. With these skills, I can build responsive web page designs.
                    <br />
                    For further details, please scroll on my profile page and download my CV.
                </span>
                <a href={Resume} download><button className="button s-button">Download</button></a>
            </div>
            {/* right */}
            <div className="cards">
                <div style={{ left: '14rem' }}>
                    <Card
                        emoji={<Html color='orange' width='8rem' height='6rem' />}
                        emoji1={<Css color='orange' width='8rem' height='6rem' />}
                        heading={'Html & Css'}
                        details={"Extensive Knowledge is desiging responsive web pages"}
                    />
                </div>
                <div style={{ top: "12rem", left: "-4rem" }}>
                    <Card
                        emoji={<FaJava style={{ color: 'orange', width: '100% ', height: '6rem' }} />}
                        heading={"Core Java"}
                        details={"Java sound Knowledge in OOPS concepts"} />
                </div>
                <div style={{ top: "19rem", left: "12rem" }}>
                    <Card
                        emoji={<Javascript color='orange' width='8rem' height='6rem' />}
                        emoji1={<React1 color='orange' width='8rem' height='6rem' />}
                        heading={"Javascript & React"}
                        details={"Event functionality can be using an language"} />
                </div>
            </div>
        </div>
    )
}
export default Service;