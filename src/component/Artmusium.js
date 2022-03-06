import React from 'react';

function Artmusium() {
    return (
      <section className="Art">
          <h1>미술관</h1>
          <div className="Art_container">
              <div className="Art_wrap">
                <figure>
                <img
                    src={`${process.env.PUBLIC_URL}/public_assets/img_place02_on.jpg`}
                    alt='place'
                    />  
                  <div className='img'></div>
                  <figcaption>서울</figcaption>
                </figure>
                <div className="Art_text">
                    <p>
                        월요일,화요일,목요일,금요일,일요일 10:00~18:00<br/>
                        수요일,토요일 야간개장 10:00~21:00
                    </p>
                </div>
                <div className="Art_tag">
                    <p className="tag">전시</p>
                    <p className="tag">필름앤비디오</p>
                    <p className="tag">다윈예술</p>
                    <p className="tag">교육</p>
                    <p className="tag">이벤트</p>
                </div>
              </div>

              <div className="Art_wrap">
                <figure>
                <img
                    src={`${process.env.PUBLIC_URL}/public_assets/img_place01_on.jpg`}
                    alt='place'
                    />  
                  <figcaption>과천</figcaption>
                </figure>
                <div className="Art_text">
                    <p>
                        화요일~일요일(월요일 휴관), 10:00~18:00
                    </p>
                </div>
                <div className="Art_tag">
                    <p className="tag">전시</p>
                    <p className="tag">교육</p>
                    <p className="tag">어린이미술관</p>
                    <p className="tag">이벤트</p>
                </div>
              </div>

              <div className="Art_wrap">
                <figure>
                <img
                    src={`${process.env.PUBLIC_URL}/public_assets/img_place03_on.jpg`}
                    alt='place'
                    />  
                  <figcaption>덕수궁</figcaption>
                </figure>
                <div className="Art_text">
                    <p>
                        화요일,목요일,금요일,일요일(월요일 휴관) 10:00~18:00<br/>
                        수요일,토요일 야간개장 10:00~21:00
                    </p>
                </div>
                <div className="Art_tag">
                    <p className="tag">전시</p>
                </div>
              </div>

              <div className="Art_wrap">
                <figure>
                <img
                    src={`${process.env.PUBLIC_URL}/public_assets/img_place04_on.jpg`}
                    alt='place'
                    />  
                  <figcaption>서울</figcaption>
                </figure>
                <div className="Art_text">
                    <p>
                        화요일~일요일(월요일 휴관), 10:00~18:00<br/>
                    </p>
                </div>
                <div className="Art_tag">
                    <p className="tag">전시</p>
                    <p className="tag">이벤트</p>
                </div>
              </div>

          </div>
      </section>
    );
  }
  
  export default Artmusium;