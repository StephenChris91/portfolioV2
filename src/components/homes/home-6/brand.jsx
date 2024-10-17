import React, {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';



// brands_data
const brands_data = [
    {
      id: 1,
      img: "/assets/img/brand/react.png",
    },
    {
      id: 2,
      img: "/assets/img/brand/express.png",
    },
    {
      id: 3,
      img: "/assets/img/brand/mongodb.png",
    },
    {
      id: 4,
      img: "/assets/img/brand/nodejs.png",
    },
    {
      id: 5,
      img: "/assets/img/brand/tailwind.png",
    },
    {
      id: 6,
      img: "/assets/img/brand/nextjs.png",
    },
    
  ];


const setting = {
    slidesPerView: 5,
    spaceBetween: 30,
    // loop: true,
    breakpoints: {
        '1200': {
            slidesPerView: 5,
        },
        '992': {
            slidesPerView: 3,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    },
}

const Brand = () => {

    const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);



    return (
        <>
           <div className="mp-brand-area wow tpfadeUp">
            <div className="container">
                <Swiper 
                {...setting}
                loop={isLoop}
                className="mp-brand-slider-active swiper-container">
                    {
                        brands_data.map((item, i)  => 
                        <SwiperSlide key={i} className="tp-it-brand-item swiper-slide">
                            <img src={item.img} alt="tech-stack" />
                        </SwiperSlide>
                        
                        )
                    }

                </Swiper>
            </div>
            {/* <div className="mp-circle-bnt-wrapper pt-120 pb-60">
                <div className="mp-circle-img text-center">
                    <img src="/logoDark.png" alt="logo-dark" />
                </div>
            </div> */}
        </div> 
        </>
    );
};

export default Brand;