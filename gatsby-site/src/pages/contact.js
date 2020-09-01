import React from 'react';
import profile from "../../static/Profile.jpg";
import '../styles/contact.scss';
import {yelp, facebook, instagram} from "../styles/image-index";


const ContactPage = (props) => (
    <div className="main-container" id="contact-main-container" >
        <div className="contact-column-container">
            <div id="contact-text-container"  ref={props.reference}>
                <h1>Contact Us</h1>
                <div className="contact-text-section">
                    <h3>Christian Flores Moya</h3>
                    <p>Se Habla Español</p>
                    <p>(347) 494-1802</p>
                    <p>Call and Text Ok!</p>
                    <p>info@essential-works.com</p>
                </div>

                <div className="contact-text-section">
                    <h3>Hours of Operation</h3>
                    <p>9 am to 5pm, Monday to Friday</p>
                    <p>(excluding federal holidays)</p>
                </div>

                <div className="contact-text-section">
                    <h3>Check Us Out on Social Media</h3>
                    <div className="social-media-link-container">
                        <a className="social-media-link" href="https://sites.google.com/view/mschenmath"><img className="social-media-image" src={instagram} /> @Assential-Works</a>
                    </div>
                    <div className="social-media-link-container">
                        <a className="social-media-link" href="https://facebook.com/essentialworks.official"><img className="social-media-image" src={facebook} /> @essentialworks.official</a>
                    </div>
                    <div className="social-media-link-container">
                        <a className="social-media-link" href="https://sites.google.com/view/mschenmath"><img className="social-media-image" src={yelp}/> @Assential-Works</a>
                    </div>
                </div>

            </div>
        </div>
        <div className="contact-column-container" id="google-form-container">
            {/* <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeq0ywW0K1WxkKr3vAv-mhM4xmqBkioCxE1XM1Jjf3xZ129gA/viewform?embedded=true"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0">Loading…</iframe> */}
        </div>
    </div>
)

export default ContactPage;