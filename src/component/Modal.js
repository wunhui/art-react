import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Modal(props){
    let { onClose } = props;
    return(
        <div className="modal">
            <div className="modal_text">
                <h1>국립현대미술관 관람 예약 바로가기</h1>
                <p>
                    화요일
                    ~일요일 10:00~18:00 (월요일 서울 개관)
                </p>
                <p>
                    서울·덕수궁:수요일, 토요일 야간개장 10:00~21:00
                </p>
            </div>

            <div className="btn_wrap">
                <div className="btn">
                    <Link to="/">
                        전시 관람 예약하기
                    </Link>
                </div>
                <div className="btn">
                    <Link to="/">
                    디지털 정보실 예약하기
                    </Link>
                </div>
            <p className='close' onClick={ ()=>{
                onClose(false)
            }}>닫기<span></span></p>
            </div>

        </div>
    )
}

export default Modal;