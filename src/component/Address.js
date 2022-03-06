import React from 'react';
import { Link } from "react-router-dom";

function Address() {
    return (
      <address>
      <p>
      대표자: 윤범모, 사업자등록번호:138-83-00313 <br/>
      대표전화:(서울)02-3701-9500,
      (과천)02-2188-6000,(덕수궁)02-2022-0600,(청주)043-261-1400
      <br/>
      © 2021 National Museum of Modern and Contemporary Art, Korea
      </p>
      <h1 className='logo'>
      <img
            src={`${process.env.PUBLIC_URL}/public_assets/bg_logo_full.svg`}
            alt='place'/>  
      </h1>
      </address>
    );
  }
  
  export default Address;