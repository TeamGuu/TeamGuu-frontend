import React, { useState, useEffect } from "react";
import "../style/TeamInfoPage.css";
import {Link} from "react-router-dom";
import axios from "axios";
//style
import styles from "./TeamInfoPage.module.css";

//image
import team from "./team.png";



const TeamInfoPage = (props) => {

     //서버에서 받아온 데이터 저장
    const [teamInfo, setTeamInfo] = useState({});


    const name = teamInfo.name;// 팀 이름
    const intro = teamInfo.intro;//팀 한줄 소개
    const captain = teamInfo.captain;//팀 주장 이름
    const sports = teamInfo.sports;//팀 종목
    const victory = teamInfo.victory;// 팀 승리 전적
    const draw = teamInfo.draw;//팀 무승부 전적
    const defeat = teamInfo.defeat;// 팀 패배 전적
    const history = teamInfo.history;// 팀 약력
    // const playerInfo = teamInfo.playerInfo;// 팀원 정보 아직 안했습니다.
    // const players = playerInfo.split(",");
    // const playerList = players.map((player) => {
    //     const [name, position] = player.split("("); // 괄호 안의 문자열을 추출하여 이름과 포지션을 나눕니다.
    //     return <li>{name} ({position})</li>; // 이름과 포지션을 리스트 형태로 렌더링합니다.
    //   });


    useEffect(() => {

        //const accessToken = localStorage.getItem('accessToken');
        axios
          .get("http://43.201.242.0:8080/api/teams/simple",{
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then((response) => {
            console.log('조회성공');
            setTeamInfo(response.data);
          })
          .catch((error) => {
            console.log(error);
            console.log(`엑세스토큰: ${localStorage.getItem("accessToken")}`);
          });
      }, []);
    


    return(
        <div className={styles.contents}>
            <div className={styles.teamWrap}>
                <div className={styles.teamImg}>
                    <img src={team} alt="팀사진" />
                </div>
                <div className={styles.teamInfo}>
                    <li>{name}</li>
                    <li>{intro}</li>
                    <br/>
                    <li>주장: {captain}</li>
                    <li>종목: {sports}</li>
                    <li>전적: {victory}승 {draw}무 {defeat}패</li>
                    <li>약력: {history}</li>                        
                </div>
                
            </div>
            <div className={styles.teammateWrap}>
                <div className={styles.BtnArea}>
                    <Link to="/page/TeamInfoFixPage">
                        <button className={styles.fixBtn}>팀 정보 수정</button>
                    </Link>
                    <Link to="/page/TeamInfoFixPage">
                        <button className={styles.deleteBtn}>팀 삭제</button>
                    </Link>
                </div>
                <div className={styles.teammateInfo}>
                    <div className={styles.teammateTxt}>구성 팀원</div>
                    <div className={styles.teammateList}>
                        <ul>
                            <li>김짱구(ST)</li> 
                            <li>김철수(CAM)</li>
                            <li>박유리(RM)</li>
                            <li>나훈이(LM)</li>
                            <li>박진구(CDM)</li>
                            <li>박퉁퉁(CDM)</li>
                            <li>황비실(LB)</li>
                            <li>김이슬(LCB)</li>
                            <li>남도일(RCB)</li>
                            <li>장미(RB)</li>
                            <li>김띵지(GK)</li>
                            {/* {playerList} */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default TeamInfoPage;
