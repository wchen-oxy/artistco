import React, { useEffect, useRef, useState } from "react";
import { slide as Menu } from 'react-burger-menu'

import IntroPage from "./intro";
import HighlightSection from "./highlight";
import ServicePage from "./service";
import GalleryPage from "./gallery"
import PhilosophyPage from "./philosophy";
import ContactPage from "./contact";
import lax from "lax.js";
import "../styles/index.scss";

import {
  kitchen,
  bathroom,
  wall,
  bathroom12before,
  bathroom12after,
  bathroom14before,
  bathroom14after,
  bedroom1,
  bedroom2,
  bedroom3,
  bedroom4,
  bedroom5,
  bedroom6,
  bathroom1,
  bathroom2,
  kitchen1before,
  kitchen1after,
  interiorwindowbefore,
  interiorWindowafter,
  kitchenblack2tiny,
  kitchenblack1,
  kitchenblack2,
  kitchenblack3,
  kitchenblack4
} from "../styles/image-index";
import AboutPage from "./about";

const heroResidentialImages =
  [
    {
      caption: "Check out Our kitchen lmao",
      url: kitchen
    },
    {
      caption: "This some nice paint",
      url: bathroom
    },
    {
      caption: "whoa this a nice room",
      url: wall
    }
  ];

const galleryResidentalImages = [
  {
    caption: "Kitchen Set",
    thumbnail: kitchen1after,
    data: [
      {
        caption: "before",
        url: kitchen1before
      },
      {
        caption: "after",
        url: kitchen1after
      },
    ]
  },
  {
    caption: "Bathroom Set",
    thumbnail: bathroom14after,
    data: [
      {
        caption: "before",
        url: bathroom12before
      },
      {
        caption: "after",
        url: bathroom12after
      },
      {
        caption: "before",
        url: bathroom14before
      },
      {
        caption: "after",
        url: bathroom14after
      }
    ]
  },
  {
    caption: "Interior Window",
    thumbnail: interiorWindowafter,
    data: [
      {
        caption: "before",
        url: interiorwindowbefore
      },
      {
        caption: "after",
        url: interiorWindowafter
      },
    ]
  },
  {
    caption: "Bedroom Set",
    thumbnail: bedroom1,
    data: [
      {
        caption: "",
        url: kitchenblack1
      },
      {
        caption: "",
        url: bedroom1
      },
      {
        caption: "",
        url: bedroom2
      },
      {
        caption: "",
        url: bedroom3
      },
      {
        caption: "",
        url: bedroom4
      },
      {
        caption: "",
        url: bedroom5
      },
      {
        caption: "",
        url: bedroom6
      }
    ]
  },
  {
    caption: "Bathroom Set",
    thumbnail: bathroom2,
    data: [
      {
        caption: "",
        url: bathroom1
      },
      {
        caption: "",
        url: bathroom2
      },
    ]
  },
  {
    caption: "Modern Kitchen",
    thumbnail: kitchenblack2tiny,
    data: [
      {
        caption: "",
        url: kitchenblack2
      },
      {
        caption: "",
        url: kitchenblack3
      },
      {
        caption: "",
        url: kitchenblack4
      },
    ]

  }

];

export default function Home() {
  const homeRef = useRef(null);
  const residentialRef = useRef(null);
  const businessRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuStateChange = (state) => (
    setMenuOpen(state)
  );
  const closeMenu = () => (
    setMenuOpen(false)
  );

  useEffect(() => {
    lax.setup()
    const updateLax = () => {
      lax.update(window.scrollY)
      window.requestAnimationFrame(updateLax)
    }
    window.requestAnimationFrame(updateLax)
  }, []);

  const scrollTo = (reference) => {
    let blockPos = "start"
    if (reference === aboutRef || reference === contactRef) blockPos = "center";
    reference.current.scrollIntoView({ behavior: 'smooth', block: blockPos })
  };

  const scrollToMobile = (reference) => {
    closeMenu();
    let blockPos = "center"
    if (reference === homeRef) blockPos = "start";
    reference.current.scrollIntoView({ behavior: 'smooth', block: blockPos })
  }

  const showSettings  = (event) => {
    event.preventDefault();
  }

  return (
    <div id="app-container">
      <header>
        <nav id="web-navigation-bar">
          <button onClick={() => scrollTo(homeRef)}><h4>Essential Works</h4></button>
          <button onClick={() => scrollTo(residentialRef)}>Residential Services</button>
          <button onClick={() => scrollTo(businessRef)}>Business Services</button>
          <button onClick={() => scrollTo(aboutRef)}>About Us</button>
          <button onClick={() => scrollTo(contactRef)}>Contact Us</button>
        </nav>
        <div id="mobile-navigation-bar">
        <Menu 
          // outerContainerId={ "mobile-navigation-bar"}
          isOpen={menuOpen}
          onStateChange={(state) => handleMenuStateChange(state.isOpen)}
          >
          <a id="home" className="menu-item" onClick={() => scrollToMobile(homeRef)}>Home</a>
          <a id="residential" className="menu-item" onClick={() => scrollToMobile(residentialRef)}>Residential</a>
          <a id="business" className="menu-item" onClick={() => scrollToMobile(businessRef)}>Business</a>
          <a id="about" className="menu-item" onClick={() => scrollToMobile(aboutRef)}>About</a>
          <a id="contact" className="menu-item" onClick={() => scrollToMobile(contactRef)}>Contact</a>
          {/* <a onClick={showSettings} className="menu-item--small" href="">Settings</a> */}
        </Menu>
        </div>

      </header>

      <IntroPage
        reference={homeRef}
        contactReference={contactRef}
        scrollTo={scrollTo}
      />
      <HighlightSection>

      </HighlightSection>
      <PhilosophyPage />
      <ServicePage
        reference={residentialRef}
        client="Residential"
        orientation="image-left"
        dataArray={heroResidentialImages}
      />
      <GalleryPage
        dataArray={galleryResidentalImages}
      />
      <ServicePage
        reference={businessRef}
        client="Business"
        orientation="image-right"
        dataArray={heroResidentialImages}
      />
      <AboutPage
        reference={aboutRef}
      />
      <ContactPage reference={contactRef} />
      <div className="main-container" id="footer-container">
        <footer><p>Essential Works LLC &copy;</p></footer>
      </div>
    </div>
  )
}