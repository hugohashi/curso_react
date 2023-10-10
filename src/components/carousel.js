import "./carousel.css"
import {register} from "swiper/element/bundle";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {Swiper, SwiperSlide} from "swiper/react";

import Image1 from "./imagens/projeto1.jpeg";
import Image2 from "./imagens/projeto2.jpeg";
import Image3 from "./imagens/projeto3.jpeg";

register()

const Carousel = () => {
  const images = [Image1, Image2, Image3];

  return (
    <div className="div">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        className="swiper" >

        {images.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img src={imageUrl} alt={`Image ${index + 1}`} className="image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel
