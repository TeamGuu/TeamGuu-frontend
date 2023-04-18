import React from "react";
import {Link} from "react-router-dom";
import "../style/MainPage.css";

const MainPage = (props) => {

    return(
        <>
            {/* <div className="top">
                <div className="logo">
                    <Link to="/">
                        <img src="logo.png" alt="로고"/>  
                    </Link>                
                </div>
                <div className="loginJoin">
                    <Link to="/page/LoginPage">
                        <div className="loginBtn">로그인</div>
                    </Link>
                    <div className="JoinBtn">회원가입</div>
                </div>
            </div> */}
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