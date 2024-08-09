import { useState } from "react";
import Image from "../assets/b1.jpg";
import Image1 from "../assets/city.jpeg";
import Image2 from "../assets/b4.jpg";

// Carousel /Slick........
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Test = () => {
  const Testimonial_data = [
    {
      img: Image,
      content_text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis recusandae minima nostrum vero tempore? Amet, iste itaque? Dolor, nulla. Sint pariatur quibusdam expedita alias molestias.",
      testimonial_name: "Jenifer Musk",
      text_block: "Project Manager@ Inc. Paint",
    },
    {
      img: Image1,
      content_text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis recusandae minima nostrum vero tempore? Amet, iste itaque? Dolor, nulla. Sint pariatur quibusdam expedita alias molestias.",
      testimonial_name: "John Okafor",
      text_block: "CEO@ Inc. Paint",
    },
    {
      img: Image2,
      content_text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis recusandae minima nostrum vero tempore? Amet, iste itaque? Dolor, nulla. Sint pariatur quibusdam expedita alias molestias.",
      testimonial_name: "Jenifer Musk",
      text_block: "General Manager@ Paint",
    },
  ];

  const [current, setCurrent] = useState(0);
  const lenght = Testimonial_data.lenght;

  const previous = () => {
    setCurrent(current === 0 ? lenght - 1 : current - 1);
  };
  const next = () => {
    setCurrent(current === lenght - 1 ? 0 : current + 1);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="flex pt-10 pb-10 text-justify justify-center items-center bg-black">
      <div className="w-[800px]">
        {/* <Slider {...settings}> */}
        {Testimonial_data.map(
          (item, index) =>
            index === current && (
              <div key={index}>
                <div className="pb-[40px] flex items-start gap-4">
                  <img
                    src="https://assets.website-files.com/5fef5619b640934b33c2385e/5ff6a53da27356854576b920_Group%2058.svg"
                    alt=""
                  />
                  <h2 className="text-gray-600 text-2xl font-bold">
                    {item.content_text}
                  </h2>
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex gap-4 items-center">
                    <div className="">
                      <img
                        src={item.img}
                        alt=""
                        className="w-32 h-32 rounded-full border-2 border-pink-600 p-1"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <h6 className="text-white">{item.testimonial_name}</h6>
                      <span className="text-white">{item.text_block}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div onClick={previous} className="bg-gray-800 p-6">
                      <img
                        src="https://assets.website-files.com/5fef5619b640934b33c2385e/5fef584ac8595f0e43b2b567_Vector-1.svg"
                        alt=""
                      />
                    </div>
                    <div onClick={next} className="bg-gray-800 p-6">
                      <img
                        src="https://assets.website-files.com/5fef5619b640934b33c2385e/5fef584a5ceaed4f77de60cb_Vector.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
        {/* </Slider> */}
      </div>
    </section>
  );
};

export default Test;
