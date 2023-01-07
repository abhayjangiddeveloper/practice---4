import React from "react";
import './ScienceBehind.css';
import ScienceBox from "./ScienceBox";

const ScienceBehind = () => {
    return (
        <>
            <div className="ScienceBehind-container">
                <ScienceBox
                    img='https://images.unsplash.com/photo-1673021714226-8bea662f22dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                    heading='Chemical free Cleaning'
                    pera='We have all learned about gems the hard way - sickness.'
                    read='Read in 2 minutes'
                />

                <ScienceBox
                    img='https://images.unsplash.com/photo-1667571787548-3c7b8f484f56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                    heading='What is UV-C Light'
                    pera="UV-C light is growing in popularity as a form of disinfection - but it isn't new."

                    read='Read in 8 minutes'
                />

                <ScienceBox
                    img='https://images.unsplash.com/photo-1618108571494-7065bc619e68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80'
                    heading='Lesser-known of UV'
                    pera='Safety practices were developed to best handle it with care.'
                    read='Read in 1 minutes'
                />

                <ScienceBox
                    img='https://images.unsplash.com/photo-1667684550725-71e60ab8368e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                    heading='UV Light in Healthcare'
                    pera="It's most common to see UV-C used in hospitals as it is starllizing the air."
                    read='Read in 12 minutes'
                    
                />
            </div>
        </>
    );
}

export default ScienceBehind;