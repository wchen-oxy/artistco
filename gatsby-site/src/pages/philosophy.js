import React from 'react';
import philosophyHeroImage from "../../static/altered/philosophy-hero.jpg";
import '../styles/philosophy.scss';


const PhilosophyPage = (props) => {
    return (
        <div id="philosophy-container" className="main-container">
            <div className="philosophy-text-container" id="desktop-philosophy-text">
                <h2 id="philosophy-title-text">Our Philosophy</h2>
                <p>
                    We work efficiently with our resources to ensure your project is
                    completed on time and on budget. We're licensed, insured and look forward
                    to building strong, long-lasting relationships with our clients and guarantee
                    your satisfaction.
                </p>
            </div>
            <div id="philosophy-image-container">
                <img
                    alt="hard work image"
                    className="fit-image-to-container"
                    src={philosophyHeroImage}
                // data-lax-translate-y="300 50, 930 0"
                // data-lax-opacity="300 0, 700 1"

                />
            </div>
            <div className="philosophy-text-container" id="mobile-philosophy-text">
                <h2 id="philosophy-title-text">Our Philosophy</h2>
                <p>
                    We work efficiently with our resources to ensure your project is
                    completed on time and on budget. We're licensed, insured and look forward
                    to building strong, long-lasting relationships with our clients and guarantee
                    your satisfaction.
                </p>
            </div>
        </div>
    )
}

export default PhilosophyPage;