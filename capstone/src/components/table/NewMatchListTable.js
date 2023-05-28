import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
//style
import styles from "./NewMatchListTable.module.css";

//image
import team from "./team.png";

const NewMatchListTable = () => {
  const navigate = useNavigate();

  const [matchInfo, setMatchInfo] = useState([]);

  const handleClick = (e, item) => {
    e.preventDefault(); // 기본 동작 차단
    console.log(`매칭 ${item.id} 클릭됨`);
    // TeamInfoPage로 이동
    navigate(`/matches/${item.id}`);
  };

  useEffect(() => {
    axios
      .get(`https://www.teamguu.o-r.kr/api/matches/simple`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        console.log("조회성공");
        setMatchInfo(response.data.result.content);
        console.log(response.data.result.content);
      })
      .catch((error) => {
        console.log(error);
        console.log(`엑세스토큰: ${localStorage.getItem("accessToken")}`);
      });
  }, []);

  const limitedMatchInfo = matchInfo.slice(0, 4); // 최대 4개의 요소만 사용

  return (
    <table className={styles.newMatchList}>
      <thead className={styles.tableHead}>
        <tr>
          <th colSpan={3}>
            <div className={styles.tableTxt}>최근 매칭 신청</div>
            <button className={styles.plusBtn}>
              <Link
                to="/page/MatchListPage"
                style={{ textDecoration: "none", color: "black" }}
              >
                + 더보기
              </Link>
            </button>
          </th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {limitedMatchInfo.map((index) => (
          <tr key={index.id}>
            <td>
              <Link
                to={`/matches/${index.id}`}
                onClick={(e) => handleClick(e, index)}
                style={{ textDecoration: "none", color: "inherit" }}
              >
              <img
                src={`https://teamguu.s3.ap-northeast-2.amazonaws.com/${index.simpleTeamInfo.logoImageUrl}`}
                alt="팀사진"
              />
              </Link>
            </td>
            <td>
              <Link
                to={`/matches/${index.id}`}
                onClick={(e) => handleClick(e, index)}
                style={{ textDecoration: "none", color: "inherit" }}
              >
              <b>{index.simpleTeamInfo.name}</b>
              <br />
              {index.simpleTeamInfo.victory}전 {index.simpleTeamInfo.defeat}
              승 {index.simpleTeamInfo.draw}패
              <br />
              {index.simpleTeamInfo.sports}
              </Link>
            </td>
            <td>
              <Link
                to={`/matches/${index.id}`}
                onClick={(e) => handleClick(e, index)}
                style={{ textDecoration: "none", color: "inherit" }}
              >
              장소 : {index.place}
              <br />
              날짜 : {index.date}
              <br />
              {index.title}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NewMatchListTable;
