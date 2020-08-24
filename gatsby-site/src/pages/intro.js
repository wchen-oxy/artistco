import React from 'react';

import '../styles/intro.scss';


const IntroPage = (props) => (
    <div className="intro-main-container" ref={props.reference}>
        <div className="intro-main-columns" id="intro-main-desc">
            <div className="text-padding center-text" >
                <h1>Essential Works</h1>
                <p id="main-subtitle">Artisan Construction Works</p>
            </div>

        </div>
        <div className="intro-main-columns" id="intro-main-image-container">
            <div 
                className="image-float-caption-container lax"
                data-lax-translate-y="0 0, 600 60"
                data-lax-opacity="300 1, 800 0"
                
                >
             
                    <h4 className="image-caption-text">Affordable, Durable and Timely Construction</h4>
                    <p className="image-caption-text">
                        We bring old-world, quality craftsmanship to every unique project we take on.
                        We specialize in a variety of major home improvement projects which includes additions,
                        kitchen and bathroom remodels, major renovations and home repairs.
                    </p>
       
            </div>
            <div className="image-container">
                <img 
                    alt="nice building image"
                    className="intro-image lax" 
                    src="https://www.rsd-agencements.com/Images/Accueil/RSD-Agencements-Architecte-interieur-Lyon-5.jpg" />
            </div>

        </div>

    </div>
)

export default IntroPage;