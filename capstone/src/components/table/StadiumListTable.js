import React from "react";

//style
import styles from "./StadiumListTable.module.css";

const StadiumListTable = () => {
    return(
        <table className={styles.stadiumList}>
            <tbody className={styles.tableBody}>
                <tr>
                    <td><img src="stadium.png" /></td>
                    <td className={styles.stadiumTxt}><strong>캄프누</strong><br/><br/>위치 : 스페인 카탈리냐주 바르셀로나<br/>전화번호 : 02-337-8699</td>
                </tr>
                <tr>
                    <td><img src="stadium.png" /></td>
                    <td className={styles.stadiumTxt}><strong>올드 트래포드</strong><br/><br/>위치 : 영국 그레이터맨체스터 트래포드<br/>전화번호 : 02-933-2727</td>
                </tr>
                <tr>
                    <td><img src="stadium.png" /></td>
                    <td className={styles.stadiumTxt}><strong>안필드</strong><br/><br/>위치 : 영국 리버풀<br/>전화번호 : 02-123-4567</td>
                </tr>
            </tbody>
        </table>
    );
}

export default StadiumListTable;
