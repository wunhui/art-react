import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';
import React from 'react';

function Exhibition() {
    return (
      <section className="exbi">
          <div className="exbi_utill">
              <h2>전시</h2>
              <ul className="exbi_gnb">
                  <li>
                      <Link to="/">
                      전체
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                      서울
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                      과천
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                      덕수궁
                      </Link>
                    </li> 
                    <li>
                      <Link to="/">
                      청주
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                      어린이미술관
                      </Link>
                    </li>
              </ul>
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
            src={`${process.env.PUBLIC_URL}/public_assets/exbi01.png`}
            alt='place'/>  
            <figcaption>청주</figcaption>
        </figure>
        <div className="exbi_text">
            <h1>MMCA 국제미술 소장품 기획전 «미술로, 세계로»</h1>
            <p>
                2022-01-20~2022-06-12
            </p>
            <p className="icon">
                <span>
                <img src={`${process.env.PUBLIC_URL}/public_assets/icon_headphon.svg`}
                alt='place'/>     
                </span>
                오디오가이드
            </p>
        </div> 
        </SwiperSlide>
        <SwiperSlide>
        <figure>
            <img
            src={`${process.env.PUBLIC_URL}/public_assets/exbi02.png`}
            alt='place'/>  
            <figcaption>과천</figcaption>
        </figure>
        <div className="exbi_text">
            <h1>
                MMCA 과천프로젝트 2021: 예술버스쉼터_쓸모없는 건축과 유용한 조각에 대하여
            </h1>
            <p>
                2021-12-15~2022-11-20
            </p>
        </div> 
        </SwiperSlide>
        <SwiperSlide>
        <figure>
            <img
            src={`${process.env.PUBLIC_URL}/public_assets/exbi03.png`}
            alt='place'/>  
            <figcaption>서울</figcaption>
        </figure>
        <div className="exbi_text">
            <h1>
                아이 웨이웨이
            </h1>
            <p>
                2021-12-11~2022-04-17
            </p>
            <p className="icon">
                <span>
                <img src={`${process.env.PUBLIC_URL}/public_assets/icon_headphon.svg`}
                alt='place'/>     
                </span>
                오디오가이드
            </p>
        </div> 
        </SwiperSlide>
        <SwiperSlide>
        <figure>
            <img
            src={`${process.env.PUBLIC_URL}/public_assets/exbi04.png`}
            alt='place'/>  
            <figcaption>과천</figcaption>
        </figure>
        <div className="exbi_text">
            <h1>대지의 시간</h1>
            <p>
                2021-11-25~2022-03-27
            </p>
            <p className="icon">
                <span>
                <img src={`${process.env.PUBLIC_URL}/public_assets/icon_headphon.svg`}
                alt='place'/>     
                </span>
                오디오가이드
            </p>
        </div> 
        </SwiperSlide>
        <SwiperSlide>
        <figure>
            <img
            src={`${process.env.PUBLIC_URL}/public_assets/exbi05.png`}
            alt='place'/>  
            <figcaption>덕수궁</figcaption>
        </figure>
        <div className="exbi_text">
           <h1>
               박수근: 봄을 기다리는 나목
           </h1>
           <p>
                2021-11-11~2022-03-01
            </p>
            <p className="icon">
                <span>
                <img src={`${process.env.PUBLIC_URL}/public_assets/icon_headphon.svg`}
                alt='place'/>     
                </span>
                오디오가이드
            </p>
        </div> 
        </SwiperSlide>
        <SwiperSlide>
        <figure>
            <img
            src={`${process.env.PUBLIC_URL}/public_assets/exbi06.png`}
            alt='place'/>  
            <figcaption>서울</figcaption>
        </figure>
        <div className="exbi_text">
            <h1>
                올해의 작가상 2021
            </h1>
            <p>
                2021-10-20~2022-03-20
            </p>
            <p className="icon">
                <span>
                <img src={`${process.env.PUBLIC_URL}/public_assets/icon_headphon.svg`}
                alt='place'/>     
                </span>
                오디오가이드
            </p>
        </div> 
        </SwiperSlide>
      </Swiper>
      </section>
    );
  }
  
  export default Exhibition;