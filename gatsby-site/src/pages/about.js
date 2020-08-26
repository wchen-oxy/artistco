import React from 'react';
import profile from "../../static/Profile-tiny.jpg";
import '../styles/about.scss';


const AboutPage = (props) => (
    <div className="main-container" id="about-main-container" ref={props.reference} >
                <div className="about-column-container">
            <div id="about-image-container">
            <img id="about-image" src={profile}/>

            </div>
        </div>
        <div className="about-column-container">
            <div id="about-text-container">
                <div id="about-title-container">
                <h2>Personalized Construction Backed by Passion</h2>
                </div>
            <p>
                Esential Works started off with just one person, Christian Flores Moya. Born and raised in Queens, New York 
                Christian discovered his passion for fine artistic craftsmanship during his undergraduate study in the City 
                University of New York. After returning for an MFA in Sculpture and Interdisciplinary Arts, 
                Christian was introduced to construction work by a friend, and was contracted for commerical renovation in the
                heart of Manhattan. 
            </p>
            <br/>
            <p>After several of these contracts, it became clear to Christian that the work being done did not match the sky high
                prices that were being charged. As it turned out, the same kinds of prices were being charged for residential
                construction as well. 
            </p>
            <br/>
            <p>With that discovery, Christin sought to bring back honesty, fairness and artisan craftsmanship to construction by 
                starting his own construction group, Essential Works LLC. Now that Essential Works has completed several whole-building
                renovations, Christian is confident that he too can help you with your renovations and put the artistry in your home--without
                the Manhattan prices of course.

            </p>

            </div>
        </div>

    </div>
)

export default AboutPage;