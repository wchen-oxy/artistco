import React, { useEffect, useRef } from "react";
import IntroPage from "./intro";
import ServicePage from "./service";
import GalleryPage from "./gallery"
import PhilosophyPage from "./philosophy";
import ContactPage from "./contact";
import ImageHolder from "./image";
import lax from "lax.js";
import kitchen1 from "../../static/constructionWebImages/kitchen1-2.jpg";
import bathroom1 from "../../static/constructionWebImages/paint2.jpg";
import wall1 from "../../static/constructionWebImages/wall1.jpg";


import "../styles/index.scss";

const heroResidentialImages =
  [
    {
    caption: "Check out Our kitchen ay",
    url: kitchen1
  },
  {
    caption: "",
    url: bathroom1
  },
  {
    caption: "",
    url: wall1
  }
  ];


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
}




export default function Home() {
  const homeRef = useRef(null);
  const residentialRef = useRef(null);
  const businessRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    lax.setup() // init
  
    const updateLax = () => {
      lax.update(window.scrollY)
      window.requestAnimationFrame(updateLax)
    }
  
    window.requestAnimationFrame(updateLax)
    }, []);

  const scrollTo = (reference) => reference.current.scrollIntoView({ behavior: 'smooth' });
  console.log(homeRef);
  return (
    <body>
      <header>
        <nav id="navigation-bar">
          <div className="nav-item-container">
          {/* <a href="#">Home</a> */}
          <button onClick={() => scrollTo(homeRef)}>Home</button>
          </div>
          <div className="nav-item-container">
          {/* <a href="#">Residential Service</a> */}
          <button onClick={() => scrollTo(residentialRef)}>Residential Services</button>
          </div>
          <div className="nav-item-container">
          {/* <a href="#">Business and Government Service</a> */}
          <button onClick={() => scrollTo(businessRef)}>Business Services</button>
          </div>
          <div className="nav-item-container">
          {/* <a href="#">Contact Us</a> */}
          <button onClick={() => scrollTo(contactRef)}>Contact Us</button>
          </div>
          {/* <ul><a href="#">HOME</a></ul>
          <ul><a href="#">SERVICES</a></ul>
          <ul><a href="#">CONTACT US</a></ul> */}
        </nav>
      </header>
          
        <IntroPage reference={homeRef}/>
        <PhilosophyPage />
        <ServicePage reference={residentialRef} client="Residential" orientation="image-left" dataArray={heroResidentialImages}/>
        <GalleryPage />
        {/* <p class="lax" data-lax-preset="spin fadeInOut">Look at me goooooo!</p> */}

        {/* <ImageHolder dataArray={heroResidentialImages} /> */}
        <ServicePage reference={businessRef} client="Business" orientation="image-right" dataArray={heroResidentialImages}/>
        <ContactPage reference={contactRef} />
      </body>
  )
}