import React,{useState, useEffect} from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
//style
import styles from "./TeamInfoFixPage.module.css";

//이미지
import TeamImageUpload from "../components/TeamImageUpload";
const TeamInfoFixPage = (props) => {
    
    const { teamId } = useParams();
    const navigate = useNavigate(); //팀 정보 수정시 팀 정보화면으로 넘어가기위한 장치

    const [teamInfo, setTeamInfo] = useState({ name: "",sports:"", history: "", intro: "",  playerInfo: "",   });

    const [teamName, setTeamName] = useState(""); //수정시 팀 이름
    const [teamHistory, setTeamHistory] = useState("");//수정시 팀 약력
    const [teamIntro, setTeamIntro] = useState("");//수정시 한줄소개
    const [teamPlayerInfo, setTeamPlayerInfo] = useState("");//수정시 팀원정보

    

    useEffect(() => {
        axios
          .get(`http://www.teamguu.p-e.kr/api/teams?teamId=${teamId}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then((response) => {
            console.log("조회성공");
            setTeamInfo(response.data.result);
            console.log(response.data.result);
          })
          .catch((error) => {
            console.log(error);
            console.log(`엑세스토큰: ${localStorage.getItem("accessToken")}`);
          });
      }, [teamId]);

      const { name, sports, history, intro, playerInfo } = teamInfo;


    const handleteamName = (e) =>{
        setTeamName(e.target.value);
        console.log(e.target.value);
    }
    
    const handleteamHistory = (e) =>{
        setTeamHistory(e.target.value);
        console.log(e.target.value);
    }
    const handleteamIntro = (e) =>{
        setTeamIntro(e.target.value);
        console.log(e.target.value);
    }
    const handleteamPlayerInfo = (e) =>{
        setTeamPlayerInfo(e.target.value);
        console.log(e.target.value);
    }


      //수정 시
      useEffect(() => {
        setTeamName(name);
        setTeamHistory(history);
        setTeamIntro(intro);
        setTeamPlayerInfo(playerInfo);
      }, [name, history,intro,playerInfo]);
      
      //정보 수정할 때
      const handleSave = () => {
        // 데이터를 서버로 전송
        const updatedInfo = {
            ...teamInfo,
            name: teamName,
            history: teamHistory,
            intro: teamIntro,
            playerInfo: teamPlayerInfo,
          };

        axios
            .patch(`http://www.teamguu.p-e.kr/api/teams?teamId=${teamId}`, updatedInfo, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            })
            .then((response) => {
                console.log("업데이트 성공");
                console.log(response);
                // 성공 처리 로직 작성
                alert('업데이트 성공!');
                navigate(`/teams/${teamId}`); // TeamInfoPage로 이동
            })
            .catch((error) => {
                console.log(error);
                console.log(`엑세스토큰: ${localStorage.getItem("accessToken")}`);
                // 에러 처리 로직 작성
                alert('업데이트 실패');
            });
    };


    return(
        <>
            <div className={styles.topWrap}>
                <div className={styles.titleTxt}>
                    팀 수정
                    
                </div>
                <div className={styles.saveBtn} onClick={handleSave}>저장</div>
                
            </div>
            <div className={styles.imgUploadBtn}>
                        <TeamImageUpload  teamId={teamId} />
                    </div>
            <div className={styles.bottomWrap}>
                <table className={styles.myInfo}>
                    <tbody className={styles.tableBody}>
                        <tr>
                            <td>팀명</td>
                            <td className={styles.teamName}>
                                <input
                                    className={styles.teamNameInput}
                                    placeholder={name}
                                    value={teamName}
                                    onChange={handleteamName}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>팀 종목</td>
                            <td className={styles.teamSports}>
                                <div className={styles.teamSportsInput}>{sports}</div>
                            </td>
                        </tr>
                        <tr>
                            <td>팀 약력</td>
                            <td className={styles.teamProfile}>
                                <div className={styles.teamProfileInput}>
                                    <textarea
                                        style={{resize: "none"}}
                                        placeholder={history}
                                        value={teamHistory}
                                        onChange={handleteamHistory}
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
                                        placeholder={intro}
                                        value={teamIntro}
                                        onChange={handleteamIntro}
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
                                        placeholder={playerInfo}
                                        value={teamPlayerInfo}
                                        onChange={handleteamPlayerInfo}
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

export default TeamInfoFixPage;