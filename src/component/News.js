import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from 'react';

function News() {
    return (
      <div className="News">
          <div className="News_utill">
              <h2>MMCA 뉴스레터</h2>
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
            src={`${process.env.PUBLIC_URL}/public_assets/new01.png`}
            alt='place'/>  
        </figure>
        <div className="News_text">
            <h1>전시 포커스</h1>
            <p>
                기획자들이 말하다 '2022 전시가 기대되는 이유'
            </p>
        </div> 
        </SwiperSlide>
        <SwiperSlide>
        <figure>
            <img
            src={`${process.env.PUBLIC_URL}/public_assets/new02.png`}
            alt='place'/>  
        </figure>
        <div className="News_text">
            <h1>미술관 플러스</h1>
            <p>
                &lt;&lt;MMCA 현대차 시리즈 2022&gt;&gt; 최우람 작가 선정
            </p>
        </div> 
        </SwiperSlide>
        <SwiperSlide>
        <figure>
            <img
            src={`${process.env.PUBLIC_URL}/public_assets/new03.png`}
            alt='place'/>  
        </figure>
        <div className="News_text">
            <h1>작가 인터뷰</h1>
            <p>
                "고독한 길을 지치지 않고 걸어가는 것, 예술" 천대광 작가
            </p>
        </div> 
        </SwiperSlide>
        <SwiperSlide>
        <figure>
            <img
            src={`${process.env.PUBLIC_URL}/public_assets/new04.png`}
            alt='place'/>  
        </figure>
        <div className="News_text">
            <h1>미술관 플러스</h1>
            <p>
                차세대 창작자를 찾아서, &lt;&lt;프로젝트 해시태그 2022&gt;&gt; 공모
            </p>
        </div> 
        </SwiperSlide>
      </Swiper>
      </div>
    );
  }
  
  export default News;