import React from "react";
import {Link} from "react-router-dom";

const MainPage = (props) => {

    return(
        <>
            <div class="top">
                <div class="logo">
                    로고자리                        
                </div>
                <nav class="navi">
                    메뉴자리
                </nav>
                <div class="loginout">
                    로그인/로그아웃자리
                </div>
            </div>
            <div class="content">
                <div class="matchList">
                    매칭신청목록자리
                </div>
                <div class="stadiumList">
                    경기장목록자리
                </div>
            </div>
        </>
        
    );
}

export default MainPage;