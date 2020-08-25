import React from 'react';
import profile from "../../static/Profile.jpg";
import '../styles/contact.scss';


const ContactPage = (props) => (
    <div className="main-container" id="contact-main-container" ref={props.reference} >
        <div className="contact-column-container">
            <div id="contact-text-container">
            <h2>Contact Us</h2>
            <h3>Christian Flores Moya</h3>
            <p>Se Habla Español</p>
            <p>(347) 500-4903</p>
            <p>Call and Text Ok!</p>
            <p>info@essential-works.com</p>
            <h3>Hours of Operation</h3>
            <p>9 am to 5pm, Monday to Friday</p>
            <p>(excluding federal holidays)</p>
            </div>
        </div>
        <div className="contact-column-container">
            <div id="contact-image-container">
            <img id="contact-image" src={profile}/>

            </div>
        </div>
    </div>
)

export default ContactPage;