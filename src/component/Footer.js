import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
      <div className="Footer">
       <div className='Footer_wrap01'>
        <p>MMCA 뉴스레터 구독 신청</p>
        <form action='/' method='post'>
            <input type="email" placeholder="이메일을 입력해주세요"></input>
            <button type='submit'>구독하기</button>
        </form>
        <ul className='Footer_link'>
            <li><Link to="/">MMCA 뉴스레터</Link></li>
            <li><Link to="/">소식지</Link></li>
            <li><Link to="/">멤버십</Link></li>
            <li><Link to="/">온라인숍</Link></li>
        </ul>
       </div>

       <div className='Footer_wrap02'>
       <ul className='Footer_fnb'>
            <li className='mb'><Link to="/">소셜</Link></li>
            <li><Link to="/">인스타그램</Link></li>
            <li><Link to="/">유튜브</Link></li>
            <li><Link to="/">페이스북</Link></li>
            <li><Link to="/">트위터</Link></li>
            <li><Link to="/">네이버</Link></li>
        </ul>
        <ul className='Footer_fnb'>
            <li className='mb'><Link to="/">법적고지</Link></li>
            <li><Link to="/">이용약관</Link></li>
            <li><Link to="/">개인정보처리방침</Link></li>
            <li><Link to="/">저작권정책</Link></li>
            <li><Link to="/">국민신문고</Link></li>
            <li><Link to="/">정보공개</Link></li>
            <li><Link to="/">불편부조리신고</Link></li>
        </ul>
        <ul className='Footer_fnb'>
            <li className='mb'><Link to="/">참여</Link></li>
            <li><Link to="/">미술관소개</Link></li>
            <li><Link to="/">새소식</Link></li>
            <li><Link to="/">채용</Link></li>
            <li><Link to="/">보도자료</Link></li>
            <li><Link to="/">후원</Link></li>
            <li><Link to="/">MMCA프렌즈</Link></li>
            <li><Link to="/">자원봉사</Link></li>
            <li><Link to="/">기증안내</Link></li>
            <li><Link to="/">시설대관·복제신청</Link></li>
            <li><Link to="/">FAQ</Link></li>
            <li><Link to="/">사이트맵</Link></li>
            <li><Link to="/">국립현대미술관 문화재단</Link></li>
        </ul>
       </div>
      </div>
    );
  }
  
  export default Footer;