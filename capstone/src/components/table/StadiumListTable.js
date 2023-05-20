import React from "react";
import {Link} from "react-router-dom";

//style
import styles from "./StadiumListTable.module.css";

//image
import stadium from "./stadium.png";

const StadiumListTable = () => {
    return(
        <table className={styles.stadiumList}>
            <tbody className={styles.tableBody}>
                <tr>
                <Link to="/page/StadiumInfoPage" style={{textDecoration: "none", color:"black"}}>    
                    <td><img src={stadium} alt="경기장사진" /></td>
                </Link>
                    <td className={styles.stadiumTxt}><strong>캄프누</strong><br/><br/>위치 : 스페인 카탈리냐주 바르셀로나</td>
                
                </tr>
                
                <tr>
                    <td><img src={stadium} alt="경기장사진" /></td>
                    <td className={styles.stadiumTxt}><strong>올드 트래포드</strong><br/><br/>위치 : 영국 그레이터맨체스터 트래포드</td>
                </tr>
                <tr>
                    <td><img src={stadium} alt="경기장사진" /></td>
                    <td className={styles.stadiumTxt}><strong>안필드</strong><br/><br/>위치 : 영국 리버풀</td>
                </tr>
            </tbody>
        </table>
    );
}

export default StadiumListTable;
