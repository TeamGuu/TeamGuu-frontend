import React from "react";

//style
import "../style/MainPage.css";

//components
import NewMatchListTable from "../components/table/NewMatchListTable";

const MainPage = (props) => {
    return(
        <div className="contents">
            <div className="newMatchList">
                <NewMatchListTable />
            </div>
            <div className="stadiumList">
                경기장목록자리
            </div>
        </div>    
    );
}

export default MainPage;