import React from 'react';
import profile from "../../static/Profile-tiny.jpg";
import '../styles/about.scss';


const AboutPage = (props) => (
    <div className="main-container" id="about-main-container"   >
        <div className="about-column-container" >
            <div id="about-image-container" >
                <img id="about-image" src={profile} ref={props.reference} />
            </div>
        </div>
        <div className="about-column-container">
            <div id="about-text-container">
                <div id="about-title-container">
                    <h2>Personalized Construction Backed by Passion</h2>
                </div>
                <p>
                    We are a full service construction company serving New York City
                    and the surrounding areas. With various specialties in general
                    construction and home improvement projects including:
                </p>
                <br />
                <br />
                <ul>
                    <li>Home remodeling </li>
                    <li>Full building remodeling </li>
                    <li>New bathroom</li>
                    <li>New kitchen </li>
                    <li>Complete renovations</li>
                    <li>Home repairs</li>
                    <li>Home and building maintenance </li>
                    <li>Commercial construction</li>
                    <br />
                </ul>
                <p>
                    Our priority is customer satisfaction and safety. We have put in place
                    all recommended precautions to prevent the spread of Covid-19,
                    including daily temperature checks and full face mask mandate compliance.
                </p>
                <br />
                <br />
                <p>
                    We work with clients to best meet their needs and budgets. Book a contactless
                    in-person or phone consultation today to go over the details of your project.
                </p>
            </div>
        </div>

    </div >
)

export default AboutPage;