import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//style
import styles from "./NewMatchListTable.module.css";

//image
import team from "./team.png";

const NewMatchListTable = () => {
  const [matchInfo, setMatchInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`http://www.teamguu.p-e.kr/api/matches/simple`, {
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

  const limitedMatchInfo = matchInfo.slice(0, 5); // 최대 5개의 요소만 사용

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
        {limitedMatchInfo.map((match, index) => (
          <tr key={index}>
            <td>
              <img
                src={`https://teamguu.s3.ap-northeast-2.amazonaws.com/${match.simpleTeamInfo.logoImageUrl}`}
                alt="팀사진"
              />
            </td>
            <td>
              <b>{match.simpleTeamInfo.name}</b>
              <br />
              {match.simpleTeamInfo.victory}전 {match.simpleTeamInfo.defeat}
              승 {match.simpleTeamInfo.draw}패
              <br />
              {match.simpleTeamInfo.sports}
            </td>
            <td>
              장소: {match.place}
              <br />
              시간: {match.date}
              <br />
              {match.title}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NewMatchListTable;
