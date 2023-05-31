import React from "react";
import Image from "next/image";
import Title from "./UI/Title";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    arrows: false,
    appendDot: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
  };
  return (
    <div className="container h-screen mx-auto -mt-[85px]">
      <div className="absolute top-0 left-0  w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero.jpg"
            alt="hero"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="mt-48 text-white flex flex-col items-start gap-y-9">
            <Title addClass="text-5xl">Coffee Shop</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              temporibus autem sequi impedit consectetur beatae! Commodi libero
              fugiat possimus velit!
            </p>
            <button className="btn">Şipariş Et</button>
          </div>
        </div>
        <div>
          <div className=" relative mt-48 text-white flex flex-col items-start gap-y-9">
            <Title addClass="text-5xl">Coffee Shop-2</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              temporibus autem sequi impedit consectetur beatae! Commodi libero
              fugiat possimus velit!
            </p>
            <button className="btn">Şipariş Et</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
