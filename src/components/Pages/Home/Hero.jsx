import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import components.............
import Banner from "../../Banner/Banner";
import ServiceSec from "../../ServiceSec/ServiceSec";
import Fortfolio from "../../Fortfolio/Fortfolio";
import Test from "../../Test";

// Import local images
import slide1 from "../../../assets/marm.png";
import slide2 from "../../../assets/2travert.png";
import slide3 from "../../../assets/3pearly.png";
import slide4 from "../../../assets/4palace.png";
import slide6 from "../../../assets/6pearl.png";
import Testimonials from "../../Testimonials/Testimonials";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [zoomClass, setZoomClass] = useState("");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    beforeChange: (oldIndex, newIndex) => setZoomClass(""),
    afterChange: (index) => {
      setCurrentSlide(index);
      setZoomClass("zoom");
    },
  };

  const slides = [
    {
      image: slide1,
      title: "Marmarito",
      subtitle: "Marble parterned structure, with glass like surface.",
    },
    {
      image: slide2,
      title: "Travertino",
      subtitle: "With its stone-like appearance, modern & vibrant manner.",
    },
    {
      image: slide3,
      title: "Pearly",
      subtitle: "Interior covering with pearl texture, & line/wave patterns.",
    },
    {
      image: slide4,
      title: "Palace",
      subtitle:
        "Offers appearance that is both shiny and matte, with unique patterns.",
    },
    {
      image: slide6,
      title: "Pearl",
      subtitle: "Line and wave patterns with an interior wall pearl texture.",
    },
  ];

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        <Slider {...settings} className="h-full custom-dots">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`relative h-full ${
                index === currentSlide ? zoomClass : ""
              }`}
            >
              <div
                className={`h-screen bg-cover bg-center flex items-center transition-transform duration-700 ease-in-out`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 opacity-50"></div>
                <div className="relative text-right text-white p-6 pr-4 md:mr-12 max-w-screen-md mx-auto bg-black/50">
                  <h1 className="text-2xl md:text-4xl font-bold mb-2 pr-8">
                    {slide.title}
                  </h1>
                  <p className="text-sm md:text-lg italic pr-8">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      <Banner />
      <ServiceSec />
      <Fortfolio />
      <Test />
      <Testimonials />
    </>
  );
};

export default Hero;
