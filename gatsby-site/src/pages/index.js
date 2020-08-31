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
  phoneCall,
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
  const dropDownButtonRef = useRef(null);
  const dropDownMenuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [dropDownMenuRef]);

  const handleClickOutside = (event) => {
    if (dropDownMenuRef.current.style.display === "block" && !dropDownMenuRef.current.contains(event.target)
   && !dropDownButtonRef.current.contains(event.target)) {
      console.log("Block launched");
      setDropdownOpen(false);
      dropDownMenuRef.current.style.display = "none";
    }
  }

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

  const showSettings = (event) => {
    event.preventDefault();
  }

  const toggleDropdown = () => {
    // const dropdownOpen = dropdownRef.current.style.display;
    // console.log(dropdownRef.current.style.display);
    if (!dropdownOpen) {
      console.log('toggle');
      dropDownMenuRef.current.style.display = "block";
    }
    else{
      console.log("dropdown block");
      dropDownMenuRef.current.style.display = "none";
    }
    setDropdownOpen(!dropdownOpen);
  }
  return (
    <div id="app-container">
      <header>
        <nav id="web-navigation-bar">
          <button onClick={() => scrollTo(homeRef)}><h4>Essential Works</h4></button>
          <div className="dropdown">
            <button onClick={toggleDropdown} className="dropbtn" ref={dropDownButtonRef}>Services</button>
            <div id="myDropdown" className="dropdown-content" ref={dropDownMenuRef}>
            <button onClick={() => scrollTo(residentialRef)}>Residential Services</button>
          <button onClick={() => scrollTo(businessRef)}>Business Services</button>
            </div>
          </div>
          {/* <button onClick={() => scrollTo(residentialRef)}>Residential Services</button>
          <button onClick={() => scrollTo(businessRef)}>Business Services</button> */}
          <button onClick={() => scrollTo(aboutRef)}>About Us</button>
          <button onClick={() => scrollTo(aboutRef)}>Get a Quote</button>
          <button onClick={() => scrollTo(contactRef)}>Contact Us</button>
          <a id="phone-link" href="tel:347-494-1802"><img id="phone-image" src={phoneCall} />(347) 494-1802</a>

          {/* <div className="phone-item-container" >
              <a href="tel:123-456-7890">123-456-7890</a>
            </div> */}

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
          <div className="phone-item-container" >
            <a id="phone-link" href="tel:347-494-1802"><img id="phone-image" src={phoneCall} />(347) 494-1802</a>
          </div>

          {/* <div id="mobile-phone" >
        <img id="phone-image" src={phoneCall} />
        </div> */}

        </div>

      </header>

      <IntroPage
        reference={homeRef}
        quoteReference={contactRef}
        scrollTo={scrollTo}
      />
      {/* <HighlightSection>

      </HighlightSection> */}
      <PhilosophyPage />
      <ServicePage
        reference={residentialRef}
        quoteReference={aboutRef}
        client="Residential"
        orientation="image-left"
        dataArray={heroResidentialImages}
        scrollTo={scrollTo}
      />
      <GalleryPage
        dataArray={galleryResidentalImages}
      />
      <ServicePage
        reference={businessRef}
        quoteReference={aboutRef}
        client="Business"
        orientation="image-right"
        dataArray={heroResidentialImages}
        scrollTo={scrollTo}

      />
      <div className="main-container">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeq0ywW0K1WxkKr3vAv-mhM4xmqBkioCxE1XM1Jjf3xZ129gA/viewform?embedded=true" height="1190" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>      
        </div>
      <AboutPage
        reference={aboutRef}
      />
      <ContactPage reference={contactRef} />
      <div className="main-container" id="footer-container">
        <footer><p>Essential Works, LLC &copy;</p></footer>
      </div>
    </div>
  )
}