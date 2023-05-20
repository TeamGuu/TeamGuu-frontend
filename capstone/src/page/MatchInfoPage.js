import React,{useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
//style
import styles from "./MatchInfoPage.module.css";

//image
import team from "./team.png";

const MatchInfoPage = (props) => {

    //서버에서 받아온 데이터 저장
    const { matchingInfoId } = useParams();
    
    const [matchInfo, setMatchInfo] = useState({ teamInfo: {} });
   

    useEffect(() => {
        axios
        .get(`http://www.teamguu.p-e.kr/api/matches?matchId=${matchingInfoId}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then((response) => {
            console.log('조회성공');
            setMatchInfo(response.data.result);
            //console.log(response.data.result);
          })
          .catch((error) => {
            console.log(error);
            console.log(`엑세스토큰: ${localStorage.getItem("accessToken")}`);
          });
    }, []);

    if (!matchInfo) {
        // 데이터가 로드되기 전에는 로딩 상태를 표시할 수 있습니다.
        return <div>Loading...</div>;
      };

      const { date, place, title, content, teamInfo } = matchInfo;
      const {
        id,
        name,
        intro,
        captain,
        sports,
        victory,
        draw,
        defeat,
        history,
        playerInfo,
      } = teamInfo;
   
    
      return (
        <>
          <div className={styles.challengeBtn}>매칭신청하기</div>
          <div className={styles.matchWrap}>
            <div className={styles.topWrap}>
              <div className={styles.teamMainInfo}>
                <div className={styles.teamImg}>
                  <img src={team} alt="팀사진" />
                </div>
                <div className={styles.teamName}>{name}</div>
                <div className={styles.teamSports}>{sports}</div>
              </div>
              <div className={styles.teamInfo}>
                <div className={styles.teamIntro}>{intro}</div>
                <div className={styles.teamBoss}>주장 : {captain}</div>
                <div className={styles.teamScore}>
                  전적 : {victory}승 {defeat}패 {draw}무
                </div>
                <div className={styles.teamHistory}>약력 : {history}</div>
                <div className={styles.teammateInfo}>팀원 : {playerInfo}</div>
              </div>
            </div>
            <div className={styles.bottomWrap}>
              <div className={styles.date}>날짜 : {date}</div>
              <div className={styles.time}>시간 : 10:00</div>
              <div className={styles.place}>장소 : {place} </div>
              <div className={styles.matchNotice}>
                <div className={styles.matchTitle}>{title}</div>
                <div className={styles.matchContent}>{content}</div>
              </div>
            </div>
          </div>
        </>
      );
}

export default MatchInfoPage;