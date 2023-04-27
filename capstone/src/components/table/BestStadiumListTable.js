import React from "react";
import {Link} from "react-router-dom";

//style
import styles from "./BestStadiumListTable.module.css";

const BestStadiumListTable = () => {
    return(
        <table className={styles.bestStadiumList}>
            <thead className={styles.tableHead}>
              <tr>
                <th colSpan={2}>
                    <div className={styles.tableTxt}>인기 경기장 순위</div>
                    <button className={styles.plusBtn}>
                        <Link to="/page/StadiumListPage" style={{textDecoration: "none", color:"black"}}>
                            + 더보기
                        </Link>
                    </button>
                </th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
                <tr>
                    <td><img src="stadium.png" /></td>
                    <td><strong>캄프누</strong><br/><br/>위치 : 스페인 카탈리냐주 바르셀로나<br/>전화번호 : 02-337-8699</td>
                </tr>
                <tr>
                    <td><img src="stadium.png" /></td>
                    <td><strong>올드 트래포드</strong><br/><br/>위치 : 영국 그레이터맨체스터 트래포드<br/>전화번호 : 02-933-2727</td>
                </tr>
                <tr>
                    <td><img src="stadium.png" /></td>
                    <td><strong>안필드</strong><br/><br/>위치 : 영국 리버풀<br/>전화번호 : 02-123-4567</td>
                </tr>
                <tr>
                    <td><img src="stadium.png" /></td>
                    <td><strong>진영오빠집</strong><br/><br/>위치 : 힐하우스 a동<br/>전화번호 : 010-1234-5678</td>
                </tr>
            </tbody>
        </table>
    );
}

export default BestStadiumListTable;
