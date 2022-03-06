import { Link } from "react-router-dom";

function Popup(props){
    let { onClose } = props;
    return(
        <div className="Popup">
            <div className="Popup_wrap">
            <h1>홈페이지 개편 알림</h1>
            <div className="Popup_text_box">
            <p>
                국립현대미술관 통합 홈페이지가 새단장을 마치고 <br/>
                시범운영을 시작합니다. 많은 관심과 이용 부탁드립니다.<br/>
                *시범운영기간 동안 접속이 일시적으로 불안정할 수 있으니 양해 바랍니다.
            </p>
            </div>
            <p><Link to="/">더 알아보기</Link></p>
            </div>
            <div className="Popup_box">
            <label>
            <input type="checkbox" name="xxx" value="yyy" />
            <p><Link to="/">오늘 그만보기</Link></p>
            </label>
            <p onClick={()=>{
                onClose(false)
            }}>닫기</p>
            </div>
        </div>
    )
}

export default Popup;