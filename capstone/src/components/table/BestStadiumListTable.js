import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
//style
import styles from "./BestStadiumListTable.module.css";

//image
import stadium from "./stadium.png";

const BestStadiumListTable = () => {

    const [stadiumInfo, setStadiumInfo] = useState([]);

    useEffect(() => {
        axios
          .get(
            `https://www.teamguu.o-r.kr/api/stadiums/simple?page=1&size=4&sort=id,desc`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            }
          )
          .then((response) => {
            console.log("조회 성공");
            setStadiumInfo(response.data.result.content);
            
            console.log(response.data.result.content);
          })
          .catch((error) => {
            console.log(error);
            console.log(`엑세스토큰: ${localStorage.getItem("accessToken")}`);
          });
      }, []);

      return (
        <table className={styles.newMatchList}>
            <thead className={styles.tableHead}>
              <tr>
                <th colSpan={3}>
                    <div className={styles.tableTxt}>최근 경기장 정보 </div>
                    <button className={styles.plusBtn}>
                        <Link to="/page/MatchListPage" style={{textDecoration: "none", color:"black"}}>
                            + 더보기
                        </Link>
                    </button>
                </th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
            {stadiumInfo.map((item) => (
                <tr key={item.id}>
                  <td>
                  <img
                      src={`https://teamguu.s3.ap-northeast-2.amazonaws.com/${item.imageUrl}`}
                      alt="경기장 이미지"
                    />
                  </td>
                  <td>
                  <div className={styles.stadiumName}>{item.name}</div>
                    <br />
                    {item.location}
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
    );
}

export default BestStadiumListTable;
