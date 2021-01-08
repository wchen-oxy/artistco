import React, { useEffect, useRef, useState } from "react";
import { slide as Menu } from 'react-burger-menu'
import IntroPage from "./intro";
import ServicePage from "./service";
import GalleryPage from "./gallery"
import ContactPage from "./contact";
import AboutPage from "./about";
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

const heroResidentialImages =
  [
    {
      caption: "",
      url: kitchen
    },
    {
      caption: "",
      url: bathroom
    },
    {
      caption: "",
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

  const scrollTo = (reference, fromStartFlag, isMobile) => {
    let blockPos = "center";
    if (isMobile) closeMenu();
    if (fromStartFlag) blockPos = "start";
    reference.current.scrollIntoView({ behavior: 'smooth', block: blockPos })
  }

  const toggleDropdown = () => {
    if (!dropdownOpen) {
      dropDownMenuRef.current.style.display = "block";
    }
    else {
      console.log("dropdown block");
      dropDownMenuRef.current.style.display = "none";
    }
    setDropdownOpen(!dropdownOpen);
  }
  return (
    <div id="app-container">
      <main>
        <header>
          <nav id="web-navigation-bar">
            <button onClick={() => scrollTo(homeRef, true)}>
              <div className="logo-container">
                <h4 className="logo-text" id="thin-logo">Essential</h4><h4 className="logo-text" id="bold-logo">Works</h4>
              </div>
            </button>
            <div className="dropdown">
              <button onClick={toggleDropdown} className="dropbtn" ref={dropDownButtonRef}>Services</button>
              <div id="myDropdown" className="dropdown-content" ref={dropDownMenuRef}>
                <button onClick={() => scrollTo(residentialRef, true)}>Residential Services</button>
                <button onClick={() => scrollTo(businessRef, true)}>Business Services</button>
              </div>
            </div>
            <button onClick={() => scrollTo(aboutRef, false)}>About Us</button>
            <a id="quote-url-link" href="https://forms.gle/idoyRoFJoFWhJACy7" target="_blank" ><p>Get a Quote</p></a>
            <button onClick={() => scrollTo(contactRef, false)}>Contact Us</button>
            <a id="phone-link" href="tel:347-494-1802"><img id="phone-image" src={phoneCall} />(347) 494-1802</a>
          </nav>
          <div id="mobile-navigation-bar">
            <Menu
              isOpen={menuOpen}
              onStateChange={(state) => handleMenuStateChange(state.isOpen)}
            >
              <a id="home" className="menu-item" onClick={() => scrollTo(homeRef, true, true)}>Home</a>
              <a id="residential" className="menu-item" onClick={() => scrollTo(residentialRef, false, true)}>Residential</a>
              <a id="business" className="menu-item" onClick={() => scrollTo(businessRef, false, true)}>Business</a>
              <a id="about" className="menu-item" onClick={() => scrollTo(aboutRef, false, true)}>About</a>
              <a id="form-link" className="menu-item" href="https://forms.gle/idoyRoFJoFWhJACy7" target="_blank" >Get a Quote</a>
              <a id="contact" className="menu-item" onClick={() => {
                console.log("contact hit");
                return scrollTo(contactRef, false, true);
              }}>Contact</a>

            </Menu>
            <div className="phone-item-container" >
              <a id="phone-link" href="tel:347-494-1802"><img id="phone-image" src={phoneCall} />(347) 494-1802</a>
            </div>
          </div>

        </header>

        <IntroPage
          reference={homeRef}
        />
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
        <AboutPage
          reference={aboutRef}
        />
        <ContactPage reference={contactRef} />
        <div className="main-container" id="footer-container">
          <footer><p>Essential Works, LLC &copy;</p></footer>
        </div>
      </main>
    </div>
  )
}