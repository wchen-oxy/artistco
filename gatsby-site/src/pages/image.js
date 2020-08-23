import React, {useState } from 'react';

import '../styles/image.scss';


const ImageHolder = (props) => {
    // let slidesContainerRef = useRef(null);
    // let dotContainerRef = useRef(null);
    let [slideIndex, setSlideIndex] = useState(0);

    // // Next/previous controls
    const moveSlides = (n) => {
        let index = slideIndex += n;
        if (index > dataArray.length - 1) { index = 0 };
        if (index < 0) { index = dataArray.length - 1 };
        setSlideIndex(index);
        //   showSlides(slideIndex += n)

    };

    const currentSlide = (n) => (
        setSlideIndex(n)
    );
    const residentialImages = {
        "bathroom": [
          {
            "image1": {
              caption: "before",
              url: "https://assets1.ignimgs.com/2020/08/19/racing-wheels-1597804923658.jpg?dpr=2&width=300&crop=16%3A9"
            },
            "image2": {
              caption: "after",
              url: "https://www.mastercook.com/app/Image/9211810/2887073.jpg"
            }
          }],
      };
    let dataArray = props.dataArray ? props.dataArray : residentialImages;
    const styles = { width: '100%',  objectFit: "cover", maxHeight: props.maxHeight, maxWidth : props.maxWidth}
    console.log(dataArray);
    const imageUrl = props.dataArray ? dataArray[slideIndex].url : "https://www.mastercook.com/app/Image/9211810/2887073.jpg";
    const caption = props.dataArray ? dataArray[slideIndex].caption : "";
    let dotArray = []
    for (let i = 0; i < dataArray.length; i++){
        dotArray.push(
            <div>
                <span className="dot" onClick={() => currentSlide(i)}></span>
            </div>
        )
    }
    return (
        <div id="image-component-container">
            <div className="slideshow-container">
                <div className="mySlides fade">
                    {/* <div className="numbertext">1 / 3</div> */}
                    <img src={imageUrl} style={styles} />
                    <div className="text"><p>{caption}</p></div>
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