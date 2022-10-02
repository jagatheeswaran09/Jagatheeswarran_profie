import React from 'react'
import './Contact.css'
import Gmail from '../../img/gmail.gif'
import Place from '../../img/place.gif'
import Phone from '../../img/phone.gif'
import Card2 from '../Card2/Card2'
import { themeContext } from "../../Context";
import {useContext} from  "react";

const Contact=()=>{
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return(
        <div className="Contact" id='Contact'>
            <div className="c-left">
                <span style={{
      background:darkMode?'black':'',
      color:darkMode?'white':'',
    }}>Get In Touch</span>
                <span>Contact Me</span>
            </div>
            <div className="c-right">
                <Card2
                emoji={Phone}
                heading="+91 9159733958"
                />
                <Card2
                emoji={Gmail}
                heading="jagatheeswaranmarimuthu01@gmail.com"
                    />
                <Card2
                emoji={Place}
                heading="Current"
                details="No.1 First cross Street,Katankulathur,Chennai"
                />
            </div>
        </div>
    )
}
export default Contact;