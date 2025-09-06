import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderValue = () => {
  // Array me image + text ek sath rakha
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1170&auto=format&fit=crop",
      title: "Build Modern Websites",
      desc: "Create fast and responsive websites with React & Tailwind CSS",
      btn: "Get Started",
    },
    {
      img: "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=80&w=1198&auto=format&fit=crop",
      title: "Clean & Reusable Code",
      desc: "Write efficient, maintainable and scalable applications",
      btn: "Learn More",
    },
    {
      img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop",
      title: "Beautiful UI/UX",
      desc: "Deliver stunning user experiences with modern design principles",
      btn: "Explore",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="relative h-[500px]">
      <Slider {...settings} className="h-full">
         
        {slides.map((slide, index) => (
            <div key={index} className="h-[500px]">
            <div
              className="h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.img})` }}
              >
              {/* Overlay */}
              <div className="bg-black/50 w-full h-full flex items-center justify-center">
                {/* Text content */}
                <div className="text-center text-white px-4">
                  <h1 className="text-4xl md:text-6xl font-bold">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-lg md:text-2xl">{slide.desc}</p>
                  <button className="mt-6 bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                    {slide.btn}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
