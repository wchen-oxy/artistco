import React, { useRef, useState, useEffect } from 'react';
import ImageHolder from "./image";
import '../styles/gallery.scss';


const GalleryPage = (props) => {
    const [currentData, setCurrentData] = useState(0);
    const [isClient, setClient] = useState(false);

    const modalRef = useRef(null);
    const imageMaxHeight = isClient ? props.maxHeight : "400px";
    const imageMaxWidth = isClient ? props.maxWidth : "400px";

    let colArray1 = [];
    let colArray2 = [];
    let colArray3 = [];
    let modal = <></>;

    useEffect(() =>  
        setClient(true), 
        []);

    const openModal = () => {
        modalRef.current.style.display = "flex";
        document.body.style.overflow = "hidden";

    }
    const closeModal = () => {
        modalRef.current.style.display = "none";
        document.body.style.overflow = "visible";
    }

    const open = (i) => {
        setCurrentData(i);
        openModal();
    }

    const createPreviewPic = (index, thumbnail, caption) => (
        <div key={index} className="thumbnail-container" onClick={() => open(index)}>
            <img className="thumbnail-image" src={thumbnail}></img>
            <div className="caption-overlay">
                <p className="caption-text">{caption}</p>
            </div>
        </div>
    );

    const createGalleryColumns = (array1, array2, array3) => {
        let index = 0;
        for (let i = 0; i < props.dataArray.length; i++) {
            const set = props.dataArray[i];
            switch (index) {
                case (0):
                    array1.push(
                        createPreviewPic(i, set.thumbnail, set.caption)
                    );
                    break;
                case (1):
                    array2.push(
                        createPreviewPic(i, set.thumbnail, set.caption)
                    );
                    break;
                case (2):
                    array3.push(
                        createPreviewPic(i, set.thumbnail, set.caption)
                    );
                    break;
            }
            index === 2 ? index = 0 : index++;

        }
    }
    if (isClient) {
            createGalleryColumns(colArray1, colArray2, colArray3);
            modal = (
                <div className="modal" ref={modalRef}>
                    <div className="overlay"></div>
                    <span className="close" onClick={closeModal}>X</span>
                    <div id="image-holder-container" style={{ width: imageMaxWidth, height: imageMaxHeight }}>
                        <ImageHolder
                            dataArray={props.dataArray[currentData].data}
                            maxHeight={imageMaxHeight}
                            maxWidth={imageMaxWidth}
                        />
                        {currentData}
                    </div>
                </div>
            );
        }

    return (
        <div style={{ paddingTop: "15vh" }}>
            <h2 id="gallery-title-text">Our Residential Work</h2>
            {isClient ?
                (
                    <>
                        <div className="main-container" id="gallery-container">
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
                        {isClient? modal : <></>}
                    </>
                )
                : <div className="main-container">
                    <p>The images need to be rendered again. Please refresh your page.</p>
                </div>
            }
        </div>
    )
}

export default GalleryPage;