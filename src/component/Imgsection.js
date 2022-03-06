import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from 'react';

function Imgsection(){
    return(
        <section className="Imgsection">
            <div className="main-bg">
                <img src={`${process.env.PUBLIC_URL}/public_assets/main_sec_pc.png`} alt="main-pc" className="pc"/>
                <img src={`${process.env.PUBLIC_URL}/public_assets/main_sec.png`} alt="main" className="mb"/>
                
            </div>
            <div className="main_wrap">
            <div className="main_text">
            <h1>[창동 레지던시] 카로 악포키에르 «분실된 그림들»</h1>
            <p>2022-01-20 ~ 2022-06-12</p>
            </div>
            <div className="main_btn">
                <div className="btn">
                    전시 관람 예약하기
                </div>
            </div>
            </div>
        </section>
    )
}

export default Imgsection;