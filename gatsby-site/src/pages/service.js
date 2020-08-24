import React, {useState, useEffect} from 'react';
import ImageHolder from "./image";
import '../styles/service.scss';

const ServicePage = (props) => {
    const [isClient, setClient] = useState(false);

    useEffect(() => setClient(true), []);
    const imageMaxHeight = isClient ? props.dataArray.maxHeight : "400px";
    const imageMaxWidth = isClient ? props.dataArray.maxWidth : "400px";

    const imageContainer = (
         isClient ? 
            <div id="service-image-container" style={{maxHeight: imageMaxHeight, maxWidth: imageMaxWidth}}>
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
        :

        <div id="service-image-container" style={{maxHeight: imageMaxHeight, maxWidth: imageMaxWidth}}>
            <p> Something went wrong.</p>
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