import React from 'react';

import '../styles/intro.scss';
import '../styles/copied-styles.scss';


const IntroPage = (props) => (
    <div id="intro-main-container" ref={props.reference}>
        <div className="intro-main-columns" id="intro-main-desc">
            <div id="intro-title-container" >
                <h1>Essential Works</h1>
                <p>Artisan Construction Works</p>
            </div>
        </div>
        <div className="intro-main-columns" id="intro-main-image-container">


            <img
                id="intro-image"
                alt="nice building image"
                className="lax"
                src="https://www.rsd-agencements.com/Images/Accueil/RSD-Agencements-Architecte-interieur-Lyon-5.jpg" />


            <div
                id="image-float-caption-container"
            // className="lax"
            // data-lax-translate-y="0 0, 600 60"
            // data-lax-opacity="300 1, 800 0"
            >
                <h4 className="image-caption-text">Affordable, Durable and Timely Construction</h4>
                <p className="image-caption-text">
                    We bring old-world, quality craftsmanship to every unique project we take on.
                    We specialize in a variety of major home improvement projects which includes additions,
                    kitchen and bathroom remodels, major renovations and home repairs.
                    </p>
                <div id="quote-button-container">
                    <div class="btn btn-three">
                        <span onClick={() => props.scrollTo(props.contactReference)}><p id="quote-button-text">Get A Quote</p></span>
                    </div>
                </div>
                {/* <button id="get-quote-button"><p id="get-quote-button-text" className="image-caption-text">Get A Quote</p></button> */}
                <div id="spacer-div"></div>
            </div>

        </div>

        <div
            className="intro-main-columns"
            id="image-no-float-caption-container"
        // className="lax"
        // data-lax-translate-y="0 0, 600 60"
        // data-lax-opacity="300 1, 800 0"
        >
            <h4 className="image-caption-text">Affordable, Durable and Timely Construction</h4>
            <p className="image-caption-text">
                We bring old-world, quality craftsmanship to every unique project we take on.
                We specialize in a variety of major home improvement projects which includes additions,
                kitchen and bathroom remodels, major renovations and home repairs.
        </p>
            <div id="quote-button-container">
                <div class="btn btn-three">
                    <span onClick={() => props.scrollTo(props.contactReference)}><p id="quote-button-text">Get A Quote</p></span>
                </div>
            </div>
        </div>


    </div>
)

export default IntroPage;