import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assest/images/slider-badag.jpg";
import slider2 from "../assest/images/slider-badging.jpg";
import slider3 from "../assest/images/slider-scale.jpg";
import slider4 from "../assest/images/slider-scales.jpg";

const SliderImg = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const allSlide = [slider1, slider2, slider3, slider4];
  const slides = allSlide.map((slide, id) => {
    return (
      <div className="slide" key={id}>
        <img src={slide} alt="slide" className=" rounded" />
      </div>
    );
  });

  return (
    <div className=" slide-container   mt-[70px] ">
      <Slider {...settings} className="shadow-xl  ">
        {slides}
      </Slider>
    </div>
  );
};

export default SliderImg;
