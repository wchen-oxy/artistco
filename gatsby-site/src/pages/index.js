import React, { useEffect, useRef } from "react";
import IntroPage from "./intro";
import ServicePage from "./service";
import GalleryPage from "./gallery"
import PhilosophyPage from "./philosophy";
import ContactPage from "./contact";
import ImageHolder from "./image";
import lax from "lax.js";
import kitchen from "../../static/constructionWebImages/kitchen1-2.jpg";
import bathroom from "../../static/constructionWebImages/paint2.jpg";
import wall from "../../static/constructionWebImages/wall1.jpg";

//gallery imports
import bathroom12before from "../../static/residential-gallery/bathroom/bath12before.jpg";
import bathroom12after from "../../static/residential-gallery/bathroom/bath12after.jpg";
import bathroom14before from "../../static/residential-gallery/bathroom/bath14before.jpg";
import bathroom14after from "../../static/residential-gallery/bathroom/bath14after.jpg";

import bedroom1 from "../../static/residential-gallery/bedroom/bedroom1.jpg";
import bedroom2 from "../../static/residential-gallery/bedroom/bedroom2.jpg";
import bedroom3 from "../../static/residential-gallery/bedroom/bedroom3.jpg";
import bedroom4 from "../../static/residential-gallery/bedroom/bedroom4.jpg";
import bedroom5 from "../../static/residential-gallery/bedroom/bedroom5.jpg";
import bedroom6 from "../../static/residential-gallery/bedroom/bedroom6.jpg";

import bathroom1 from "../../static/residential-gallery/bathroom/bathroom8.jpg";
import bathroom2 from "../../static/residential-gallery/bathroom/bathroomwall.jpg";

import kitchen1before from "../../static/residential-gallery/kitchen1.1.1Before.jpg"
import kitchen1after from "../../static/residential-gallery/kitchen1.1.1.jpg";

import interiorwindowbefore from "../../static/residential-gallery/interiorWindowBefore.jpg";
import interiorWindowafter from "../../static/residential-gallery/interiorWindowAfter.jpg";

import kitchenblack2tiny from "../../static/residential-gallery/kitchen-black/2-tiny.jpg";
import kitchenblack1 from "../../static/residential-gallery/kitchen-black/1.jpg";
import kitchenblack2 from "../../static/residential-gallery/kitchen-black/2.jpg";
import kitchenblack3 from "../../static/residential-gallery/kitchen-black/3.jpg";
import kitchenblack4 from "../../static/residential-gallery/kitchen-black/4.jpg";

import "../styles/index.scss";

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
    <body>
      <header>
        <nav id="navigation-bar">
          {/* <div className="nav-item-container"> */}
            {/* <a href="#">Home</a> */}
            <button onClick={() => scrollTo(homeRef)}>Home</button>
          {/* </div> */}
          {/* <div className="nav-item-container"> */}
            {/* <a href="#">Residential Service</a> */}
            <button onClick={() => scrollTo(residentialRef)}>Residential Services</button>
          {/* </div> */}
          {/* <div className="nav-item-container"> */}
            {/* <a href="#">Business and Government Service</a> */}
            <button onClick={() => scrollTo(businessRef)}>Business Services</button>
          {/* </div> */}
          {/* <div className="nav-item-container"> */}
            {/* <a href="#">Contact Us</a> */}
            <button onClick={() => scrollTo(contactRef)}>Contact Us</button>
          {/* </div> */}
          {/* <ul><a href="#">HOME</a></ul>
          <ul><a href="#">SERVICES</a></ul>
          <ul><a href="#">CONTACT US</a></ul> */}
        </nav>
      </header>

      <IntroPage reference={homeRef} />
      <PhilosophyPage />
      <ServicePage
        reference={residentialRef}
        client="Residential"
        orientation="image-left"
        dataArray={heroResidentialImages}
        maxHeight={serviceImageMaxHeight}
        maxWidth={serviceImageMaxWidth}

      />
      <GalleryPage
        dataArray={galleryResidentalImages}
        maxHeight={galleryImageMaxHeight}
        maxWidth={galleryImageMaxWidth} />
      {/* <p class="lax" data-lax-preset="spin fadeInOut">Look at me goooooo!</p> */}

      {/* <ImageHolder dataArray={heroResidentialImages} /> */}
      <ServicePage
        reference={businessRef}
        client="Business"
        orientation="image-right"
        dataArray={heroResidentialImages}
        maxHeight={serviceImageMaxHeight}
        maxWidth={serviceImageMaxWidth}
      />
      <ContactPage reference={contactRef} />
    </body>
  )
}