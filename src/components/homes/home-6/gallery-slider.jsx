import React, { useState, useEffect } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const gallery_one = [
  "/assets/img/portfolio/para.png",
  "/assets/img/portfolio/support.png",
  "/assets/img/portfolio/born.png",
  "/assets/img/portfolio/support-2.png",
  "/assets/img/portfolio/born-3.png",
  "/assets/img/portfolio/support-4.png",
];

const gallery_two = [
  "/assets/img/portfolio/support-3.png",
  "/assets/img/portfolio/born-2.png",
  "/assets/img/portfolio/support-4.png",
  "/assets/img/portfolio/born.png",
  "/assets/img/portfolio/born-3.png",
  "/assets/img/portfolio/support-2.png",
];

const setting_1 = {
  spaceBetween: 30,
  speed: 6000,
  slidesPerView: "auto",
  allowTouchMove: false,
};

const setting_2 = {
  spaceBetween: 30,
  speed: 6000,
  slidesPerView: "auto",
  allowTouchMove: false,
  centeredSlides: true,
  centeredSlidesBounds: true,
};

const GallerySlider = () => {
  
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <>
      <div className="tp-mp-sw-slider">


        <div className="container-fluid gx-0">

          <Swiper
            {...setting_1}
            loop={isLoop}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              reverseDirection: false
            }}
            modules={[Autoplay]}
            className="swiper-container tp-gl-silder"
          >
            {gallery_one.map((item, i) => (
              <SwiperSlide key={i} className="tp-mp-slider-item">
                <img src={item} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>



        <div className="container-fluid">

          <Swiper
            {...setting_2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            
            modules={[Autoplay]}
            className="swiper-container tp-gl-silder-2"
          >
            {gallery_two.map((item, i) => (
              <SwiperSlide key={i} className="tp-mp-slider-item">
                <img src={item} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
          
        </div>



      </div>
    </>
  );
};

export default GallerySlider;
