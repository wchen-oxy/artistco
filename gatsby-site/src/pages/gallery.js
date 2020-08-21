import React, {useRef} from 'react';
import ImageHolder from "./image";

import '../styles/gallery.scss';


const GalleryPage = (props) => {
    const modalRef = useRef(null);
    const openModal = () => {

        modalRef.current.style.display = "block";
        document.body.style.overflow = "hidden";

    }
    const closeModal = () => {
        modalRef.current.style.display = "none";
        document.body.style.overflow = "visible";

    }
    const modal = "l";
    return (
        <>
            <div className="main-container" id="gallery-container">
                <button onClick={openModal}>Click me Motherfucker</button>
            </div>
            <div className="modal" ref={modalRef}>
                <div className="overlay"></div>
                <span className="close" onClick={closeModal}>X</span>
            </div>
        </>
    )
}

export default GalleryPage;