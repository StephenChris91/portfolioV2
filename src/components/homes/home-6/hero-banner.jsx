import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const hero_slider = [
    {
        id: 1,
        text: "Stephen Chris",
        icon: "-"
    },
    {
        id: 2,
        text: "Frontend Developer",
        icon: "-"
    },
    {
        id: 3,
        text: "Based in UK.",
        icon: "-"
    },
]

const setting = {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 30000,
    slidesPerView: 1,

    loop: true,
    freeMode: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
}



const HeroBanner = () => {
    return (
        <>
            <div className="mp-hero-area theme-bg-4 pt-60 p-relative fix">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div id='banner-text' className="text-center summary">
                                {/* <img src="/assets/img/hero/mp-hero.png" alt="theme-pure" /> */}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='summary'>
                    {/* <h3 className="mb-hero-title white-border wow tpfadeUp">Freelance</h3> */}
                    <h3 className="mb-hero-title wow tpfadeUp" data-wow-delay=".3s">Hi👋 my name is <span>Stephen Chris</span>, a skilled Frontend Software Developer with expertise in creating user-friendly and visually appealing web applications. With a strong command of React, NextJS, and JavaScript, Stephen excels at translating designs into seamless and interactive user interfaces that enhance the overall user experience.</h3>
                </div>

                <div className="mp-marque-slider">
                    <Swiper
                        {...setting}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        className="swiper-container swiper--top pt-80 pb-120">

                        {
                            hero_slider.map((item, i) =>
                                <SwiperSlide key={i} className="swiper-slide">
                                    <p>{item.text} <span> {item.icon} </span></p>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default HeroBanner;