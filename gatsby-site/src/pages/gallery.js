import React, { useRef, useState } from 'react';
import ImageHolder from "./image";

import '../styles/gallery.scss';


const GalleryPage = (props) => {
    const [currentData, setCurrentData] = useState(0);
    const modalRef = useRef(null);
    const imageHolderRef = useRef(null);
    let variable = 1;
    const openModal = () => {
        modalRef.current.style.display = "flex";
        document.body.style.overflow = "hidden";

    }
    const closeModal = () => {
        modalRef.current.style.display = "none";
        document.body.style.overflow = "visible";
    }

    const modal = (
        <div className="modal" ref={modalRef}>
            <div className="overlay"></div>
            <span className="close" onClick={closeModal}>X</span>
            <div id="image-holder-container" style={{ width: props.maxWidth, height: props.maxHeight }}>
                <ImageHolder
                    dataArray={props.dataArray ? props.dataArray[currentData].data : null}
                    maxHeight={props.maxHeight}
                    maxWidth={props.maxWidth}
                />
                {currentData}
            </div>
        </div>
    );

    const open = (i) => {
        setCurrentData(i);
        openModal();
        // console.log(variable);

    }

    let colArray1 = [];
    let colArray2 = [];
    let colArray3 = [];
    let modalArray = [];
    let index = 0;
    for (let i = 0; i < props.dataArray.length; i++) {
        const set = props.dataArray[i];
        //grab index and thumnail and image and pass to gallery page

        switch (index) {
            case (0):
                colArray1.push(
                    <div className="thumbnail-container" onClick={() => open(i)}>
                        <img className="thumbnail-image" src={set.thumbnail}></img>
                        <div className="caption-overlay">
                            <p className="caption-text">{set.caption}</p>
                        </div>
                    </div>
                );
                break;
            case (1):
                colArray2.push(
                    <div className="thumbnail-container" onClick={() => open(i)}>
                        <img className="thumbnail-image" src={set.thumbnail}></img>
                        <div className="caption-overlay">
                            <p className="caption-text">{set.caption}</p>
                        </div>
                    </div>
                );
                break;
            case (2):
                colArray3.push(
                    <div className="thumbnail-container" onClick={() => open(i)}>
                        <img className="thumbnail-image" src={set.thumbnail}></img>
                        <div className="caption-overlay">
                            <p className="caption-text">{set.caption}</p>
                        </div>
                    </div>
                );
                break;
        }
        index === 2 ? index = 0 : index++;

    }
    console.log("Redner again");
    return (
        <div style={{paddingTop: "15vh"}}>
        <h2 id="gallery-title-text">Our Residential Work</h2>
            <div className="main-container" id="gallery-container">
                {/* <button onClick={openModal}>Click me Motherfucker</button> */}
                <div className="gallery-container-column">
                    {colArray1}
                </div>
                <div className="gallery-container-column">
                    {colArray2}
                </div>
                <div className="gallery-container-column">
                    {colArray3}
                </div>
            </div>
            {modal}

        </div>
    )
}

export default GalleryPage;