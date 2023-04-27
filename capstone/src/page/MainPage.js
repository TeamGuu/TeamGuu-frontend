import React from "react";

//style
import styles from "./MainPage.module.css";

//components
import NewMatchListTable from "../components/table/NewMatchListTable";

const MainPage = (props) => {
    return(
        <div className={styles.contents}>
            <div className={styles.newMatchList}>
                <NewMatchListTable />
            </div>
            <div className={styles.stadiumList}>
                경기장목록자리
            </div>
        </div>    
    );
}

export default MainPage;