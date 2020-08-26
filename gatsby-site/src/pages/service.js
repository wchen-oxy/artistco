import React, {useState, useEffect} from 'react';
import ImageHolder from "./image";
import '../styles/service.scss';

const ServicePage = (props) => {
    const [isClient, setClient] = useState(false);

    useEffect(() => setClient(true), []);
    // const imageMaxHeight = isClient ? props.dataArray.maxHeight : "400px";
    // const imageMaxWidth = isClient ? props.dataArray.maxWidth : "400px";

    const imageContainer = (
         isClient ? 
            <div id="service-image-container">
            {/* {props.client === "Residential" ? "Residential" : "Business"} */}
            {props.client === "Residential" ?
                <ImageHolder
                    dataArray={props.dataArray}
                /> :
                (
                        <img
                            alt="client image"
                            className="fit-image-to-container"
                            src="https://galio.lt/wp-content/uploads/2020/05/homepage-verslui.jpg" />
                   
                )}

        </div>
        :

        <div id="service-image-container">
            <p> Something went wrong.</p>
            </div>

        
    
    );

    const descriptionContainer = (
        <div id="service-text-container">
            <div id="service-title-container">
                <h2>{props.client}</h2>
            </div>
                <p>
                    Choose a space as uplifting as your new life chapter.
                    A place to clear your mind, to connect, to engage.
                    A place not just to live, but to live well.
                </p>            
        </div>
    );

    return (
        <div id="services-main-container" className="main-container" ref={props.reference}>
            {props.orientation === "image-left" ? imageContainer : descriptionContainer}
            {props.orientation === "image-left" ? descriptionContainer : imageContainer}
        </div>
    )
}


export default ServicePage;