import React from "react";

//style
import styles from "./StadiumListPage.module.css";

//components
import StadiumListTable from "../components/table/StadiumListTable";

const StadiumListPage = (props) => {
    return(
        <>
            <div className={styles.topWrap}>
                <div className={styles.searchBar}>
                    <form>
                        <input type='text' maxLength='20' className={styles.searchInput} name='search' placeholder='경기장 이름을 입력해주세요.'/>
                        <input type='submit' value='검색' className={styles.searchSubmit}/>
                    </form>
                </div>
                <ul className={styles.placeNav}>
                    <li>전체</li>
                    <li>서울</li>
                    <li>인천</li>
                    <li>경기</li>
                    <li>강원</li>
                    <li>충청</li>
                    <li>경상</li>
                    <li>전라</li>
                    <li>제주</li>
                </ul>
            </div>
            <div className={styles.bottomWrap}>
                <StadiumListTable />
            </div>
        </>
        
    );
}

export default StadiumListPage;
