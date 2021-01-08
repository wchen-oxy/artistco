import React, { useRef, useState, useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import ImageHolder from "./image";
import '../styles/gallery.scss';


const GalleryPage = (props) => {
    const [isClient, setClient] = useState(false);
    const [colArray1, setColArray1] = useState([]);
    const [colArray2, setColArray2] = useState([]);
    const [colArray3, setColArray3] = useState([]);
    const [imageHolder, setImageHolder] = useState(null);

    const modalRef = useRef(null);
    useEffect(() => {
        setClient(true);
        createGalleryColumns();
    }, []);

    const openModal = () => {
        modalRef.current.style.display = "flex";
        disableBodyScroll(document.body);

    }
    const closeModal = () => {
        modalRef.current.style.display = "none";
        enableBodyScroll(document.body);
    }

    const close = () => {
        closeModal();
        setImageHolder(null);

    }

    const open = (i) => {
        setImageHolder(
            <ImageHolder dataArray={props.dataArray[i].data} isModal={true} />);
        openModal();
    }

    const createPreviewPic = (index, thumbnail, caption) => (
        <div key={index} className="thumbnail-container" onClick={() => {
            open(index);
        }}>
            <img className="thumbnail-image" src={thumbnail}></img>
            <div className="caption-overlay">
                <div className="caption-text-container">
                    <p className="caption-text">{caption}</p>
                </div>
            </div>
        </div>
    );

    const createGalleryColumns = () => {
        let index = 0;
        let array1 = [];
        let array2 = [];
        let array3 = [];
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
        setColArray1(array1);
        setColArray2(array2);
        setColArray3(array3);
    }

    return (
        <div key={isClient}>
            {
                isClient ?
                    (
                        <>
                            <div className="main-container" id="gallery-container">
                                <h2 id="gallery-title-text">Our Residential Work</h2>
                                <div id="gallery-column-container">
                                    <div className="gallery-column">
                                        {colArray1}
                                    </div>
                                    <div className="gallery-column">
                                        {colArray2}
                                    </div>
                                    <div className="gallery-column">
                                        {colArray3}
                                    </div>
                                </div>
                            </div>

                            <div className="modal" ref={modalRef}>
                                <div className="overlay"></div>
                                <span className="close" onClick={close}><h3>X</h3></span>
                                <div id="gallery-page-modal-image-container" >
                                    {imageHolder}
                                </div>
                            </div>

                        </>
                    )
                    :
                    <div className="main-container"> </div>
            }
        </div>
    )
}

export default GalleryPage;