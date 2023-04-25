import React from "react";
import "../style/TeamInfoPage.css";
import {Link} from "react-router-dom";
const TeamInfoPage = (props) => {
    return(
        <div className="contents">
            <div className="teaminfo">
                <div>
                    <h1>이미지 공간</h1>
                </div>
                <p>꿈과 희망이 있는 명지FC입니다.</p>
                <p>주장: 김띵지</p>
                <p>종목: 축구</p>
                <p>전적: 35전20승15패</p>
                <p>약력: 시대회 준결승</p>
            </div>
            <div className="teammateinfo">
                <Link to="/page/TeamInfoFixPage">
                    <button className="button">팀 정보 수정</button>
                </Link>
                
                <hr/>
                <h4>팀원소개</h4>
                <p>김짱구(ST)</p> 
                <p>김철수(CAM)</p>
                <p>박유리(RM)</p>
                <p>나훈이(LM)</p>
                <p>박진구(CDM)</p>
                <p>박퉁퉁(CDM)</p>
                <p>황비실(LB)</p>
                <p>김이슬(LCB)</p>
                <p>남도일(RCB)</p>
                <p>장미(RB)</p>
                <p>김띵지(GK)</p>
                <hr/>
            </div>
        </div>    
    );
}

export default TeamInfoPage;
