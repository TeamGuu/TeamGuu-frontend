import React from "react";

//style
import styles from "./MainPage.module.css";

//components
import NewMatchListTable from "../components/table/NewMatchListTable";
import BestStadiumListTable from "../components/table/BestStadiumListTable";

const MainPage = (props) => {
    return(
        <div className={styles.contents}>
            <div className={styles.newMatchList}>
                <NewMatchListTable />
            </div>
            <div className={styles.stadiumList}>
                <BestStadiumListTable />
            </div>
        </div>    
    );
}

export default MainPage;