import { useEffect, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Navi(){
    const [open, setOpen] = useState(false)
    const toggleOpen = () => {
        setOpen(open => !open);
    }

    const [scroll, setScroll] = useState(0)
    const scrollDown = ()=> {
        setScroll(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener("scroll", scrollDown);
    })

    return(
        <div className={scroll < 10 ? "header" : "change_header"}>

            <h1 className="logo">
                <Link to="/">
                로고
                </Link>
            </h1>
            <div className="inner">
            <ul className="gnb">
                <li>
                    <Link to="/">
                        전시
                    </Link>
                    <ul>
                        <li><Link>현재전시</Link></li>
                        <li><Link>예정전시</Link></li>
                        <li><Link>과거전시</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="/">
                        교육
                    </Link>
                    <ul>
                        <li><Link>미술관교육소개</Link></li>
                        <li><Link>어린이</Link></li>
                        <li><Link>청소년</Link></li>
                        <li><Link>교사</Link></li>
                        <li><Link>성인</Link></li>
                        <li><Link>교육자료실</Link></li>
                        <li><Link>참여신청</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="/">
                        소장품
                    </Link>
                    <ul>
                        <li><Link>소장품 검색</Link></li>
                        <li><Link>소장품 탐색</Link></li>
                        <li><Link>보존과학</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="/">
                        미술연구
                    </Link>
                    <ul>
                        <li><Link>도서와 아카이브</Link></li>
                        <li><Link>연구</Link></li>
                        <li><Link>발간자료</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="/">
                        디지털미술관
                    </Link>
                    <ul>
                        <li><Link>메인</Link></li>
                        <li><Link>맞춤검색</Link></li>
                        <li><Link>오디오가이드</Link></li>
                        <li><Link>이용자갤러리</Link></li>
                    </ul>
                </li>
            </ul>

            <div className="lnb">
                <p className="circle">
                    <Link to="/">
                    MMCA<br/>
                    회원가입
                    </Link>
                </p>
                <p>
                    <Link to="/">
                        로그인
                    </Link>
                </p>
                <div className="lang">
                    <p>LANGUAGES :</p>
                    <div className="lang-chois_box">
                    <select className="seletebox" name="type_lang" onChange={"window.open(value,'_self'"}>
                    <option value={'/'}>한국어</option>
                    <option value={'/eng'}>English</option>
                    </select>
                    </div>
                    <div className="btn">
                        <p>
                            <Link to="/">
                            이동
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <div className="Btn">
                <h1 className="searchbar" onClick={()=>{toggleOpen()}}>
                    <img
                    src={`${process.env.PUBLIC_URL}/public_assets/btn_totalSearch.svg`} alt="search" />
                </h1>
                <div className={open ? "Btn_wrap" : "hide_Btn_wrap"}>
                    <input type={"text"} name={"search"} placeholder={"검색어를 입력해주세요"}></input>
                    <button>검색</button>
                </div>
            </div>
        </div>
    )
}

export default Navi;