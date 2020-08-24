import React, { useState, useEffect } from 'react';
import '../styles/image.scss';

const ImageHolder = (props) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [isClient, setClient] = useState(false);

    const imageMaxHeight = isClient ? props.maxHeight : "400px";
    const imageMaxWidth = isClient ? props.maxWidth : "400px";
    const styles = { width: '100%', objectFit: "cover", maxHeight: imageMaxHeight, maxWidth: imageMaxWidth };

    useEffect(() =>
        setClient(true),
        []);

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
                    <span className="dot" onClick={() => currentSlide(i)}></span>
                </div>
            );
        }
    }

    let dotArray = [];
    if (isClient) {
        createDotArray(dotArray)
    };
    return (
        <div id="image-component-container" style={{maxWidth: imageMaxWidth, maxHeight: imageMaxHeight}}>
            {isClient && props.dataArray ? (
                <>
                    <div className="slideshow-container">
                        <div className="mySlides fade">
                            <img src={props.dataArray[slideIndex].url} style={styles} />
                            <div className="text"><p>{props.dataArray[slideIndex].caption}</p></div>
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