import React from "react";
import "../style/MainPage.css";

const MainPage = (props) => {

    return(
        <div className="contents">
            <div className="matchList">
                매칭신청목록자리
            </div>
            <div className="stadiumList">
                경기장목록자리
            </div>
        </div>    
    );
}

export default MainPage;