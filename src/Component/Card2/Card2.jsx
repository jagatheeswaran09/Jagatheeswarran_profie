import React from "react";
import './Card2.css'

const Card2=({emoji,heading,details})=>{
    return(
    <div className="card2">
        <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{details}</span>
    </div>
    )
}

export default Card2;