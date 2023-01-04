import React from "react";
import './Section_1_artical.css';
import { SiFacebook, SiLinkedin, SiTwitter } from 'react-icons/si';
import { NavLink } from "react-router-dom";

const back_btn = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
    </svg>

)

const Section_1_artical = () => {
    return (
        <>
            <div className="section_1_artical_container">
                {/* text and social media devs start */}
                <div className="text_and_back_button">
                    <div className="back_button_container">
                        <NavLink to='/' className="back_button">{back_btn}</NavLink>
                    </div>
                    <div className="text_and_social_media_div">
                        <div className="text_and_social_media_div_heading">
                            <h1>Time to Get Your House Clean and in Order</h1>
                        </div>
                        <div className="text_and_social_media_div_time_text">
                            <p>Read it in <span>4 minutes</span></p>
                        </div>
                        <div className="text_and_social_media_div_pera">
                            <p>To have good air quality is not as simple as moving away from the city to a quiet suburb or rural environment</p>
                        </div>
                        <div className="text_and_social_media_div_social_media">
                            <div className="social_media_icons">
                                <div className="linkedin">
                                    <SiLinkedin size="2.5rem" color="#3a74ff" />
                                </div>
                                <div className="facebook">
                                    <SiFacebook size="2.5rem" color="#3a74ff" />
                                </div>
                                <div className="twitter">
                                    <SiTwitter size="2.5rem" color="#3a74ff" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* text and social media devs end */}
            </div>
        </>
    );
}

export default Section_1_artical;