import React,{useState} from "react";
import axios from "axios";

//style
import styles from "./CreateTeamPage.module.css";

//image
import team from "./team.png";

const CreateTeamPage = (props) => {

    const [teamName, setTeamName] = useState("");
    const [teamSports, setTeamSports] = useState("축구");
    const [teamProfile, setTeamProfile] = useState("");
    const [teamIntro, setTeamIntro] = useState("");
    const [teammateInfo, setTeammateInfo] = useState("");

    const handleteamName = (e) =>{
        setTeamName(e.target.value);
        console.log(e.target.value);
    }
    const handleteamSports = (e) =>{
        setTeamSports(e.target.value);
        console.log(e.target.value);
    }
    const handleteamProfile = (e) =>{
        setTeamProfile(e.target.value);
        console.log(e.target.value);
    }
    const handleteamIntro = (e) =>{
        setTeamIntro(e.target.value);
        console.log(e.target.value);
    }
    const handleteammateInfo = (e) =>{
        setTeammateInfo(e.target.value);
        console.log(e.target.value);
    }



    const handleSave = () => {
        // 데이터를 서버로 전송
        const data = {
            name: teamName,
            sports: teamSports,
            history: teamProfile,
            intro: teamIntro,
            playerInfo: teammateInfo
        };

        axios
            .post("http://www.teamguu.p-e.kr/api/teams", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            })
            .then((response) => {
                console.log("저장 성공");
                console.log(response);
                // 성공 처리 로직 작성
                
            })
            .catch((error) => {
                console.log(error);
                console.log(`엑세스토큰: ${localStorage.getItem("accessToken")}`);
                // 에러 처리 로직 작성
            });
    };

    return(
        <>
            <div className={styles.topWrap}>
                <div className={styles.titleTxt}>팀 생성</div>
                <div className={styles.saveBtn} onClick={handleSave}>저장</div>
            </div>
            <div className={styles.bottomWrap}>
                <table className={styles.myInfo}>
                    <tbody className={styles.tableBody}>
                        <tr>
                            <td>팀명</td>
                            <td className={styles.teamName}>
                                <input
                                    className={styles.teamNameInput}
                                    value={teamName}
                                    onChange={handleteamName}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>팀 종목</td>
                            <td className={styles.teamSports}>
                                <div className={styles.teamSportsInput} onChange={handleteamSports}>
                                    <select>
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
                                        value={teamProfile}
                                        onChange={handleteamProfile}
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
                                        value={teammateInfo}
                                        onChange={handleteammateInfo}
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