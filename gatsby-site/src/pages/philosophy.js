import React, { useRef, useEffect } from 'react';

import '../styles/philosophy.scss';
import sideImage1 from "../../static/altered/side-image-1.jpg";
import sideImage2 from "../../static/altered/side-image-2.jpg";
import sideImage3 from "../../static/altered/side-image-3.jpg";
import sideImage4 from "../../static/altered/side-image-4.jpg";
import sideImage5 from "../../static/altered/side-image-5.jpg";
import sideImage6 from "../../static/altered/side-image-6.jpg";
import sideImage7 from "../../static/altered/side-image-7.jpg";




import philosophyHeroImage from "../../static/altered/philosophy-hero.jpg";

const stockPhotoWorkUrl = "https://s3.amazonaws.com/craftsman-brand-staging/comfy/cms/files/363/files/original/swiper-desktop-slide-03.jpg";

const PhilosophyPage = (props) => {
    const firstImage = useRef(null);
    useEffect(() =>
        window.addEventListener('scroll', function () {
            console.log(window.pageYOffset + 'px');
        })
    );

    return (
        <div className="philosophy-container main-container">
            <div className="container-padding lax" id="philosophy-text-container"
                data-lax-preset="driftRight">
                <h2 id="philosophy-title-text">Our Philosophy</h2>
                <p id="philosophy-description-text">
                    We work efficiently with our resources to ensure your project is
                    completed on time and on budget. We're licensed, insured and look forward
                    to building strong, long-lasting relationships with our clients and guarantee
                    your satisfaction.
                </p>
                <div className="background-div">
                </div>
            </div>
            <div className="container-padding container-padding-right" id="philosophy-image-container">
                <img
                    alt="hard work image"
                    className="lax fit-image-to-container"
                    src={philosophyHeroImage}
                    data-lax-translate-y="300 50, 930 0"
                    data-lax-opacity="300 0, 700 1"

                />
                <img
                    className="side-image lax"
                    // data-lax-preset="fadeIn"
                    data-lax-opacity="150 0, 600 1"
                    data-lax-translate-y="0 -300, 700 -200"
                    // data-lax-opacity="0 1, vh 0"
                    ref={firstImage}
                    id="side-image-1"
                    src={sideImage7} />
                <img
                    className="side-image lax"
                    // data-lax-preset="fadeIn"
                    data-lax-opacity="650 0, 850 1"
                    data-lax-translate-y="500 -300, 1000 -200"
                    // data-lax-opacity="0 1, vh 0"
                    id="side-image-2"
                    src={sideImage5}
                />
                <img
                    className="side-image lax"
                    // data-lax-preset="fadeIn"
                    data-lax-opacity="1150 0, 1300 1"
                    data-lax-translate-y="1000 -250, 1500 -150"
                    // data-lax-opacity="0 1, vh 0"
                    id="side-image-3"
                    src={sideImage2} />

            </div>
        </div>
    )
}

export default PhilosophyPage;