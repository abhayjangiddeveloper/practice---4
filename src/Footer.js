import React from "react";
import './Footer.css';

const Footer = () =>{
    const Top = () =>{
        window.scrollTo(0,0);
    }
    return(
        <>
           <div className="Footer-container" onClick={Top}>
                
           </div>
        </>
    );
}

export default Footer;