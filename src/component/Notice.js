import React from 'react';
import { Link } from "react-router-dom";

function Notice() {
    return (
      <div className="Notice">
          <div className="Not_textbox">
          <h1>새소식</h1>
          <div className='Not_textPbox'>
              <p><Link to="/">2022년 어린이 미술관 어린이자문단 &lt;어린이 생각단 3기&gt; 서류심사 결과 발표 및 면접심사 안내</Link></p>
              <p><Link to="/">2022년 제 19기 도슨트 양성 프로그램 기초과정 모집 공고</Link></p>
              <p><Link to="/">2022년 성인·시니어 미술관 교육 온라인 설문 조사</Link></p>
            </div>
          <p className='More'>모두 보기 <span>&gt;</span></p>
          </div>
      </div>
    );
  }
  
  export default Notice;