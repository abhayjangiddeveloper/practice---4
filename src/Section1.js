import React from "react";
import { NavLink } from "react-router-dom";
import ScienceBehind from "./ScienceBehind";
import "./Section1.css";
import Section2 from "./Section2";
import Section3 from "./Section3";


const Section_1 = () => {
    return (
        <>
            <div className="section_1_main_container">
                <div className="section_1_text_and_button">
                    <div className="heading">
                        <h1 className="section_1_heading index">Time to Get Your House Clean and in Order</h1>
                    </div>
                    <div className="pera">
                        <p className="section_1_pera index">To have good air quality is not as simple as moving away from the city to a quiet suburb or rural environment</p>
                    </div>
                    <div className="button">
                        <NavLink to='/artical_1' className="section_1_button index">Read Artical</NavLink>
                    </div>
                </div>
            </div>      
            <Section2/>
            <ScienceBehind/>
            <Section3/>
        </>
    );
}

export default Section_1;