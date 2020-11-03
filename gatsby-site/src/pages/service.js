import React, { useState, useEffect } from 'react';
import ImageHolder from "./image";
import { useMediaQuery } from 'react-responsive';
import '../styles/service.scss';

const BUSINESS_HERO_TEXT = (
    <p>
        As a business owner your priorities likely include fast and reliable
        completion of your project in order to maximize practicality and client
        comfort and retention. Our team will work around your schedule to get your
        business going as soon as possible with minimal disruption. We are experts
        at customizing solutions so you can better serve your patrons.
        Give us a call to learn more.
    </p>
);
const RESIDENTIAL_HERO_TEXT = (

    <div
    // className="side-image lax"
    // data-lax-opacity="300 0, 500 1"
    >
        <p>
            We undertand that your home improvement project is an investment in
            maximizing comfort and well being. You want your space to be uplifting.
            A place to connect and to engage. A place not just to live but to live well.
        </p>
        <br />
        <p>
            Whether your project is currently only an idea or  you are ready to start as
            soon as possible. We can help you bring your idea from conception to completion.
            Our services include:
        </p>
        <br />
        <ul>
            <li>Kitchen cabinets</li>

            <li>New kitchen</li>

            <li>New bathroom</li>

            <li>Drywall repair</li>

            <li>Drywall installation</li>

            <li>Tape and plaster</li>

            <li>Wall prep</li>

            <li>Paint</li>

            <li>Trim and molding</li>

            <li>Plumbing installation and repairs</li>

            <li>Electrical installation and repairs</li>

            <li>Tile and masonry</li>

            <li>Carpentry and framing</li>

            <li>Basement and attic</li>

            <li>Roofing</li>

            <li>Flooring</li>

            <li>Home Repairs</li>

            <li>New cabinet doors</li>

            <li>Exterior siding and paint</li>

            <li>Demolition and trash removal</li>
        </ul>
    </div>
);

const ServicePage = (props) => {
    const [isClient, setClient] = useState(false);
    const [offset, setOffset] = useState(0)
    const isSmallScreen = useMediaQuery({
        query: '(max-width: 899px)'
    });
    useEffect(() => {
        setClient(true);
        function handleScroll() {
            setOffset(window.pageYOffset)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);

    const image = (
        <div id="main-page-service-image-container">
            {/* {props.client === "Residential" ? "Residential" : "Business"} */}
            {props.client === "Residential" ?
                <div
                    id="residential-image-holder"
                    style={
                        !isSmallScreen ? {
                            transform: `translateY(${(offset * 0.32) - 300}px)`,
                        } : { marginBottom: `20px` }}
                >
                    <ImageHolder
                        dataArray={props.dataArray}
                        isModal={false}
                    />
                </div>
                :
                (<img
                    id="service-business-img"
                    alt="client image"
                    className="fit-image-to-container"
                    src="https://galio.lt/wp-content/uploads/2020/05/homepage-verslui.jpg" />
                )}
        </div>);
    const imageContainer = (
        isClient ? image : (
            <div id="service-image-container">
            </div>)
    );

    const descriptionContainer = (
        <div id="service-text-container">
            <div id="service-title-container">
                <h2>{props.client}</h2>
            </div>
            {props.client === "Residential" ? RESIDENTIAL_HERO_TEXT : BUSINESS_HERO_TEXT}
            <div id="service-quote-container" className="quote-button-container">
                <a id="service-quote-button" className="quote-button" href="https://forms.gle/idoyRoFJoFWhJACy7" target="_blank">Get a Quote</a>
            </div>
        </div>
    );

    return (
        <div id={!isSmallScreen && props.client === "Residential" ? "residential-container" : "business-container" } className="main-container services-main-container" ref={props.reference}>
            {isSmallScreen && props.client !== "Residential" ?
                <>
                    {props.orientation === "image-left" ? descriptionContainer : imageContainer}
                    {props.orientation === "image-left" ? imageContainer : descriptionContainer}
                </>
                :
                <>
                    {props.orientation === "image-left" ? imageContainer : descriptionContainer}
                    {props.orientation === "image-left" ? descriptionContainer : imageContainer}
                </>
            }
        </div>
    )
}


export default ServicePage;