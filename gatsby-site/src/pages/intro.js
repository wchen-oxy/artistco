import React from 'react';
import '../styles/intro.scss';

const IntroPage = (props) => (
    <div id="intro-main-container" ref={props.reference}>
        <div className="intro-main-columns" id="intro-main-desc">
            <div id="intro-title-container" >
                <div className="logo-container">
                    <h1
                        className="logo-text"
                        id="thin-logo">
                        Essential
                        </h1>
                    <h1
                        className="logo-text"
                        id="bold-logo">Works
                        </h1>
                </div>
                <p>Artisan Construction Works</p>
            </div>
        </div>
        <div className="intro-main-columns" id="intro-main-image-container">
            <img
                id="intro-image"
                alt="Essential Works Header Image"
                className="lax"
                src="https://www.rsd-agencements.com/Images/Accueil/RSD-Agencements-Architecte-interieur-Lyon-5.jpg" />

            <div
                id="image-float-caption-container"
            // className="lax"
            // data-lax-translate-y="0 0, 600 60"
            // data-lax-opacity="300 1, 800 0"
            >
                <h4 className="image-caption-text">
                    Affordable, Durable and Timely Construction
                </h4>
                <p className="image-caption-text">
                    NYC based construction company specializing in remodeling, commercial and residential projects.
                    Let us help you bring your project to life. Set up a consultation today!
                </p>
                <div className="quote-button-container">
                    <a id="intro-quote-button"
                        className="quote-button"
                        href="https://forms.gle/idoyRoFJoFWhJACy7"
                        target="_blank">Get a Quote</a>
                </div>
                <div id="spacer-div"></div>
            </div>
        </div>
    </div>
)

export default IntroPage;