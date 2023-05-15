import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// style
import styles from "./TeamListPage.module.css";

const TeamListPage = () => {
  const navigate = useNavigate();
  const [teamInfo, setTeamInfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://www.teamguu.p-e.kr/api/teams/simple", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        console.log("조회성공");
        setTeamInfo(response.data.result);
      })
      .catch((error) => {
        console.log(error);
        console.log(`엑세스토큰: ${localStorage.getItem("accessToken")}`);
      });
  }, []);

  const handleClick = (e, team) => {
    e.preventDefault(); // 기본 동작 차단

    console.log(`팀 ${team.id} 클릭됨`);

    // TeamInfoPage로 이동
    navigate(`/teams/${team.id}`);
  };

  return (
    <div>
      {teamInfo.map((team) => (
        <div key={team.id}>
          <Link
            to={`/teams/${team.id}`}
            className={styles.teamLink}
            onClick={(e) => handleClick(e, team)}
          >
            <div className={styles.teamInfo}>
              <li>{team.name}</li>
              <br />
              <li>종목: {team.sports}</li>
              <li>전적: {team.victory}승 {team.draw}무 {team.defeat}패</li>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TeamListPage;
