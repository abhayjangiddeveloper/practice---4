import React from "react";
import './Dartical.css';

const Dartical = (props) => {
    return (
        <>
            <div className="Dartical-main-container">
                <div className="Dartical-img-container">
                    <img src={props.img} alt="" className="Dartical-img-container-img" />
                </div>
                <div className="Dartical-text-container">
                    <div className="Dartical-text-container-heading"><h2>{props.heading}</h2></div>
                    <div className="Dartical-text-container-pera"><p>{props.pera}</p></div>
                </div>
                <div className="Dartical-button-container">
                    <button className="Dartical-button-container-btn">{props.button}</button>
                </div>
            </div>
        </>
    );
}

export default Dartical;