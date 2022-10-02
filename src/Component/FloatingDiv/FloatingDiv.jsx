import React from 'react'
import {useContext} from  "react";
import { themeContext } from '../../Context';
import './FloatingDiv.css'
const FloatingDiv =({image,txt1,txt2})=>{
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    return(
        <div className="floatingDiv" style={{
            background:darkMode?'black':'',
            color:darkMode?'white':'',
          }}>
            <img src={image} alt="" />
            <span>{txt1}<br/>{txt2}</span>
        </div>
    )
}
export default FloatingDiv;