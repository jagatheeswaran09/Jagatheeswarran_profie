import React from "react";
import './Card.css';
const Card=({emoji,heading,details,emoji1})=>{
    return(
        <div className="card">
            <span>{emoji}{emoji1}</span>
            <span>{heading}</span>
            <span>{details}</span>
        </div>
    )
}
export default Card;