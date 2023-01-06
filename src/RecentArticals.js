import React from "react";
import './RecentArticals.css';

const RecentArticals = (props) =>{
    return(
        <>
            <div className="RecentArticals-container">
                <div className="RecentArticals-heading-container"><h2>{props.heading}</h2></div>
                <div className="RecentArticals-pera-container"><p>{props.pera}</p></div>
                <div className="RecentArticals-read-container"><p>{props.read}</p></div>
            </div>
        </>

    );
}

export default RecentArticals;