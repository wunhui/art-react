import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from 'react';

function Collection() {
    return (
      <section className="collec">
          <div className="collec_utill">
              <h2>소장품</h2>
              <p>
                  모두보기&gt;
              </p>
          </div>
        <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        >
        <SwiperSlide>
        <figure>
            <img
            src={`${process.env.PUBLIC_URL}/public_assets/collec01.jpeg`}
            alt='place'/>  
        </figure>
        <div className="collec_text">
            <h1>국립현대미술관 소장품300</h1>
            <p>
                1910년대~1920년대
            </p>
        </div> 
        </SwiperSlide>
        <SwiperSlide>
        <figure>
            <img
            src={`${process.env.PUBLIC_URL}/public_assets/collec02.jpeg`}
            alt='place'/>  
        </figure>
        <div className="collec_text">
            <h1>국립현대미술관 소장품300</h1>
            <p>
                1930년대~1940년대
            </p>
        </div> 
        </SwiperSlide>
        <SwiperSlide>
        <figure>
            <img
            src={`${process.env.PUBLIC_URL}/public_assets/collec03.jpeg`}
            alt='place'/>  
        </figure>
        <div className="collec_text">
            <h1>국립현대미술관 소장품300</h1>
            <p>
                1950년대~1960년대
            </p>
        </div> 
        </SwiperSlide>
        <SwiperSlide>
        <figure>
            <img
            src={`${process.env.PUBLIC_URL}/public_assets/collec04.jpeg`}
            alt='place'/>  
        </figure>
        <div className="collec_text">
            <h1>국립현대미술관 소장품300</h1>
            <p>
                1970년대~1980년대
            </p>
        </div> 
        </SwiperSlide>
      </Swiper>
      </section>
    );
  }
  
  export default Collection;