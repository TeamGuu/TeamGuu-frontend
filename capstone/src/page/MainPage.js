import React from "react";
import {Link} from "react-router-dom";
import "../style/MainPage.css";

const MainPage = (props) => {

    return(
        <>
            <div className="top">
                <div className="logo">
                    <img src="logo.png" alt="로고"/>                      
                </div>
                <nav className="menu">
                    메뉴자리
                </nav>
                <div className="loginout">
                    <Link to="/page/Login">
                        <h4>로그인</h4>
                    </Link>
                    <h4>로그아웃</h4>
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