import React from "react";
import './Section1Artical.css';
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
                {/* -----text and social media devs start */}
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
                {/* text and social media devs end----- */}

                {/* -----Artical 1 img section is start */}
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="artical1__img">
                    <div className="artical1_img_center_div">

                    </div>
                </div>

                {/* Artical 1 img section is end----- */}

                {/* -----Artical 1 text and img seciton is start */}

                <div className="artical_1_text_and_img">
                    <div className="artical_1_text_and_img_text">
                        <p>It's important to keep in mind that VOC's represent a large group of chemecals that have their own toxicity and potential to cause different helth effects. The term 'VOC' (Volatile Organic Compounds) refers to manufactured chemicals emitted from solid or liquid preducts in a gaseous state. What that mens for your home?</p>
                    </div>
                    <div className="artical_1_text_and_img_img">
                        <img src="https://images.unsplash.com/photo-1672662680286-d77f4b79b3c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="" />
                    </div>
                </div>

                {/* Artical 1 text and img seciton is end----- */}

                {/* -----Artical 1 common seciton is start */}


                <div className="common-container">
                    <div className="common-heading">
                        <h2>Common Household Products You Might Use</h2>
                    </div>
                    <div className="common-pera">
                        <p>
                            To have good air quluty is not simple as moving away from the city to a qulity suburb or rural environment, to avoid the industrialzed pollution highly populated cities are known for.
                        </p>
                    </div>
                    <div className="common-subpera">
                        <p>90% of our time is indoors, so even with pristine outdoor air, the most thing is never quality doesn't necessarily mean the air your brathiv indoor is of the start the good Quality.
                        </p>
                    </div>
                </div>

                {/* Artical 1 common seciton is end----- */}            

            </div>
        </>
    );
}

export default Section_1_artical;