import React from "react";

//style
import styles from "./CreateTeamPage.module.css";

const CreateTeamPage = (props) => {
    return(
        <>
            <div className={styles.topWrap}>
                <div className={styles.titleTxt}>팀 생성</div>
                <div className={styles.saveBtn}>저장</div>
            </div>
            <div className={styles.bottomWrap}>
                <table className={styles.myInfo}>
                    <tbody className={styles.tableBody}>
                        <tr>
                            <td>팀 대표 이미지</td>                       
                            <td className={styles.teamImg}>
                                <input type="file" accept="image/*"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>팀명</td>
                            <td className={styles.teamName}>
                                <input
                                    className={styles.teamNameInput}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>팀 종목</td>
                            <td className={styles.teamSports}>
                                <div className={styles.teamSportsInput}>
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
