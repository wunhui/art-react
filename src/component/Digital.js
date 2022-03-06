import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from 'react';

function Digital() {
    return (
      <section className="Digital">
          <div className="Digital_utill">
              <h2>디지털미술관</h2>
              <p>
                  모두보기&gt;
              </p>
          </div>
        <Swiper
        slidesPerView={"auto"}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        >
        <SwiperSlide>
        <figure>
            <img
            src={`${process.env.PUBLIC_URL}/public_assets/digital02.png`}
            alt='place'/>
            <figcaption>MMCA TV</figcaption>
        </figure>
        <div className="Digital_text">
            <h1>백락종&lt;무제&gt; 보전처리 | 공사립미술관 보존지원 사업</h1>
        </div> 
        </SwiperSlide>

        <SwiperSlide>
        <figure>
            <img
            src={`${process.env.PUBLIC_URL}/public_assets/digital01.png`}
            alt='place'/>
            <figcaption>MMCA TV</figcaption>
        </figure>
        <div className="Digital_text">
            <h1>국립현대미술관 큐레이터의 설명으로 보는 &lt;&lt;대지의 시간&gt;&gt;</h1>
        </div> 
        </SwiperSlide>

        <SwiperSlide>
        <figure>
            <img
            src={`${process.env.PUBLIC_URL}/public_assets/digital03.png`}
            alt='place'/>
            <figcaption>MMCA TV</figcaption>
        </figure>
        <div className="Digital_text">
            <h1>&lt;&lt;젊은 모색 2021&gt;&gt;VR 관람</h1>
        </div> 
        </SwiperSlide>
      </Swiper>
      </section>
    );
  }
  
  export default Digital;
