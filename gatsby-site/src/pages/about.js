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
                <p>-Home remodeling </p>
                <br />
                <p>-Full building remodeling </p>
                <br />
                <p>-New bathroom</p>
                <br />
                <p>-New kitchen </p>
                <br />
                <p>-Complete renovations </p>
                <br />
                <p>-Home repairs</p>
                <br />
                <p>-Home and building maintenance </p>
                <br />
                <p>-Commercial construction</p>
                <br />
                <br />
                <p>
                    Our priority is costumer satisfaction and safety. We have put in place
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