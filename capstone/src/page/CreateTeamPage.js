import React, { useState } from "react";
import axios from "axios";
//style
import styles from "./CreateTeamPage.module.css";

//image
import team from "./team.png";

const CreateTeamPage = (props) => {

    const [Name, setName] = useState(""); // 팀명 상태 관리
    const [Sports, setSports] = useState("축구"); // 팀 종목 상태 관리
    const [Profile, setProfile] = useState(""); // 팀 약력 상태 관리
    const [Intro, setIntro] = useState(""); // 팀 한줄 소개 상태 관리
    const [Info, setInfo] = useState(""); // 팀원 정보 상태 관리









    const handleSaveClick = (e) => {

        

        e.preventDefault();
        // 데이터를 서버로 전송하는 코드 작성
        const requestBody = {
          name: Name,
          sports: Sports,
          history: Profile,
          intro: Intro,
          playerInfo: Info,
        };
        
       
        axios.post('http://www.teamguu.p-e.kr/api/teams', requestBody, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
        .then((response) => {
            console.log(response);
            alert('팀 생성이 완료되었습니다.');
            
          })
          .catch((error) => {
            console.error(error);
            alert('팀 생성에 실패했습니다.');
            
          }); 
      };



    return(
        <>
            <div className={styles.topWrap}>
                <div className={styles.titleTxt}>팀 생성</div>
                <div className={styles.saveBtn} onClick={handleSaveClick}>저장</div>
            </div>
            <div className={styles.bottomWrap}>
                <table className={styles.myInfo}>
                    <tbody className={styles.tableBody}>
                        
                        <tr>
                            <td>팀명</td>
                            <td className={styles.teamName}>
                                <input
                                className={styles.teamNameInput}
                                value={Name}
                                onChange={(e) => setName(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>팀 종목</td>
                            <td className={styles.teamSports}>
                                <div className={styles.teamSportsInput}>
                                <select value={Sports} onChange={(e) => setSports(e.target.value)}>
                                    <option>축구</option>
                                    <option>농구</option>
                                    <option>야구</option>
                                    <option>배드민턴</option>
                                    <option>배구</option>
                                </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>팀 약력</td>
                            <td className={styles.teamProfile}>
                                <div className={styles.teamProfileInput}>
                                <textarea
                                    style={{resize: "none"}}
                                    value={Profile}
                                    onChange={(e) => setProfile(e.target.value)}
                                />
                                </div>  
                            </td>
                        </tr>
                        <tr>
                            <td>팀 한줄 소개</td>
                            <td className={styles.teamIntro}>
                                <div className={styles.teamIntroInput}>
                                <textarea
                                    style={{resize: "none"}}
                                    value={Intro}
                                    onChange={(e) => setIntro(e.target.value)}
                                />
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td>팀원 정보</td>
                            <td className={styles.teammateInfo}>
                                <div className={styles.teammateInfoInput}>
                                <textarea
                                    style={{resize: "none"}}
                                    value={Info}
                                    onChange={(e) => setInfo(e.target.value)}
                                />
                                </div>
                            </td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default CreateTeamPage;