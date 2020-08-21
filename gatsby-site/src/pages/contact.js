import React from 'react';

import '../styles/contact.scss';


const ContactPage = (props) => (
    <div className="main-container" id="contact-main-container" ref={props.reference} >
        <div className="contact-column-container">
            <div id="contact-text-container">
            <h2>Contact Us</h2>
            <h3>Christian Flores-Moya</h3>
            <h4>(347) 500-4903</h4>
            <h4>Call and Text ok!</h4>
            <h4>christian@essential-works.com</h4>
            <h4>Hours of Operation</h4>
            <p>9 am to 5pm, Monday to Friday</p>
            <p>(excluding federal holidays)</p>
            </div>
        </div>
        <div className="contact-column-container">
            <div id="contact-image-container">
            <img id="contact-image" src="http://3.bp.blogspot.com/-2CTKcO2eA6Y/VGa-zgan3uI/AAAAAAAAAPw/nnODoTaiUkc/s1600/BRAVO_Photo213.JPG"/>

            </div>
        </div>
    </div>
)

export default ContactPage;