import React, { useEffect, useRef } from "react";
import IntroPage from "./intro";
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

const serviceImageMaxHeight = "450px";
const serviceImageMaxWidth = "700px";
const galleryImageMaxHeight = "600px";
const galleryImageMaxWidth = "800px";


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
  return (
    <>
      <header>
        <nav id="navigation-bar">
          <button onClick={() => scrollTo(homeRef)}>Home</button>
          <button onClick={() => scrollTo(residentialRef)}>Residential Services</button>
          <button onClick={() => scrollTo(businessRef)}>Business Services</button>
          <button onClick={() => scrollTo(contactRef)}>Contact Us</button>
        </nav>
      </header>
      <IntroPage
        reference={homeRef}
      />
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
      <ContactPage reference={contactRef} />
      <div className="main-container" id="footer-container">
        <footer><p>Essential Works LLC &copy;</p></footer>
      </div>
    </>
  )
}