import React, {useState, useEffect} from "react";
import {Link, useNavigate } from "react-router-dom";
import axios from "axios";
//style
import styles from "./BestStadiumListTable.module.css";

//image
import stadium from "./stadium.png";

const BestStadiumListTable = () => {
    const navigate = useNavigate();

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

      const handleClick = (e, item) => {
        e.preventDefault(); // 기본 동작 차단
    
        console.log(`매칭 ${item.id} 클릭됨`);
    
        // TeamInfoPage로 이동
        navigate(`/stadiums/${item.id}`);
      };

      return (
        <table className={styles.newMatchList}>
            <thead className={styles.tableHead}>
              <tr>
                <th colSpan={3}>
                    <div className={styles.tableTxt}>전국 경기장 정보</div>
                    <button className={styles.plusBtn}>
                        <Link to="/page/StadiumListPage" style={{textDecoration: "none", color:"black"}}>
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
                    <Link to={`/stadiums/${item.id}`} onClick={(e) => handleClick(e, item)} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <img
                        src={`https://teamguu.s3.ap-northeast-2.amazonaws.com/${item.imageUrl}`}
                        alt="경기장 이미지"
                      />
                    </Link>
                  </td>
                  <td>
                    <Link to={`/stadiums/${item.id}`} onClick={(e) => handleClick(e, item)} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className={styles.stadiumName}>{item.name}</div>
                    <br />
                    {item.location}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
    );
}

export default BestStadiumListTable;
