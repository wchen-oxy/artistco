import React from "react";
import "../styles/highlight.scss";
import sideImage1 from "../../static/altered/side-image-1.jpg";
import sideImage2 from "../../static/altered/side-image-2.jpg";
import sideImage3 from "../../static/altered/side-image-3.jpg";
import sideImage4 from "../../static/altered/side-image-4.jpg";
import sideImage5 from "../../static/altered/side-image-5.jpg";
import sideImage6 from "../../static/altered/side-image-6.jpg";
import sideImage7 from "../../static/altered/side-image-7.jpg";

const HighlightSection = (props) => (
    <div className="main-container" id="highlight-container">
        <div className="highlight-column-container">
            <div className="highlight-image-container">
                <img className="fit-image-to-container highlight-image" src={sideImage7} />
                <h4>Quality</h4>

            </div>
        </div>
        <div className="highlight-column-container">
            <div className="highlight-image-container">
                <img className="fit-image-to-container highlight-image" src={sideImage6} />
                <h4>Artistry</h4>
            </div>        
        </div>
        <div className="highlight-column-container">
            <div className="highlight-image-container">
                <img className="fit-image-to-container highlight-image" src={sideImage2} />
                <h4>Craftsmanship</h4>
            </div>        
        </div>
    </div>
)

export default HighlightSection;