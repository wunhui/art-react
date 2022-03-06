import React from 'react';
import { Link } from "react-router-dom";

function Research() {
    return (
      <div className="Research">
        <div className="Research_container">
        <div className="Research_wrap">
        <figure>
            <img
            src={`${process.env.PUBLIC_URL}/public_assets/img_link01.jpg`}
            alt='place'/>
        </figure>
        <div className="Research_text">
            <h1>미술은행</h1>
            <Link to="/">더 알아보기</Link>
        </div> 
        </div>

        <div className="Research_wrap">
        <figure>
            <img
            src={`${process.env.PUBLIC_URL}/public_assets/img_link02.jpg`}
            alt='place'/>
        </figure>
        <div className="Research_text">
            <h1>레지던트</h1>
            <Link to="/">더 알아보기</Link>
        </div> 
        </div>

        <div className="Research_wrap">
        <figure>
            <img
            src={`${process.env.PUBLIC_URL}/public_assets/img_link03.jpg`}
            alt='place'/>
        </figure>
        <div className="Research_text">
            <h1>도서와 아카이브</h1>
            <Link to="/">더 알아보기</Link>
        </div> 
        </div>

        <div className="Research_wrap">
        <figure>
            <img
            src={`${process.env.PUBLIC_URL}/public_assets/img_link04.jpg`}
            alt='place'/>
        </figure>
        <div className="Research_text">
            <h1>어린이 미술관</h1>
            <Link to="/">더 알아보기</Link>
        </div> 
        </div>
      </div>
      </div>
    );
  }
  
  export default Research;