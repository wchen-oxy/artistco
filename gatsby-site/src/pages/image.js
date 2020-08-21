import React, {useState } from 'react';

import '../styles/image.scss';


const ImageHolder = (props) => {
    // let slidesContainerRef = useRef(null);
    // let dotContainerRef = useRef(null);
    let [slideIndex, setSlideIndex] = useState(0);

    // // Next/previous controls
    const moveSlides = (n) => {
        let index = slideIndex += n;
        if (index > props.dataArray.length - 1) { index = 0 };
        if (index < 0) { index = props.dataArray.length - 1 };
        setSlideIndex(index);
        //   showSlides(slideIndex += n)

    };

    const currentSlide = (n) => (
        setSlideIndex(n)
    );
    const styles = { width: '100%',  objectFit: "cover"}
    const imageUrl = props.dataArray[slideIndex].url;
    const caption = props.dataArray[slideIndex].caption;
    let dotArray = []
    for (let i = 0; i < props.dataArray.length; i++){
        dotArray.push(
            <div style={{ textAlign: "center" }}>
                <span className="dot" onClick={() => currentSlide(i)}></span>
            </div>
        )
    }
    return (
        <div id="image-component-container">
            <div className="slideshow-container">
                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src={imageUrl} style={styles} />
                    <div className="text">{caption}</div>
                </div>
                <a className="prev" onClick={() => moveSlides(-1)}>&#10094;</a>
                <a className="next" onClick={() => moveSlides(1)}>&#10095;</a>
            </div>
            <br></br>
            <div id="dot-container">
                {dotArray}
            </div>
        
        </div>
    );
}

export default ImageHolder;