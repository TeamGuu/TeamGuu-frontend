import React from "react";
import {Link} from "react-router-dom";
import "../style/MainPage.css";

const MainPage = (props) => {

    return(
        <>
            <div className="top">
                <div className="logo">
                    <Link to="/">
                        <img src="logo.png" alt="로고"/>  
                    </Link>                
                </div>
                <nav className="menu">
                    <ul className="navi">
                        <li>경기 매칭 신청
                            <ul className="submenu">
                                <li>매칭 신청</li>
                                <li>매칭 목록</li>
                            </ul>
                        </li>
                        <li>경기장 정보</li>
                        <li>마이페이지
                            <ul className="submenu">
                                <li>내 정보</li>
                                <li>팀 정보</li>
                                <li>팀 생성</li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className="loginout">
                    <Link to="/page/LoginPage">
                        <div className="loginBtn">로그인</div>
                    </Link>
                    <div className="logoutBtn">로그아웃</div>
                </div>
            </div>
            <div className="contents">
                <div className="matchList">
                    매칭신청목록자리
                </div>
                <div className="stadiumList">
                    경기장목록자리
                </div>
            </div>
        </>
        
    );
}

export default MainPage;