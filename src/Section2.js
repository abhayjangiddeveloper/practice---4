import React from "react";
import './Section2.css';
import Dartical from './Dartical'
import RecentArticals from "./RecentArticals";

const Section2 = () => {
    return (
        <>
            <div className="Section2-main-container">
                <div className="Section2-articel-container">
                    <Dartical
                        img='https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80'
                        heading='Time to Get Your House Clean and in Order'
                        pera='Sit ac non gravida lacus. Grovida non est purus scelerisque gravida morbi quam elit.'
                        button='Read Article'
                    />
                    <Dartical
                        img='https://images.unsplash.com/photo-1673085796350-a842999ec21f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                        heading='How VOC Affects Your Indoor Air Quality'
                        pera='Using UV light for disinfection is becoming on essential hygiene practice for both spaces.'
                        button='Read Article'
                    />
                </div>
                <div className="Section2-recent-views-articel-container">
                    <RecentArticals
                        heading='The Benefits of using UV-C Light in the hospitality industry'
                        pera='Exprience clean air and easier breathing of your restourant with the latest in chemical free cleaning technology'
                        read='Read in 3 minutes'
                    />

                    <RecentArticals
                        heading='The Benefits of using UV-C Light in the hospitality industry'
                        pera='Exprience clean air and easier breathing of your restourant with the latest in chemical free cleaning technology'
                        read='Read in 3 minutes'
                    />

                    <RecentArticals
                        heading='The Benefits of using UV-C Light in the hospitality industry'
                        pera='Exprience clean air and easier breathing of your restourant with the latest in chemical free cleaning technology'
                        read='Read in 3 minutes'
                    />
                </div>
            </div>
        </>
    );
}

export default Section2;