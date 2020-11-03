import React from 'react';
import profile from "../../static/Profile.jpg";
import '../styles/contact.scss';
import {yelp, facebook, instagram} from "../styles/image-index";


const ContactPage = (props) => (
    <div className="main-container" id="contact-main-container" ref={props.reference}>
        <div className="contact-column-container">
            <div id="contact-text-container"  >
                <h1>Contact Us</h1>
                <div className="contact-text-section">
                    {/* <h3>Christian Flores Moya</h3> */}
                    {/* <p>Se Habla Español</p> */}
                    <p>(347) 494-1802</p>
                    <p>Call or Text</p>
                    <p>info@essential-works.com</p>
                </div>

                <div className="contact-text-section">
                    <h3>Hours of Operation</h3>
                    <p>9 am to 5pm, Monday to Friday</p>
                    <p>(excluding federal holidays)</p>
                </div>


            </div>
        </div>
        <div className="contact-column-container" id="google-form-container">
        <div id="contact-text-container">
    
                <div className="contact-text-section">
                    <h3>Check Out Our Social Media</h3>
                    <div className="social-media-link-container">
                        <a className="social-media-link" href="https://www.instagram.com/essentialWorks.construction/"><img className="social-media-image" src={instagram} /> @essentialWorks.construction</a>
                    </div>
                    <div className="social-media-link-container">
                        <a className="social-media-link" href="https://facebook.com/essentialworks.official"><img className="social-media-image" src={facebook} />@essentialworks.official</a>
                    </div>
                    <div className="social-media-link-container">
                        <a className="social-media-link" href="https://www.yelp.com/biz/essential-works-manhattan-2"><img className="social-media-image" src={yelp}/> @Essential-Works</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
)

export default ContactPage;