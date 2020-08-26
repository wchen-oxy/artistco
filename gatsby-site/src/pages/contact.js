import React from 'react';
import profile from "../../static/Profile.jpg";
import '../styles/contact.scss';


const ContactPage = (props) => (
    <div className="main-container" id="contact-main-container" ref={props.reference} >
        <div className="contact-column-container">
            <div id="contact-text-container">
                <h1>Contact Us</h1>
                <div className="contact-text-section">
                    <h3>Christian Flores Moya</h3>
                    <p>Se Habla Español</p>
                    <p>(347) 500-4903</p>
                    <p>Call and Text Ok!</p>
                    <p>info@essential-works.com</p>
                </div>

                <div className="contact-text-section">
                    <h3>Hours of Operation</h3>
                    <p>9 am to 5pm, Monday to Friday</p>
                    <p>(excluding federal holidays)</p>
                </div>

            </div>
        </div>
        <div className="contact-column-container">
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeq0ywW0K1WxkKr3vAv-mhM4xmqBkioCxE1XM1Jjf3xZ129gA/viewform?embedded=true"
                width="100%"
                height="100%"
                frameborder="0"
                marginheight="0"
                marginwidth="0">Loading…</iframe>
        </div>
    </div>
)

export default ContactPage;