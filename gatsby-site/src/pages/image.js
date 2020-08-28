import React, { useState, useEffect } from 'react';
import '../styles/image.scss';

const ImageHolder = (props) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [isClient, setClient] = useState(false);
    const imageSource = isClient ? props.dataArray[slideIndex].url : "";
    const imageCaption = isClient ? props.dataArray[slideIndex].caption : "";

    useEffect(() =>
        setClient(true),
        [props.dataArray]);

    const moveSlides = (n) => {
        let index = slideIndex;
        index += n;
        if (index > props.dataArray.length - 1) { index = 0 };
        if (index < 0) { index = props.dataArray.length - 1 };
        setSlideIndex(index);
        //   showSlides(slideIndex += n)
    };

    const currentSlide = (n) => (
        setSlideIndex(n)
    );

    const createDotArray = (array) => {
        for (let i = 0; i < props.dataArray.length; i++) {
            array.push(
                <div key={i}>
                    <span className="dot" 
                    style={i === slideIndex ? {backgroundColor: "#4a4949"} : { backgroundColor: "#bbb"}} 
                    onClick={() => currentSlide(i)}></span>
                </div>
            );
        }
    }

    let dotArray = [];
    if (isClient) {
        createDotArray(dotArray)
    };
    return (
        <div id="image-main-container" key={isClient}>
            {isClient ? (
                <>
                    <div className="slideshow-container">
                        <div className="mySlides fade">
                            <img id="image" src={imageSource}  />
                            <div className="text" style={imageCaption.length !== 0 ? {backgroundColor: "rgba(44, 44, 44, 0.5)"} : {backgroundColor: "transparent"}}><p>{imageCaption}</p></div>
                        </div>
                        <a className="prev" onClick={() => moveSlides(-1)}>&#10094;</a>
                        <a className="next" onClick={() => moveSlides(1)}>&#10095;</a>
                    </div>
                    <br></br>
                    <div id="dot-container">
                        {dotArray}
                    </div>
                </>) :
                <p>The images need to be rendered again. Please refresh your page.</p>
            }
        </div>
    );
}

export default ImageHolder;