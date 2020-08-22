import React from 'react';
import ImageHolder from "./image";
import '../styles/service.scss';

// const businessImage = (
//     <img
//         alt="client image"
//         className="fit-image-to-container"
//         src={props.client === "Residential" ? residential : "https://galio.lt/wp-content/uploads/2020/05/homepage-verslui.jpg"} />);

const ServicePage = (props) => {
    const style = { maxHeight: props.maxHeight, maxWidth: props.maxWidth }
    const imageContainer = (
        <div id="service-image-container" style={style}>
            {/* {props.client === "Residential" ? "Residential" : "Business"} */}
            {props.client === "Residential" ?
                <ImageHolder
                    dataArray={props.dataArray}
                    maxHeight={props.maxHeight}
                    maxWidth={props.maxWidth}
                /> :
                (
                    <div id="temp-business-image-container">
                        <img
                            id="business-image"
                            alt="client image"
                            className="fit-image-to-container"
                            src="https://galio.lt/wp-content/uploads/2020/05/homepage-verslui.jpg" />
                    </div>
                )}

        </div>
    );

    const descriptionContainer = (
        <div className="service-text-container">
            <div id="service-title-container">
                <h2 className="title">{props.client}</h2>
            </div>
           
                <p id="service-description-text">
                    Choose a space as uplifting as your new life chapter.
                    A place to clear your mind, to connect, to engage.
                    A place not just to live, but to live well.
                </p>
            
            {/* <button className="centered-button">See our work so far!</button> */}
        </div>
    );

    return (
        <div className="services-main-container main-container" ref={props.reference}>
            {props.orientation === "image-left" ? imageContainer : descriptionContainer}
            {props.orientation === "image-left" ? descriptionContainer : imageContainer}
        </div>
    )
}


export default ServicePage;