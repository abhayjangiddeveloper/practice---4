import React from "react";
import './ScienceBox.css';

const ScienceBox = (props) =>{
    return(
        <>
            <div className="Science-container">
                <div className="Science-img-container"><img src={props.img} alt="" /></div>
                <div className="Science-heading-container"><h2>{props.heading}</h2></div>
                <div className="Science-pera-container"><p>{props.pera}</p></div>
                <div className="Science-read-container"><p>{props.read}</p></div>
            </div>
        </>
    );
}

export default ScienceBox;