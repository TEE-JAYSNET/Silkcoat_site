import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Mr. Marcus Chuks",
    title: "Mr. Chucks",
    feedback:
      "The service was excellent! My house looks amazing with the new paint The service was excellent! My house looks amazing with the new paint..",
    image: "/src/assets/chucks.jpeg",
    rating: 4,
  },
  {
    name: "Jane Smith",
    title: "Office Manager",
    feedback:
      "Professional and reliable. They did a fantastic job on our office space. Professional and reliable. They did a fantastic job on our office space",
    image: "/src/assets/b1.jpg",
    rating: 4,
  },
  {
    name: "Robert Johnson",
    title: "Industrial Supervisor",
    feedback:
      "Highly recommend their services. The industrial coatings are top-notch. Highly recommend their services. The industrial coatings are top-notch.",
    image: "/src/assets/b4.jpg",
    rating: 4,
  },
];

const Testimonials = () => {
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

  const renderStars = (rating) => {
    return Array(rating)
      .fill(0)
      .map((_, i) => <i key={i} className="fas fa-star text-yellow-400"></i>);
  };

  return (
    <section className="py-10 bg-gray-100 text-gray-800">
      <div className="container mx-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Testimonials
        </h2>
        <p className="mb-12 text-center">
          See what our clients have to say about us.
        </p>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row rounded-lg overflow-hidden p-6"
            >
              <div className="pb-[40px] flex gap-4 w-[450px] md:w-[650px]">
                <img
                  src="https://assets.website-files.com/5fef5619b640934b33c2385e/5ff6a53da27356854576b920_Group%2058.svg"
                  alt=""
                />
                <h2 className="italic mb-4 text-gray-600 text-2xl md:text-3xl items-center">
                  {testimonial.feedback}
                </h2>
              </div>
              {/* image */}
              <div></div>
              <div className=" flex items-center justify-center mb-4 md:mb-0 gap-6">
                <div className="flex gap-4 items-center">
                  <div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-32 h-32 rounded-xl"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-6">
                  <h3 className="text-xl font-bold mb-1">{testimonial.name}</h3>
                  <p className="text-gray-600 mb-2">{testimonial.title}</p>
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
